<template>
    <div>
        <h2>Roles</h2>
        <div class="card">
            <div class="card-body">
                <table class="table b-table table-striped">
                    <thead>
                        <th>Label</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        <tr v-for="role in rolesList" :key="role.id">
                            <td>
                                <router-link :to="'/app/role/permission/'+role.id">{{role.label}}</router-link>
                            </td>
                            <td>{{role.name}}</td>
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
        ...mapGetters(['rolesList'])
    },
    methods:{
        ...mapActions(['getRolesList']),
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
        this.getRolesList();
    }
}
</script>

<style>

</style>