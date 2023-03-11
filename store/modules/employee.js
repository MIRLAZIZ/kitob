import axios from "axios";
import { apiUrl } from "../../constants/config";
const token = localStorage.getItem("access_token");
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
import instance from "../instance";
instance();
const state = {
    users: [],
    usersArray: [],
    roles: [],
    userAlertMsg: null,
    currentEmployee: {},
    theCurrentUser: {},
};

const getters = {
    usersList: (state) => state.users,
    theCurrentUser: (state) => state.theCurrentUser,
    usersListArray: (state) => state.usersArray,
    currentEmployee: (state) => state.currentEmployee,
    getUserAlertMsg: (state) => state.userAlertMsg,
    getRoles: (state) => state.roles,
};

const mutations = {
    setUsers(state, items) {
        state.users = items;
    },
    setUsersArray(state, items) {
        state.usersArray = items;
    },
    setRoles(state, items) {
        state.roles = items;
    },
    addNewUser(state, user) {
        // state.user = state.users.unshift(user);
        state.userAlertMsg = user;
    },
    currentEmployee(state, author) {
        state.currentEmployee = author;
    },
    setCurrentUser(state, author) {
        state.theCurrentUser = author;
    },
    updateTheAuthor: (state, author) => {
        const index = state.users.findIndex((item) => item.id === author.id);
        if (index !== -1) {
            state.users.splice(index, 1, author);
        }
    },
    destroyAuthor: (state, author) => {
        const index = state.users.findIndex((item) => item.id === author.id);
        if (index !== -1) {
            state.users.splice(index, 1);
        }
    },
};

const actions = {
    getUsersList({ commit }) {
        axios
            .get(`/api/author`)
            .then((r) => r.data)
            .then((res) => {
                if (res.success) {
                    commit("setUsers", res.result.data);
                }
            });
    },
    getUsersListArray({ commit }) {
        axios
            .get(`/api/author/list`)
            .then((r) => r.data)
            .then((res) => {
                if (res.success) {
                    commit("setUsersArray", res.result);
                }
            });
    },
    async getRolesApi({ commit }) {
        await axios
            .get(`/api/role/list`)
            .then((r) => r.data)
            .then((res) => {
                if (res.success) {
                    commit("setRoles", res.result);
                }
            });
    },
    async addUser({ commit }, user) {
        await axios
            .post(`/api/user/store`, user)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewUser", res);
            });
    },
    async getTheEmployee({ commit }, id) {
        await axios
            .get(`/api/user/edit/${id}`)
            .then((r) => r.data)
            .then((res) => {
                if (res.success) {
                    commit("setCurrentUser", res.result);
                }
            });
    },
    async updateEmployee({ commit }, user) {
        await axios
            .post(`/api/user/update/${user.id}`, user.data)
            .then((r) => r.data)
            .then((res) => {
                if (res.success) {
                    commit("addNewUser", res);
                }
            });
    },
    updateUser({ commit }, author) {
        axios
            .post(`/api/author/update/${author.id}`, author)
            .then((r) => r.data)
            .then((res) => {
                if (res.success) {
                    commit("updateTheAuthor", res.result);
                }
            });
    },
    getTheUser({ commit }, id) {
        axios
            .get(`/api/author/edit/${id}`)
            .then((r) => r.data)
            .then((res) => {
                if (res.success) {
                    commit("currentEmployee", res.result);
                }
            });
    },
    deleteUser({ commit }, author) {
        axios
            .delete(`/api/author/destroy/${author.id}`)
            .then((r) => r.data)
            .then((res) => {
                if (res.success) {
                    commit("destroyAuthor", author);
                }
            });
    },
    async deleteEmployee({ commit }, id) {
        await axios
            .delete(`/api/user/destroy/${id}`)
            .then((r) => r.data)
            .then((res) => {
                if (res.success) {
                    commit("addNewUser", res);
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
