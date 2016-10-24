import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */
import Hello from './components/Hello'
import Visual from './components/Visual'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: App },
  { path: '/visual', component: Visual },
  { path: '/hello', component: Hello }
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

new Vue({
  router
}).$mount('#app')

// router.start(App, '#app')
