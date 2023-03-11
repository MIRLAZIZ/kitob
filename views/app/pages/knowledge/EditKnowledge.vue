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
            <b-card class="mb-4" :title="$t('forms.knowledge')">
                <b-form @submit.prevent="onFromSubmit">
                    <div class="errors" v-if="errorMsg">
                    <div class="alert alert-danger" v-for="(err,key) in errorMsg" :key="key">{{err[0]}}</div>
                    </div>
                    <b-row>
                        <b-colxx sm="9">
                        <b-form-group :label="$t('forms.title')">
                            <b-form-input required type="text" v-model="knowledgeFrom.title" />
                        </b-form-group>
                        </b-colxx>
                        <b-colxx sm="3">
                            <b-form-group :label="$t('forms.status')">
                                <b-form-select required v-model="knowledgeFrom.status" :options="status" plain />
                            </b-form-group>
                        </b-colxx>
                        <b-colxx sm="12">
                        <b-form-group :label="$t('forms.text')">
                            <b-form-textarea required rows="6" v-model="knowledgeFrom.text"/>
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
            status: [
                {
                    value:'active',text:'Active'
                },
                {
                    value:'inactive',text:'Inactive'
                },
                ],
            knowledgeFrom: {
                title: "",
                text: "",
                status: "active",
            }
        };
    },
    computed: {
        ...mapGetters(["getKnowledgeAlertMsg","getCurrentKnowledge"]),
    },
    methods: {
        ...mapActions(['updateKnowledge','getTheAKnowledge']),
        async onFromSubmit() {
            await this.updateKnowledge(this.knowledgeFrom);
            if (this.getKnowledgeAlertMsg.error) {
                this.errorMsg = this.getKnowledgeAlertMsg.message;
            } else {
                this.$router.push(`${adminRoot}/knowledge/default`);
            }
        }
    },
    async mounted(){
        await this.getTheAKnowledge(this.$route.params.id)
        this.knowledgeFrom = this.getCurrentKnowledge;
    }
};
</script>
