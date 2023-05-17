import axios from "axios";
import { apiUrl } from "../../constants/config";
const token = localStorage.getItem("access_token");
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
import instance from "../instance";
instance();
const state = {
  category: [],
  categoryArray: [],
  categoryAlertMsg: null,
  currentCategory: null,

  getCategory: [],
};

const getters = {
  categoryListArray: (state) => state.categoryArray,
  categoryList: (state) => state.category,
  getCategoryAlertMsg: (state) => state.categoryAlertMsg,
  getCurrentCategory: (state) => state.currentCategory,
  GET_CATEGORY_LIST: (state) => state.getCategory,
};

const mutations = {
  setCategoryArray(state, items) {
    state.categoryArray = items;
  },
  // setCategory(state, items) {
  //   state.category = items;
  // },
  // setCurrentCategory(state, items) {
  //   state.currentCategory = items;
  // },
  // setCategoryAlertMsg(state, resp) {
  //   state.categoryAlertMsg = resp;
  // },
};

const actions = {
  FETCH_CATEGORY_TREE(context) {
    axios.get(`${apiUrl}/api/category/tree-list`).then((res) => {
      context.state.getCategory = res.data;
    });
  },
  async getCategoryTreeList({ commit }, query) {
    await axios
      .get(`${apiUrl}/api/category/tree-list${query}`)
      .then((r) => r.data)
      .then((res) => {
        if (res.success) {
          commit("setCategoryArray", res.result);
        }
      });
  },
  async getCategoryListArray({ commit }) {
    await axios
      .get(`${apiUrl}/api/category/list`)
      .then((r) => r.data)
      .then((res) => {
        if (res.success) {
          commit("setCategoryArray", res.result);
        }
      });
  },

  async CREATE_CATEGORY(_, data) {
    await axios.post(`${apiUrl}/api/category/store`, data);
  },
  // async getTheCategory({ commit }, id) {
  //   await axios
  //     .get(`${apiUrl}/api/category/edit/${id}`)
  //     .then((r) => r.data)
  //     .then((res) => {
  //       if (res.success) {
  //         commit("setCurrentCategory", res.result);
  //       }
  //     });
  // },
  async UPDATE_CATEGORY(_, data) {
    await axios.post(`${apiUrl}/api/category/update/${data.id}`, data);
    // updateCategory
  },
  async DELETE_FIELE(_, id) {
    await axios.delete(`${apiUrl}/api/category/destroy/${id}`);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
