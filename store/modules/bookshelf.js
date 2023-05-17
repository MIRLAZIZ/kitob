import axios from "axios";
import { apiUrl } from "../../constants/config";
const token = localStorage.getItem("access_token");
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
import instance from "../instance";
instance();
const state = {
    step1: []
   
};

const getters = {
  
};

const mutations = {
}

const actions = {
   async CREATE_BOOK(_, data) {
    await axios.post(`${apiUrl}/api/book/step`, data);

    }

 
};

export default {
    state,
    getters,
    mutations,
    actions,
};
