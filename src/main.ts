import { createApp } from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'
import "./global.css"


// import './samples/node-api'

createApp(App)
  // .use(router)
  .use(store)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
