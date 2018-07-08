// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import vueQuillEditor from 'vue-quill-editor'//富文本编辑
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'

// import Share from 'vue-social-share'
// Vue.use(Share)
// Vue.use(SocialSharing);

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(vueQuillEditor)

// Vue.use(axios);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
