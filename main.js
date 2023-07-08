import Vue from 'vue'
import Application from './Application.vue'

// BootstrapVue add
import BootstrapVue from 'bootstrap-vue'
// Router & Store add
import router from './router'
import store from './store'
// Multi Language Add
import en from './locales/en.json'
import ru from './locales/ru.json'
import oz from './locales/oz.json'
import VueI18n from 'vue-i18n'

import { firebaseConfig } from './constants/config'
// Notification Component Add
import Notifications from './components/Common/Notification'
// Breadcrumb Component Add
import Breadcrumb from './components/Common/Breadcrumb'
// RefreshButton Component Add
import RefreshButton from './components/Common/RefreshButton'
// Colxx Component Add
import Colxx from './components/Common/Colxx'
// Perfect Scrollbar Add
import vuePerfectScrollbar from 'vue-perfect-scrollbar'
import contentmenu from 'v-contextmenu'
import VueLineClamp from 'vue-line-clamp'
import VueScrollTo from 'vue-scrollto'
// import firebase from 'firebase/app'
import 'firebase/auth'
import { getCurrentLanguage } from './utils'

import { abilitiesPlugin } from "@casl/vue";
import { ability } from "./store/index";
import axios from 'axios';
import toasts from './srcs/mixin/toast'

Vue.use(abilitiesPlugin, ability)

Vue.use(BootstrapVue);
Vue.use(VueI18n);
const messages = { en: en, ru: ru, oz: oz };
const locale = getCurrentLanguage();
const i18n = new VueI18n({
  locale: locale,
  fallbackLocale: 'en',
  messages
});
Vue.use(Notifications);
Vue.use(require('vue-shortkey'));
Vue.use(contentmenu);
Vue.use(VueScrollTo);
Vue.use(VueLineClamp, {
  importCss: true
});

Vue.component('piaf-breadcrumb', Breadcrumb);
Vue.component('b-refresh-button', RefreshButton);
Vue.component('b-colxx', Colxx);
Vue.component('vue-perfect-scrollbar', vuePerfectScrollbar);
Vue.mixin(toasts)

const axiosIns = axios.create({
  baseURL: "https://beta.kytab.uz",
  timeout: 20000,
  // You can add your headers here
  // ================================
  // baseURL: 'https://some-domain.com/api/',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
})

Vue.prototype.$http = axiosIns

// firebase.initializeApp(firebaseConfig);
Vue.config.productionTip = false

export default new Vue({
  i18n,
  router,
  store,
  axiosIns,
  render: h => h(Application)
}).$mount('#app')
 