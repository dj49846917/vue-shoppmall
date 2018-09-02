import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home/Home'
import Register from '@/view/Register/Register'
import Login from '@/view/Login/Login'
import GoodsDetail from '@/view/GoodsDetail/GoodsDetail'
import CategoryList from '@/view/CategoryList/CategoryList'
import Cart from '@/view/Cart/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // 首页
      name: 'Home',
      component: Home
    },
    {
      path: '/goodsdetail', // 详情
      name: 'GoodsDetail',
      component: GoodsDetail
    },
    {
      path: '/categorylist', // 分类列表
      name: 'CategoryList',
      component: CategoryList
    },
    {
      path: '/cart', // 分类列表
      name: 'Cart',
      component: Cart
    },
    {
      path: '/register', // 注册
      name: 'Register',
      component: Register
    },
    {
      path: '/login', // 登录
      name: 'Login',
      component: Login
    }
  ]
})
















// import Vue from 'vue'
// import Router from 'vue-router'
// import Demo from '@/view/Demo'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'demo',
//       component: Demo,
//     }
//   ]
// })





