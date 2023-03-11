import axios from "axios";
import { apiUrl } from "../../constants/config";
const token = localStorage.getItem("access_token");
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
import instance from "../instance";
instance();
const state = {
    tcategories: [],
    alertMsg: null,
    currentCategory: null,
};

const getters = {
    tcategoriesList: (state) => state.tcategories,
    getTcategoryAlertMsg: (state) => state.alertMsg,
    getCurrentTCategory: (state) => state.currentCategory,
};

const mutations = {
    setTcategory(state, items) {
        state.tcategories = items;
    },
    addNewTcategory(state, item) {
        state.alertMsg = item;
    },
    currentCategory(state, tcategory) {
        state.currentCategory = tcategory;
    },
};

const actions = {
    async getTcategoryList({ commit }) {
        await axios
            .get(`/api/tcategory`)
            .then((r) => r.data)
            .then((res) => {
                commit("setTcategory", res);
            });
    },
    async getTheTcategory({ commit }, id) {
        await axios
            .get(`/api/tcategory/edit/${id}`)
            .then((r) => r.data)
            .then((res) => {
                commit("currentCategory", res.result);
            });
    },
    async addTcategory({ commit }, tcategory) {
        await axios
            .post(`/api/tcategory/store`, tcategory)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewTcategory", res);
            });
    },
    async updateTcategory({ commit }, tcategory) {
        await axios
            .post(`/api/tcategory/update/${tcategory.id}`, tcategory)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewTcategory", res);
            });
    },
    async destroyTcategory({ commit }, id) {
        await axios
            .delete(`/api/tcategory/destroy/${id}`)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewTcategory", res);
            });
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
