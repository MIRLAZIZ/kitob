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
            <b-card class="mb-4" :title="$t('forms.add-uzcard')">
                <b-form @submit.prevent="onFromSubmit">
                    <div class="errors" v-if="errorMsg">
                    <div class="alert alert-danger" v-for="(err,key) in errorMsg" :key="key">{{err[0]}}</div>
                    </div>
                    <b-row>
                        <b-colxx sm="6">
                            <b-form-group :label="$t('forms.pan')">
                                <b-form-input required type="text" v-model="uzcardFrom.pan" />
                            </b-form-group>
                        </b-colxx>
                        <b-colxx sm="3">
                            <b-form-group :label="$t('forms.expiry')">
                                <b-form-input required rows="6" v-model="uzcardFrom.expiry"/>
                            </b-form-group>
                        </b-colxx>
                        <b-colxx sm="3">
                            <b-form-group :label="$t('forms.holder-name')">
                                <b-form-input required rows="6" v-model="uzcardFrom.name"/>
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
            uzcardFrom: {
                expiry: "",
                pan: "",
                name: "",
            }
        };
    },
    computed: {
        ...mapGetters(["getUzcardAlertMsg"]),
    },
    methods: {
        ...mapActions(['addUzcard']),
        async onFromSubmit() {
            await this.addUzcard(this.uzcardFrom);
            if (this.getUzcardAlertMsg.error) {
                this.errorMsg = this.getUzcardAlertMsg.message;
            } else {
                this.$router.push(`${adminRoot}/order/uzcard`);
            }
        }
    }
};
</script>
