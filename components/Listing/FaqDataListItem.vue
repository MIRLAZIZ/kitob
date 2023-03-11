<template>
<b-card @click.prevent="editFaq($event,data.id)" :class="{'d-flex flex-row':true,'active' : selectedItems.includes(data.id)}" no-body>
    <div class="pl-2 d-flex flex-grow-1 min-width-zero">
        <div class="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
            <router-link :to="`?p=${data.id}`" class="w-40 w-sm-100">
                <p class="list-item-heading mb-0 truncate">{{data.title}}</p>
            </router-link>
            <p class="mb-0 text-muted text-small w-15 w-sm-100">
                {{upppercase(data.category)}}
            </p>
            <div class="w-15 w-sm-100">
                <b-badge pill :variant="data.statusColor">
                    {{ upppercase(data.status) }}
                </b-badge>
            </div>
        </div>
        <!-- <div class="custom-control custom-checkbox pl-1 align-self-center pr-4">
            <b-form-checkbox :checked="selectedItems.includes(data.id)" class="itemCheck mb-0" />
        </div> -->
    </div>
</b-card>
</template>

<script>
import { adminRoot } from '../../constants/config';
export default {
    props: ['data', 'selectedItems'],
    methods: {
        editFaq(event,id) {
            this.$router.push(`${adminRoot}/faq/edit/${id}`);
        },
        upppercase(str){
            return str.toUpperCase();
        }
    }
}
</script>
