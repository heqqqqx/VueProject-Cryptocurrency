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
        path: '/news/:cryptoname',
        name: 'News on specific crypto',
        component: News,
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;