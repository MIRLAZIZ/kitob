import axios from "axios";
import { apiUrl } from "../../constants/config";
const token = localStorage.getItem("access_token");
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
import instance from "../instance";
instance();
const state = {
    knowledges: [],
    alertMsg: null,
    currentKnowledge: null,
};

const getters = {
    knowledgesList: (state) => state.knowledges,
    getKnowledgeAlertMsg: (state) => state.alertMsg,
    getCurrentKnowledge: (state) => state.currentKnowledge,
};

const mutations = {
    setKnowledge(state, items) {
        state.knowledges = items;
    },
    addNewKnowledge(state, item) {
        state.alertMsg = item;
    },
    currentKnowledge(state, knowledge) {
        state.currentKnowledge = knowledge;
    },
};

const actions = {
    async getKnowledgesList({ commit }) {
        await axios
            .get(`/api/knowledge`)
            .then((r) => r.data)
            .then((res) => {
                commit("setKnowledge", res);
            });
    },
    async getTheAKnowledge({ commit }, id) {
        await axios
            .get(`/api/knowledge/edit/${id}`)
            .then((r) => r.data)
            .then((res) => {
                commit("currentKnowledge", res.result);
            });
    },
    async addKnowledge({ commit }, knowledge) {
        await axios
            .post(`/api/knowledge/store`, knowledge)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewKnowledge", res);
            });
    },
    async updateKnowledge({ commit }, knowledge) {
        await axios
            .post(`/api/knowledge/update/${knowledge.id}`, knowledge)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewKnowledge", res);
            });
    },
    async destroyKnowledge({ commit }, id) {
        await axios
            .delete(`/api/knowledge/destroy/${id}`)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewKnowledge", res);
            });
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
