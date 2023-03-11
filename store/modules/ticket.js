import axios from "axios";
import { apiUrl } from "../../constants/config";
const token = localStorage.getItem("access_token");
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
import instance from "../instance";
instance();
const state = {
    tickets: [],
    alertMsg: null,
    currentTicket: null,
};

const getters = {
    ticketsList: (state) => state.tickets,
    getTicketAlertMsg: (state) => state.alertMsg,
    getCurrentTicket: (state) => state.currentTicket,
};

const mutations = {
    setTickets(state, items) {
        state.tickets = items;
    },
    addNewTicket(state, item) {
        state.alertMsg = item;
    },
    currentTicket(state, ticket) {
        state.currentTicket = ticket;
    },
};

const actions = {
    async getTicketsList({ commit }) {
        await axios
            .get(`/api/ticket`)
            .then((r) => r.data)
            .then((res) => {
                commit("setTickets", res);
            });
    },
    async getTheATicket({ commit }, id) {
        await axios
            .get(`/api/ticket/edit/${id}`)
            .then((r) => r.data)
            .then((res) => {
                commit("currentTicket", res.result);
            });
    },
    async addTicket({ commit }, ticket) {
        await axios
            .post(`/api/ticket/store`, ticket)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewTicket", res);
            });
    },
    async updateTicket({ commit }, ticket) {
        await axios
            .post(`/api/ticket/update/${ticket.id}`, ticket)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewTicket", res);
            });
    },
    async destroyTicket({ commit }, id) {
        await axios
            .delete(`/api/ticket/destroy/${id}`)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewTicket", res);
            });
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
