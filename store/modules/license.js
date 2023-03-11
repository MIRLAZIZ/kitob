import axios from "axios";
import { apiUrl } from "../../constants/config";
const token = localStorage.getItem("access_token");
axios.defaults.withCredentials = true;
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
import instance from "../instance";
instance();
const state = {
    licenses: [],
    licenseMsg: null,
};

const getters = {
    licensesList: (state) => state.licenses,
    getLicenseAlertMsg: (state) => state.licenseMsg,
};

const mutations = {
    setLicense(state, items) {
        state.licenses = items;
    },
    addNewLicense(state, item) {
        state.licenseMsg = item;
    },
};

const actions = {
    async getLicenseList({ commit },query) {
        await axios
            .get(`/api/lcp/licenses${query}`)
            .then((r) => r.data)
            .then((res) => {
                if (res.success) {
                    commit("setLicense", res.result);
                }
            });
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
