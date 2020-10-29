import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
const Home = () => import('@/views/home/home')
const Category = () => import('@/views/category/category')
const Cart = () => import('@/views/cart/cart')
const Profile = () => import('@/views/profile/profile')

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  mode:'history',
  routes: [
    {
      path: '',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/category',
      component:Category
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/profile',
      component:Profile
    }
  ]
})
