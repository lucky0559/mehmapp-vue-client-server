import Login from './views/Login.vue'
import Reports from './views/Reports.vue'
import Schedule from './views/Schedule.vue'

export const routes = [
    {path: '/', component: Login},
    {path: '/reports', component: Reports},
    {path: '/schedule', component: Schedule},
]