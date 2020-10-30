import Vue from 'vue'
import Router from 'vue-router'
import Task from './routes/Task.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'task',
      component: Task,
    },
  ],
})

export default router
