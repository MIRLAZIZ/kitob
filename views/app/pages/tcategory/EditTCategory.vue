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
            <b-card class="mb-4" :title="$t('forms.tcategory')">
                <b-form @submit.prevent="onFromSubmit">
                    <div class="errors" v-if="errorMsg">
                    <div class="alert alert-danger" v-for="(err,key) in errorMsg" :key="key">{{err[0]}}</div>
                    </div>
                    <b-row>
                        <b-colxx sm="12">
                        <b-form-group :label="$t('forms.name')">
                            <b-form-input required type="text" v-model="tcategoryFrom.name" />
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
            tcategoryFrom: {
                name: ""
            }
        };
    },
    computed: {
        ...mapGetters(["getTcategoryAlertMsg","getCurrentCategory"]),
    },
    methods: {
        ...mapActions(['updateTcategory','getTheTcategory']),
        async onFromSubmit() {
            await this.updateTcategory(this.tcategoryFrom);
            if (this.getTcategoryAlertMsg.error) {
                this.errorMsg = this.getTcategoryAlertMsg.message;
            } else {
                this.$router.push(`${adminRoot}/tcategory`);
            }
        }
    },
    async mounted(){
        await this.getTheTcategory(this.$route.params.id)
        this.tcategoryFrom = this.getCurrentCategory;
    }
};
</script>
