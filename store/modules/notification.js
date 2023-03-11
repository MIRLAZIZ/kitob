import axios from "axios";
import { apiUrl } from "../../constants/config";
const token = localStorage.getItem("access_token");
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
import instance from "../instance";
instance();
const state = {
    notifications: [],
    currentNotification: [],
    notifyAlertMsg: null,
};

const getters = {
    notificationList: (state) => state.notifications,
    currentNotification: (state) => state.currentNotification,
    getNotificationAlertMsg: (state) => state.notifyAlertMsg,
};

const mutations = {
    setNotifications(state, items) {
        state.notifications = items;
    },
    setCurrentNotification(state, items) {
        state.currentNotification = items;
    },
    addNewNotification(state, item) {
        state.notifyAlertMsg = item;
    },
};

const actions = {
    getNotificationList({ commit }) {
        axios
            .get(`/api/notification`)
            .then((r) => r.data)
            .then((res) => {
                if (res.success) {
                    commit("setNotifications", res.result.data);
                }
            });
    },
    async getNotification({ commit }, id) {
        axios
            .get(`/api/notification/edit/${id}`)
            .then((r) => r.data)
            .then((res) => {
                if (res.success) {
                    commit("setCurrentNotification", res.result);
                }
            });
    },
    async addNotification({ commit }, notifications) {
        await axios
            .post(`/api/notification/store`, notifications)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewNotification", res);
            });
    },
    async updateNotification({ commit }, notifications) {
        await axios
            .post(
                `/api/notification/update/${notifications.id}`,
                notifications
            )
            .then((r) => r.data)
            .then((res) => {
                commit("addNewNotification", res);
            });
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
