<template>
    <div>
        <b-row>
            <b-colxx xxs="12">
                <piaf-breadcrumb :heading="$t('menu.add-new')" />
                <div class="separator mb-5"></div>
            </b-colxx>
        </b-row>
        <b-row>
            <b-colxx xxs="12">
                <b-card class="mb-4" :title="$t('menu.series')">
                    <b-form @submit.prevent="onFromSubmit">
                        <div class="errors" v-if="errorMsg">
                            <div class="alert alert-danger" v-for="(err, key) in errorMsg" :key="key">{{ err[0] }}</div>
                        </div>
                        <div class="errors" v-if="successMsg">
                            <div class="alert alert-success">{{ successMsg }}</div>
                        </div>
                        <b-row>
                            <b-colxx sm="12">
                                <b-form-group :label="$t('forms.name')">
                                    <b-form-input type="text" @input="searchBooks($event)" v-model="form.name" />
                                </b-form-group>
                            </b-colxx>
                            <b-colxx sm="12" v-if="books">
                                <p>Search result</p>
                                <b-list-group>
                                    <b-list-group-item v-for="(item, index) in books" :key="index">
                                        {{ item.name }}
                                        <button :id="'edit_btn'" class="btn btn-primary float-right" variant="secondary"
                                            @click.prevent="addTheBook($event, item)">
                                            <i class="iconsminds-add"></i>
                                        </button>
                                    </b-list-group-item>
                                </b-list-group>
                            </b-colxx>
                            <b-colxx sm="12" v-if="addedBooks">
                                <p>Added books</p>
                                <b-list-group>
                                    <b-list-group-item v-for="(book, index) in addedBooks" :key="index">
                                        {{ book.name }}
                                    </b-list-group-item>
                                </b-list-group>
                            </b-colxx>
                        </b-row>

                        <b-button type="submit" variant="primary" class="mt-4">{{ $t('forms.save') }}</b-button>
                    </b-form>
                </b-card>
            </b-colxx>
        </b-row>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { adminRoot } from '../../../../constants/config';

export default {
    data() {
        return {
            errorMsg: null,
            successMsg: null,
            form: {
                book_id: "",
                name: '',
            },
            books: [],
            addedBooks: [],
        };
    },
    computed: {
        ...mapGetters(["getCategoryAlertMsg", "getSearchResultAuto", "getCurrentBCategory", 'getSeriesMsg', 'getCurrentSerias']),
    },
    methods: {
        ...mapActions(['searchBookAutocomplete', 'addBookToCategory', 'getTheCategory', 'addSeriesBook', 'ActiongetTheSeries']),
        async onFromSubmit() {
            await this.addSeriesBook({ data: this.addedBooks });
            if (this.getSeriesMsg.success) {
                this.$router.push(`${adminRoot}/book-series/default`);
            } else {
                this.$notify('error', 'Error', this.getSeriesMsg.message);
            }
        },
        async searchBooks($event) {
            if (event.target.value.length > 2) {
                await this.searchBookAutocomplete(this.form);
                this.books = this.getSearchResultAuto;
            }

        },
        async addTheBook($event, book) {
            let found = false;
            let foundInd;
            this.addedBooks.forEach((item, index) => {
                if (item.id == book.id) {
                    found = true
                    foundInd = index
                }
            })
            if (!found) {
                book['book_id'] = book.id;
                book['series_id'] = this.$route.params.id;
                this.addedBooks.push(book)
            } else {
                this.addedBooks.splice(foundInd, 1)

            }
        },
    },
    async mounted() {
        await this.ActiongetTheSeries(this.$route.params.id);
        this.addedBooks = await this.getCurrentSerias;
    }
};
</script>
