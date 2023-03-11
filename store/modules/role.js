import axios from "axios";
import { apiUrl } from "../../constants/config";
const token = localStorage.getItem("access_token");
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
import instance from "../instance";
instance();
const state = {
    roles: [],
    rolesArray: [],
    currentRole: {},
    roleMsg: [],
    permissions: [],
    permissionMsg: [],
};

const getters = {
    rolesList: (state) => state.roles,
    rolesListArray: (state) => state.rolesArray,
    currentRole: (state) => state.currentRole,
    getRoleMsg: (state) => state.roleMsg,
    getPermissions: (state) => state.permissions,
    getPermissionsMsg: (state) => state.permissionMsg,
};

const mutations = {
    setRoles(state, items) {
        state.roles = items;
    },
    setRolesArray(state, items) {
        state.rolesArray = items;
    },
    setRolMsg(state, items) {
        state.roleMsg = items;
    },
    setPermissionMsg(state, items) {
        state.permissionMsg = items;
    },
    setPermissions(state, items) {
        state.permissions = items;
    },
    addNewRole(state, author) {
        state.author = state.authors.unshift(author);
    },
    currentRole(state, author) {
        state.currentRole = author;
    },
    updateTheRole: (state, author) => {
        const index = state.authors.findIndex((item) => item.id === author.id);
        if (index !== -1) {
            state.authors.splice(index, 1, author);
        }
    },
    destroyRole: (state, author) => {
        const index = state.authors.findIndex((item) => item.id === author.id);
        if (index !== -1) {
            state.authors.splice(index, 1);
        }
    },
};

const actions = {
    getRolesList({ commit }) {
        axios
            .get(`/api/role`)
            .then((r) => r.data)
            .then((res) => {
                if (res.success) {
                    commit("setRoles", res.result.data);
                }
            });
    },
    updateRoleAction({ commit }, payload) {
        axios
            .post(`/api/permissions/store/${payload.id}`, payload.data)
            .then((r) => r.data)
            .then((res) => {
                if (res.success) {
                    commit("setRolMsg", res.result.data);
                }
            });
    },
    getRolesListArray({ commit }) {
        axios
            .get(`/api/role/list`)
            .then((r) => r.data)
            .then((res) => {
                if (res.success) {
                    commit("setRolesArray", res.result);
                }
            });
    },
    actionPermission({ commit }, payload) {
        axios
            .post(`/api/permissions`, payload)
            .then((r) => r.data)
            .then((res) => {
                commit("setPermissions", res);
            });
    },
    actionPermissionStore({ commit }, payload) {
        axios
            .post(`/api/permissions/store/${payload.id}`, payload)
            .then((r) => r.data)
            .then((res) => {
                if (res.success) {
                    commit("setPermissionMsg", res.result);
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
