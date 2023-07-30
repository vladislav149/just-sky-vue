import App from './App.vue'
import Vue, {createApp, h, configureCompat} from 'vue'
import router from './router'
import store from './store'
Vue.configureCompat({WATCH_ARRAY: false, ATTR_FALSE_VALUE: false})
const app = createApp({
  render: () => h(App)
})
app.use(router)
app.use(store)
// Initiate other plugins here
configureCompat({
  // default everything to Vue 2 behavior
  MODE: 2
})
app.mount('#app')
