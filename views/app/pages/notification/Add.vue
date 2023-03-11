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
                <b-card class="mb-4" :title="$t('forms.add-new')">
                    <b-form @submit.prevent="onFromSubmit">
                        <div class="errors" v-if="errorMsg">
                        <div class="alert alert-danger" v-for="(err,key) in errorMsg" :key="key">{{err[0]}}</div>
                        </div>
                        <b-row>
                            <b-colxx sm="6">
                                <label for=""><br></label>
                                <label class="form-group has-float-label">
                                    <v-select
                                        :options="selectRoles"
                                        :dir="direction"
                                        @input="setSelected"
                                    />
                                    <span>{{ $t('forms.user-group') }}</span>
                                </label>
                            </b-colxx>
                            <b-colxx sm="6">
                                <b-form-group :label="$t('forms.title')">
                                    <b-form-input required rows="6" v-model="notifyForm.title"/>
                                </b-form-group>
                            </b-colxx>
                            <b-colxx sm="12">
                                <b-form-group :label="$t('forms.content')">
                                    <b-form-textarea required rows="6" v-model="notifyForm.body"></b-form-textarea>
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
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { getDirection } from "../../../../utils";
import { adminRoot } from '../../../../constants/config';

export default {
    data() {
        return {
            direction: getDirection().direction,
            errorMsg:null,
            notifyForm: {
                role_id: "",
                title: "",
                body: "",
            },
            selectRoles:[],
        };
    },
    computed: {
        ...mapGetters(["getNotificationAlertMsg","getRoles"]),
    },
    components: {
        "v-select": vSelect,
    },
    async mounted(){
        await this.getRolesApi();
        this.selectRoles = this.getRoles
    },
    methods: {
        ...mapActions(['addNotification','getRolesApi']),
        async onFromSubmit() {
            await this.addNotification(this.notifyForm);
            if (this.getNotificationAlertMsg.error) {
                this.errorMsg = this.getNotificationAlertMsg.message;
            } else {
                this.$router.push(`${adminRoot}/notification/default`);
            }
        },
        setSelected(value){
            this.notifyForm.role_id = value.value
        },
    }
};
</script>