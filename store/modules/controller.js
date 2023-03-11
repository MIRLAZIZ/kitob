import axios from "axios";
import { apiUrl } from "../../constants/config";
const token = localStorage.getItem("access_token");
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
import instance from "../instance";
instance();
const state = {
    controllers: [],
    controllers_and_actions: [],
    alertMsg: null,
};

const getters = {
    controllersList: (state) => state.controllers,
    controllersAndActionsList: (state) => state.controllers_and_actions,
    getAlertMsg: (state) => state.alertMsg,
};

const mutations = {
    setControllers(state, items) {
        state.controllers = items;
    },
    setControllerAndActions(state, items) {
        state.controllers_and_actions = items;
    },
    addNewController(state, item) {
        state.alertMsg = item;
    },
};

const actions = {
    getControllersList({ commit }) {
        axios
            .get(`/api/controller`)
            .then((r) => r.data)
            .then((res) => {
                if (res.success) {
                    commit("setControllers", res.result.data);
                }
            });
    },
    async getAllControllerAndActions({ commit }) {
        await axios
            .get(`/api/all-controller-actions`)
            .then((r) => r.data)
            .then((res) => {
                commit("setControllerAndActions", res.result);
            });
    },
    async addController({ commit }, controller) {
        await axios
            .post(`/api/controller/store`, controller)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewController", res);
            });
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
