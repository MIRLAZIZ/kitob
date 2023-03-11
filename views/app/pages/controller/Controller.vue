<template>
    <div>
        <h2>Controllers</h2>
        <div class="card">
            <div class="card-body">
                <table class="table b-table table-striped">
                    <thead>
                        <th>Name</th>
                        <th>Label</th>
                    </thead>
                    <tbody>
                        <tr v-for="controller in controllersList" :key="controller.id">
                            <td>{{controller.name}}</td>
                            <td>{{controller.label}}</td>
                            <td>
                                <button class="btn btn-primary btn-sm" @click="editAuthor(controller.id)">
                                    <i class="iconsminds-file-edit"></i>
                                </button>
                                <button class="btn btn-primary btn-sm" @click="deleteTheAuthor(controller)">
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
        ...mapGetters(['controllersList', ])
    },
    methods:{
        ...mapActions(['getControllersList']),
        // editAuthor(id){
        //     this.$router.push(`${adminRoot}/author/edit/${id}`)
        // },
        // deleteTheAuthor(author){
        //     if(confirm('Are you sure?')){
        //         this.deleteAuthor(author);
        //     }
        // }
    },
    created(){
        this.getControllersList();
    }
}
</script>

<style>

</style>