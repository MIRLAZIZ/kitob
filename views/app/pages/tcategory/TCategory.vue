<template>
  <b-row>
    <b-colxx class="disable-text-selection">
      <list-page-heading
        :title="$t('menu.tcategory')"
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
import {mapGetters,mapActions} from 'vuex';
import { apiUrl } from "../../../../constants/config";
import TCategoryListPageHeading from "./TCategoryListPageHeading";
import TCategoryListPageListing from "./TCategoryListPageListing";

export default {
  components: {
    "list-page-heading": TCategoryListPageHeading,
    "list-page-listing": TCategoryListPageListing
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
    ...mapActions(['getTcategoryList','destroyTcategory']),

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
      if(action == 'delete'){
        if(confirm('Are you sure?')){
          let theID = this.selectedItems[0];
          await this.destroyTcategory(theID);
          if(this.getTcategoryAlertMsg.success){
            await this.getTcategoryList();
            this.total = this.tcategoriesList.result.total;
            this.from = this.tcategoriesList.result.from;
            this.to = this.tcategoriesList.result.to;
            this.items = this.tcategoriesList.result.data.map(x => {
            return {
                ...x,
                img: x.photo
            };
            });
            this.perPage = this.tcategoriesList.result.per_page;
            this.selectedItems = [];
            this.lastPage = this.tcategoriesList.result.last_page;
            this.isLoad = true;
          }
        }
      }
    },
    changePage(pageNum) {
      this.page = pageNum;
    }
  },
  computed: {
    ...mapGetters(['tcategoriesList','getTcategoryAlertMsg']),
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
    apiUrl() {
      this.getTcategoryList();
    }
  },
  async mounted() {
    await this.getTcategoryList();
    this.total = this.tcategoriesList.result.total;
    this.from = this.tcategoriesList.result.from;
    this.to = this.tcategoriesList.result.to;
    this.items = this.tcategoriesList.result.data.map(x => {
    return {
        ...x,
        img: x.photo
    };
    });
    this.perPage = this.tcategoriesList.result.per_page;
    this.selectedItems = [];
    this.lastPage = this.tcategoriesList.result.last_page;
    this.isLoad = true;
  }
};
</script>