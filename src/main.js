import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/database'
import dateFilter from './filters/date.filter'
import Loader from './components/Loader'
import Toaster from 'v-toaster'
import 'materialize-css/dist/js/materialize'
import 'v-toaster/dist/v-toaster.css'

Vue.use(Vuelidate)
Vue.use(Toaster, { timeout: 5000 })
Vue.config.productionTip = false
Vue.filter('date', dateFilter)
Vue.component('Loader', Loader)

const firebaseConfig = {
    apiKey: "AIzaSyCXEit2PYr06DprRm9Kp7Kr85Uche-EPGI",
    authDomain: "personal-accountant-a820a.firebaseapp.com",
    databaseURL: "https://personal-accountant-a820a.firebaseio.com",
    projectId: "personal-accountant-a820a",
    storageBucket: "personal-accountant-a820a.appspot.com",
    messagingSenderId: "224226791429",
    appId: "1:224226791429:web:c9da0a877bfcdd99020c6c",
    measurementId: "G-BZ2K4KCB0B"
}
firebase.initializeApp(firebaseConfig)

let app

firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
    }
})
