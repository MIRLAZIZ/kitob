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
            <b-card class="mb-4" :title="$t('menu.book-group')">
                <b-form @submit.prevent="onFromSubmit">
                    <div class="errors" v-if="errorMsg">
                    <div class="alert alert-danger" v-for="(err,key) in errorMsg" :key="key">{{err[0]}}</div>
                    </div>
                    <b-row>
                        <b-colxx sm="4">
                            <b-form-group :label="$t('forms.name_en')">
                                <b-form-input required type="text" v-model="groupFrom.name_en" />
                            </b-form-group>
                        </b-colxx>
                        <b-colxx sm="4">
                            <b-form-group :label="$t('forms.name_oz')">
                                <b-form-input required type="text" v-model="groupFrom.name_oz" />
                            </b-form-group>
                        </b-colxx>
                        <b-colxx sm="4">
                            <b-form-group :label="$t('forms.name_ru')">
                                <b-form-input required type="text" v-model="groupFrom.name_ru" />
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
            groupFrom: {
                name_en: "",
                name_ru: "",
                name_oz: ""
            }
        };
    },
    computed: {
        ...mapGetters(["getGroupAlertMsg","getCurrentGroup"]),
    },
    methods: {
        ...mapActions(['updateGroup','getTheGroup']),
        async onFromSubmit() {
            await this.updateGroup(this.groupFrom);
            
            var type = 'success filled';
            var title = 'Updating';
            var message = 'Data successfully updated';

            if(!this.getGroupAlertMsg.success)
            {
                type = 'error filled';
                message = 'Data cannot be updated';
            }
            else {
                this.$router.push(`${adminRoot}/book-group/default`);
            }

            this.$notify(type, title, message, { duration: 3000, permanent: false });
        }
    },
    async mounted(){
        await this.getTheGroup(this.$route.params.id)
        this.groupFrom = this.getCurrentGroup;
    }
};
</script>
