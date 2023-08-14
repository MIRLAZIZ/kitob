<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.analytics')" />
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row class="mb-5">
      <b-col cols="12"> <CreateBook /></b-col
    ></b-row>
    <b-row>
      <b-colxx sm="12" md="6" class="mb-4" v-if="loaded">
        <website-visit-chart-card
          :title="'Total new users'"
          :data="total_users_data"
          :labels="total_users_label"
        ></website-visit-chart-card>
      </b-colxx>
      <b-colxx sm="12" md="6" class="mb-4" v-if="loadedSales">
        <website-visit-chart-card
          :title="'Total sales'"
          :data="total_sales_data"
          :labels="total_sales_label"
        ></website-visit-chart-card>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx sm="12" md="6" class="mb-4" v-if="loadedPublisherSales">
        <website-visit-chart-card
          :title="'Total sales by publishers'"
          :data="total_publisher_sales_data"
          :labels="total_publisher_sales_label"
        ></website-visit-chart-card>
      </b-colxx>
      <b-colxx sm="12" md="6" class="mb-4" v-if="loadedTopBooksReview">
        <website-visit-chart-card
          :title="'Top books by review'"
          :data="top_books_by_review_data"
          :labels="top_books_by_review_label"
        ></website-visit-chart-card>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx sm="12" md="6" class="mb-4" v-if="loadedTopBooksView">
        <website-visit-chart-card
          :title="'Top books by view'"
          :data="top_books_by_view_data"
          :labels="top_books_by_view_label"
        ></website-visit-chart-card>
      </b-colxx>
      <b-colxx sm="12" md="6" class="mb-4" v-if="loadedTopActiveUsers">
        <website-visit-chart-card
          :title="'Top active users'"
          :data="top_active_users_data"
          :labels="top_active_users_label"
        ></website-visit-chart-card>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx sm="12" md="6" class="mb-4" v-if="loadedTopActiveCategories">
        <website-visit-chart-card
          :title="'Top categories by view'"
          :data="top_active_categories_by_view_data"
          :labels="top_active_categories_by_view_label"
        ></website-visit-chart-card>
      </b-colxx>
      <b-colxx sm="12" md="6" class="mb-4" v-if="loadedTopBooksBySale">
        <website-visit-chart-card
          :title="'Top books by sale'"
          :data="top_books_by_sale_data"
          :labels="top_books_by_sale_label"
        ></website-visit-chart-card>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx sm="12" md="6" class="mb-4" v-if="loadedTopActivePublishers">
        <website-visit-chart-card
          :title="'Top active publishers'"
          :data="top_active_publishers_data"
          :labels="top_active_publishers_label"
        ></website-visit-chart-card>
      </b-colxx>
    </b-row>
    <sortable-statictics-row></sortable-statictics-row>
  </div>
</template>

<script>
import ConversionRatesChartCard from "../../../containers/dashboards/ConversionRatesChartCard";
import OrderStockRadarChart from "../../../containers/dashboards/OrderStockRadarChart";
import ProductCategoriesDoughnut from "../../../containers/dashboards/ProductCategoriesDoughnut";
import ProductCategoriesPolarArea from "../../../containers/dashboards/ProductCategoriesPolarArea";
import ProfileStatuses from "../../../containers/dashboards/ProfileStatuses";
import SalesChartCard from "../../../containers/dashboards/SalesChartCard";
import SmallLineCharts from "../../../containers/dashboards/SmallLineCharts";
import SortableStaticticsRow from "../../../containers/dashboards/SortableStaticticsRow";
import WebsiteVisitsChartCard from "../../../containers/dashboards/WebsiteVisitsChartCard";
import CreateBook from "../pages/bookCreate/CreateBook";

import { mapGetters, mapActions } from "vuex";
import { adminRoot } from "../../../constants/config";

export default {
  components: {
    "converconversion-rates-chart-card": ConversionRatesChartCard,
    "order-stock-radar-chart": OrderStockRadarChart,
    "product-categories-doughnut": ProductCategoriesDoughnut,
    "product-categories-polar-area": ProductCategoriesPolarArea,
    "profile-statuses": ProfileStatuses,
    "sales-chart-card": SalesChartCard,
    "small-line-charts": SmallLineCharts,
    "sortable-statictics-row": SortableStaticticsRow,
    "website-visit-chart-card": WebsiteVisitsChartCard,
    CreateBook,
  },
  data() {
    return {
      the_data: [],
      //users
      total_users_data: [],
      total_users_label: [],
      loaded: false,
      //sales
      total_sales_data: [],
      total_sales_label: [],
      loadedSales: false,
      //sales by publishers
      total_publisher_sales_data: [],
      total_publisher_sales_label: [],
      loadedPublisherSales: false,
      //top books by review
      top_books_by_review_data: [],
      top_books_by_review_label: [],
      loadedTopBooksReview: false,

      //top books by view
      top_books_by_view_data: [],
      top_books_by_view_label: [],
      loadedTopBooksView: false,

      //top active users
      top_active_users_data: [],
      top_active_users_label: [],
      loadedTopActiveUsers: false,

      //top active publishers
      top_active_publishers_data: [],
      top_active_publishers_label: [],
      loadedTopActivePublishers: false,

      //top active categories by view
      top_active_categories_by_view_data: [],
      top_active_categories_by_view_label: [],
      loadedTopActiveCategories: false,

      //top books by sale
      top_books_by_sale_data: [],
      top_books_by_sale_label: [],
      loadedTopBooksBySale: false,
    };
  },
  computed: {
    ...mapGetters([
      "dashTotalUsers",
      "dashTotalSales",
      "dashTotalSalesByPublishers",
      "dashTopBooksByReview",
      "dashTopBooksByView",
      "dashTopActiveUsers",
      "dashTopActivePublishers",
      "dashTopCategoriesByView",
      "dashTopBooksBySale",
    ]),
  },
  methods: {
    ...mapActions([
      "getTotalUsers",
      "getTotalSales",
      "getTotalSalesByPublishers",
      "getTopBooksByReviews",
      "getTopBooksByViews",
      "getTopActiveUsers",
      "getTopActivePublishers",
      "getTopCategoriesByView",
      "getTopBooksBySale",
    ]),
  },
  async created() {
    //Total users
    await this.getTotalUsers("yearly");
    if (this.dashTotalUsers.success == true) {
      if (
        this.dashTotalUsers.result &&
        this.dashTotalUsers.result.data.length > 0
      ) {
        this.total_users_data = this.dashTotalUsers.result.data;
        this.total_users_label = this.dashTotalUsers.result.labels;
        this.loaded = true;
      }
    }
    //Total sales
    await this.getTotalSales("yearly");
    if (this.dashTotalSales.success == true) {
      if (
        this.dashTotalSales.result &&
        this.dashTotalSales.result.data.length > 0
      ) {
        this.total_sales_data = this.dashTotalSales.result.data;
        this.total_sales_label = this.dashTotalSales.result.labels;
        this.loadedSales = true;
      }
    }
    //Total sales by publishers
    await this.getTotalSalesByPublishers("yearly");
    if (this.dashTotalSalesByPublishers.success == true) {
      if (
        this.dashTotalSalesByPublishers.result &&
        this.dashTotalSalesByPublishers.result.data.length > 0
      ) {
        this.total_publisher_sales_data =
          this.dashTotalSalesByPublishers.result.data;
        this.total_publisher_sales_label =
          this.dashTotalSalesByPublishers.result.labels;
        this.loadedPublisherSales = true;
      }
    }

    //Top books by review
    await this.getTopBooksByReviews("yearly");
    if (this.dashTopBooksByReview.success == true) {
      if (
        this.dashTopBooksByReview.result &&
        this.dashTopBooksByReview.result.data.length > 0
      ) {
        this.top_books_by_review_data = this.dashTopBooksByReview.result.data;
        this.top_books_by_review_label =
          this.dashTopBooksByReview.result.labels;
        this.loadedTopBooksReview = true;
      }
    }

    //Top books by view
    await this.getTopBooksByViews("yearly");
    if (this.dashTopBooksByView.success == true) {
      if (
        this.dashTopBooksByView.result &&
        this.dashTopBooksByView.result.data.length > 0
      ) {
        this.top_books_by_view_data = this.dashTopBooksByView.result.data;
        this.top_books_by_view_label = this.dashTopBooksByView.result.labels;
        this.loadedTopBooksView = true;
      }
    }
    //Top top active users
    await this.getTopActiveUsers("yearly");
    if (this.dashTopActiveUsers.success == true) {
      if (
        this.dashTopActiveUsers.result &&
        this.dashTopActiveUsers.result.data.length > 0
      ) {
        this.top_active_users_data = this.dashTopActiveUsers.result.data;
        this.top_active_users_label = this.dashTopActiveUsers.result.labels;
        this.loadedTopActiveUsers = true;
      }
    }

    //Top top active publishers
    await this.getTopActivePublishers("yearly");
    if (this.dashTopActivePublishers.success == true) {
      if (
        this.dashTopActivePublishers.result &&
        this.dashTopActivePublishers.result.data.length > 0
      ) {
        this.top_active_publishers_data =
          this.dashTopActivePublishers.result.data;
        this.top_active_publishers_label =
          this.dashTopActivePublishers.result.labels;
        this.loadedTopActivePublishers = true;
      }
    }

    //Top top categories by view
    await this.getTopCategoriesByView("yearly");
    if (this.dashTopCategoriesByView.success == true) {
      if (
        this.dashTopCategoriesByView.result &&
        this.dashTopCategoriesByView.result.data.length > 0
      ) {
        this.top_active_categories_by_view_data =
          this.dashTopCategoriesByView.result.data;
        this.top_active_categories_by_view_label =
          this.dashTopCategoriesByView.result.labels;
        this.loadedTopActiveCategories = true;
      }
    }

    //Top top categories by view
    await this.getTopBooksBySale("yearly");
    if (this.dashTopBooksBySale.success == true) {
      if (
        this.dashTopBooksBySale.result &&
        this.dashTopBooksBySale.result.data.length > 0
      ) {
        this.top_books_by_sale_data = this.dashTopBooksBySale.result.data;
        this.top_books_by_sale_label = this.dashTopBooksBySale.result.labels;
        this.loadedTopBooksBySale = true;
      }
    }
  },
};
</script>
