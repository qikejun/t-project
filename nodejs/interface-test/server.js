/*
 * @Descripttion: 
 * @Author: pengpeng
 * @Date: 2021-06-03 08:52:26
 * @LastEditors: pengpeng
 * @LastEditTime: 2021-06-05 13:53:39
 */
// ! 使用 import 报错 解决
// import path from 'path'
const path = require('path')

const koa = require('koa')
// const router = require('@koa/router')()
const Router =  require('@koa/router')
const koaBody = require('koa-body')
const views =require('koa-views')
const static = require('koa-static')

const router = require('./config/dataOperation')


const app = new koa()
// const router = new Router()
const port = 3000


app.use(views(__dirname + '/views', {map: {html: 'ejs'}}))
app.use(koaBody())
app.use(static(path.join(__dirname, '/static')))

router.get('/', ctx => ctx.render('index',{title: '看看都是什么'}))

app.use(router.routes()).use(router.allowedMethods())

app.listen(port,() => {
  console.log('Server is running at http://localhost:'+ port)
})