<template>
    <div>
        <h2>My books</h2>
        <div class="card">
            <div class="card-body">
                <table class="table b-table table-striped">
                    <thead>
                        <th>{{ $t('forms.title') }}</th>
                        <th>{{ $t('forms.author') }}</th>
                        <th>{{ $t('forms.publisher') }}</th>
                        <th>{{ $t('forms.action') }}</th>
                    </thead>
                    <tbody>
                        <tr v-for="epub in epubsList" :key="epub.id">
                            <td>{{epub.title}}</td>
                            <td>{{epub.author}}</td>
                            <td>{{epub.publisher}}</td>
                            <td>
                                <button class="btn btn-info btn-sm" @click="editAction(epub.id)">
                                    <i class="iconsminds-youtube"></i>
                                </button>
                                <button class="btn btn-primary btn-sm" @click="deleteTheAction(epub)">
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
        ...mapGetters(['epubsList','theEpub'])
    },
    methods:{
        ...mapActions(['getEpubsList','getTheEpub']),
        editAction(id){
            this.$router.push(`${adminRoot}/epub/show/${id}`)
        },
        deleteTheAction(action){
            if(confirm('Are you sure?')){
                // this.deleteAuthor(action);
                return true;
            }
        }
    },

    mounted(){
        this.getEpubsList(this.$route.params.id);
    }
}
</script>

<style>

</style>
