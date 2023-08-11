import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 加载 element 组件库
import ElementUI from 'element-ui'
 
// 加载 element 组件库的样式
import 'element-ui/lib/theme-chalk/index.css'
 
// 加载全局样式文件
// import './styles/index.less'


Vue.config.productionTip = false
Vue.use(ElementUI,{size:"small"});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
