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
            <b-card class="mb-4" :title="$t('menu.book-group')">
                <b-form @submit.prevent="onFromSubmit">
                    <div class="errors" v-if="errorMsg">
                    <div class="alert alert-danger" v-for="(err,key) in errorMsg" :key="key">{{err[0]}}</div>
                    </div>
                    <div class="errors" v-if="successMsg">
                        <div class="alert alert-success">{{successMsg}}</div>
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
                                <b-list-group-item v-for="(item,index) in books" :key="index">
                                    {{item.name}}
                                    <button :id="'edit_btn'" class="btn btn-primary float-right" variant="secondary" @click.prevent="addTheBook($event,item.id)">
                                        <i class="iconsminds-add"></i>
                                    </button>
                                </b-list-group-item>
                            </b-list-group>
                        </b-colxx>
                        <b-colxx sm="12" v-if="addedBooks">
                            <p>Added books</p>
                            <b-list-group>
                                <b-list-group-item v-for="(book,index) in addedBooks" :key="index">
                                    {{book.name}}
                                </b-list-group-item>
                            </b-list-group>
                        </b-colxx>
                    </b-row>

                    <!-- <b-button type="submit" variant="primary" class="mt-4">{{ $t('forms.save') }}</b-button> -->
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
            errorMsg:null,
            successMsg:null,
            form: {
                name: "",
            },
            books:[],
            addedBooks:[],
        };
    },
    computed: {
        ...mapGetters(["getGroupAlertMsg","getSearchResult","getCurrentGroup"]),
    },
    methods: {
        ...mapActions(['searchBook','addBookToGroup','getTheGroup']),
        async onFromSubmit() {
            await this.searchBook(this.form);
            this.books = this.getSearchResult;
        },
        async searchBooks($event){
            await this.searchBook(this.form);
            this.books = this.getSearchResult;
        },
        async addTheBook($event,id){
            let form = {'book_id':id,'group_id':parseInt(this.$route.params.id)};
            await this.addBookToGroup(form);
            if(this.getGroupAlertMsg.error){
                this.errorMsg = this.getGroupAlertMsg.message
            }
            if(this.getGroupAlertMsg.success){
                this.successMsg = this.getGroupAlertMsg.message;
                this.books = [];
                this.errorMsg = null;
                await this.getTheGroup(this.$route.params.id);
                this.addedBooks = await this.getCurrentGroup.books; 
            }
        },
    },
    async mounted(){
        await this.getTheGroup(this.$route.params.id);
        this.addedBooks = await this.getCurrentGroup.books;
    }
};
</script>
