import axios from "axios";
import { apiUrl } from "../../constants/config";
const token = localStorage.getItem("access_token");
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
import instance from "../instance";
instance();
const state = {
    epubs: [],
    epub: null,
    alertMsg: null,
};

const getters = {
    theEpub: (state) => state.epub,
    epubsList: (state) => state.epubs,
    getEpubAlertMsg: (state) => state.alertMsg,
};

const mutations = {
    setEpubs(state, items) {
        state.epubs = items;
    },
    setTheEpub(state, items) {
        state.epub = items;
    },
    addNewEpub(state, item) {
        state.alertMsg = item;
    },
};

const actions = {
    getEpubsList({ commit },id) {
        axios
            .get(`/api/epub/${id}`)
            .then((r) => r.data)
            .then((res) => {
                if (res.success) {
                    commit("setEpubs", res.result.data);
                }
            });
    },
    async getTheEpub({ commit }, id) {
        await axios
            .get(`/api/epub/show/${id}`)
            .then((r) => r.data)
            .then((res) => {
                if (res.success) {
                    commit("setTheEpub", res.result);
                }
            });
    },
    async addEpub({ commit }, epub) {
        await axios
            .post(`/api/epub/store`, epub)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewEpub", res);
            });
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
