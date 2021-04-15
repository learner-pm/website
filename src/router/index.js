import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index.vue'
import t from '../components/to.vue'
import Note from '../components/note/index.vue'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: Index,
            component: Index
        },
        {
            path: '/note',
            name: Note,
            component: Note
        },
        {
            path: '/t',
            name: t,
            component: t
        }
    ]
})