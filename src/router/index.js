import Vue from 'vue'
import Router from 'vue-router'
import index from "@/page/index"
import login from "@/page/login"
import manage from "@/page/manage"
import listArticle from "@/page/articleList"
import addArticle from "@/page/addArticle"
import detail from "@/page/detail"
import search from "@/page/searcher"
import error from "@/page/error"
// import SocialSharing from 'vue-social-sharing';
Vue.use(Router);

// const index = r => require.ensure([], () => r(require('@/page/index')), 'index');
// const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
export default new Router({
  routes: [
    {
      path: '/',
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
          component: listArticle,
          meta: ['文章列表']

      },{
        path: '/addArticle',
        component: addArticle,
        meta: ['添加文章']
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
    }
  ],
  mode:"history"
})
