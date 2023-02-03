import Router from 'vue-router'
import LoginPage from '@/components/LoginPage.vue'
import PageNotFound from '@/components/PageNotFound.vue'
import OrdersPage from '@/components/OrdersPage.vue'

const router = new Router({
    mode: 'history',
    routes: [
        {
            name: 'login',
            path: '/login',
            component: LoginPage
        },
        {
            name: 'active-dp',
            path: '/activeDp',
            component: PageNotFound
        },
        {
            name: 'orders',
            path: '/orders',
            component: OrdersPage
        },
        {
            name: 'new-dp',
            path: '/newDp',
            component: PageNotFound
        },
        {
            name: 'queries',
            path: '/queries',
            component: PageNotFound
        },
        {
            name: 'reset-pass',
            path: '/resetPass',
            component: PageNotFound
        },
        {
            name: 'not-found',
            path: '*',
            component: PageNotFound
        },
    ]
})
export default router