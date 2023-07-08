import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
axios.defaults.headers.common = { "Access-Control-Allow-Origin": "*" };
axios.defaults.headers.common = { "Content-Type": "application/json" };
axios.defaults.headers.common = { Accept: "*" };
axios.defaults.headers.common = { Connection: "keep-alive" };
import {
  apiUrl,
  appUrl,
  adminRoot,
  currentUser,
  isAuthActive,
} from "../constants/config";
import { setCurrentUser, getCurrentUser } from "../utils";

// ability
import { abilityPlugin, ability as appAbility } from "./ability";

import app from "../main";
import menu from "./modules/menu";
import user from "./modules/user";
import author from "./modules/author";
import book from "./modules/book";
import bookCategory from "./modules/bookCategory";
import bookGroup from "./modules/bookGroup";
import bookSeries from "./modules/bookSeries";
import file from "./modules/file";
import employee from "./modules/employee";
import controller from "./modules/controller";
import action from "./modules/action";
import role from "./modules/role";
import faq from "./modules/faq";
import knowledge from "./modules/knowledge";
import tcategory from "./modules/ticketCategory";
import ticket from "./modules/ticket";
import balance from "./modules/balance";
import order from "./modules/order";
import coupon from "./modules/coupon";
import epub from "./modules/epub";
import booktype from "./modules/booktype";
import notification from "./modules/notification";
import dashboard from "./modules/dashboard";
import license from "./modules/license";
import { setCurrentLanguage } from "../utils";
import storage from "./storage";
import  bookshelf from './modules/bookshelf'
Vue.use(Vuex);
export const ability = appAbility;

export default new Vuex.Store({
  state: {
    currentUser: isAuthActive ? currentUser : getCurrentUser(),
    rules: [],
    token: "",
  },
  plugins: [
    storage({
      storedKeys: ["token", "rules"],
      destoryOn: ["setLogout"],
    }),
    abilityPlugin,
  ],
  getters: {
    currentUser: (state) => state.currentUser,
  },
  mutations: {
    changeLang(state, payload) {
      app.$i18n.locale = payload;
      setCurrentLanguage(payload);
    },
    clearError(state) {
      state.loginError = null;
    },
    setToken(state, token) {
      state.token = token;
    },
    setRules(state, rules) {
      state.rules = rules;
      localStorage.setItem("state", JSON.stringify({ rules: rules }));
    },
    setProcessing(state, payload) {
      state.processing = payload;
      state.loginError = null;
    },
    setUser(state, payload) {
      state.currentUser = payload;
      state.processing = false;
      state.loginError = null;
    },
    setLogout(state) {
      state.currentUser = null;
      state.processing = false;
      state.loginError = null;
      state.token = "";
      state.rules = [];
    },
  },
  actions: {
    setLang({ commit }, payload) {
      commit("changeLang", payload);
    },
    doLogin({ commit }, payload) {
      return new Promise((resolve, reject) => {
        commit("clearError");
        commit("setProcessing", true);
        axios.get(`${apiUrl}/api/sanctum/csrf-cookie`);
        axios
          .post(`${apiUrl}/api/login`, {
            email: payload.email,
            password: payload.password,
          })
          .then((response) => {
            console.log(response.data, 'resdan kelayotgan data');
            if (response.data.error) {
              commit("setProcessing", false);
              commit("setError", true);
             
            } else {
              const token = response.data.access_token;
              const user = response.data.user;
              localStorage.setItem("access_token", token);
              commit("setToken", token);
              commit("setRules", response.data.permissions);
              setCurrentUser(user);
              commit("setUser", user);
              commit("setProcessing", false);
              commit("setError", null);
              resolve(response);
            }
          })
          .catch((err) => {
            reject(err);
            console.log(err.response , "bu errrrorrrrrrrrrrrrrrrrrrr");
          });
      });
    },
    // loginAsUser({ commit }, payload) {
    //   return new Promise((resolve, reject) => {
    //     //commit("clearError");
    //     //commit("setProcessing", true);
    //     axios.get(`${apiUrl}/api/sanctum/csrf-cookie`)
    //     .then(res => {
    //         console.log(res.data, 'dataaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    //     })
    //     axios.post(`${apiUrl}/api/login-as-user`, {
    //         email: payload,
    //       })
    //       .then((response) => {
    //         if (response.data.error) {
    //           commit("setProcessing", false);
    //           commit("setError", true);
    //         } else {
    //           const token = response.data.access_token;
    //           const user = response.data.user;
    //           localStorage.setItem(
    //             "admin_token",
    //             localStorage.getItem("access_token")
    //           );
    //           localStorage.setItem(
    //             "admin_state",
    //             JSON.stringify({ rules: this.state.rules })
    //           );
    //           //localStorage.setItem("admin_state", localStorage.getItem('state'));
    //           localStorage.setItem(
    //             "admin_user",
    //             JSON.stringify(this.state.currentUser)
    //           );
    //           localStorage.setItem("monitoring", 1);
    //           localStorage.setItem("access_token", token);
    //           commit("setToken", token);
    //           commit("setRules", response.data.permissions);
    //           setCurrentUser(user);
    //           commit("setUser", user);
    //           commit("setProcessing", false);
    //           commit("setError", null);
    //           resolve(response);
    //         }
    //       })
    //       .catch((err) => {
    //         reject(err);
    //       });
    //   });
    // },
    logoutAsUser({ commit }) {
      return new Promise((resolve, reject) => {
        //commit("clearError");
        //commit("setProcessing", true);
        //axios.get(`/api/sanctum/csrf-cookie`);
        axios
          .post(`${apiUrl}/api/logout`)
          .then((r) => r.data)
          .then((res) => {
            if (res.success) {
              const token = localStorage.getItem("admin_token");
              const user = JSON.parse(localStorage.getItem("admin_user"));
              const rules = JSON.parse(localStorage.getItem("admin_state"));
              localStorage.setItem("access_token", token);
              commit("setToken", token);
              commit("setRules", rules.rules);
              setCurrentUser(user);
              commit("setUser", user);
              commit("setProcessing", false);
              commit("setError", null);
              localStorage.removeItem("admin_token");
              localStorage.removeItem("admin_state");
              localStorage.removeItem("admin_user");
              localStorage.setItem("monitoring", 0);
              resolve(res);
            } else {
              alert("Something went wrong...");
            }
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    signOut({ commit }) {
      axios
        .post(`${apiUrl}/api/logout`)
        .then((r) => r.data)
        .then((res) => {
          if (res.success) {
            localStorage.setItem("access_token", null);
            localStorage.setItem("state", null);
            setCurrentUser(null);
            commit("setLogout");
          } else {
            alert("Something went wrong...");
          }
        });
    },
  },
  modules: {
    user,
    author,
    book,
    bookCategory,
    bookGroup,
    bookSeries,
    controller,
    menu,
    file,
    employee,
    action,
    role,
    faq,
    knowledge,
    tcategory,
    ticket,
    balance,
    order,
    coupon,
    epub,
    dashboard,
    notification,
    booktype,
    license,
    bookshelf,
  },
});
