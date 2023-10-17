import { createRouter, createWebHistory } from 'vue-router';
import News from '../views/News.vue';
import Data from '../views/Data.vue'
import DataView from '../views/DataGeneral.vue'
const routes = [{
        path: '/data/:cryptoname',
        name: 'Data',
        component: Data,
        props: true
    },
    {
        path: '/news/:page?',
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
    {
        path: '/data',
        name: 'data',
        component: DataView
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;