import axios from "axios";
import { apiUrl } from "../../constants/config";
const token = localStorage.getItem("access_token");
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
import instance from "../instance";
instance();
const state = {
    category: [],
    categoryArray: [],
    categoryAlertMsg: null,
    currentCategory: null,
};

const getters = {
    categoryListArray: (state) => state.categoryArray,
    categoryList: (state) => state.category,
    getCategoryAlertMsg: (state) => state.categoryAlertMsg,
    getCurrentCategory: (state) => state.currentCategory,
};

const mutations = {
    setCategoryArray(state, items) {
        state.categoryArray = items;
    },
    setCategory(state, items) {
        state.category = items;
    },
    setCurrentCategory(state, items) {
        state.currentCategory = items;
    },
    setCategoryAlertMsg(state, resp) {
        state.categoryAlertMsg = resp;
    },
};

const actions = {
    getCategoryList({ commit }) {
        axios
            .get(`/api/category`)
            .then((r) => r.data)
            .then((res) => {
                if (res.success) {
                    commit("setCategory", res.result.data);
                }
            });
    },
    async getCategoryTreeList({ commit },query) {
        await axios
            .get(`/api/category/tree-list${query}`)
            .then((r) => r.data)
            .then((res) => {
                if (res.success) {
                    commit("setCategoryArray", res.result);
                }
            });
    },
    async getCategoryListArray({ commit }) {
        await axios
            .get(`/api/category/list`)
            .then((r) => r.data)
            .then((res) => {
                if (res.success) {
                    commit("setCategoryArray", res.result);
                }
            });
    },
    async addCategory({ commit }, category) {
        await axios
            .post(`/api/category/store`, category)
            .then((r) => r.data)
            .then((res) => {
                commit("setCategoryAlertMsg", res);
            });
    },
    async getTheCategory({ commit }, id) {
        await axios
            .get(`/api/category/edit/${id}`)
            .then((r) => r.data)
            .then((res) => {
                if (res.success) {
                    commit("setCurrentCategory", res.result);
                }
            });
    },
    async updateCategory({ commit }, category) {
        await axios
            .post(`/api/category/update/${category.id}`, category)
            .then((r) => r.data)
            .then((res) => {
                commit("setCategoryAlertMsg", res);
            });
    },
    async destroyCategory({ commit }, id) {
        await axios
            .delete(`/api/category/destroy/${id}`)
            .then((r) => r.data)
            .then((res) => {
                commit("setCategoryAlertMsg", res);
            });
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
