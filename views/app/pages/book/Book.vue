<template>
  <b-row>
    <b-colxx class="disable-text-selection">
      <list-page-heading
        :title="$t('menu.book')"
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
      <b-row>
        <div class="col-sm-8 card-body mb-3">
          <input
            type="text"
            class="form-control border-radius"
            v-model="searcher"
            placeholder="Search by title..."
          />
        </div>
        <div class="col-sm-4 card-body mb-3">
          <select
            name="status"
            id="status"
            class="form-control"
            v-model="status"
          >
            <option value="">Status</option>
            <option value="active">Active</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      </b-row>
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
import { mapGetters, mapActions } from "vuex";
import { apiUrl } from "../../../../constants/config";
import BookListPageHeading from "./BookListPageHeading";
import BookListPageListing from "./BookListPageListing";

export default {
  components: {
    "list-page-heading": BookListPageHeading,
    "list-page-listing": BookListPageListing,
  },
  data() {
    return {
      searcher: "",
      status: "",
      isLoad: false,
      apiBase: apiUrl + "/user",
      displayMode: "list",
      sort: {
        column: "title",
        label: "Product Name",
      },
      page: 1,
      perPage: 12,
      search: "",
      from: 0,
      to: 0,
      total: 0,
      lastPage: 0,
      items: [],
      selectedItems: [],
    };
  },
  methods: {
    ...mapActions(["getBookList", "deleteBook"]),

    changeDisplayMode(displayType) {
      this.displayMode = displayType;
    },
    changePageSize(perPage) {
      this.page = 1;
      this.perPage = perPage;
      this.setDataList(
        `page=${this.page}&perPage=${this.perPage}&search=${this.searcher}`
      );
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
        this.selectedItems = this.items.map((x) => x.id);
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
          ...itemsForToggle.map((item) => {
            return item.id;
          })
        );
      } else {
        if (this.selectedItems.includes(itemId)) {
          this.selectedItems = this.selectedItems.filter((x) => x !== itemId);
        } else this.selectedItems.push(itemId);
      }
    },
    handleContextMenu(vnode) {
      if (!this.selectedItems.includes(vnode.key)) {
        this.selectedItems = [vnode.key];
      }
    },
    async onContextMenuAction(action) {
      if (action == "delete") {
        if (confirm("Are you sure?")) {
          let theID = this.selectedItems[0];
          await this.deleteBook(theID);
          if (this.getBookAlertMsg.success) {
            await this.getBookList();
            this.total = this.bookList.result.total;
            this.from = this.bookList.result.from;
            this.to = this.bookList.result.to;
            this.items = this.bookList.result.data.map((x) => {
              return {
                ...x,
                img: x.image,
              };
            });
            this.perPage = this.bookList.result.per_page;
            this.selectedItems = [];
            this.lastPage = this.bookList.result.last_page;
            this.isLoad = true;
          }
        }
      }
    },
    async changePage(pageNum) {
      this.page = pageNum;
      await this.setDataList(
        `page=${this.page}&perPage=${this.perPage}&search=${this.searcher}`
      );
    },
    async setDataList(search) {
      this.isLoad = false;
      await this.getBookList(search);
      this.total = this.bookList.result.total;
      this.from = this.bookList.result.from;
      this.to = this.bookList.result.to;
      this.items = this.bookList.result.data.map((x) => {
        return {
          ...x,
          img: x.image,
        };
      });
      this.perPage = this.bookList.result.per_page;
      this.selectedItems = [];
      this.lastPage = this.bookList.result.last_page;
      this.isLoad = true;
    },
    searchByTitle(search) {
      if (search.length > 3) {
        this.setDataList(
          `page=${this.page}&perPage=${this.perPage}&search=${this.searcher}`
        );
      }
      if (search.length == 0) {
        this.setDataList(
          `page=${this.page}&perPage=${this.perPage}&search=${this.searcher}`
        );
      }
    },
    searchByStatus(search) {
      if (search.length > 3) {
        this.setDataList(
          `page=${this.page}&perPage=${this.perPage}&status=${this.status}`
        );
      }
      if (search.length == 0) {
        this.setDataList(
          `page=${this.page}&perPage=${this.perPage}&status=${this.status}`
        );
      }
    },
  },
  computed: {
    ...mapGetters(["bookList", "getBookAlertMsg"]),
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
    },
  },
  watch: {
    search() {
      this.page = 1;
    },
    searcher(newValue, oldValue) {
      this.searchByTitle(newValue);
    },
    status(newValue, oldValue) {
      this.searchByStatus(newValue);
    },
    // apiUrl() {
    //     this.getBookList({ page: this.page, search: "" });
    //     this.total = this.bookList.result.total;
    //     this.from = this.bookList.result.from;
    //     this.to = this.bookList.result.to;
    //     this.items = this.bookList.result.data.map(x => {
    //         return {
    //             ...x,
    //             img: "/" + x.image
    //         };
    //     });
    //     this.perPage = this.bookList.result.per_page;
    //     this.selectedItems = [];
    //     this.lastPage = this.bookList.result.last_page;
    //     this.isLoad = true;
    // }
  },
  async mounted() {
    this.setDataList(`page=${this.page}&perPage=${this.perPage}`);
  },
};
</script>
