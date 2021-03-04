import './bootstrap'
import Vue from 'vue'

// loader
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

// smoothScroll
import smoothScroll from 'vue-smoothscroll'

import App from './App.vue'

import 'core-js/stable'
import 'regenerator-runtime/runtime'

// vue router
import router from './router'

// vuex
import store from './store'

Vue.use(smoothScroll)
Vue.use(Loading)

require('./bootstrap')

const createApp = async () => {
  // eslint-disable-next-line no-unused-vars
  const app = new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App />',
  })
}

createApp()
