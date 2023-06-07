<template>
    <b-row>
        <b-colxx xxs="12">
            <h1>{{ title }}</h1>
            <div class="top-right-button-container">
                <b-button
                    @click="gotoAddBook"
                    variant="primary"
                    size="lg"
                    class="top-right-button"
                    >{{ $t("pages.add-new") }}</b-button
                >
                <!-- <b-button
          @click="fakeData"
          variant="success"
          size="lg"
          class="top-right-button"
        >{{ $t('pages.add-fake-book') }}</b-button> -->
            </div>
            <!-- <add-new-modal :categories="categories" :statuses="statuses"></add-new-modal> -->
            <piaf-breadcrumb />
            <div class="mb-2 mt-2">
                <b-button
                    variant="empty"
                    class="pt-0 pl-0 d-inline-block d-md-none"
                    v-b-toggle.displayOptions
                >
                    {{ $t("pages.display-options") }}
                    <i class="simple-icon-arrow-down align-middle" />
                </b-button>
                <b-collapse id="displayOptions" class="d-md-block">
                    <span class="mr-3 d-inline-block float-md-left">
                        <a
                            :class="{
                                'mr-2 view-icon': true,
                                active: displayMode === 'list'
                            }"
                            @click="changeDisplayMode('list')"
                        >
                            <data-list-icon />
                        </a>
                        <a
                            :class="{
                                'mr-2 view-icon': true,
                                active: displayMode === 'thumb'
                            }"
                            @click="changeDisplayMode('thumb')"
                        >
                            <thumb-list-icon />
                        </a>
                        <a
                            :class="{
                                'mr-2 view-icon': true,
                                active: displayMode === 'image'
                            }"
                            @click="changeDisplayMode('image')"
                        >
                            <image-list-icon />
                        </a>
                    </span>
                    <div class="float-md-right pt-1">
                        <span class="text-muted text-small mr-1 mb-2"
                            >{{ from }}-{{ to }} of {{ total }}</span
                        >
                        <b-dropdown
                            id="ddown2"
                            right
                            :text="`${perPage}`"
                            variant="outline-dark"
                            class="d-inline-block"
                            size="xs"
                        >
                            <b-dropdown-item
                                v-for="(size, index) in pageSizes"
                                :key="index"
                                @click="changePageSize(size)"
                                >{{ size }}</b-dropdown-item
                            >
                        </b-dropdown>
                    </div>
                </b-collapse>
            </div>
            <!-- <div class="separator mb-5" /> -->
        </b-colxx>
    </b-row>
</template>
<script>
import {
    DataListIcon,
    ThumbListIcon,
    ImageListIcon
} from "../../../../components/Svg";
import { adminRoot } from "../../../../constants/config";
import { mapGetters, mapActions } from "vuex";

export default {
    components: {
        "data-list-icon": DataListIcon,
        "thumb-list-icon": ThumbListIcon,
        "image-list-icon": ImageListIcon
    },
    props: [
        "title",
        "selectAll",
        "isSelectedAll",
        "isAnyItemSelected",
        "keymap",
        "displayMode",
        "changeDisplayMode",
        "changeOrderBy",
        "changePageSize",
        "sort",
        "searchChange",
        "from",
        "to",
        "total",
        "perPage"
    ],
    data() {
        return {
            categories: [
                {
                    label: "Cakes",
                    value: "Cakes"
                },
                {
                    label: "Cupcakes",
                    value: "Cupcakes"
                },
                {
                    label: "Desserts",
                    value: "Desserts"
                }
            ],
            statuses: [
                {
                    text: "ON HOLD",
                    value: "ON HOLD"
                },
                {
                    text: "PROCESSED",
                    value: "PROCESSED"
                }
            ],
            sortOptions: [
                {
                    column: "title",
                    label: "Product Name"
                },
                {
                    column: "category",
                    label: "Category"
                },
                {
                    column: "status",
                    label: "Status"
                }
            ],
            pageSizes: [4, 8, 12, 24, 48]
        };
    },
    computed: {
        ...mapGetters([
            "getBookAlertMsg",
            "filesList",
            "getEpubContent",
            "authorsListArray",
            "genresListArray",
            "cropfileList",
            "getFoundBook"
        ])
    },
    methods: {
        ...mapActions(["getBookList", "addBook", "generateFakeBook"]),
        async gotoAddBook() {
            await this.addBook();
            if (this.getBookAlertMsg.success) {
                this.$router.push(
                    `${adminRoot}/createbook`
                );
            }
        }
        // async fakeData(){
        //   let limit = prompt('How many books you want to generate?',10);
        //   let data = {limit:limit}
        //   await this.generateFakeBook(data);
        //   if(this.getBookAlertMsg.success){
        //     location.reload();
        //   }
        // }
    }
};
</script>
