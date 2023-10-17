import { createRouter, createWebHistory } from 'vue-router';
import News from '../views/News.vue';
import Data from '../views/Data.vue'
const routes = [{
        path: '/news',
        name: 'News',
        component: News
    },
    {
        path: '/data/:cryptoname',
        name: 'Data',
        component: Data,
        props: true
    },
    {
        path: '/news/:page',
        name: 'News',
        component: News,
        props: true
    },
    {
        path: '/news/specific/:cryptoname/:page?',
        name: 'CryptonameNews',
        component: News,
        props: route => ({ cryptoname: route.params.cryptoname, page: 1 })
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;