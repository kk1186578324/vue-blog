import Vue from 'vue'
import Router from 'vue-router'
import index from "@/page/index"
import login from "@/page/login"
import manage from "@/page/manage"
import articleList from "@/page/articleList"
import addArticle from "@/page/addArticle"
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
          path: '/articleList',
          component: articleList

      },{
        path: '/addArticle',
        component: addArticle
      }]
    },
  ],
  mode:"history"
})
