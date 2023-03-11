<template>
<b-card @click.prevent="editCoupon($event,data.id)" :class="{'d-flex flex-row':true,'active' : selectedItems.includes(data.id)}" no-body>
    <div class="pl-2 d-flex flex-grow-1 min-width-zero">
        <div class="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
            <router-link :to="`?p=${data.id}`" class="w-40 w-sm-100">
                <p class="list-item-heading mb-0 truncate">{{data.code}}</p>
            </router-link>
            <div class="w-15 w-sm-100">
                <p class="mb-0 truncate">{{data.start}}</p>
            </div>
            <div class="w-15 w-sm-100">
                <p class="mb-0 truncate">{{data.end}}</p>
            </div>
            <div class="w-15 w-sm-100">
                <b-badge pill :variant="data.statusColor">
                    {{ upppercase(data.status) }}
                </b-badge>
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
        editCoupon(event,id) {
            this.$router.push(`${adminRoot}/coupon/edit/${id}`);
        },
        upppercase(str){
            return str.toUpperCase();
        }
    }
}
</script>
