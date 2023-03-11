<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.update')" />
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
        <b-colxx xxs="12">
            <b-card class="mb-4" :title="$t('menu.bcategory')">
                <b-form @submit.prevent="onFromSubmit">
                    <div class="errors" v-if="errorMsg">
                    <div class="alert alert-danger" v-for="(err,key) in errorMsg" :key="key">{{err[0]}}</div>
                    </div>
                    <b-row>
                        <b-colxx sm="4">
                            <b-form-group :label="$t('forms.name_en')">
                                <b-form-input required type="text" v-model="categoryFrom.name_en" />
                            </b-form-group>
                        </b-colxx>
                        <b-colxx sm="4">
                            <b-form-group :label="$t('forms.name_oz')">
                                <b-form-input required type="text" v-model="categoryFrom.name_oz" />
                            </b-form-group>
                        </b-colxx>
                        <b-colxx sm="4">
                            <b-form-group :label="$t('forms.name_ru')">
                                <b-form-input required type="text" v-model="categoryFrom.name_ru" />
                            </b-form-group>
                        </b-colxx>
                    </b-row>

                    <b-button type="submit" variant="primary" class="mt-4">{{ $t('forms.update') }}</b-button>
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
            categoryFrom: {
                name_en: "",
                name_ru: "",
                name_oz: ""
            }
        };
    },
    computed: {
        ...mapGetters(["getCategoryAlertMsg","getCurrentCategory"]),
    },
    methods: {
        ...mapActions(['updateCategory','getTheCategory']),
        async onFromSubmit() {
            await this.updateCategory(this.categoryFrom);
            if (this.getCategoryAlertMsg.error) {
                this.errorMsg = this.getCategoryAlertMsg.message;
            } else {
                this.$router.push(`${adminRoot}/bcategory`);
            }
        }
    },
    async mounted(){
        await this.getTheCategory(this.$route.params.id)
        this.categoryFrom = this.getCurrentCategory;
    }
};
</script>
