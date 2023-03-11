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
            <b-card class="mb-4" :title="'Add Translation of the book'">
                <b-form @submit.prevent="onTranslationAddFromSubmit">
                    <div class="errors" v-if="errorMsg">
                        <div class="alert alert-danger" v-for="(err,key) in errorMsg" :key="key">{{err[0]}}</div>
                    </div>
                    <b-row>
                        <b-colxx sm="12">
                            <b-form-group :label="'Search book'">
                                <label class="form-group has-float-label">
                                    <v-select
                                    :options="books"
                                    :dir="direction"
                                    @input="setSelectedBook"
                                    />
                                    <span>{{ $t('Search book') }}</span>
                                </label>
                            </b-form-group>
                        </b-colxx>
                    </b-row>

                    <b-button type="submit" variant="primary" class="mt-4">{{ $t('forms.submit') }}</b-button>
                    </b-form>
            </b-card>
        </b-colxx>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { adminRoot } from '../../../../constants/config';
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { getDirection } from "../../../../utils";

export default {
    data() {
        return {
            direction: getDirection().direction,
            errorMsg:null,
            books:[],
            trForm: {
                book_id: this.$route.params.id,
                translation_id: null,
            }
        };
    },
    computed: {
        ...mapGetters(["getBookAlertMsg","bookListArray"]),
    },
    components:{
        "v-select": vSelect,
    },
    methods: {
        ...mapActions(['addFaq','getBookListArray','addTranslation']),
        async onTranslationAddFromSubmit() {
            await this.addTranslation(this.trForm);
            if (this.getBookAlertMsg.error) {
                this.errorMsg = this.getBookAlertMsg.message;
            } else {
                this.$router.push(`${adminRoot}/book/default`);
            }
        },
        setSelectedBook(event) {
            this.trForm.translation_id = event.value;
        },
    },
    async mounted(){
         await this.getBookListArray();
         this.books = this.bookListArray.result;
    }
};
</script>
