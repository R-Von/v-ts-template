import Vue, { VueConstructor, PluginObject } from 'vue'
import Alert from './Alert.vue' 

const plugin:PluginObject<{}> = {
    install(Vue:VueConstructor){
        const AlertConstructor = Vue.extend(Alert)
        function alert(){
            const AlertInstance = new AlertConstructor()
            AlertInstance.$mount()
            document.body.appendChild(AlertInstance.$el)
        }
        Vue.prototype.$alert = alert
    }
}

export default plugin