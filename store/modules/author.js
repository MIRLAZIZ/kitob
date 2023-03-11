import axios from "axios";
import { apiUrl } from "../../constants/config";
const token = localStorage.getItem("access_token");
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
import instance from "../instance";
instance();
const state = {
    authors: [],
    authorsArray: [],
    alertAuthorMsg: [],
    currentAuthor: {},
};

const getters = {
    authorsList: (state) => state.authors,
    authorsListArray: (state) => state.authorsArray,
    getAlertAuthorMsg: (state) => state.alertAuthorMsg,
    currentAuthor: (state) => state.currentAuthor,
};

const mutations = {
    setAuthors(state, items) {
        state.authors = items;
    },
    setAuthorsArray(state, items) {
        state.authorsArray = items;
    },
    addNewAuthor(state, author) {
        // state.author = state.authors.unshift(author)
        state.alertAuthorMsg = author;
    },
    currentAuthor(state, author) {
        state.currentAuthor = author;
    },
    updateTheAuthor: (state, author) => {
        const index = state.authors.findIndex((item) => item.id === author.id);
        if (index !== -1) {
            state.authors.splice(index, 1, author);
        }
    },
    destroyAuthor: (state, author) => {
        const index = state.authors.findIndex((item) => item.id === author.id);
        if (index !== -1) {
            state.authors.splice(index, 1);
        }
    },
};

const actions = {
    getAuthorsList({ commit }) {
        axios
            .get(`/api/author`)
            .then((r) => r.data)
            .then((res) => {
                if (res.success) {
                    commit("setAuthors", res.result.data);
                }
            });
        // .catch(function(error) {
        //   if (error.response && error.response.status === 401) {
        //     window.location.href = "/user/login";
        //     localStorage.clear();
        //   }
        // })
    },
    getAuthorsListArray({ commit }) {
        axios
            .get(`/api/author/list`)
            .then((r) => r.data)
            .then((res) => {
                if (res.success) {
                    commit("setAuthorsArray", res.result);
                }
            });
        // .catch(function(error) {
        //   if (error.response && error.response.status === 401) {
        //     window.location.href = "/user/login";
        //     localStorage.clear();
        //   }
        // })
    },
    async addAuthor({ commit }, author) {
        await axios
            .post(`/api/author/store`, author)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewAuthor", res);
            });
    },
    async updateAuthor({ commit }, author) {
        await axios
            .post(`/api/author/update/${author.id}`, author)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewAuthor", res);
            });
    },
    getTheAuthor({ commit }, id) {
        axios
            .get(`/api/author/edit/${id}`)
            .then((r) => r.data)
            .then((res) => {
                if (res.success) {
                    commit("currentAuthor", res.result);
                }
            });
    },
    deleteAuthor({ commit }, author) {
        axios
            .delete(`/api/author/destroy/${author.id}`)
            .then((r) => r.data)
            .then((res) => {
                if (res.success) {
                    commit("destroyAuthor", author);
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
