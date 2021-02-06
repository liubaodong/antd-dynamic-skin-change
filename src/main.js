import Vue from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.less';
import less from 'less'
import Antd from 'ant-design-vue'
import 'default-passive-events'
Vue.use(less)
Vue.use(Antd)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
