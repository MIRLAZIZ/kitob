<template>
    <b-row>
        <b-colxx class="disable-text-selection">
            <list-page-heading
                :title="$t('user.user')"
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
            <div class="d-flex" style="gap: 10px;padding-bottom: 10px;">
                    <input
                        type="text"
                        class="form-control border-radius"
                        v-model="name"
                        placeholder="Name"
                    />
                    <input
                        type="text"
                        class="form-control border-radius"
                        v-model="email"
                        placeholder="Email"
                    />
                    <input
                        type="numeric"
                        class="form-control border-radius"
                        v-model="phone"
                        placeholder="Phone"
                    />

                    <b-form-select
                        class="form-control border-radius"
                        v-model="gender"
                        :options="genders"
                    ></b-form-select>

                    <b-form-select
                        class="form-control border-radius"
                        v-model="status"
                        :options="statuses"
                    ></b-form-select>

                    <b-form-select
                        class="form-control border-radius"
                        v-model="role_id"
                        :options="roles"
                        value-field="value"
                        text-field="label"
                    ></b-form-select>

                    <button
                        type="button"
                        class="btn btn-transparent"
                        @click="clearFilter"
                    >
                    <i class="simple-icon-close"></i>
                    </button>
                    <!-- <button
                        type="button"
                        class="btn btn-primary"
                        @click="makeFilter"
                    >
                        Filter
                    </button> -->
            </div>
            <div class="separator mb-5"></div>
            <template v-if="isLoad">
                <list-page-listing
                    :displayMode="displayMode"
                    :items="items"
                    :selectedItems="selectedItems"
                    :toggleItem="toggleItem"
                    @reloadData="reloadData"
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
import { mapActions, mapGetters } from "vuex";
import { apiUrl, adminRoot } from "../../../../constants/config";
import ListPageHeading from "../../../../containers/pages/ListPageHeading";
import ListPageListing from "../../../../containers/pages/ListPageListing";

export default {
    components: {
        "list-page-heading": ListPageHeading,
        "list-page-listing": ListPageListing,
    },
    data: function () {
        return {
            isLoad: false,
            apiBase: apiUrl + "/user",
            displayMode: "list",
            sort: {
                column: "title",
                label: "Product Name",
            },
            page: 1,
            perPage: 4,
            search: "",
            from: 0,
            to: 0,
            total: 0,
            lastPage: 0,
            items: [],
            role_id: "",
            selectedItems: [],
            statuses: [
                {
                    text: "Status",
                    value: "",
                },
                {
                    text: "Active",
                    value: "active",
                },
                {
                    text: "Inactive",
                    value: "inactive",
                },
            ],
            genders: [
                {
                    text: "Gender",
                    value: "",
                },
                {
                    text: "Male",
                    value: "male",
                },
                {
                    text: "Female",
                    value: "female",
                },
            ],
            //search filter
            name: "",
            email: "",
            phone: "",
            birthday: "",
            status: "",
            gender: "",
        };
    },
    methods: {
        ...mapActions(["getRolesListArray"]),
        loadItems() {
            this.isLoad = false;
            axios
                .get(this.apiUrl)
                .then((response) => {
                    return response.data;
                })
                .then((res) => {
                    this.total = res.result.total;
                    this.from = res.result.from;
                    this.to = res.result.to;
                    this.items = res.result.data.map((x) => {
                        return {
                            ...x,
                            img: x.photo,
                        };
                    });
                    this.perPage = res.result.per_page;
                    this.selectedItems = [];
                    this.lastPage = res.result.last_page;
                    this.isLoad = true;
                });
        },

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
            this.$router.push(`${adminRoot}/user/edit/${itemId}`);
        },
        handleContextMenu(vnode) {
            if (!this.selectedItems.includes(vnode.key)) {
                this.selectedItems = [vnode.key];
            }
        },
        onContextMenuAction(action) {
            console.log(
                "context menu item clicked - " + action + ": ",
                this.selectedItems
            );
        },
        changePage(pageNum) {
            this.page = pageNum;
        },
        reloadData() {
            this.loadItems();
        },
        clearFilter() {
            this.name = "";
            this.email = "";
            this.phone = "";
            this.gender = "";
            this.status = "";
            this.role_id = "";
            this.loadItems();
        },
        makeFilter() {
            this.loadItems();
        },
    },
    computed: {
        ...mapGetters(["rolesListArray"]),
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
            // return `${this.apiBase}?sort=${this.sort.column}&page=${this.page}&per_page=${this.perPage}&search=${this.search}&role_id=${this.role_id}`;
            return `/api/user?name=${this.name}&page=${this.page}&per_page=${this.perPage}&email=${this.email}&phone=${this.phone}&gender=${this.gender}&status=${this.status}&role_id=${this.role_id}`;
        },
        roles() {
            let option = {
                label: "Select role",
                value: "",
            };
            let data = this.rolesListArray;
            data.unshift(option);
            return data;
        },
    },
    watch: {
        search() {
            this.page = 1;
        },
        apiUrl() {
            if (
                this.name.length > 3 ||
                this.email.length > 3 ||
                this.page > 0 ||
                this.per_page > 0 ||
                this.gender.length > 3 ||
                this.role_id.length > 0 ||
                this.status.length > 3
            ) {
                this.loadItems();
            }
        },
    },
    async mounted() {
        await this.loadItems();
        await this.getRolesListArray();
    },
};
</script>
<style scoped>
/* .form-control {
    padding: 0.375rem 1.75rem 0.375rem 0.75rem;
    height: auto;
} */
</style>
