/*
 * @Descripttion:
 * @Author: pengpeng
 * @Date: 2021-04-28 13:21:05
 * @LastEditors: pengpeng
 * @LastEditTime: 2021-05-10 15:38:04
 */
import 'core-js/stable'
import Vue from 'vue'
import App from './App.vue'
import './common.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
