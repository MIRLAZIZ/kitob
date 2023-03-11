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
            <b-card class="mb-4" :title="$t('forms.coupon')">
                <b-form @submit.prevent="onFromSubmit">
                    <div class="errors" v-if="errorMsg">
                    <div class="alert alert-danger" v-for="(err,key) in errorMsg" :key="key">{{err[0]}}</div>
                    </div>
                    <b-row>
                        <b-colxx sm="6">
                            <b-form-group :label="$t('forms.code')">
                                <b-form-input required type="text" v-model="couponForm.code" />
                            </b-form-group>
                        </b-colxx>
                        <b-colxx sm="6">
                            <b-form-group :label="$t('forms.start')">
                                <b-form-input required type="datetime-local" v-model="couponForm.start" />
                            </b-form-group>
                        </b-colxx>
                        <b-colxx sm="6">
                            <b-form-group :label="$t('forms.end')">
                                <b-form-input required type="datetime-local" v-model="couponForm.end" />
                            </b-form-group>
                        </b-colxx>
                        <b-colxx sm="6">
                            <b-form-group :label="$t('forms.status')">
                                <b-form-select required v-model="couponForm.status" :options="status" plain />
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
                    value:'removed',text:'Removed'
                },
                {
                    value:'expired',text:'Expired'
                },
            ],
            couponForm: {
                code: "",
                start: "",
                end: "",
                status: "",
            }
        };
    },
    computed: {
        ...mapGetters(["getCouponAlertMsg","getCurrentCoupon"]),
    },
    methods: {
        ...mapActions(['updateCoupon','getTheCoupon']),
        async onFromSubmit() {
            await this.updateCoupon(this.couponForm);
            if (this.getCouponAlertMsg.error) {
                this.errorMsg = this.getCouponAlertMsg.message;
            } else {
                this.$router.push(`${adminRoot}/coupon`);
            }
        }
    },
    async mounted(){
        await this.getTheCoupon(this.$route.params.id)
        this.couponForm = this.getCurrentCoupon;
    }
};
</script>
