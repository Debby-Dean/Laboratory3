import { createRouter, createWebHashHistory } from 'vue-router'
import StringManipulator from '../views/StringManipulator.vue'
import Calculator from '../views/Calculator.vue'
import Axios from '../views/Axios.vue'
import Midterm from '../views/Midterm.vue'
import Testing from '../views/Testing.vue'
import Test from '../views/Test.vue'
import shapes from '../views/shapes.vue'


const routes = [
  {
    path: '/string',
    name: 'string',
    component: StringManipulator
  },
  {
    path: '/calcu',
    name: 'calcu',
    component: Calculator
  },
  {
    path: '/axios',
    name: 'axios',
    component: Axios
  },
  {
    path: '/midterm',
    name: 'midterm',
    component: Midterm
  },
  {
    path: '/testing',
    name: 'testing',
    component: Testing
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '/shapes',
    name: 'shapes',
    component: shapes
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
