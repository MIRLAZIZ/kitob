<template>
  <b-row>
    <b-colxx class="disable-text-selection">
      <list-page-heading
        :title="'Warehouse'"
        :selectAll="selectAll"
        :isSelectedAll="isSelectedAll"
        :isAnyItemSelected="isAnyItemSelected"
        :keymap="keymap"
        :displayMode="displayMode"
        :changeDisplayMode="changeDisplayMode"
        :changeOrderBy="changeOrderBy"
        :changePageSize="changePageSize"
        :sort="sort"
        :searchChange="searchChange"
        :from="from"
        :to="to"
        :total="total"
        :perPage="perPage"
      ></list-page-heading>
      <div class="separator mb-5"></div>
      <template v-if="isLoad">
        <list-page-listing
          :displayMode="displayMode"
          :items="items"
          :selectedItems="selectedItems"
          :toggleItem="toggleItem"
          :lastPage="lastPage"
          :perPage="perPage"
          :page="page"
          :changePage="changePage"
          :handleContextMenu="handleContextMenu"
          :onContextMenuAction="onContextMenuAction"
        ></list-page-listing>
      </template>
      <template v-else>
        <div class="loading"></div>
      </template>
    </b-colxx>
  </b-row>
</template>

<script>
import axios from "axios";
import {mapGetters,mapActions} from 'vuex';
import { apiUrl } from "../../../../constants/config";
import BooktypeListPageHeading from "./BooktypeListPageHeading";
import WarehouseListPageListing from "./WarehouseListPageListing";

export default {
  components: {
    "list-page-heading": BooktypeListPageHeading,
    "list-page-listing": WarehouseListPageListing
  },
  data() {
    return {
      isLoad: false,
      apiBase: apiUrl + "/user",
      displayMode: "list",
      sort: {
        column: "title",
        label: "Product Name"
      },
      page: 1,
      perPage: 4,
      search: "",
      from: 0,
      to: 0,
      total: 0,
      lastPage: 0,
      items: [],
      selectedItems: []
    };
  },
  methods: {
    ...mapActions(['getWarehouseList']),

    changeDisplayMode(displayType) {
      this.displayMode = displayType;
    },
    changePageSize(perPage) {
      this.page = 1;
      this.perPage = perPage;
    },
    changeOrderBy(sort) {
      this.sort = sort;
    },
    searchChange(val) {
      this.search = val;
      this.page = 1;
    },

    selectAll(isToggle) {
      if (this.selectedItems.length >= this.items.length) {
        if (isToggle) this.selectedItems = [];
      } else {
        this.selectedItems = this.items.map(x => x.id);
      }
    },
    keymap(event) {
      switch (event.srcKey) {
        case "select":
          this.selectAll(false);
          break;
        case "undo":
          this.selectedItems = [];
          break;
      }
    },
    getIndex(value, arr, prop) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i][prop] === value) {
          return i;
        }
      }
      return -1;
    },
    toggleItem(event, itemId) {
      if (event.shiftKey && this.selectedItems.length > 0) {
        let itemsForToggle = this.items;
        var start = this.getIndex(itemId, itemsForToggle, "id");
        var end = this.getIndex(
          this.selectedItems[this.selectedItems.length - 1],
          itemsForToggle,
          "id"
        );
        itemsForToggle = itemsForToggle.slice(
          Math.min(start, end),
          Math.max(start, end) + 1
        );
        this.selectedItems.push(
          ...itemsForToggle.map(item => {
            return item.id;
          })
        );
      } else {
        if (this.selectedItems.includes(itemId)) {
          this.selectedItems = this.selectedItems.filter(x => x !== itemId);
        } else this.selectedItems.push(itemId);
      }
    },
    handleContextMenu(vnode) {
      if (!this.selectedItems.includes(vnode.key)) {
        this.selectedItems = [vnode.key];
      }
    },
    async onContextMenuAction(action) {
      // console.log(
      //   "context menu item clicked - " + action + ": ",
      //   this.selectedItems
      // );
      if(action == 'delete'){
        let theID = this.selectedItems;
        if(confirm('Are you sure?')){
          await this.destroyFaq(theID);
          if(this.getFaqAlertMsg.success){
            await this.getCouponList();
            this.total = this.booktypeList.result.total;
            this.from = this.booktypeList.result.from;
            this.to = this.booktypeList.result.to;
            this.items = this.booktypeList.result.data.map(x => {
            return {
                ...x,
                img: x.photo
            };
            });
            this.perPage = this.booktypeList.result.per_page;
            this.selectedItems = [];
            this.lastPage = this.booktypeList.result.last_page;
            this.isLoad = true;
          }
        }
      }
    },
    changePage(pageNum) {
      this.page = pageNum;
    },
    async getItemsAndSet(){
      await this.getWarehouseList('?page='+this.page);
      this.total = this.warehouseList.result.total;
      this.from = this.warehouseList.result.from;
      this.to = this.warehouseList.result.to;
      this.items = this.warehouseList.result.data.map(x => {
          return {
              ...x,
              img: x.photo,
              price: x.owner_price
          };
      });
      this.perPage = this.warehouseList.result.per_page;
      this.selectedItems = [];
      this.lastPage = this.warehouseList.result.last_page;
      this.isLoad = true;
    },
  },
  computed: {
    ...mapGetters(['warehouseList']),
    isSelectedAll() {
      return this.selectedItems.length >= this.items.length;
    },
    isAnyItemSelected() {
      return (
        this.selectedItems.length > 0 &&
        this.selectedItems.length < this.items.length
      );
    },
    apiUrl() {
      return `${this.apiBase}?sort=${this.sort.column}&page=${this.page}&per_page=${this.perPage}&search=${this.search}`;
    }
  },
  watch: {
    search() {
      this.page = 1;
    },
    page() {
      this.getItemsAndSet();
    }
  },
  mounted() {
      this.getItemsAndSet();
  }
};
</script>
