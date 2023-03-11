<template>
    <div>
        <h2>Edit Book</h2>
          <b-row>
            <b-colxx xxs="12">
            <b-card class="mb-4" :title="$t('forms.top-labels-over-line')">
                <b-form @submit.prevent="onAddBookFormSubmit" v-if="formdata" id="updateBookFormData">
                    <div class="alert alert-danger" v-if="errForm">
                        You have to fill out all fields...
                    </div>
                    <div class="errors" v-if="errorMsg">
                        <div class="alert alert-danger" v-for="(err,key) in errorMsg" :key="key">{{err[0]}}</div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <label class="form-group has-float-label">
                                <input type="text" class="form-control" v-model="formdata.name" />
                                <span>{{ $t('book.name') }}</span>
                            </label>
                        </div><!-- /. column -->
                        <div class="col-md-6">
                            <label class="form-group has-float-label">
                                <v-select
                                    :options="authorsListArray"
                                    :dir="direction"
                                    @input="setSelectedAuthor"
                                    v-model="selectedAuthor"
                                />
                                <span>{{ $t('book.author_id') }}</span>
                            </label>
                        </div><!-- /. column -->
                        <div class="col-md-4">
                            <label class="form-group has-float-label">
                                <input type="text" class="form-control" v-model="formdata.paper_price" />
                                <span>{{ $t('book.paper_price') }}</span>
                            </label>
                        </div>
                        <div class="col-md-4">
                            <label class="form-group has-float-label">
                                <input type="text" class="form-control" v-model="formdata.audio_price" />
                                <span>{{ $t('book.audio_price') }}</span>
                            </label>
                        </div>
                        <div class="col-md-4">
                            <label class="form-group has-float-label">
                                <input type="text" class="form-control" v-model="formdata.ebook_price" />
                                <span>{{ $t('book.ebook_price') }}</span>
                            </label>
                        </div>
                        <div class="col-md-4">
                            <label class="form-group has-float-label">
                                <input type="number" min="1900" max="2099" step="1" class="form-control" v-model="formdata.year" />
                                <span>{{ $t('book.year') }}</span>
                            </label>
                        </div>
                        <div class="col-md-4">
                            <label class="form-group has-float-label">
                                <input type="text" class="form-control" v-model="formdata.publishing_house" />
                                <span>{{ $t('book.publishing_house') }}</span>
                            </label>
                        </div>
                        <div class="col-md-4">
                            <label class="form-group has-float-label">
                                <input type="text" class="form-control" v-model="formdata.edition" />
                                <span>{{ $t('book.edition') }}</span>
                            </label>
                        </div>
                        <div class="col-md-4">
                            <label class="form-group has-float-label">
                                <input type="text" class="form-control" v-model="formdata.age_access" />
                                <span>{{ $t('book.age_access') }}</span>
                            </label>
                        </div>
                        <div class="col-md-4">
                            <label class="form-group has-float-label">
                                <input type="text" class="form-control" v-model="formdata.isbn" />
                                <span>{{ $t('book.isbn') }}</span>
                            </label>
                        </div>
                        <div class="col-md-4">
                            <label class="form-group has-float-label">
                                <input type="text" class="form-control" v-model="formdata.number_of_pages" />
                                <span>{{ $t('book.number_of_pages') }}</span>
                            </label>
                        </div>
                        <div class="col-md-6">
                            <label class="form-group has-float-label">
                                <input type="text" class="form-control" v-model="formdata.category" />
                                <span>{{ $t('book.category') }}</span>
                            </label>
                        </div>
                        <div class="col-md-6">
                            <label class="form-group has-float-label">
                                <v-select
                                    :options="genresListArray"
                                    :dir="direction"
                                    @input="setSelectedGenre"
                                    v-model="selectedGenre"
                                />
                                <span>{{ $t('book.genre_id') }}</span>
                            </label>
                        </div>
                        
                    </div><!-- /.row -->
                    <label class="form-group has-float-label">
                        <textarea type="text" cols="10" rows="4" class="form-control" v-model="formdata.content"></textarea>
                        <span>{{ $t('book.content') }}</span>
                    </label>
                    <div class="form-group">
                        <div class="custom-control custom-checkbox">
                            <input @change="setCheckBox($event,'is_new')" type="checkbox" class="custom-control-input" id="is_new" v-model="formdata.is_new">
                            <label class="custom-control-label" for="is_new">{{ $t('book.is_new') }}</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input @change="setCheckBox($event,'is_bestseller')" type="checkbox" id="is_bestseller" class="custom-control-input" v-model="formdata.is_bestseller">
                            <label class="custom-control-label" for="is_bestseller">{{ $t('book.is_bestseller') }}</label>
                        </div>
                    </div>
                    <label class="form-group has-float-label">
                        <v-select
                            :options="selectData"
                            :dir="direction"
                            v-model="selectedStatus"
                            @input="setStatus($event)"
                        />
                        <span>{{ $t('book.status') }}</span>
                    </label>
                    <label class="form-group has-float-label">
                        <textarea cols="10" rows="4" class="form-control" v-model="formdata.description"></textarea>
                        <span>{{ $t('book.description') }}</span>
                    </label>
                    <label class="form-group has-float-label">
                        <textarea cols="10" rows="4" class="form-control" v-model="formdata.fragment"></textarea>
                        <span>{{ $t('book.fragment') }}</span>
                    </label>
                    <label class="form-group has-float-label">
                        <input type="file" class="form-control" @change="setFile($event,'audio')"/>
                        <span>{{ $t('book.audio') }}</span>
                    </label>
                    <label class="form-group has-float-label">
                        <input type="file" class="form-control" @change="setFile($event,'ebook')"/>
                        <span>{{ $t('book.ebook') }}</span>
                    </label>
                    <label class="form-group has-float-label">
                        <input type="file" class="form-control" @change="setFile($event,'image')">
                        <span>{{ $t('book.image') }}</span>
                    </label>
                    <b-button type="submit" variant="primary" class="mt-4">{{ $t('forms.submit') }}</b-button>
                </b-form>
            </b-card>
            </b-colxx>
        </b-row>
    </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { getDirection } from "../../../../utils";
import { adminRoot } from '../../../../constants/config';

export default {
    data(){
        return {
            direction: getDirection().direction,
            addBookForm:{
                name: "",
                author_id : null,
                paper_price : null,
                audio_price : null,
                ebook_price : null,
                image : null,
                fragment : "",
                audio : "",
                ebook : "",
                description : "",
                year : 2020,
                publishing_house : "",
                edition : "",
                age_access : 18,
                isbn : "",
                number_of_pages : 0,
                category : "",
                genre_id : "",
                content : "",
                status : "",
                is_new : 0,
                is_bestseller:0
            },
            selectData: [
                { label: "Active", value: "active" },
                { label: "Inavtive", value: "inactive" },
            ],
            errorMsg: null,
            errForm:false,
            selectedAuthor:null,
            selectedGenre:null,
            selectedStatus:null,
            formdata: {},
        }
    },
    components: {
        "v-select": vSelect,
    },
    computed: {
        ...mapGetters(['getBookAlertMsg','authorsListArray','currentBook','genresListArray'])
    },
    methods:{
        ...mapActions(['addBook','updateBook','getAuthorsListArray','getTheBook','getGenresListArray']),
        async onAddBookFormSubmit(){
            var book = new FormData();
            if(this.formdata.image){
                book.append('image',this.formdata.image);
            }else{
                book.delete('image');
            }
            if(this.formdata.audio){
                book.append('audio',this.formdata.audio);
            }else{
                book.delete('audio');
            }
            if(this.formdata.ebook){
                book.append('ebook',this.formdata.ebook);
            }else{
                book.delete('ebook');
            }
            book.append('id',this.formdata.id);
            book.append('name',this.formdata.name);
            book.append('author_id',this.formdata.author_id);
            book.append('paper_price',this.formdata.paper_price);
            book.append('audio_price',this.formdata.audio_price);
            book.append('ebook_price',this.formdata.ebook_price);
            book.append('paper_price',this.formdata.paper_price);
            book.append('fragment',this.formdata.fragment);
            book.append('year',this.formdata.year);
            book.append('publishing_house',this.formdata.publishing_house);
            book.append('edition',this.formdata.edition);
            book.append('age_access',this.formdata.age_access);
            book.append('isbn',this.formdata.isbn);
            book.append('number_of_pages',this.formdata.number_of_pages);
            book.append('category',this.formdata.category);
            book.append('genre_id',this.formdata.genre_id);
            book.append('content',this.formdata.content);
            book.append('isbn',this.formdata.isbn);
            book.append('is_new',this.formdata.is_new);
            book.append('is_bestseller',this.formdata.is_bestseller);
            book.append('description',this.formdata.description);
            book.append('status',this.formdata.status.value);
            await this.updateBook(book);
            if(this.getBookAlertMsg.error){
                this.errorMsg = this.getBookAlertMsg.message
            }else{
                this.errorMsg = null
                this.$router.push(`${adminRoot}/book`)
            }
            
        },
        setFile(event,key){
            this.formdata[key] = event.target.files[0]
        },
        setCheckBox(event,key){
            if(event.target.checked){
                this.formdata[key] = 1;
            }else{
                this.formdata[key] = 0;
            }
        },
        setSelectedAuthor(event){
            this.formdata.author_id = event.value;
        },
        setSelectedGenre(event){
            this.formdata.genre_id = event.value;
        },
        async makeSelectedAuthor(){
            if(this.currentBook.author){
                let selectedAuthorObj = {
                    label:this.currentBook.author.fio,
                    value:this.currentBook.author_id,
                };
                this.selectedAuthor = selectedAuthorObj;
            }
        },
        async makeSelectedGenre(){
            if(this.currentBook.genre){
                let selectedGenreObj = {
                    label:this.currentBook.genre.name,
                    value:this.currentBook.genre_id,
                };
                this.selectedGenre = selectedGenreObj;
            }
        },
        async makeSelectedStatus(){
            let selectedStatusObj = {
                label:this.currentBook.status,
                value:this.currentBook.status,
            };
            if(this.currentBook.status == 'active'){
                selectedStatusObj.label = 'Active'
            }else{
                selectedStatusObj.label = 'Inactive'
            }
            this.selectedStatus = selectedStatusObj;
        },
        setStatus(event){
            this.formdata.status = event.value;
            // console.log(event.value);
        }
    },
    async mounted(){
        this.getAuthorsListArray();
        this.getGenresListArray();
        await this.getTheBook(this.$route.params.id);
        this.makeSelectedAuthor();
        this.makeSelectedGenre();
        this.makeSelectedStatus();
        this.formdata = this.currentBook;
        this.formdata.audio = '';
        this.formdata.image = '';
        this.formdata.ebook = '';
    }
}
</script>

<style>

</style>