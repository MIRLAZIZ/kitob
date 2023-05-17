<template>
    <div>
        <h2>Edit Author</h2>
        <b-row>
            <b-colxx xxs="12">
                <b-card class="mb-4" :title="$t('forms.top-labels-over-line')">
                    <b-form
                        @submit.prevent="onupdateAuthorFormSubmit"
                        v-if="!isLoad"
                    >
                        <div class="alerts" v-if="errorMsgs">
                	    <div class="alert alert-danger"><template  v-for="(err) in errorMsgs" > {{err[0]}} </template> </div>
                    </div>
                        <div class="alerts" v-if="successMsg">
                            <div class="alert alert-success">{{ successMsg }}</div>
                        </div>
                        <label class="form-group has-float-label">
                            <input
                                type="text"
                                class="form-control"
                                v-model="currentAuthor.fio"
                            />
                            <span>{{ $t("user.fio") }}</span>
                        </label>
                        <label class="form-group has-float-label">
                            <input
                                type="date"
                                class="form-control"
                                v-model="currentAuthor.birthday"
                            />
                            <span>{{ $t("user.birthday") }}</span>
                        </label>
                        <label class="form-group has-float-label">
                            <input
                                type="date"
                                class="form-control"
                                v-model="currentAuthor.death_day"
                            />
                            <span>{{ $t("user.death-day") }}</span>
                        </label>
                        <label class="form-group has-float-label">
                            <v-select
                                v-model="currentAuthor.status"
                                :options="selectData"
                                :dir="direction"
                            />
                            <span>{{ $t("user.status") }}</span>
                        </label>
                        <label class="form-group has-float-label">
                            <textarea
                                cols="10"
                                rows="4"
                                class="form-control"
                                v-model="currentAuthor.description"
                            ></textarea>
                            <span>{{ $t("user.description") }}</span>
                        </label>
                        <label class="form-group">
                            <ThumbnailImage
                                :src="currentAuthor.photo"
                                alt="profile"
                                class-name="img-thumbnail"
                            />
                        </label>
                        <label class="form-group has-float-label">
                            <input type="file" class="form-control" />
                            <span>{{ $t("user.photo") }}</span>
                        </label>
                        <b-button
                            type="submit"
                            variant="primary"
                            class="mt-4"
                            >{{ $t("forms.submit") }}</b-button
                        >
                    </b-form>
                    <template v-else>
                        <div class="loading"></div>
                    </template>
                </b-card>
            </b-colxx>
        </b-row>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { getDirection } from "../../../../utils";
import ThumbnailImage from "../../../../components/Cards/ThumbnailImage";
import { adminRoot } from "../../../../constants/config";

export default {
    data() {
        return {
            direction: getDirection().direction,
            selectData: [
                { label: "Active", value: "active" },
                { label: "Inavtive", value: "inactive" },
            ],
            errorMsgs: null,
            successMsg: null,
            isLoad: false,
        };
    },
    components: {
        "v-select": vSelect,
        ThumbnailImage,
    },
    computed: {
        ...mapGetters(["currentAuthor", "getAlertAuthorMsg"]),
    },
    methods: {
        ...mapActions(["getTheAuthor", "updateAuthor"]),
        async onupdateAuthorFormSubmit() {
            this.isLoad = true;
            let author = this.currentAuthor;
            author.status = author.status.value;
            await this.updateAuthor(author);
            if (this.getAlertAuthorMsg.error) {
                this.errorMsgs = this.getAlertAuthorMsg.message;
                this.successMsg = null;
            } else {
                this.successMsg = this.getAlertAuthorMsg.message;
                this.getTheAuthor(this.$route.params.id);
                this.errorMsgs = null;
            }
            this.isLoad = false;
            // this.$router.push(`${adminRoot}/author`);
            this.$router.push(`${adminRoot}/author/default`)
        },
    },
    created() {
        this.getTheAuthor(this.$route.params.id);
    },
};
</script>

<style></style>
