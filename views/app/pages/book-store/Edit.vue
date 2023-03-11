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
            <b-card class="mb-4" :title="$t('menu.booktype')">
                <b-form @submit.prevent="onFromSubmit">
                    <div class="errors" v-if="errorMsg">
                        <div class="alert alert-danger" v-for="(err,key) in errorMsg" :key="key">{{err[0]}}</div>
                    </div>
                    <b-row>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="book_id">{{$t('forms.book')}}</label>
                                <input type="text" class="form-control" :value="booktypeFrom.book?.name">
<!--                                <b-form-select v-model="selected" :options="books" @change="setBook($event)" value-field="value" text-field="label"></b-form-select>-->
                            </div>
                            <div class="form-group">
                                <label for="price">{{$t('forms.price')}}</label>
                                <input type="text" id="" class="form-control" v-model="booktypeFrom.price">
                            </div>
                        </div><!-- /. column -->
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="type">{{$t('forms.type')}}</label>
                                <select name="type" id="type" class="form-control" @change="setValue($event,'type')">
                                    <option value="ebook" :selected="booktypeFrom.type === 'ebook'">Ebook</option>
                                    <option value="paper" :selected="booktypeFrom.type === 'paper'">Paper</option>
                                    <option value="audio" :selected="booktypeFrom.type === 'audio'">Audio</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="quantity">{{$t('forms.quantity')}}</label>
                                <input type="integer" id="" class="form-control" v-model="booktypeFrom.quantity">
                            </div>
                        </div>
                        <!-- Cover (Muqova) -->
                        <div class="col-md-6" v-if="showCover">
                            <div class="form-group">
                                <label for="quantity">{{$t('forms.weight')}}</label>
                                <input type="integer" id="" class="form-control" v-model="booktypeFrom.weight">
                            </div>
                        </div>
                        <div class="col-md-6" v-if="showCover">
                            <label></label>
                            <label class="form-group has-float-label">
<!--                                <v-select-->
<!--                                    :options="cover"-->
<!--                                    :dir="direction"-->
<!--                                    @input="setSelectedCover"-->
<!--                                    v-model="booktypeFrom.cover"-->
<!--                                />-->
                                <select name="cover" id="cover" class="form-control" @change="setSelectedCover($event)">
                                    <option value="qattiq" :selected="booktypeFrom.cover === 'qattiq'">Yumshoq</option>
                                    <option value="yumshoq" :selected="booktypeFrom.cover === 'yumshoq'">Qattiq</option>
                                </select>
                                <span>{{ $t('book.cover') }}</span>
                            </label>
                        </div>
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
import { getDirection } from "../../../../utils";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default {
    data() {
        return {
            errorMsg:null,
            booktypeFrom: {
                "book_id":null,
                "price":"",
                "type":"ebook",
                "quantity":0,
                "cover":'',
                "weight":0,
            },
            books:{},
            selected:null,
            direction: getDirection().direction,
            showCover:false,
            cover: [
                { label: "Qattiq", value: "qattiq" },
                { label: "Yumshoq", value: "yumshoq" },
            ],
        };
    },
    components: {
        "v-select": vSelect,
    },
    computed: {
        ...mapGetters(["getBooktypeAlertMsg","bookListArray","getCurrentBooktype"]),
    },
    methods: {
        ...mapActions(['updateBooktype','getBookListArray','getTheBooktype']),
        async onFromSubmit() {
            await this.updateBooktype(this.booktypeFrom);
            if (this.getBooktypeAlertMsg.error) {
                this.errorMsg = this.getBooktypeAlertMsg.message;
            } else {
                this.$router.push(`${adminRoot}/book-store/default`);
            }
        },
        setValue($event,type){
            if(type == 'book'){
                this.booktypeFrom.book_id = $event.target.value;
            }
            if(type == 'type'){
                if($event.target.value == 'paper'){
                    this.showCover = true;
                }else{
                    this.showCover = false;
                    this.booktypeFrom.cover = '';
                }
                this.booktypeFrom.type = $event.target.value;
            }
        },
        setBook(value){
            this.booktypeFrom.book_id = value;
        },
        setSelectedCover(event){
            this.booktypeFrom.cover = event.value;
        },
    },
    async mounted(){
        await this.getBookListArray();
        this.books = this.bookListArray.result;
        await this.getTheBooktype(this.$route.params.id)
        this.booktypeFrom = this.getCurrentBooktype;
        this.booktypeFrom.price = this.booktypeFrom.owner_price;
        this.selected = this.booktypeFrom.book_id;
        this.showCover = this.booktypeFrom.type === 'paper';
    }
};
</script>
