<template>
    <b-card :class="{ 'd-flex flex-row': true, 'active': selectedItems.includes(data.id) }" no-body>
        <div class="pl-2 d-flex flex-grow-1 min-width-zero">
            <div
                class="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                <div class="w-40 w-sm-100">
                    <p class="list-item-heading mb-0 truncate">{{ data.name }}</p>
                </div>
                <div class="w-15 w-sm-100">
                    {{ data.items_count }}
                </div>
                <div class="w-25 w-sm-100 text-right">
                    <b-button :id="'translation_btn'" @click.prevent="addBooks($event, data.id)" variant="secondary"
                        class="btn btn-info">
                        <i class="iconsminds-add"></i>
                    </b-button>
                    <b-tooltip :target="'translation_btn'" :title="'Add Books'">
                    </b-tooltip>
                    <button :id="'destroy_btn'" class="btn btn-danger" variant="secondary"
                        @click.prevent="deleteTheBook($event, data.id)">
                        <i class="iconsminds-trash-with-men"></i>
                    </button>
                    <b-tooltip :target="'destroy_btn'" :title="'Delete'">
                    </b-tooltip>
                </div>
            </div>
        </div>
    </b-card>
</template>

<script>
import { adminRoot } from '../../../../constants/config';
import { mapActions, mapGetters } from "vuex";
export default {
    props: ['data', 'selectedItems'],
    methods: {
        ...mapActions(['destroySeries']),
        editBcategory(event, id) {
            this.$router.push(`${adminRoot}/book-series/edit/${id}`);
        },
        upppercase(str) {
            return str.toUpperCase();
        },
        addBooks(event, id) {
            this.$router.push(`${adminRoot}/book-series/add-books/${id}`);
        },
        async deleteTheBook(e, id) {
            await this.destroySeries(id)
            if (this.getSeriesMsg.success) {
                this.$notify('success', 'Success', this.getSeriesMsg.message)
                location.reload();
            }
        }
    },
    computed: {
        ...mapGetters(["getSeriesMsg"]),
    },
}
</script>
