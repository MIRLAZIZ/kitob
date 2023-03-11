import firebase from "firebase/app";
import Vuex from "vuex";
import "firebase/auth";
import { currentUser, isAuthActive } from "../../constants/config";
import { setCurrentUser, getCurrentUser } from "../../utils";
import axios from "axios";
import { apiUrl, adminRoot } from "../../constants/config";
import instance from "../instance";
instance();
export default {
    state: {
        currentUser: isAuthActive ? currentUser : getCurrentUser(),
        loginError: null,
        processing: false,
        forgotMailSuccess: null,
        resetPasswordSuccess: null,
        token: localStorage.getItem("access_token") || null,
        rules: null,
        userlist: null,
    },
    getters: {
        token: state => state.token,
        // currentUser: state => state.currentUser,
        processing: state => state.processing,
        loginError: state => state.loginError,
        forgotMailSuccess: state => state.forgotMailSuccess,
        resetPasswordSuccess: state => state.resetPasswordSuccess,
        getUserlist: state => state.userlist,
    },
    mutations: {
        // setUser(state, payload) {
        //   state.currentUser = payload
        //   state.processing = false
        //   state.loginError = null
        // },
        // setLogout(state) {
        //   state.currentUser = null
        //   state.processing = false
        //   state.loginError = null
        //   state.token = ''
        //   state.rules = []
        // },
        setUserlist: (state, payload) => {state.userlist = payload},
        setProcessing(state, payload) {
            state.processing = payload;
            state.loginError = null;
        },
        setError(state, payload) {
            state.loginError = payload;
            state.currentUser = null;
            state.processing = false;
        },
        setForgotMailSuccess(state) {
            state.loginError = null;
            state.currentUser = null;
            state.processing = false;
            state.forgotMailSuccess = true;
        },
        setResetPasswordSuccess(state) {
            state.loginError = null;
            state.currentUser = null;
            state.processing = false;
            state.resetPasswordSuccess = true;
        }
        // clearError(state) {
        //   state.loginError = null
        // },
        // setToken(state, token){
        //   state.token = token
        // },
        // setRules(state, rules){
        //   state.rules = rules
        //   localStorage.setItem('state', JSON.stringify({rules: rules}))
        // }
    },
    actions: {
        // doLogin({commit}, payload){
        //   return new Promise((resolve, reject) => {
        //     commit('clearError')
        //     commit('setProcessing', true)
        //     axios.post(`/api/login`,{
        //       email:payload.email,
        //       password:payload.password,
        //     }).then(response => {
        //       const token = response.data.access_token
        //       const user = response.data.user
        //       localStorage.setItem('access_token', token)
        //       commit('setToken',token)
        //       commit('setRules',response.data.permissions)
        //       setCurrentUser(user)
        //       commit('setUser', user)
        //       resolve(response)
        //     }).catch(err => {
        //       reject(err)
        //     })
        //   })
        // },
        actionUserlist({ commit }, payload) {
            axios
            .get(`/api/user/list`)
            .then(r => r.data)
            .then(res => {
                if (res.success) {
                    commit("setUserlist", res.result)
                }
            });
        },
        login({ commit }, payload) {
            commit("clearError");
            commit("setProcessing", true);
            firebase
                .auth()
                .signInWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        const item = { uid: user.user.uid, ...currentUser };
                        setCurrentUser(item);
                        commit("setUser", {
                            uid: user.user.uid,
                            ...currentUser
                        });
                    },
                    err => {
                        setCurrentUser(null);
                        commit("setError", err.message);
                        setTimeout(() => {
                            commit("clearError");
                        }, 3000);
                    }
                );
        },
        forgotPassword({ commit }, payload) {
            commit("clearError");
            commit("setProcessing", true);
            firebase
                .auth()
                .sendPasswordResetEmail(payload.email)
                .then(
                    user => {
                        commit("clearError");
                        commit("setForgotMailSuccess");
                    },
                    err => {
                        commit("setError", err.message);
                        setTimeout(() => {
                            commit("clearError");
                        }, 3000);
                    }
                );
        },
        resetPassword({ commit }, payload) {
            commit("clearError");
            commit("setProcessing", true);
            firebase
                .auth()
                .confirmPasswordReset(
                    payload.resetPasswordCode,
                    payload.newPassword
                )
                .then(
                    user => {
                        commit("clearError");
                        commit("setResetPasswordSuccess");
                    },
                    err => {
                        commit("setError", err.message);
                        setTimeout(() => {
                            commit("clearError");
                        }, 3000);
                    }
                );
        },

        // signOut({ commit }) {
        //   axios.post(`/api/logout`)
        //   .then(r => r.data)
        //   .then(res => {
        //     if(res.success){
        //       localStorage.setItem('access_token', null);
        //       localStorage.setItem('state', null);
        //       setCurrentUser(null);
        //       commit('setLogout');
        //     }else{
        //       alert('Something went wrong...');
        //     }
        //   });
        // },
        profileUser({ commit }) {
            axios
                .get(`/api/profile`)
                .then(r => r.data)
                .then(res => {
                    if (res.success) {
                        localStorage.setItem(
                            "state",
                            JSON.stringify({ rules: res.per })
                        );
                    } else {
                    }
                });
            // firebase
            //   .auth()
            //   .signOut()
            //   .then(() => {
            //     setCurrentUser(null);
            //     commit('setLogout')
            //   }, _error => { })
        }
    }
};
