<template>
<b-card  :class="{'d-flex flex-row':true,'active' : selectedItems.includes(data.id)}" no-body>
    <div class="pl-2 d-flex flex-grow-1 min-width-zero">
        <div class="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
            <div class="w-15 w-sm-100">
                <p class="list-item-heading mb-0 truncate">{{data.user.name}}</p>
            </div>
            <div class="w-15 w-sm-100">
                <p class="list-item-heading mb-0 truncate">{{data.created_at}}</p>
            </div>
            <div class="w-15 w-sm-100">
                <p class="list-item-heading mb-0 truncate text-success font-bold" v-if="data.type == 'debit'">
                    +{{ new Intl.NumberFormat().format(data.amount) }}
                </p>
                <p class="list-item-heading mb-0 truncate text-danger font-bold" v-else>
                    -{{ new Intl.NumberFormat().format(data.amount) }}
                </p>
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