<template>
    <div>
        <h2>Actions</h2>
        <div class="card">
            <div class="card-body">
                <table class="table b-table table-striped">
                    <thead>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Controller</th>
                    </thead>
                    <tbody>
                        <tr v-for="action in cactionsList" :key="action.id">
                            <td>{{action.name}}</td>
                            <td>{{action.code}}</td>
                            <td>{{action.controller.label}}</td>
                            <td>
                                <button class="btn btn-primary btn-sm" @click="editAction(action.id)">
                                    <i class="iconsminds-file-edit"></i>
                                </button>
                                <button class="btn btn-primary btn-sm" @click="deleteTheAction(action)">
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
        ...mapGetters(['cactionsList'])
    },
    methods:{
        ...mapActions(['getCactionsList']),
        editAction(id){
            this.$router.push(`${adminRoot}/action/edit/${id}`)
        },
        deleteTheAction(action){
            if(confirm('Are you sure?')){
                this.deleteAuthor(action);
            }
        }
    },
    created(){
        this.getCactionsList();
    }
}
</script>

<style>

</style>