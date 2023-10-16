import { createRouter, createWebHistory } from 'vue-router';
import News from '@/views/News.vue'; // assuming your News component is in the views folder
import Data from '@/views/Data.vue'
const routes = [{
        path: '/news',
        name: 'News',
        component: News
    },
    {
        path: '/data/:cryptocurrency',
        name: 'Data',
        component: Data,
        props: true

    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;