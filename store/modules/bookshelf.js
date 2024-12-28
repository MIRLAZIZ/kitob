import axios from "axios";
import { apiUrl, appUrl } from "../../constants/config";
const token = localStorage.getItem("access_token");
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
import instance from "../instance";
instance();
const state = {
  step1: [],
  bookData: {},
  audoProgress: 0,
  audoFrgmentProgress:0
};

const getters = {
  GET_BOOK: (state) => state.bookData,
  AUDIO_PROGRESS: state => state.audoProgress,
  AUDIO_FRAGENT: state => state.audoFrgmentProgress
};

const mutations = {};

const actions = {
  async CREATE_BOOK(_, data) {
    return await axios.post(`${apiUrl}/api/book/step/create`, data);
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
  async CREATE_AUDIOBOOK(context, data) {
    return await axios.post(`${apiUrl}/api/book/audio`, data, {
      onUploadProgress: (progressEvent) => {
        const audoUploud = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        context.state.audoProgress = audoUploud;
      },
    });
  },
  async DELETE_EPUB(_, data) {
    await axios.post(`${apiUrl}/api/book/epub/destroy`, data);
  },

  async CREATE_AUDIO_FRAGMENT(context, data) {
    return await axios.post(`${apiUrl}/api/book/audio`, data, {
      onUploadProgress: (progressEvent) => {
        const audoUploud = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        context.state.audoFrgmentProgress = audoUploud;
      },
    });
  },
  async DELETE_AUDIO(_, id) {
    return await axios.delete(`${apiUrl}/api/book/audio/remove/${id}`)
  },
  async AUDIO_SORT(_, data) {
    return await axios.post(`${apiUrl}/api/book/audio/sort`, data)
  }
  
};

export default {
  state,
  getters,
  mutations,
  actions,
};
