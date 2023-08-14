import axios from "axios";
import { apiUrl } from "../../constants/config";
const token = localStorage.getItem("access_token");
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
import instance from "../instance";
instance();
const state = {
  step1: [],
  bookData: {},
};

const getters = {
  GET_BOOK: (state) => state.bookData,
};

const mutations = {};

const actions = {
  async CREATE_BOOK(_, data) {
    return await axios.post(`${apiUrl}/api/book/step/change`, data);
  },
  async GET_BOOK_DATA(context, data) {
    return await axios
      .get(`${apiUrl}/api/book/step/change/${data}`)
      .then((res) => {
        context.state.bookData = res.data;
      });
  },
  async CREATE_STEP_ONE(_, data) {
    return await axios.post(`${apiUrl}/api/book/step/update/first`, data);
  },
  async CREATE_STEP_TWO(_, data) {
    return await axios.post(`${apiUrl}/api/book/step/update/two`, data);
  },
  async CREATE_STEP_THIRD(_, data) {
    return await axios.post(`${apiUrl}/api/book/step/update/third`, data);
  },
  async CREATE_AUDIOBOOK(_, data) {
    return await axios.post(`${apiUrl}/api/book/audio`, data);
  },
  async DELETE_EPUB(_, data) {
     await axios.post(`${apiUrl}/api/book/epub/destroy`,data);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
