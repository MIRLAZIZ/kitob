import axios from "axios";
import { apiUrl } from "../../constants/config";
const token = localStorage.getItem("access_token");
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
import instance from "../instance";
instance();
const state = {
    booktype: [],
    setWarehouse: [],
    alertMsgBooktype: null,
    currentBooktype: null,
    the_book:null,
    warehouse:null
};

const getters = {
    booktypeList: (state) => state.booktype,
    warehouseList: (state) => state.setWarehouse,
    getBooktypeAlertMsg: (state) => state.alertMsgBooktype,
    getCurrentBooktype: (state) => state.currentBooktype,
    getTheBook: (state) => state.the_book,
    currentWarehouse: (state) => state.warehouse,
};

const mutations = {
    setBooktype(state, items) {
        state.booktype = items;
    },
    addNewBooktype(state, item) {
        state.alertMsgBooktype = item;
    },
    currentBooktype(state, booktype) {
        state.currentBooktype = booktype;
    },
    setTheBook(state, book) {
        state.the_book = book;
    },
    setWarehouse(state, book) {
        state.setWarehouse = book;
    },
    setCurrentWarehouse(state, book) {
        state.warehouse = book;
    },
};

const actions = {
    async getBooktypeList({ commit },query) {
        await axios
            .get(`/api/booktype${query}`)
            .then((r) => r.data)
            .then((res) => {
                commit("setBooktype", res);
            });
    },
    async getWarehouseList({ commit },query) {
        await axios
            .get(`/api/booktype/warehouse${query}`)
            .then((r) => r.data)
            .then((res) => {
                commit("setWarehouse", res);
            });
    },
    async editTheWarehouse({ commit }, id) {
        await axios
            .get(`/api/booktype/warehouse/edit/${id}`)
            .then((r) => r.data)
            .then((res) => {
                commit("setCurrentWarehouse", res.result);
            });
    },
    async getTheBooktype({ commit }, id) {
        await axios
            .get(`/api/booktype/edit/${id}`)
            .then((r) => r.data)
            .then((res) => {
                commit("currentBooktype", res.result);
            });
    },
    async addBooktype({ commit }, booktype) {
        await axios
            .post(`/api/booktype/store`, booktype)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewBooktype", res);
            });
    },
    async addBooktypeByArray({ commit }, items) {
        await axios
            .post(`/api/booktype/store-by-array`, items)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewBooktype", res);
            });
    },
    async updateBooktypeByArray({ commit }, items) {
        await axios
            .post(`/api/booktype/update-by-array`, items)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewBooktype", res);
            });
    },
    async updateBooktype({ commit }, booktype) {
        await axios
            .post(`/api/booktype/update/${booktype.id}`, booktype)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewBooktype", res);
            });
    },
    async destroyBooktype({ commit }, id) {
        await axios
            .delete(`/api/booktype/destroy/${id}`)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewBooktype", res);
            });
    },
    async getBookByBarCode({ commit }, code) {
        await axios
            .get(`/api/get-book-by-barcode?code=${code}`)
            .then((r) => r.data)
            .then((res) => {
                commit("setTheBook", res);
            });
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
