<template>
<b-card  :class="{'d-flex flex-row':true,'active' : selectedItems.includes(data.id)}" no-body>
    <div class="pl-2 d-flex flex-grow-1 min-width-zero">
        <div class="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
            <router-link :to="`?p=${data.id}`" class="w-40 w-sm-100">
                <p class="list-item-heading mb-0 truncate">{{data.title}}</p>
            </router-link>
            <div class="w-15 w-sm-100">
                <p class="list-item-heading mb-0 truncate">{{data.category.name}}</p>
            </div>
            <div class="w-15 w-sm-100">
                <p class="list-item-heading mb-0 truncate">{{data.phone}}</p>
            </div>
            <div class="w-15 w-sm-100 d-flex justify-content-center">
                <b-badge pill v-if="data.status == 'new'" variant="success " class="w-100px" >
                    {{ data.status }}
                </b-badge>
                <b-badge pill v-if="data.status == 'closed'" variant="info" class="w-100px">
                    {{ data.status }}
                </b-badge>
                <b-badge pill v-if="data.status == 'open'" variant="warning" class="w-100px">
                    {{ data.status }}
                </b-badge>
                <b-badge pill v-if="data.status == 'inactive'" variant="danger" class="w-100px">
                    {{ data.status }}
                </b-badge>
            </div>
            <div class="w-25 w-sm-100 text-right">
                <button
                        :id="'edit_btn'"
                        class="btn btn-success"
                        variant="secondary"
                        @click.prevent="edit(data.id)"
                    >
                        <i class="simple-icon-note"></i>
                    </button>
                    <b-tooltip :target="'edit_btn'" :title="'Edit'">
                    </b-tooltip>
                    <button
                        :id="'destroy_btn'"
                        class="btn btn-danger"
                        variant="secondary"
                        @click.prevent="deleteTheBook($event, data.id)"
                    >
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
import { mapGetters, mapActions } from "vuex";
export default {
    props: ['data', 'selectedItems'],
    methods: {
        ...mapActions(['getTicketsList','destroyTicket']),
        edit(id) {
            this.$router.push(`${adminRoot}/ticket/edit/${id}`);
        },
        upppercase(str){
            return str.toUpperCase();
        },
        async deleteTheBook(event, theID) {
            if (confirm("Are you sure?")) {
                await this.destroyTicket(theID);
            }
        },
    }
}
</script>
<style>
    .w-100px{
        width: 100px !important;
    }
</style>