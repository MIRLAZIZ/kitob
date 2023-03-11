<template>
<b-card @click.prevent="editBooktype($event,data.id)" :class="{'d-flex flex-row':true,'active' : selectedItems.includes(data.id)}" no-body>
    <div class="pl-2 d-flex flex-grow-1 min-width-zero">
        <div class="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
            <router-link :to="`?p=${data.id}`" class="w-30 w-sm-100">
                <p class="list-item-heading mb-0 truncate">{{data.owner}}</p>
            </router-link>
            <div class="w-30 w-sm-100">
                <p class="mb-0 truncate">{{data.date}}</p>
            </div>
            <div class="w-20 w-sm-100">
                <p class="mb-0 truncate">{{priceFormat(data.total)}}</p>
            </div>
            <div class="w-20 w-sm-100">
                <p class="mb-0 truncate">{{data.items_count}}</p>
            </div>
        </div>
    </div>
</b-card>
</template>

<script>
import { adminRoot } from '../../../../constants/config';
export default {
    props: ['data', 'selectedItems'],
    methods: {
        editBooktype(event,id) {
            this.$router.push(`${adminRoot}/book-store/warehouse/edit/${id}`);
        },
        priceFormat(number){
            return number.toLocaleString('en-US');
        }
    }
}
</script>
