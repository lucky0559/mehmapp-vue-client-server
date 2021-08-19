import Login from './views/Login.vue'
import Reports from './views/Reports.vue'
import Schedule from './views/Schedule.vue'
import Print from './components/reports/Print.vue'

export const routes = [
    {path: '/', component: Login},
    {path: '/reports', component: Reports},
    {path: '/schedule', component: Schedule},
    {path: '/print', component: Print}
]