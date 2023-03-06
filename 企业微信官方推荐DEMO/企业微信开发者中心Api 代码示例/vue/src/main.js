import Vue from 'vue'
import "./assets/theme/style.css";
import ElementUI from 'element-ui';
import App from './App.vue'

import TDesign from 'tdesign-vue';
// 引入组件库全局样式资源
import 'tdesign-vue/es/style/index.css';


import Contacts from './page/contacts/main.vue';
import Message from './page/message/message.vue';
import Intro from './page/intro/intro.vue';
import Auth from './page/auth/auth.vue';
import Media from './page/media/media.vue';
import Robot from './page/robot/robot.vue';


import vueRouter from 'vue-router';


window.history.replaceState(null, null, window.location.pathname);

Vue.config.productionTip = false;
Vue.use(vueRouter);
Vue.use(ElementUI);
Vue.use(TDesign);

new Vue({
  router: new vueRouter({
    routes: [
      {
        path: '/',
        redirect: '/intro'
      },
    {
      name: 'contacts',
      path: '/contacts',
      components: {
        default: Contacts
      },
    },
    {
      name: 'intro',
      path: '/intro',
      components: {
        default: Intro,
      },
    },
    {
      name: 'auth',
      path: '/auth',
      components: {
        default: Auth,
      },
    },
    {
      name: 'message',
      path: '/message',
      components: {
        default: Message,
      },
    },    
    {
      name: 'media',
      path: '/media',
      components: {
        default: Media
      }
    },
    {
      name: 'robot',
      path: '/robot',
      components: {
        default: Robot
      }
    }
    
  ]
  }),
  render: h => h(App),
}).$mount('#app')
