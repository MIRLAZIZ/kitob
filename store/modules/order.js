import axios from "axios";
import { apiUrl } from "../../constants/config";
const token = localStorage.getItem("access_token");
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
import instance from "../instance";
instance();
const state = {
    orders: [],
    uzcards: [],
    uzcards_select: [],
    invoices: [],
    myInvoices: [],
    alertMsg: null,
    currentUzcard: null,
    currentOrder: null,
};

const getters = {
    uzcardsList: (state) => state.uzcards,
    uzcardsListSelect: (state) => state.uzcards_select,
    invoicesList: (state) => state.invoices,
    getUzcardAlertMsg: (state) => state.alertMsg,
    getCurrentUzcard: (state) => state.currentUzcard,
    getCurrentOrder: (state) => state.currentOrder,
    myInvoicesList: (state) => state.myInvoices,
};

const mutations = {
    setUzcards(state, items) {
        state.uzcards = items;
    },
    setUzcardsSelect(state, items) {
        state.uzcards_select = items;
    },
    setInvoices(state, items) {
        state.invoices = items;
    },
    addNewUzcard(state, item) {
        state.alertMsg = item;
    },
    currentUzcard(state, ticket) {
        state.currentUzcard = ticket;
    },
    setCurrentOrder(state, ticket) {
        state.currentOrder = ticket;
    },
    setMyInvoices(state, ticket) {
        state.myInvoices = ticket;
    },
};

const actions = {
    async getInvoicesList({ commit }) {
        await axios
            .get(`${apiUrl}/api/payment/invoice`)
            .then((r) => r.data)
            .then((res) => {
                //commit("addNewUzcard", res.result);
                commit("setInvoices", res.result);
            });
    },
    async getMyInvoices({ commit }) {
        await axios
            .get(`${apiUrl}/api/payment/my-invoice`)
            .then((r) => r.data)
            .then((res) => {
                commit("setMyInvoices", res.result);
            });
    },
    async getUzcardsList({ commit }) {
        await axios
            .get(`${apiUrl}/api/payment/uzcard`)
            .then((r) => r.data)
            .then((res) => {
                commit("setUzcards", res.result);
            });
    },
    async getUzcardsListSelect({ commit }) {
        await axios
            .get(`${apiUrl}/api/payment/uzcard-list`)
            .then((r) => r.data)
            .then((res) => {
                commit("setUzcardsSelect", res.result);
            });
    },
    async getTheUzcard({ commit }, id) {
        await axios
            .get(`${apiUrl}/api/ticket/edit/${id}`)
            .then((r) => r.data)
            .then((res) => {
                commit("currentUzcard", res.result);
            });
    },
    async getTheOrder({ commit }, id) {
        await axios
            .get(`${apiUrl}/api/payment/invoice/${id}`)
            .then((r) => r.data)
            .then((res) => {
                commit("setCurrentOrder", res.result);
            });
    },
    async addUzcard({ commit }, uzcard) {
        await axios
            .post(`${apiUrl}/api/payment/token`, uzcard)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewUzcard", res);
            });
        2;
    },
    async createOrder({ commit }, uzcard) {
        await axios
            .post(`${apiUrl}/api/payment/order/create`, uzcard)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewUzcard", res);
            });
    },
    async completeOrder({ commit }, uzcard) {
        await axios
            .post(`${apiUrl}/api/payment/order/complete`, uzcard)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewUzcard", res);
            });
    },
    async destroyUzcard({ commit }, id) {
        await axios
            .delete(`${apiUrl}/api/ticket/destroy/${id}`)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewUzcard", res);
            });
    },
    async cancelOrderOfFargo({ commit }, id) {
        await axios
            .get(`${apiUrl}/api/payment/fargo/cancel/${id}`)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewUzcard", res);
            });
    },
    async createFargoOrder({ commit }, invoice_id) {
        await axios
            .post(`${apiUrl}/api/payment/create-fargo-order`, invoice_id)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewUzcard", res);
            });
    },
    async getFargoOrderStatus({ commit }, data) {
        await axios
            .post(`${apiUrl}/api/payment/check-fargo-order`, data)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewUzcard", res);
            });
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
