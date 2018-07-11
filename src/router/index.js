import Vue from 'vue'
import Router from 'vue-router'
import index from "@/page/index"
import login from "@/page/login"
import manage from "@/page/manage"
import listArticle from "@/page/articleList"
import addArticle from "@/page/addArticle"
import detail from "@/page/detail"
import search from "@/page/search"
// import SocialSharing from 'vue-social-sharing';
Vue.use(Router);

// const index = r => require.ensure([], () => r(require('@/page/index')), 'index');
// const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/manage',
      name: 'manage',
      component: manage,
      children:[{
          path: '/listArticle',
          component: listArticle

      },{
        path: '/addArticle',
        component: addArticle
      }]
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
  ],
  mode:"history"
})
