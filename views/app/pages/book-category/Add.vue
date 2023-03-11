<template>
    <div>
        <h2>Add Category</h2>
          <b-row>
            <b-colxx xxs="12">
            <b-card class="mb-4">
                <b-form @submit.prevent="onaddCategoryFormSubmit">
                    <div class="alerts" v-if="errorMsg">
                        <div class="alert alert-danger"><template  v-for="(err) in errorMsg" >{{err[0]}} </br></template> </div>
                    </div>
                    <b-row>
                        <b-colxx sm="4">
                            <b-form-group :label="$t('forms.name_oz')">
                                <b-form-input required type="text" v-model="addCategoryForm.name_oz" />
                            </b-form-group>
                        </b-colxx>
                        <b-colxx sm="4">
                            <b-form-group :label="$t('forms.name_en')">
                                <b-form-input required type="text" v-model="addCategoryForm.name_en" />
                            </b-form-group>
                        </b-colxx>
                        <b-colxx sm="4">
                            <b-form-group :label="$t('forms.name_ru')">
                                <b-form-input required type="text" v-model="addCategoryForm.name_ru" />
                            </b-form-group>
                        </b-colxx>
                    </b-row>
                    <b-row>
                        <b-colxx>
                            <b-form-group :label="$t('book.parent')">
                                <treeselect v-model="addCategoryForm.parent_id" :multiple="false" :options="categoryListArray" />
                            </b-form-group>
                        </b-colxx>
                    </b-row>
                    <!-- <label class="form-group has-float-label">
                        <v-select
                            :options="selectData"
                            :dir="direction"
                            :value="defaultLang"
                            @input="setSelectedLang"
                        />
                        <span>{{ $t('book.language') }}</span>
                    </label> -->
                    <b-button type="submit" variant="primary" class="mt-4">{{ $t('forms.submit') }}</b-button>
                </b-form>
            </b-card>
            </b-colxx>
        </b-row>
    </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';
import "vue-select/dist/vue-select.css";
import vSelect from "vue-select";
import { getDirection } from "../../../../utils";
import { adminRoot } from '../../../../constants/config';
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'


export default {
    data(){
        return {
            addCategoryForm:{
                parent_id:null,
                name_oz:'',
                name_en:'',
                name_ru:'',
            },
            errorMsg: null,
            direction: getDirection().direction,
        }
    },
    computed: {
        ...mapGetters(['getCategoryAlertMsg', 'categoryListArray'])
    },
    components: {
        "v-select": vSelect,
        Treeselect
    },
    async mounted() {
        await this.getCategoryListArray();
    },
    methods:{
        ...mapActions(['addCategory', 'getCategoryListArray']),

        async onaddCategoryFormSubmit(){
            let category = this.addCategoryForm;

            await this.addCategory(category);
			if(this.getCategoryAlertMsg.error){
				this.errorMsg = this.getCategoryAlertMsg.message
			}else{
                this.$router.push(`${adminRoot}/book-category/default`)
			}
        }
    }
}
</script>

<style>

</style>