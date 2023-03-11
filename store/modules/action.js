import axios from "axios";
import { apiUrl } from "../../constants/config";
const token = localStorage.getItem("access_token");
axios.defaults.withCredentials = true;
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
import instance from "../instance";
instance();
const state = {
    cactions: [],
    alertMsg: null,
};

const getters = {
    cactionsList: (state) => state.cactions,
    getActionAlertMsg: (state) => state.alertMsg,
};

const mutations = {
    setCactions(state, items) {
        state.cactions = items;
    },
    addNewCaction(state, item) {
        state.alertMsg = item;
    },
};

const actions = {
    getCactionsList({ commit }) {
        axios
            .get(`/api/action`)
            .then((r) => r.data)
            .then((res) => {
                if (res.success) {
                    commit("setCactions", res.result.data);
                }
            });
    },
    async addController({ commit }, action) {
        await axios
            .post(`/api/action/store`, action)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewCaction", res);
            });
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
