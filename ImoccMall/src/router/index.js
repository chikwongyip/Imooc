import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodsList from "../views/GoodsList";
import Title from "../views/Title";
import Image from "../views/Image";
import Cart from "../views/Cart";
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/goodList',
      name:"goodsList",
      component:GoodsList,
      //嵌套路由
      children:[
        {
          path:"title",
          name:"title",
          component:Title
        },
        {
          path:"image",
          name:"image",
          component:Image
        }
      ]
    },
    {
      path:"/cart",
      name:"cart",
      component:Cart,
    }
  ]
})
