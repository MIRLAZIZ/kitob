import axios from "axios";
import { apiUrl } from "../../constants/config";
const token = localStorage.getItem("access_token");
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
import instance from "../instance";
instance();
const state = {
    dashboard_total_users: [],
    dashboard_total_sales: [],
    dashboard_total_sales_by_publishers: [],
    dashboard_top_books_by_review: [],
    dashboard_top_books_by_view: [],
    dashboard_top_active_users: [],
    dashboard_top_active_publishers: [],
    dashboard_top_categories_by_view: [],
    dashboard_top_books_by_sale: [],
    alertMsg: null,
};

const getters = {
    dashTotalUsers: (state) => state.dashboard_total_users,
    dashTotalSales: (state) => state.dashboard_total_sales,
    dashTotalSalesByPublishers: (state) =>
        state.dashboard_total_sales_by_publishers,
    dashTopBooksByReview: (state) => state.dashboard_top_books_by_review,
    dashTopBooksByView: (state) => state.dashboard_top_books_by_view,
    dashTopActiveUsers: (state) => state.dashboard_top_active_users,
    dashTopActivePublishers: (state) => state.dashboard_top_active_publishers,
    dashTopCategoriesByView: (state) => state.dashboard_top_categories_by_view,
    dashTopBooksBySale: (state) => state.dashboard_top_books_by_sale,
    getDashboardAlertMsg: (state) => state.alertMsg,
};

const mutations = {
    setTotalUsers(state, items) {
        state.dashboard_total_users = items;
    },
    setTotalSales(state, items) {
        state.dashboard_total_sales = items;
    },
    setTotalSalesByPublishers(state, items) {
        state.dashboard_total_sales_by_publishers = items;
    },
    setTopBooksByReview(state, items) {
        state.dashboard_top_books_by_review = items;
    },
    setTopBooksByView(state, items) {
        state.dashboard_top_books_by_view = items;
    },
    setTopActiveUsers(state, items) {
        state.dashboard_top_active_users = items;
    },
    setTopActivePublishers(state, items) {
        state.dashboard_top_active_publishers = items;
    },
    setTopCategoriesByView(state, items) {
        state.dashboard_top_categories_by_view = items;
    },
    setTopBooksBySale(state, items) {
        state.dashboard_top_books_by_sale = items;
    },
};

const actions = {
    async getTotalUsers({ commit }, filter) {
        await axios
            .get(`/api/dashboard/total-users?${filter}=1`)
            .then((r) => r.data)
            .then((res) => {
                commit("setTotalUsers", res);
            });
    },
    async getTotalSales({ commit }, filter) {
        await axios
            .get(`/api/dashboard/sales?${filter}=1`)
            .then((r) => r.data)
            .then((res) => {
                commit("setTotalSales", res);
            });
    },
    async getTotalSalesByPublishers({ commit }, filter) {
        await axios
            .get(`/api/dashboard/sales-by-publishers?${filter}=1`)
            .then((r) => r.data)
            .then((res) => {
                commit("setTotalSalesByPublishers", res);
            });
    },
    async getTopBooksByReviews({ commit }, filter) {
        await axios
            .get(`/api/dashboard/top-books-by-rewiew?${filter}=1`)
            .then((r) => r.data)
            .then((res) => {
                commit("setTopBooksByReview", res);
            });
    },
    async getTopBooksByViews({ commit }, filter) {
        await axios
            .get(`/api/dashboard/top-books-by-view?${filter}=1`)
            .then((r) => r.data)
            .then((res) => {
                commit("setTopBooksByView", res);
            });
    },
    async getTopActiveUsers({ commit }, filter) {
        await axios
            .get(`/api/dashboard/top-active-users?${filter}=1`)
            .then((r) => r.data)
            .then((res) => {
                commit("setTopActiveUsers", res);
            });
    },
    async getTopActivePublishers({ commit }, filter) {
        await axios
            .get(`/api/dashboard/top-active-publishers?${filter}=1`)
            .then((r) => r.data)
            .then((res) => {
                commit("setTopActivePublishers", res);
            });
    },
    async getTopCategoriesByView({ commit }, filter) {
        await axios
            .get(`/api/dashboard/top-categories-by-view?${filter}=1`)
            .then((r) => r.data)
            .then((res) => {
                commit("setTopCategoriesByView", res);
            });
    },
    async getTopBooksBySale({ commit }, filter) {
        await axios
            .get(`/api/dashboard/top-books-by-sale?${filter}=1`)
            .then((r) => r.data)
            .then((res) => {
                commit("setTopBooksBySale", res);
            });
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
