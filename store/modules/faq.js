import axios from "axios";
import { apiUrl } from "../../constants/config";
const token = localStorage.getItem("access_token");
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
import instance from "../instance";
instance();
const state = {
    faqs: [],
    alertMsg: null,
    currentFaq: null,
};

const getters = {
    faqsList: (state) => state.faqs,
    getFaqAlertMsg: (state) => state.alertMsg,
    getCurrentFaq: (state) => state.currentFaq,
};

const mutations = {
    setFaqs(state, items) {
        state.faqs = items;
    },
    addNewFaq(state, item) {
        state.alertMsg = item;
    },
    currentFaq(state, faq) {
        state.currentFaq = faq;
    },
};

const actions = {
    async getFaqsList({ commit }) {
        await axios
            .get(`/api/faq`)
            .then((r) => r.data)
            .then((res) => {
                commit("setFaqs", res);
            });
    },
    async getTheAFaq({ commit }, id) {
        await axios
            .get(`/api/faq/edit/${id}`)
            .then((r) => r.data)
            .then((res) => {
                commit("currentFaq", res.result);
            });
    },
    async addFaq({ commit }, faq) {
        await axios
            .post(`/api/faq/store`, faq)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewFaq", res);
            });
    },
    async updateFaq({ commit }, faq) {
        await axios
            .post(`/api/faq/update/${faq.id}`, faq)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewFaq", res);
            });
    },
    async destroyFaq({ commit }, id) {
        await axios
            .delete(`/api/faq/destroy/${id}`)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewFaq", res);
            });
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
