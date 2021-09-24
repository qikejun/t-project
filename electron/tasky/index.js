/*
 * @Descripttion:
 * @Author: pengpeng
 * @Date: 2021-07-05 16:14:26
 * @LastEditors: pengpeng
 * @LastEditTime: 2021-07-05 16:39:18
 */
const path = require('path')
const { app, BrowserWindow, Tray, Menu } = require('electron')

const icon = path.join(__dirname, './src/img/icon.jpg')
let mainWindow, tray
app.on('ready', () => {
  const config = {
    frame: false, // 无边框，之后无法拖动，使用css来处理拖动
    resizable: false, //不允许用户改变窗口大小
    width: 800, //设置窗口宽高
    height: 600,
    icon: icon, //应用运行时的标题栏图标
    webPreferences: {
      backgroundThrottling: false, //设置应用在后台正常运行
      nodeIntegration: true, //设置能在页面使用nodejs的API
      contextIsolation: false,
      preload: path.join(__dirname, './preload.js'),
    },
  }
  mainWindow = new BrowserWindow(config)
  mainWindow.removeMenu() // 避免使用快捷键操作
  mainWindow.loadFile('./src/index.html')

  // 可以通过系统托盘再次打开窗口
  tray = new Tray(icon)
  tray.setToolTip('migu')
  tray.on('click', () => {
    if (mainWindow.isVisible()) {
      mainWindow.hide()
    } else {
      mainWindow.show()
    }
  })

  tray.on('right-click', () => {
    const menuConfig = Menu.buildFromTemplate([
      { label: 'Quit', click: () => app.quit() },
    ])
    tray.popUpContextMenu(menuConfig)
  })
})
