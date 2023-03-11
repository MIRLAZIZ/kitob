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
                <b-card class="mb-4" :title="$t('menu.series')">
                    <b-form @submit.prevent="onFromSubmit">
                        <div class="errors" v-if="errorMsg">
                            <div class="alert alert-danger" v-for="(err, key) in errorMsg" :key="key">{{ err[0] }}</div>
                        </div>
                        <b-row>
                            <b-colxx sm="12">
                                <b-form-group :label="$t('forms.name')">
                                    <b-form-input required type="text" v-model="categoryFrom.name" />
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
            errorMsg: null,
            categoryFrom: {
                name: "",
            }
        };
    },
    computed: {
        ...mapGetters(["getSeriesMsg"]),
    },
    methods: {
        ...mapActions(['addSeries']),
        async onFromSubmit() {
            await this.addSeries(this.categoryFrom);
            if (this.getSeriesMsg.error) {
                this.errorMsg = this.getTcategoryAlertMsg.message;
            } else {
                this.$router.push(`${adminRoot}/book-series/default`);
            }
        }
    }
};
</script>
