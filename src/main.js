import Vue from 'vue'
import App from './App.vue'
import {Datetime} from 'vue-datetime'

Vue.component('datetime', Datetime)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
