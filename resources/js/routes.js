import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            components: require('./views/index.vue'),
            name: 'index'
        },
        {
            path: '/home',
            components: require('./views/Home.vue'),
            name: 'home'
        },
        {
            path: '/about',
            components: require('./views/About.vue'),
            name: 'about'
        },
        {
            path: '/blog',
            components: require('./views/Blog.vue'),
            name: 'blog'
        },
        {
            path: '/contact',
            components: require('./views/Contact.vue'),
            name: 'contact'
        },
        {
            path: '/checkin',
            components: require('./views/auth/Register.vue'),
            name: 'register'
        },
        {
            path: '/access',
            components: require('./views/auth/Login.vue'),
            name: 'login'
        },
        {
            path: '/forgotpas',
            components: require('./views/ForgotPassword.vue'),
            name: 'forgot-passw'
        },
    ],
    mode: 'history',
});