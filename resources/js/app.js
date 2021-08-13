require('./bootstrap');
// window.Vue = require('vue').default;

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './components/App.vue'

import router from './routes.js'

Vue.component('Navbar', require('./components/Navbar.vue').default);

Vue.component('Banner', require('./components/Banner.vue').default);

Vue.component('FooterLight', require('./components/FooterLight.vue').default);

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
