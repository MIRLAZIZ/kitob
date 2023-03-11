<template>
    <div>
        <b-row>
            <b-colxx xxs="12">
                <piaf-breadcrumb :heading="$t('book.book-list')" />
                <div class="separator mb-5"></div>
            </b-colxx>
            <b-colxx v-for="(blogItem,blogIndex) in bookList" xxs="12" lg="6" class="mb-5" :key="`blogItem_${blogIndex}`">
                <b-card class="flex-row listing-card-container" no-body>
                    <div class="w-40 position-relative">
                        <router-link to="blog-detail">
                            <img class="card-img-left" :src="'/'+blogItem.image" alt="Card cap" />
                            <b-badge v-if="blogItem.is_new" variant="primary" pill class="position-absolute badge-top-left">New</b-badge>
                            <!-- <b-badge v-if="blogItem.is_bestseller" variant="primary" pill class="position-absolute badge-top-left">Bestseller</b-badge> -->
                        </router-link>
                    </div>
                    <div class="w-60 d-flex align-items-center">
                        <b-card-body>
                            <router-link to="EditBook">
                                <h5 class="mb-3 listing-heading" v-line-clamp="2">{{ blogItem.name }}</h5>
                            </router-link>
                            <p class="listing-desc text-muted" v-line-clamp="3">{{ blogItem.description }}</p>
                        </b-card-body>
                    </div>
                </b-card>
            </b-colxx>
        </b-row>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
import { adminRoot } from '../../../../constants/config';

export default {
    computed:{
        ...mapGetters(['bookList'])
    },
    methods:{
        ...mapActions(['getBookList','deleteBook']),
        editBook(id){
            this.$router.push(`${adminRoot}/book/edit/${id}`)
        },
        deleteTheBook(book){
            if(confirm('Are you sure?')){
                this.deleteBook(book);
            }
        }
    },
    created(){
        this.getBookList();
    }
}
</script>

<style lang="stylus">

</style>