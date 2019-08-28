import Vue from 'vue'
import Toast from './Toast.vue'

const toastConstructor = Vue.extend(Toast)
const toast = ()=>{
    const toastInstance = new toastConstructor()
    toastInstance.$mount()
    document.body.append(toastInstance.$el)
    return toastInstance
}

export default toast