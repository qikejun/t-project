/*
 * @Descripttion:
 * @Author: pengpeng
 * @Date: 2021-04-28 14:54:10
 * @LastEditors: pengpeng
 * @LastEditTime: 2021-05-12 16:20:09
 */

/*
  === （设置） ===
  1. @data：
  2. @methods：
      1) drag拖动
      2) dragend拖动确定后layout。push
      3) addListener mounted中调用监听
*/
const mouseXY = { x: null, y: null }
const DragPos = {
  x: null, y: null, w: 1, h: 1, i: null
}

export default {
  name: 'dragMixin',
  data () {
    return {
      dragDOMs: []
    }
  },
  methods: {
    drag (e, dragDom) {
      console.log(123)
      // console.log(dragDom)
      // console.log(e)
      const parentRect = document.getElementById('content').getBoundingClientRect()
      let mouseInGrid = false
      if (((mouseXY.x > parentRect.left) && (mouseXY.x < parentRect.right)) && ((mouseXY.y > parentRect.top) && (mouseXY.y < parentRect.bottom))) {
        // console.log('container')
        mouseInGrid = true
      }
      if (mouseInGrid === true && (this.layout.findIndex(item => item.i === 'drop')) === -1) {
        this.layout.push({
          // x: dragDom.x,
          // y: dragDom.y,
          x: (this.layout.length * 2) % (this.colNum || 12),
          y: this.layout.length + (this.colNum || 12), // puts it at the bottom
          w: 2,
          h: 2,
          // w: dragDom.w,
          // h: dragDom.h,
          i: 'drop'
        })
        console.log(222, (this.layout.length * 2) % (this.colNum || 12))
      }
      const index = this.layout.findIndex(item => item.i === 'drop')
      if (index !== -1) {
        // try {
        //   this.$refs.gridlayout.$children[this.layout.length].$refs.item.style.display = 'none'
        // } catch {
        //   console.log(e)
        // }
        // const el = this.$refs.gridlayout.$children[index]
        // el.dragging = { top: mouseXY.y - parentRect.top, left: mouseXY.x - parentRect.left }
        // console.log('mouseXY', mouseXY)
        // console.log('parentRect', parentRect)
        // const newPos = el.calcXY(mouseXY.y - parentRect.top, mouseXY.x - parentRect.left)
        const el = this.$refs.gridlayout.$children[index]
        el.dragging = { top: mouseXY.y - parentRect.top, left: mouseXY.x - parentRect.left }
        // console.log('mouseXY', mouseXY)
        // console.log('parentRect', parentRect)
        console.log(mouseXY.y - parentRect.top, mouseXY.x - parentRect.left)
        // eslint-disable-next-line camelcase
        const new_pos = el.calcXY(mouseXY.y - parentRect.top, mouseXY.x - parentRect.left)
        if (mouseInGrid === true) {
          // 拖拽 placeholder 位置 尺寸
          console.log(new_pos)
          this.$refs.gridlayout.dragEvent('dragstart', 'drop', new_pos.x, new_pos.y, 1, 1)
          // this.$refs.gridlayout.dragEvent('dragstart', 'drop', newPos.x, newPos.y, dragDom.h, dragDom.w)
          DragPos.i = String(index)
          DragPos.x = this.layout[index].x
          DragPos.y = this.layout[index].y
        }
        if (mouseInGrid === false) {
          // console.log(12)
          this.$refs.gridlayout.dragEvent('dragend', 'drop', new_pos.x, new_pos.y, dragDom.h, dragDom.w)
          this.layout = this.layout.filter(obj => obj.i !== 'drop')
        }
      }
    },
    dragend (e, dragDom) {
      // console.log(e)
      // console.log(dragDom)
      const parentRect = document.getElementById('content').getBoundingClientRect()
      let mouseInGrid = false
      if (((mouseXY.x > parentRect.left) && (mouseXY.x < parentRect.right)) && ((mouseXY.y > parentRect.top) && (mouseXY.y < parentRect.bottom))) {
        mouseInGrid = true
      }
      if (mouseInGrid === true) {
        // alert(`Dropped element props:\n${JSON.stringify(DragPos, ['x', 'y', 'w', 'h'], 2)}`)
        this.$refs.gridlayout.dragEvent('dragend', 'drop', DragPos.x, DragPos.y, dragDom.h, dragDom.w)
        this.layout = this.layout.filter(obj => obj.i !== 'drop')
        // UNCOMMENT below if you want to add a grid-item
        // console.log(this.layout)
        this.layout.push({
          x: DragPos.x,
          y: DragPos.y,
          w: dragDom.w,
          h: dragDom.h,
          i: Number(DragPos.i) + 1,
          index: dragDom.index,
          id: dragDom.id,
          name: dragDom.name
        })
        // console.log(this.layout)
        // DEL left dragableDOM  (拖拽进画布的DOM 从可拖拽列表中移除)
        // this.dragDOMs = this.dragDOMs.filter(dom => dom.id !== dragDom.id)
        this.$refs.gridlayout.dragEvent('dragend', DragPos.i, DragPos.x, DragPos.y, dragDom.h, dragDom.w)
        try {
          this.$refs.gridLayout.$children[this.layout.length].$refs.item.style.display = 'block'
        } catch {
        }
      }
    },
    addListener () {
      document.addEventListener('dragover', (e) => {
        mouseXY.x = e.clientX
        mouseXY.y = e.clientY
      }, false)
    }
  }
}
