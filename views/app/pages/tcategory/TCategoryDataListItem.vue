<template>
<b-card @click.prevent="editTcategory($event,data.id)" :class="{'d-flex flex-row':true,'active' : selectedItems.includes(data.id)}" no-body>
    <div class="pl-2 d-flex flex-grow-1 min-width-zero">
        <div class="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
            <router-link :to="`?p=${data.id}`" class="w-40 w-sm-100">
                <p class="list-item-heading mb-0 truncate">{{data.name}}</p>
            </router-link>
        </div>
    </div>
</b-card>
</template>

<script>
import { adminRoot } from '../../../../constants/config';
export default {
    props: ['data', 'selectedItems'],
    methods: {
        editTcategory(event,id) {
            this.$router.push(`${adminRoot}/tcategory/edit/${id}`);
        },
        upppercase(str){
            return str.toUpperCase();
        }
    }
}
</script>
