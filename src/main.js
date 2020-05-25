import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import Toaster from 'v-toaster'
import 'materialize-css/dist/js/materialize'
import 'v-toaster/dist/v-toaster.css'

Vue.use(Vuelidate)
Vue.use(Toaster, {timeout: 5000})
Vue.config.productionTip = false
Vue.filter('date', dateFilter)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')