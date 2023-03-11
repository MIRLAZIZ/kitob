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
            <b-card class="mb-4" :title="$t('menu.coupon')">
                <b-form @submit.prevent="onFromSubmit">
                    <div class="errors" v-if="errorMsg">
                    <div class="alert alert-danger" v-for="(err,key) in errorMsg" :key="key">{{err[0]}}</div>
                    </div>
                    <b-row>
                        <b-colxx sm="4">
                            <b-form-group :label="$t('forms.code')">
                                <b-form-input required type="text" v-model="couponFrom.code" />
                            </b-form-group>
                        </b-colxx>
                        <b-colxx sm="4">
                            <b-form-group :label="$t('forms.start')">
                                <b-form-input required type="datetime-local" v-model="couponFrom.start" />
                            </b-form-group>
                        </b-colxx>
                        <b-colxx sm="4">
                            <b-form-group :label="$t('forms.amount')">
                                <b-form-input required type="number" v-model="couponFrom.amount" />
                            </b-form-group>
                        </b-colxx>
                        <b-colxx sm="4">
                            <b-form-group :label="$t('forms.end')">
                                <b-form-input required type="datetime-local" v-model="couponFrom.end" />
                            </b-form-group>
                        </b-colxx>
                        <b-colxx sm="4">
                            <b-form-group :label="$t('forms.status')">
                                <b-form-select required v-model="couponFrom.status" :options="status" plain />
                            </b-form-group>
                        </b-colxx>
                        <b-colxx sm="4">
                            <b-form-group :label="$t('forms.booktype')">
                                <b-form-select required v-model="couponFrom.booktype" :options="booktype" plain />
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
                        value:'removed',text:'Removed'
                    },
                    {
                        value:'expired',text:'Expired'
                    },
                ],
            booktype: [
                    {
                        value:'ebook',text:'Ebook'
                    },
                    {
                        value:'paper',text:'Paper'
                    },
                    {
                        value:'audio',text:'Audio'
                    },
                ],
            couponFrom: {
                code: "",
                start: "",
                end: "",
                status: "active",
                booktype: "ebook",
                amount: 0,
            }
        };
    },
    computed: {
        ...mapGetters(["getCouponAlertMsg"]),
    },
    methods: {
        ...mapActions(['addCoupon']),
        async onFromSubmit() {
            await this.addCoupon(this.couponFrom);
            if (this.getCouponAlertMsg.error) {
                this.errorMsg = this.getCouponAlertMsg.message;
            } else {
                this.$router.push(`${adminRoot}/coupon`);
            }
        }
    }
};
</script>
