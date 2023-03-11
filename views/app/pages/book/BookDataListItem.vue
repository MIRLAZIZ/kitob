<template>
    <b-card
        :class="{
            'd-flex flex-row flex-column': true,
            active: selectedItems.includes(data.id)
        }"
        no-body
    >
        <div class="pl-2 d-flex flex-grow-1 min-width-zero" @click="showDetail" variant="primary">
            <div class="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                <router-link :to="`?p=${data.id}`" class="w-40 w-sm-100">
                    <p class="list-item-heading mb-0 truncate">
                        {{ data.name }} <br />
                        <small class="text-info">{{
                            data.author ? data.author.fio : "No author"
                        }}</small>
                    </p>
                </router-link>
                <div class="w-15 w-sm-100">
                    <p class="list-item-heading mb-0 truncate">
                        <div v-if="data.category.length">
                            <span
                                class="text-info"
                                v-for="category in data.category"
                                :key="category.id"
                            >
                                {{ category.name_oz }}</span
                            >
                            <br />
                        </div>
                    </p>
                </div>
                <div class="w-10 w-sm-100">
                    <b-badge pill :variant="statusColor(data.status)">
                        {{ upppercase(data.status) }}
                    </b-badge>
                </div>
                <div class="w-25 w-sm-100 text-right">
                    <b-button
                        :id="'translation_btn'"
                        @click.prevent="addTranslation($event, data.id)"
                        variant="secondary"
                        class="btn btn-info"
                    >
                        <i class="iconsminds-add"></i>
                    </b-button>
                    <b-tooltip
                        :target="'translation_btn'"
                        :title="'Add Translation'"
                    >
                    </b-tooltip>
                    <button
                        :id="'edit_btn'"
                        class="btn btn-success"
                        variant="secondary"
                        @click.prevent="editBook($event, data.id)"
                    >
                        <i class="simple-icon-note"></i>
                    </button>
                    <b-tooltip :target="'edit_btn'" :title="'Edit'">
                    </b-tooltip>
                    <button
                        :id="'destroy_btn'"
                        class="btn btn-danger"
                        variant="secondary"
                        @click.prevent="deleteTheBook($event, data.id)"
                    >
                        <i class="iconsminds-trash-with-men"></i>
                    </button>
                    <b-tooltip :target="'destroy_btn'" :title="'Delete'">
                    </b-tooltip>
                </div>
            </div>
        </div>
        <b-collapse id="data.id" v-model="collapseShow" class="mt-2">
            <b-card>
                <div class="row">
                    <div class="col-md-2 card pt-3">
                        <label for="text-light">Publishing house</label>
                        <p class="text-primary">{{data.publishing_house}}</p>
                    </div>
                    <div class="col-md-2 card pt-3">
                        <label for="text-light">Year</label>
                        <p class="text-primary">{{data.year}}</p>
                    </div>
                    <div class="col-md-2 card pt-3">
                        <label for="text-light">ISBN</label>
                        <p class="text-primary">{{data.isbn}}</p>
                    </div>
                    <div class="col-md-2 card pt-3">
                        <label for="text-light">Age access</label>
                        <p class="text-primary">{{data.age_access}}</p>
                    </div>
                    <div class="col-md-2 card pt-3">
                        <label for="text-light">Language</label>
                        <p class="text-primary">{{data.lang}}</p>
                    </div>
                    <div class="col-md-2 card pt-3">
                        <label for="text-light">Edition</label>
                        <p class="text-primary">{{data.edition}}</p>
                    </div>
                </div>
            </b-card>
        </b-collapse>
    </b-card>
</template>

<script>
import { adminRoot } from "../../../../constants/config";
import { mapGetters, mapActions } from "vuex";
export default {
    data(){
        return{
            collapseShow:false,
        }
    },
    props: ["data", "selectedItems"],
    methods: {
        ...mapActions(["getBookList", "deleteBook"]),
        editBook(event, id) {
            this.$router.push(`${adminRoot}/book/edit/${id}`);
        },
        addTranslation(event, id) {
            this.$router.push(`${adminRoot}/book/add-translation/${id}`);
        },
        upppercase(str) {
            return str.toUpperCase();
        },
        async deleteTheBook(event, theID) {
            if (confirm("Are you sure?")) {
                await this.deleteBook(theID);
                if (this.getBookAlertMsg.success) {
                    this.$router.push(`${adminRoot}/book/default`);
                }
            }
        },
        statusColor(status) {
            if (status == "active") {
                return "success";
            }
            return "warning";
        },
        showDetail(){
            this.collapseShow = !this.collapseShow;
        }
    },
    computed: {
        ...mapGetters(["bookList", "getBookAlertMsg"])
    }
};
</script>
