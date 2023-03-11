<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.pay')" />
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
        <b-colxx xxs="12" v-if="showPayment">
            <b-card class="mb-4" :title="$t('forms.add-order')">
                <b-form @submit.prevent="onFromSubmit">
                    <div class="errors" v-if="errorMsg">
                        <div class="alert alert-danger" v-for="(err,key) in errorMsg" :key="key">{{err[0]}}</div>
                    </div>
                    <div class="errors" v-if="successMsg">
                        <div class="alert alert-success" v-for="(err,key) in successMsg" :key="key">{{err[0]}}</div>
                    </div>
                    <b-row>
                        <b-colxx sm="4">
                            <b-form-group :label="$t('forms.invoice_id')">
                                <b-form-input required type="text" v-model="uzcardFrom.invoice_id" />
                            </b-form-group>
                        </b-colxx>
                        <b-colxx sm="4">
                            <b-form-group :label="$t('forms.amount')">
                                <b-form-input required type="text" v-model="uzcardFrom.amount" />
                            </b-form-group>
                        </b-colxx>
                        <b-colxx sm="4">
                            <b-form-group :label="$t('forms.token')">
                                <!-- <b-form-input required rows="6" v-model="uzcardFrom.token"/> -->
                                <b-form-select required v-model="uzcardFrom.token" :options="uzcardsListSelect" plain text-field="maskedPan" value-field="token" />
                            </b-form-group>
                        </b-colxx>
                    </b-row>

                    <b-button type="submit" variant="primary" class="mt-4">{{ $t('forms.save') }}</b-button>
                    </b-form>
            </b-card>
        </b-colxx>
    </b-row>
    <b-row>
        <b-colxx xxs="12" v-if="showComplete">
            <b-card class="mb-4" :title="$t('forms.compete-order')">
                <b-form @submit.prevent="onFromComplete">
                    <div class="errors" v-if="errorMsg">
                        <div class="alert alert-danger" v-for="(err,key) in errorMsg" :key="key">{{err[0]}}</div>
                    </div>
                    <div class="errors" v-if="successMsg">
                        <div class="alert alert-success" v-for="(err,key) in successMsg" :key="key">{{err[0]}}</div>
                    </div>
                    <b-row>
                        <b-colxx sm="3">
                            <b-form-group :label="$t('forms.sms')">
                                <b-form-input v-model="completeForm.sms"/>
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
            tokens: [
                {
                    value:'active',text:'Active'
                },
                {
                    value:'inactive',text:'Inactive'
                },
            ],
            showPayment:true,
            showComplete:false,
            errorMsg:null,
            successMsg:null,
            uzcardFrom: {
                amount: "",
                token: "",
                invoice_id:0
            },
            completeForm: {
                sms: "",
                invoice_id: "",
                phone: "",
            }
        };
    },
    computed: {
        ...mapGetters(["getUzcardAlertMsg","uzcardsListSelect"]),
    },
    methods: {
        ...mapActions(['createOrder','completeOrder','getUzcardsListSelect']),
        async onFromSubmit() {
            await this.createOrder(this.uzcardFrom);
            if (this.getUzcardAlertMsg.error) {
                this.errorMsg = this.getUzcardAlertMsg.message;
            }
            if(this.getUzcardAlertMsg.success){
                this.completeForm.invoice_id = this.getUzcardAlertMsg.invoice.id;
                this.completeForm.phone = this.getUzcardAlertMsg.invoice.phone;
                this.showPayment = false;
                this.showComplete = true;
                this.errorMsg = null;
                this.successMsg = this.getUzcardAlertMsg.message;
                console.log(this.getUzcardAlertMsg);
            }
             else {
                // this.$router.push(`${adminRoot}/order/uzcard`);
            }
        },
        async onFromComplete() {
            await this.completeOrder(this.completeForm);
            if (this.getUzcardAlertMsg.error) {
                this.errorMsg = this.getUzcardAlertMsg.message;
            }
            if(this.getUzcardAlertMsg.success){
                this.errorMsg = null;
                this.successMsg = this.getUzcardAlertMsg.message;
                this.completeForm.phone = '';
                this.completeForm.sms = '';
                this.completeForm.invoice_id = '';
                // this.$router.push(`${adminRoot}/order/uzcard`);
            }
        }
    },
    async mounted(){
        await this.getUzcardsListSelect();
        console.log(this.uzcardsListSelect);
    }
};
</script>
