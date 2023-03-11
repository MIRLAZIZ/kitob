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
                <b-card class="mb-4" title="Barcode">
                    <div class="errors" v-if="errorMsg">
                        <div class="alert alert-danger" v-for="(err,key) in errorMsg" :key="key">{{err[0]}}</div>
                    </div>
                    <div class="errors" v-if="notFoundBook">
                        <div class="alert alert-danger">Book not found</div>
                    </div>
                    <div class="errors" v-if="bookFound">
                        <div class="alert alert-success">Book added successfully</div>
                    </div>
                    <div class="errors" v-if="bookAdded">
                        <div class="alert alert-warning">Book already added</div>
                    </div>
                    <b-card>
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="form-group w-40">
                                <label for="barcode">ISBN</label>
                                <input type="text" ref="barcode" @keydown="onBarcodePaste" class="form-control" v-model="barcode" autofocus placeholder="barcode">
                            </div>
                            <div class="form-group w-20">
                                <label for="price">Total count</label>
                                <input type="text" class="form-control" v-model="books.length" disabled>
                            </div>
                            <div class="form-group w-20">
                                <label for="price">Total price</label>
                                <input type="text" class="form-control" v-model="totalPriceAndQty.price" disabled>
                            </div>
                            <div class="form-group w-20">
                                <label for="price">Total quantity</label>
                                <input type="text" class="form-control" v-model="totalPriceAndQty.qty" disabled>
                            </div>
                        </div>
                        <EditItems v-for="(theBook,index) in books" :key="index" :index="index" :book="theBook" @updateParentBooks="updateBooks" />
                        <b-button type="button" @click="onFormSubmit" variant="primary" class="mt-4">{{ $t('forms.save') }}</b-button>
                    </b-card>
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
import EditItems from "./EditItems";

export default {
    data() {
        return {
            errorMsg:null,
            notFoundBook:false,
            bookFound:false,
            bookAdded:false,
            barcode:"",
            theBook:null,
            booktypeFrom: {
                "book_id":null,
                "price":"",
                "type":"ebook",
                "quantity":0,
                "cover":'',
                "file_path":'no',
                "file_fragment":'no',
                "file_type":'no',
                "audio":'',
                "audio_fragment":'',
            },
            books:[],
            direction: getDirection().direction,
            selected:{value:null,text:'Please select a book'},
            cover: [
                { label: "Qattiq", value: "qattiq" },
                { label: "Yumshoq", value: "yumshoq" },
            ],
            progBarCount:0,
        };
    },
    computed: {
        ...mapGetters(["getBooktypeAlertMsg","bookListArray","getEpubContent","currentWarehouse","getTheBook"]),
        totalPriceAndQty(){
            var qty = 0;
            var price = 0;
            this.books.forEach(item => {
                qty += parseInt(item.quantity);
                price += item.price * item.quantity;
            });
            return {price,qty};
        }
    },
    components: {
        EditItems,
        "v-select": vSelect,
    },
    methods: {
        ...mapActions(['updateBooktypeByArray','getBookListArray','editTheWarehouse','getBookByBarCode']),
        async onBarcodePaste(evt){
            if(evt.keyCode === 13){
                let found = this.findBookByBarcode(evt.target.value);
                if(found === -1){
                    await this.getBookByBarCode(evt.target.value);
                    if(this.getTheBook.success){
                        let item = {
                            name: this.getTheBook.result.name,
                            author: this.getTheBook.result.author,
                            book_id: this.getTheBook.result.id,
                            price: this.getTheBook.result.type ? this.getTheBook.result.type.owner_price : '',
                            quantity: 1,
                            weight: this.getTheBook.result.type ? this.getTheBook.result.type.weight : '',
                            cover: this.getTheBook.result.type ? this.getTheBook.result.type.cover : this.getTheBook.result.cover,
                            isbn: this.getTheBook.result.isbn,
                        }
                        this.bookFound = true;
                        this.notFoundBook = false;
                        this.bookAdded = false;
                        this.books.unshift(item);
                    }else{
                        this.notFoundBook = true;
                        this.bookFound = false;
                        this.bookAdded = false;
                    }
                }else{
                    this.notFoundBook = false;
                    this.bookFound = false;
                    this.bookAdded = true;
                }
                this.barcode = '';
            }
        },
        async onFormSubmit(){
            let form = new FormData();
            form.append('income_id',this.$route.params.id);
            this.books.forEach((item,index) => {
                if(item.id){
                    form.append(`books[${index}][id]`, item.id);
                }
                form.append(`books[${index}][price]`, item.price);
                form.append(`books[${index}][quantity]`, item.quantity);
                form.append(`books[${index}][cover]`, item.cover);
                form.append(`books[${index}][book_id]`, item.book_id);
                form.append(`books[${index}][weight]`, item.weight);
            });
            await this.updateBooktypeByArray(form);
            if (this.getBooktypeAlertMsg.error) {
                this.errorMsg = this.getBooktypeAlertMsg.message;
            } else {
                this.$router.push(`${adminRoot}/book-store/warehouse`);
            }
        },
        findBookByBarcode(barcode){
            let isbn = barcode.replace('-','');
            isbn = isbn.substring(0,3) + '-' + isbn.substring(3);
            return this.books.findIndex(item => item.isbn === isbn || item.book.isbn === isbn);
        },
        updateBooks(value,type,index){
            this.books[index][type] = value;
        }
    },
    async mounted(){
        await this.editTheWarehouse(this.$route.params.id);
        this.currentWarehouse.items.forEach((item,index) => {
            item.price = item.owner_price;
            this.books.push(item);
        });
        //this.books = this.currentWarehouse.items;
    }
};
</script>

<style scoped>
.sard:nth-child(odd){
    background: #eaecef;
}

</style>
