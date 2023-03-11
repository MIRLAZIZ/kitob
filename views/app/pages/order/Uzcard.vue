<template>
    <div>
        <h2>My Cards</h2>
        <div class="card">
            <div class="card-body">
                <table class="table b-table table-striped">
                    <thead>
                        <th>Holder (name)</th>
                        <th>Masked Pan</th>
                        <th>Token</th>
                        <th>Data</th>
                    </thead>
                    <tbody>
                        <tr v-for="uzcard in uzcardsList" :key="uzcard.id">
                            <td>{{uzcard.name}}</td>
                            <td>{{uzcard.maskedPan}}</td>
                            <td>{{uzcard.token}}</td>
                            <td>{{uzcard.date}}</td>
                            <td>
                                <button class="btn btn-primary btn-sm" @click="editAuthor(uzcard.id)">
                                    <i class="iconsminds-file-edit"></i>
                                </button>
                                <button class="btn btn-primary btn-sm" @click="deleteTheAuthor(uzcard)">
                                    <i class="iconsminds-trash-with-men"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
import { adminRoot } from '../../../../constants/config';

export default {
    computed:{
        ...mapGetters(['uzcardsList', ])
    },
    methods:{
        ...mapActions(['getUzcardsList']),
    },
    created(){
        this.getUzcardsList();
    }
}
</script>

<style>

</style>