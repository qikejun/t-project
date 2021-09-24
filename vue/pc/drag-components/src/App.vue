<!--
 * @Descripttion:
 * @Author: pengpeng
 * @Date: 2021-04-28 13:21:05
 * @LastEditors: pengpeng
 * @LastEditTime: 2021-05-12 16:04:05
-->
<template>
  <div class="drag-home">
    <div class="left">
      <div
        class="item"
        @click="add(item)"
        @drag="drag($event, item)"
        @dragend="dragend($event, item)"
        draggable="true"
        unselectable="on"
        v-for="(item, idx) in list"
        :key="'left'+ idx"
      >{{item.i}}</div>
    </div>
    <div class="right">
      <div class="top"><button>保存模板</button></div>
      <div class="container">
        <grid-layout
          id="content"
          ref="gridlayout"
          :layout.sync="layoutList"
          :col-num="options.colNum"
          :row-height="options.rowHeight"
          :is-draggable="options.isDraggable"
          :is-resizable="options.isResizable"
          :is-mirrored="options.isMirrored"
          :vertical-compact="options.verticalCompact"
          :margin="options.margin"
          :use-css-transforms="options.useCssTransforms"
        >

          <grid-item
            v-for="(item, index) in layoutList"
            :key="index"
            :x="item.x"
            :y="item.y"
            :w="item.w"
            :h="item.h"
            :i="item.i"
          >
            <span @click="removeItem(item)">x</span>
            <component :is="item.component" />
          </grid-item>
        </grid-layout>
      </div>
    </div>
  </div>
</template>

<script>
import { GridLayout, GridItem } from 'vue-grid-layout'
import _cloneDeep from 'lodash.clonedeep'
import componentsConfig from '@/componentsConfig'
import dragMixin from './mixin/dragMixin'
import dragBasicMixin from './mixin/dragBasicMixin'

export default {
  name: 'App',
  mixins: [
    dragMixin,
    dragBasicMixin
  ],
  components: {
    GridLayout,
    GridItem
  },
  data () {
    return {
      options: {
        colNum: 12,
        rowHeight: 100,
        colWidth: 100,
        isDraggable: true,
        isResizable: true,
        isMirrored: false,
        verticalCompact: true,
        margin: [16, 16],
        useCssransforms: true
      }
    }
  },
  computed: {
    layoutList: {
      get () {
        const arr = this.layout.map((e, idx) => {
          if (e.name) {
            e.component = require(`./components/${e.name}.vue`).default
            e.id = e.id + '' + idx
          }
          return e
        })
        return arr
      },
      set (val) {
        return val
      }
    }
  },
  mounted () {
    this.addListener()
  },
  created () {
    this.list = _cloneDeep(componentsConfig)
    this.layout = []
  },
  methods: {
    add (item) {
      const arr = this.layout
      // 判断最后一个模块位置处理新模块位置
      let nx = 0
      let ny = 0
      const len = arr.length
      let atom = {}
      if (len > 0) {
        atom = arr[len - 1]
        // 最后一个元素的占位
        const x = atom.x
        const y = atom.y
        const w = atom.w
        const h = atom.h
        // 当前 x 剩余宽度
        const remainderX = 12 - (x + w)
        // 判断新元素占比宽度是否大于剩余宽
        console.log(remainderX)
        if (item.w > remainderX) {
          console.log('y', y)
          console.log('h', h)
          ny = y + h
          nx = 0
        } else {
          ny = y
          nx = x + w
        }
      }
      arr.push({
        x: nx,
        y: ny,
        // x: w % (this.colNum || 12),
        // y: Infinity,
        w: item.w,
        h: item.h,
        i: item.i,
        // index: item.index,
        id: item.id,
        name: item.name
      })
    },
    group (arr) {
      const result = []
      let groupArr = []
      arr.forEach(e => {
        const len = groupArr.length
        const atom = groupArr[len - 1]
        if (e.y === atom.y) {
          groupArr.push(e)
        } else {
          result.push(groupArr)
          groupArr = [e]
        }
      })
      return result
    },
    groupRemainderX (arr) {
      const result = []
      arr.map(e => {
        return e.reduce((p, n) => {
          return p.w + n.w
        })
      })
      return result
    }
  }
}
</script>

<style lang="scss" scoped>

.drag-home{
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  & > .left{
    flex: 1;
    border: 1px solid;
    margin-right: 16px;
    .item{
      margin: 4px 0;
      border: 1px solid;
      height: 40px;
      width: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: all-scroll;
    }
  }
  & > .right{
    width: calc(100vw - 260px);
    border: 1px solid;
  }
}
#content{
  min-height: 400px;
  .vue-grid-item.vue-grid-placeholder {
    background: green;
  }
}
.vue-grid-item{
  position: relative;
  border: 1px solid;
  span{
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
}
</style>
