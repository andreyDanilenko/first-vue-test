import Vue from "vue";
import VueRouter from 'vue-router';
import CardPage from '../pages/CardPage.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('../pages/CatalogPage.vue')
    },
    {
        path: '/about',
        component: () => import('../pages/About.vue')
    },
    {
        path: '/:id',
        name: 'CardPage',
        component: CardPage,
    },


];

export default new VueRouter({
    mode: 'history',
    routes
})