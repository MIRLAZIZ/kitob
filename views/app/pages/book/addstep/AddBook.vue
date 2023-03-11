<template>
    <b-card>
        <div class="stepheader">
            <div class="step" v-for="step in steps">
                <h5>{{ step.title }}</h5>
                <p>{{ getStatus(step.status) }}</p>
            </div>
        </div>
        <b-form v-if="steps[0].status === 'current'" @submit.prevent="submitfirst">
            <div class="alert alert-danger" v-if="firststeperror">You have to fill out all fields...</div>
            <b-form-group :label="$t('book.language')">
                <b-select v-model="$v.firststep.lang.$model">
                    <option :value="lang.code" v-for="lang in langlist">{{ lang.name }}</option>
                </b-select>
            </b-form-group>
            <b-form-group :label="$t('forms.title')">
                <b-form-input type="text" v-model="$v.firststep.name.$model" :placeholder="$t('forms.title')" />
            </b-form-group>
            <b-form-group :label="$t('forms.subtitle')">
                <b-form-input type="text" v-model="$v.firststep.subtitle.$model" :placeholder="$t('forms.subtitle')" />
            </b-form-group>
            <b-form-group :label="$t('forms.edition')">
                <b-form-input type="number" v-model="$v.firststep.edition.$model" :placeholder="$t('forms.edition')" />
            </b-form-group>
            <div class="col-md-12 mb-4 ">
                <label class="form-group has-float-label">
                    <v-select multiple :options="authorsListArray" v-model="$v.firststep.author.$model"
                        :reduce="(option) => option.id" label="fio" />

                    <span>{{ $t("book.author_id") }}</span>

                    <button class="btn_add_select" v-b-modal.authormodal variant="outline-primary" type="button">
                        <i class="simple-icon-plus"></i>
                    </button>
                </label>
            </div>
            <b-form-group :label="$t('survey.category')">
                <treeselect v-if="categoryListArray" v-model="$v.firststep.category.$model" :multiple="true"
                    :options="categoryListArray" />
            </b-form-group>
            <b-form-group :label="$t('book.description')">
                <b-form-input type="text" v-model="$v.firststep.description.$model"
                    :placeholder="$t('book.description')" />
            </b-form-group>
            <b-form-group :label="$t('book.year')">
                <b-form-input type="text" v-model="$v.firststep.year.$model" :placeholder="$t('book.year')" />
            </b-form-group>
            <div class="col-sm-4 mb-4">
                <div class="card mb-4 text-white crop_block" v-if="optionsImg">
                    <cropper class="cropper" :src="optionsImg" :stencil-props="{ aspectRatio: 1 / 1 }"
                        ref="cropperImgoptions"></cropper>
                    <button type="button" class="btn_crop" @click="
                        cropImg(
                            'options',
                            'cropperImgoptions'
                        )
                    ">
                        <i class="simple-icon-crop"></i>
                    </button>
                </div>
                <div class="p-4 border mt-4">
                    <div class="cover_image">
                        <img :src="firststep.image" alt="" class="img-fluid" />
                    </div>
                    <div class="btn-group m-3 text-center d-flex">
                        <label class="btn btn-primary btn-xs">
                            <input type="file" class="d-none" @change="
                                setEbookImage(
                                    $event,
                                    'options'
                                )
                            " />
                            {{ $t("book.change") }}
                        </label>
                        <label class="btn btn-danger btn-xs">{{
                            $t("book.delete")
                        }}</label>
                    </div>
                </div>
            </div>
            <b-form-group :label="$t('book.age_access')">
                <b-form-input type="text" v-model="$v.firststep.age_access.$model"
                    :placeholder="$t('book.age_access')" />
            </b-form-group>
            <div class="d-flex justify-content-end">
                <b-button type="submit" variant="primary">{{ $t('forms.next') }}</b-button>
            </div>
            <b-modal id="authormodal" ref="modalbasic" :title="$t('modal.modal-title')" :hide-footer="true">
                <AddAuthor :frommodal="true" />
            </b-modal>
        </b-form>
        <b-form v-if="steps[1].status === 'current'" @submit.prevent="submitsecond">
            <div class="alert alert-danger" v-if="secondsteperror">You have to fill out all fields...</div>
            <b-form-group :label="$t('book.isbn')">
                <b-form-input type="text" v-model="$v.secondstep.isbn.$model" :placeholder="$t('forms.isbn')" />
            </b-form-group>
            <b-form-group :label="$t('book.series')">
                <b-form-input type="text" v-model="$v.secondstep.series.$model" :placeholder="$t('forms.series')" />
            </b-form-group>
            <b-form-group :label="$t('book.preview')">
                <b-form-input type="text" v-model="$v.secondstep.preview.$model" :placeholder="$t('forms.preview')" />
            </b-form-group>
            <div class="col-md-12 mb-5">
                <button class="btn btn-info" type="button" v-b-modal.modallong>
                    {{ $t("book.add_toc") }}
                </button>
                <b-modal id="modallong" ref="modallong" :title="$t('book.add_toc')" size="xl">
                    <div>
                        <label class="form-group has-float-label" v-if="tocData.parent_id == 0">
                            <input type="text" class="form-control" v-model="tocData.title" />
                            <span>{{ $t("book.title") }}</span>
                        </label>
                    </div>
                    <div class="toc_block">
                        <div class="toc_header">
                            <h6>{{ $t("book.title") }}</h6>
                            <h6>{{ $t("book.action") }}</h6>
                        </div>
                        <div class="toc_body">
                            <TrChild v-for="(item, ind) in tocDataList" :key="item.id" :node="item" :tocData="tocData"
                                @addChildToc="addChildToc(item)" @rmTocItem="rmTocItem(item)" :ind="ind" />
                        </div>
                    </div>


                    <template slot="modal-footer">
                        <b-button variant="primary" @click="sendToc()" class="mr-1">{{
                            $t("menu.add")
                        }}</b-button>
                    </template>
                </b-modal>
            </div>
        </b-form>
    </b-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import {
    validationMixin
} from "vuelidate";
const {
    required,
    maxLength,
    minLength,
    email,
    between
} = require("vuelidate/lib/validators");
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import AddAuthor from "../../author/AddAuthor";
import { VueTreeList, Tree, TreeNode } from "vue-tree-list";
import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
import { Cropper } from "vue-advanced-cropper";
import TrChild from "./TrChild";
export default {
    components: {
        "v-select": vSelect,
        AddAuthor,
        VueTreeList,
        Treeselect,
        Cropper,
        TrChild,
    },
    data() {
        return {
            firststep: {
                step: 1,
                lang: 'oz',
                name: '',
                subtitle: '',
                edition: '',
                author: '',
                category: null,
                description: '',
                year: '',
                image: '',
                age_access: '',
                book_id: '',
            },
            secondstep: {
                step: 2,
                isbn: '',
                series: '',
                preview: '',
                table_of_content: '',
            },
            croppedImage: null,
            optionsImg: null,
            coordinates: {
                width: 0,
                height: 0,
                left: 0,
                top: 0,
                image: null,
            },
            steps: [
                { title: 'Kindle eBook Details', status: 'prev' },
                { title: 'Kindle eBook Content', status: 'current' },
                { title: 'Kindle eBook Pricing', status: 'next' },
            ],
            langlist: [
                { code: 'oz', name: "O'zbekcha" },
                { code: 'uz', name: 'Узбекча' },
                { code: 'ru', name: 'Русский' },
                { code: 'en', name: 'English' },
            ],
            firststeperror: false,
            secondsteperror: false,
            tocDataList: [],
            tocData: {
                title: "",
                sort: 1,
                book_id: null,
                page: 1,
                parent_id: 0,
            },
        }
    },
    async mounted() {
        await this.getAuthorsListArray();
        await this.getCategoryListArray();
        if (this.$route.params.id) {
            await this.getTheBook(this.$route.params.id);
            this.tocDataList = this.currentBook.table_of_content;
        }
    },
    mixins: [validationMixin],
    validations: {
        firststep: {
            lang: {
                required,
            },
            name: {
                required,
            },
            subtitle: {
                required,
            },
            edition: {
                required,
            },
            author: {
                required,
            },
            category: {
                required,
            },
            description: {
                required,
            },
            year: {
                required,
            },
            age_access: {
                required,
            },
        },
        secondstep: {
            lang: {
                required,
            },
            isbn: {
                required,
            },
            series: {
                required,
            },
            preview: {
                required,
            },
            table_of_content: {
                required,
            },
        }
    },
    methods: {
        ...mapActions([
            "addBookStep",
            "addBook",
            "getAuthorsListArray",
            "getCategoryListArray",
            "storeCropImage",
            "addTableOfContent",
            "getTheBook",
            "deleteTocItem",
            "searchBook",
        ]),
        async addChildToc(parent) {
            this.tocData.book_id = this.$route.params.id;
            this.tocData.parent_id = parent.id;
        },
        async cropImg(itemKey, refOption) {
            const { coordinates, canvas } = this.$refs[refOption].getResult();
            this.croppedImage = canvas.toDataURL();
            let image = new FormData();
            image.append("image", this.coordinates.image);
            image.append("width", coordinates.width);
            image.append("height", coordinates.height);
            image.append("x", coordinates.left);
            image.append("y", coordinates.top);
            await this.storeCropImage(image);
            console.log(this.cropfileList);
            if (this.cropfileList.length) {
                if (itemKey == "book") {
                    this.bookImg = this.cropfileList[0];
                } else if (itemKey == "options") {
                    this.optionsImg = this.cropfileList[0].path;
                }
            }
        },
        async setEbookImage(event, key) {
            const file = event.target.files[0];
            this.coordinates.image = file;
            this.optionsImg = URL.createObjectURL(file);
            console.log(event.target.files[0]);
        },
        getStatus(status) {
            let res;
            switch (status) {
                case 'current':
                    res = 'In Progress...'
                    break;
                case 'next':
                    res = 'Not Started...'
                    break;
                case 'prev':
                    res = 'Complete'
                    break;
                default: res = 'In Progress...'
                    break;
            }
            return res;
        },
        async submitfirst() {
            this.$v.$touch();
            this.firststeperror = false;
            if (this.$v.firststep.$invalid) {
                this.firststeperror = true;
            } else {
                await this.addBook();
                if (this.getBookAlertMsg.success) {
                    this.firststep.book_id = this.getBookAlertMsg.result.id;
                    this.firststep.image = this.getBookAlertMsg.result.image;
                }
                await this.addBookStep(this.firststep)
                if (this.getBookAlertMsg.success) {
                    this.steps[0].status = 'prev';
                    this.steps[1].status = 'current';
                }
            }

        },
        async submitsecond() {
            this.$v.$touch();
            this.secondsteperror = false;
            if (this.$v.secondstep.$invalid) {
                this.secondsteperror = true;
            } else {
                await this.addBook();
                if (this.getBookAlertMsg.success) {
                    this.secondstep.book_id = this.getBookAlertMsg.result.id;
                    this.secondstep.image = this.getBookAlertMsg.result.image;
                }
                await this.addBookStep(this.secondstep)
                if (this.getBookAlertMsg.success) {
                    this.steps[0].status = 'prev';
                    this.steps[1].status = 'current';
                }
            }
        },
        async sendToc() {
            this.tocData.book_id = this.$route.params.id;
            await this.addTableOfContent(this.tocData);
            if (this.getMsgTableOfContent.success) {
                this.tocData = {
                    title: "",
                    sort: 1,
                    book_id: this.$route.params.id,
                    page: 1,
                    parent_id: 0,
                };
                this.$notify(
                    "success",
                    "Success",
                    this.getMsgTableOfContent.message
                );
                this.tocDataList = this.getMsgTableOfContent.result;
            }
        },
        async rmTocItem(item) {
            await this.deleteTocItem(item.id);
            if (this.getMsgTableOfContent.success) {
                this.$notify(
                    "success",
                    "Success",
                    this.getMsgTableOfContent.message
                );
                this.tocDataList = this.getMsgTableOfContent.result;
            }
        },
    },
    computed: {
        ...mapGetters([
            "getBookAlertMsg",
            "authorsListArray",
            "categoryListArray",
            "cropfileList",
            "getMsgTableOfContent",
            'currentBook',
            'getSearchResult',
        ]),
    },
};
</script>
<style>
.stepheader {
    display: flex;
    justify-content: center;
}

.stepheader .step {
    width: 100%;
}

.btn_add_select {
    position: absolute;
    right: 1px;
    top: 1px;
    bottom: 1px;
    padding: 5px;
    border: 0px;
    background: #fff;
    font-size: 18px;
}

.toc_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.childblock .childblock {
    padding-left: 20px;
}

.childblock .childblock .childblock {
    padding-left: 40px;
}

.childblock .childblock .childtitle {
    font-weight: normal;
}

.childblock .childtitle {
    font-weight: bold;
    font-size: 14px;
}
</style>
