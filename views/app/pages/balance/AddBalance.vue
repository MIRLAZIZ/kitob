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
            <b-card class="mb-4" :title="$t('forms.balance')">
                <b-form @submit.prevent="onFromSubmit">
                    <div class="errors" v-if="errorMsg">
                    <div class="alert alert-danger" v-for="(err,key) in errorMsg" :key="key">{{err[0]}}</div></div>
                        <b-row>
                            <b-colxx sm="6">
                                <b-form-group :label="$t('forms.user')" v-if="getUserlist">
                                    <v-select
                                        :options="getUserlist"
                                        label="name"
                                        @input="setSelectedUser"
                                    />
                                </b-form-group>
                            </b-colxx>
                            <b-colxx sm="6">
                                <b-form-group :label="$t('forms.amount')">
                                    <b-form-input required type="text" v-model="balancedata.amount" />
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
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
export default {
    data() {
        return {
            errorMsg:null,
            balancedata: {
                amount: "",
                user_id: "",
            }
        };
    },
    components: {
        "v-select": vSelect,
    },
    computed: {
        ...mapGetters(["getBalanceAlertMsg", 'getUserlist']),
    },
    async mounted(){
        await this.actionUserlist();
    },
    methods: {
        ...mapActions(['addBalance', 'actionUserlist']),
        async onFromSubmit() {
            await this.addBalance(this.balancedata);
            if (this.getBalanceAlertMsg.error) {
                this.errorMsg = this.getBalanceAlertMsg.message;
            } else {
                this.$router.push(`${adminRoot}/balance`);
            }
        },
        setSelectedUser(event) {
            this.balancedata.user_id = event.id;
        },
    }
};
</script>
