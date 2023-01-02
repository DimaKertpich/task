import VueRouter from 'vue-router'
import myTask from './components/myTask.vue'
import aboutUs from './components/aboutUs.vue'
import error from './components/pageNotFound.vue'

export default new VueRouter({
    routes:[
        {
            path: '',
            component: myTask
        },
        {
            path: '/about',
            component: aboutUs
        },
        {
            path: '*',
            component: error
        }
    ],
    mode: 'history'
})