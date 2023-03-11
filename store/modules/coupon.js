import axios from "axios";
import { apiUrl } from "../../constants/config";
const token = localStorage.getItem("access_token");
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
import instance from "../instance";
instance();
const state = {
    coupons: [],
    alertMsgCoupon: null,
    currentCoupon: null,
};

const getters = {
    couponsList: (state) => state.coupons,
    getCouponAlertMsg: (state) => state.alertMsgCoupon,
    getCurrentCoupon: (state) => state.currentCoupon,
};

const mutations = {
    setCoupon(state, items) {
        state.coupons = items;
    },
    addNewCoupon(state, item) {
        state.alertMsgCoupon = item;
    },
    currentCoupon(state, coupon) {
        state.currentCoupon = coupon;
    },
};

const actions = {
    async getCouponList({ commit }) {
        await axios
            .get(`/api/coupon`)
            .then((r) => r.data)
            .then((res) => {
                commit("setCoupon", res);
            });
    },
    async getTheCoupon({ commit }, id) {
        await axios
            .get(`/api/coupon/edit/${id}`)
            .then((r) => r.data)
            .then((res) => {
                commit("currentCoupon", res.result);
            });
    },
    async addCoupon({ commit }, coupon) {
        await axios
            .post(`/api/coupon/store`, coupon)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewCoupon", res);
            });
    },
    async updateCoupon({ commit }, coupon) {
        await axios
            .post(`/api/coupon/update/${coupon.id}`, coupon)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewCoupon", res);
            });
    },
    async destroyCoupon({ commit }, id) {
        await axios
            .delete(`/api/coupon/destroy/${id}`)
            .then((r) => r.data)
            .then((res) => {
                commit("addNewCoupon", res);
            });
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
