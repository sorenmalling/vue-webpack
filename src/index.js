import Vue from 'vue'

import VueRouter from 'vue-router'

const router = new VueRouter({
    routes: [],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    mode: 'history'

})

// Init main Vue instance
new Vue({
    el: '#app',
    router
})