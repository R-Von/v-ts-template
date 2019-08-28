import Vue from 'vue'
import Toast from './Toast'
import Alert from './Alert'

// Vue.use(Toast)
Vue.prototype.$toast = Toast
Vue.use(Alert)

declare module 'vue/types/vue' {
    interface Vue {
        $alert: any,
        $toast:any
    }
}
  