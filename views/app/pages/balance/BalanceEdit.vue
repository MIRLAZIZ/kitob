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
                            <b-form-group :label="$t('forms.title')">
                                <b-form-input  type="text" disabled :value="tickedForm.title" />
                            </b-form-group>

                            <b-form-group :label="$t('forms.email')">
                                <b-form-input  type="text" disabled :value="tickedForm.email" />
                            </b-form-group>
                            <b-form-group :label="$t('forms.fio')">
                                <b-form-input  type="text" disabled :value="tickedForm.fio" />
                            </b-form-group>
                            <b-form-group :label="$t('forms.phone')">
                                <b-form-input  type="text" disabled :value="tickedForm.phone" />
                            </b-form-group>
                            <b-form-group :label="$t('forms.file')">
                                <a :href="getCurrentTicket.attachment">{{$t('download')}}</a>
                            </b-form-group>
                            <b-form-group :label="$t('forms.description')">
                                <b-form-textarea
                                    id="textarea"
                                    placeholder="Enter something..."
                                    rows="3"
                                    max-rows="6"
                                    :value="tickedForm.description"
                                    disabled
                                  ></b-form-textarea>
                            </b-form-group>
                            <b-form-group :label="$t('forms.status')">
                                <b-form-select v-model="tickedForm.status" :options="statuslist"  value-field="value" text-field="label"></b-form-select>
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
            tickedForm: {
                name: ""
            },
            statuslist: [
              {label: 'New', value: 'new'},
              {label: 'Closed', value: 'closed'},
              {label: 'Open', value: 'open'},
              {label: 'Inactive', value: 'inactive'},
            ]
        };
    },
    computed: {
        ...mapGetters(["getTicketAlertMsg","getCurrentTicket"]),
    },
    methods: {
        ...mapActions(['updateTicket','getTheATicket']),
        async onFromSubmit() {
            delete this.tickedForm.attachment;
            await this.updateTicket(this.tickedForm);
            if (this.getTicketAlertMsg.error) {
                this.errorMsg = this.getTicketAlertMsg.message;
            } else {
                this.$router.push(`${adminRoot}/ticket/default`);
            }
        }
    },
    async mounted(){
        await this.getTheATicket(this.$route.params.id)
        this.tickedForm = this.getCurrentTicket;
    }
};
</script>
