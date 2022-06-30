import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Main from '@/components/Main.vue'
import Card from '@/components/Card.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Mame',
        component: Main
    },
    {
        path: '/card/:id',
        name: 'Card',
        component: Card
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router