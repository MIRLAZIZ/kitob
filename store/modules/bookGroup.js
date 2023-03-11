import axios from "axios";
import { apiUrl } from "../../constants/config";
const token = localStorage.getItem("access_token");
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
import instance from "../instance";
instance();
const state = {
    categories: [],
    alertMsg: null,
    currentGroup: null,
};

const getters = {
    categoriesList: (state) => state.categories,
    getGroupAlertMsg: (state) => state.alertMsg,
    getCurrentGroup: (state) => state.currentGroup,
};

const mutations = {
    setGroup(state, items) {
        state.categories = items;
    },
    addNewGroup(state, item) {
        state.alertMsg = item;
    },
    currentGroup(state, group) {
        state.currentGroup = group;
    },
};

const actions = {
    async getGroupList({ commit }) {
        await axios
            .get(`/api/book-group`)
            .then((r) => r.data)
            .then((res) => {
                commit("setGroup", res);
            });
    },
    async getTheGroup({ commit }, id) {
        await axios
            .get(`/api/book-group/edit/${id}`)
            .then((r) => r.data)
            .then((res) => {
                commit("currentGroup", res.result);
            });
    },
    async addGroup({ commit }, group) {
        await axios
            .post(`/api/book-group/store`, group)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewGroup", res);
            });
    },
    async updateGroup({ commit }, group) {
        await axios
            .post(`/api/book-group/update/${group.id}`, group)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewGroup", res);
            });
    },
    async destroyGroup({ commit }, id) {
        await axios
            .delete(`/api/book-group/destroy/${id}`)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewGroup", res);
            });
    },
    async addBookToGroup({ commit }, book_id) {
        await axios
            .post(`/api/book-group/add-book`, book_id)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewGroup", res);
            });
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
