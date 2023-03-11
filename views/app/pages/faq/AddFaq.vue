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
            <b-card class="mb-4" :title="$t('forms.faq')">
                <b-form @submit.prevent="onFaqFromSubmit">
                    <div class="errors" v-if="errorMsg">
                    <div class="alert alert-danger" v-for="(err,key) in errorMsg" :key="key">{{err[0]}}</div>
                    </div>
                    <b-row>
                        <b-colxx sm="12">
                        <b-form-group :label="$t('forms.title')">
                            <b-form-input required type="text" v-model="faqFrom.title" />
                        </b-form-group>
                        </b-colxx>
                        <b-colxx sm="6">
                            <b-form-group :label="$t('forms.status')">
                                <b-form-select required v-model="faqFrom.status" :options="status" plain />
                            </b-form-group>
                        </b-colxx>
                        <b-colxx sm="6">
                            <b-form-group :label="$t('forms.category')">
                                <b-form-select required v-model="faqFrom.category" :options="category" plain />
                            </b-form-group>
                        </b-colxx>
                        <b-colxx sm="12">
                        <b-form-group :label="$t('forms.text')">
                            <b-form-textarea required rows="6" v-model="faqFrom.text"/>
                        </b-form-group>
                        </b-colxx>
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
            category: [
                {
                    value:'book',
                    text:'Book'
                },
                {
                    value:'support',
                    text:'Support'
                },
            ],
            faqFrom: {
                title: "",
                text: "",
                category: "book",
                status: "active",
            }
        };
    },
    computed: {
        ...mapGetters(["getFaqAlertMsg"]),
    },
    methods: {
        ...mapActions(['addFaq']),
        async onFaqFromSubmit() {
            await this.addFaq(this.faqFrom);
            if (this.getFaqAlertMsg.error) {
                this.errorMsg = this.getFaqAlertMsg.message;
            } else {
                this.$router.push(`${adminRoot}/faq/default`);
            }
        }
    }
};
</script>
