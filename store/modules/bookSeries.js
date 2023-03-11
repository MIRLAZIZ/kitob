import axios from "axios";
import { apiUrl } from "../../constants/config";
const token = localStorage.getItem("access_token");
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
import instance from "../instance";
instance();
const state = {
    series: [],
    seriesMsg: null,
    currentSery: null,
};

const getters = {
    seriesList: (state) => state.series,
    getSeriesMsg: (state) => state.seriesMsg,
    getCurrentSerias: (state) => state.currentSery,
};

const mutations = {
    setSery(state, items) {
        state.series = items;
    },
    setSeriesMsg(state, item) {
        state.seriesMsg = item;
    },
    currentSery(state, category) {
        state.currentSery = category;
    },
};

const actions = {
    async getSeriesList({ commit }) {
        await axios
            .get(`/api/series`)
            .then((r) => r.data)
            .then((res) => {
                commit("setSery", res);
            });
    },
    async ActiongetTheSeries({ commit }, id) {
        await axios
            .get(`/api/series/edit/${id}`)
            .then((r) => r.data)
            .then((res) => {
                commit("currentSery", res.result);
            });
    },
    async addSeries({ commit }, category) {
        await axios
            .post(`/api/series/store`, category)
            .then((r) => r.data)
            .then((res) => {
                commit("setSeriesMsg", res);
            });
    },
    async addSeriesBook({ commit }, payload) {
        await axios
            .post(`/api/series/add-book`, payload)
            .then((r) => r.data)
            .then((res) => {
                commit("setSeriesMsg", res);
            });
    },
    async updateSery({ commit }, category) {
        await axios
            .post(`/api/series/update/${category.id}`, category)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewCategory", res);
            });
    },
    async destroySeries({ commit }, id) {
        await axios
            .delete(`/api/series/destroy/${id}`)
            .then((r) => r.data)
            .then((res) => {
                commit("setSeriesMsg", res);
            });
    },
    async addBookToCategory({ commit }, book_id) {
        await axios
            .post(`/api/book-category/add-book`, book_id)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewCategory", res);
            });
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
