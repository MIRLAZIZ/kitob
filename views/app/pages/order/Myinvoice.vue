<template>
    <div>
        <h2>Invoices</h2>
        <div class="card">
            <div class="card-body">
                <table class="table b-table table-striped">
                    <thead>
                        <th>{{ $t('user.fio') }}</th>
                        <th>{{ $t('book.name') }}</th>
                        <th>{{ $t('pages.price') }}</th>
                        <th>{{ $t('pages.paid') }}</th>
                        <th>{{ $t('user.phone') }}</th>
                        <th>{{ $t('user.status') }}</th>
                    </thead>
                    <tbody>
                        <tr v-for="invoice in myInvoicesList" :key="invoice.id">
                            <td>{{invoice.user_name}}</td>
                            <td>{{invoice.name}}</td>
                            <td>{{invoice.price}}</td>
                            <td>{{invoice.amount}}</td>
                            <td>{{invoice.phone}}</td>
                            <td><span :class="invoice.status == 'success' ? 'badge badge-success' : 'badge badge-secondary'">{{invoice.status}}</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
import { apiUrl } from "../../../../constants/config";
import InvoiceListPageHeading from "./InvoiceListPageHeading";
import InvoiceListPageListing from "./InvoiceListPageListing";

export default {
  components: {
    "list-page-heading": InvoiceListPageHeading,
    "list-page-listing": InvoiceListPageListing
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
    ...mapActions(['getMyInvoices']),

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
        if(confirm('Are you sure?')){
          let theID = this.selectedItems[0];
          await this.destroyKnowledge(theID);
          if(this.getKnowledgeAlertMsg.success){
            await this.getInvoicesList();
            this.total = this.invoicesList.result.total;
            this.from = this.invoicesList.result.from;
            this.to = this.invoicesList.result.to;
            this.items = this.invoicesList.result.data.map(x => {
            return {
                ...x,
                img: x.photo
            };
            });
            this.perPage = this.invoicesList.result.per_page;
            this.selectedItems = [];
            this.lastPage = this.invoicesList.result.last_page;
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
    ...mapGetters(['myInvoicesList','getUzcardAlertMsg']),
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
    // apiUrl() {
    //   this.getInvoicesList();
    // }
  },
  async mounted() {
    await this.getMyInvoices();
  }
};
</script>
