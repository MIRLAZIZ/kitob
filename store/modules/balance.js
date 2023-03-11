import axios from "axios";
import { apiUrl } from "../../constants/config";
const token = localStorage.getItem("access_token");
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
import instance from "../instance";
instance();
const state = {
    balances: [],
    alertMsg: null,
    currentBalance: null,
};

const getters = {
    balancesList: (state) => state.balances,
    getBalanceAlertMsg: (state) => state.alertMsg,
    getCurrentBalance: (state) => state.currentBalance,
};

const mutations = {
    setBalances(state, items) {
        state.balances = items;
    },
    addNewBalance(state, item) {
        state.alertMsg = item;
    },
    currentBalance(state, balance) {
        state.currentBalance = balance;
    },
};

const actions = {
    async getBalancesList({ commit }, page) {
        await axios
            .get(`/api/balance?page=${page}`)
            .then((r) => r.data)
            .then((res) => {
                commit("setBalances", res);
            });
    },
    async getTheABalance({ commit }, id) {
        await axios
            .get(`/api/balance/edit/${id}`)
            .then((r) => r.data)
            .then((res) => {
                commit("currentBalance", res.result);
            });
    },
    async addBalance({ commit }, Balance) {
        await axios
            .post(`/api/balance/store`, Balance)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewBalance", res);
            });
    },
    async updateBalance({ commit }, Balance) {
        await axios
            .post(`/api/balance/update/${Balance.id}`, Balance)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewBalance", res);
            });
    },
    async destroyBalance({ commit }, id) {
        await axios
            .delete(`/api/balance/destroy/${id}`)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewBalance", res);
            });
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
