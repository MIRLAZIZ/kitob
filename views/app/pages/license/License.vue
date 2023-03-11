<template>
    <div>
        <div class="row" v-if="items.length > 0">
            <div class="col-sm-12 mb-2 shadow bg-primary">
                <div class="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                    <div class="w-15">Provider</div>
                    <div class="w-15">License ID</div>
                    <div class="w-15">Issued At</div>
                    <div class="w-15">Start</div>
                    <div class="w-15">End</div>
                </div>
            </div>

            <div class="col-sm-12 mb-2 shadow bg-white" v-for="(item,index) in items" :key="index">
                <div class="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                    <div class="w-15">{{item.provider}}</div>
                    <div class="w-15">{{item.license_id}}</div>
                    <div class="w-15">{{item.issued}}</div>
                    <div class="w-15">{{item.start}}</div>
                    <div class="w-15">{{item.end}}</div>
                </div>
            </div>
        </div>
        <b-row v-if="lastPage>1">
            <b-colxx xxs="12">
                <b-pagination-nav
                    :number-of-pages="lastPage"
                    :link-gen="linkGen"
                    :value="page"
                    @change="(a)=>changePage(a)"
                    :per-page="perPage"
                    align="center"
                >
                    <template v-slot:next-text>
                        <i class="simple-icon-arrow-right" />
                    </template>
                    <template v-slot:prev-text>
                        <i class="simple-icon-arrow-left" />
                    </template>
                    <template v-slot:first-text>
                        <i class="simple-icon-control-start" />
                    </template>
                    <template v-slot:last-text>
                        <i class="simple-icon-control-end" />
                    </template>
                </b-pagination-nav>
            </b-colxx>
        </b-row>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {apiUrl} from "../../../../constants/config";

export default {
    data(){
        return {
            apiBase: apiUrl + "/user",
            items:[],
            page: 1,
            perPage: 4,
            search: "",
            from: 0,
            to: 0,
            total: 0,
            lastPage: 0,
        }
    },
    methods:{
        ...mapActions(['getLicenseList']),
        linkGen(pageNum) {
            return "#page-" + pageNum;
        },
        changePageSize(perPage) {
            this.page = 1;
            this.perPage = perPage;
        },
        changePage(pageNum) {
            this.page = pageNum;
        },
        async getItemsAndSet(){
            await this.getLicenseList('?page='+this.page);
            this.items = this.licensesList.data;
            this.total = this.licensesList.total;
            this.from = this.licensesList.from;
            this.to = this.licensesList.to;
            this.perPage = this.licensesList.per_page;
            this.lastPage = this.licensesList.last_page;
        }
    },
    computed:{
        ...mapGetters(['licensesList']),
        apiUrl() {
            return `${this.apiBase}?sort=${this.sort.column}&page=${this.page}&per_page=${this.perPage}&search=${this.search}`;
        }
    },
    watch: {
        page() {
            this.getItemsAndSet();
        }
    },
    mounted() {
        this.getItemsAndSet();
    }
}
</script>

<style scoped>

</style>
