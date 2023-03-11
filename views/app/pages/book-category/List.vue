<template>
    <div>
        <h2>Category</h2>
        <div class="card">
            <div class="card-body">
                <table class="table b-table table-striped">
                    <thead>
                        <th>{{$t('forms.name_oz')}}</th>
                        <th>{{$t('forms.name_ru')}}</th>
                        <th>{{$t('forms.name_en')}}</th>
                        <th>{{$t('menu.action')}}</th>
                    </thead>
                    <tbody>
                        <tr v-for="category in categoryList" :key="category.id">
                            <td>{{category.name_oz}}</td>
                            <td>{{category.name_ru}}</td>
                            <td>{{category.name_en}}</td>
                            <td>
                                <button class="btn btn-primary btn-sm" @click="edit(category.id)">
                                    <i class="iconsminds-file-edit"></i>
                                </button>
                                <button class="btn btn-primary btn-sm" @click="remove(category.id)">
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
        ...mapGetters(['categoryList', 'getCategoryAlertMsg'])
    },
    methods:{
        ...mapActions(['getCategoryList', 'destroyCategory']),
        edit(id){
            this.$router.push(`${adminRoot}/book-category/edit/${id}`)
        },
        async remove(id){
            if(confirm('Are you sure?')){
                await this.destroyCategory(id);

                var type = 'success filled';
                var title = 'Removing';
                var message = 'Data successfully deleted';

                if(!this.getCategoryAlertMsg.success)
                {
                    type = 'error filled';
                    message = 'Data cannot be deleted';
                }
                else {
                    this.categoryList.splice(this.index, 1)
                }

                this.$notify(type, title, message, { duration: 3000, permanent: false });
            }
        }
    },
    mounted(){
        this.getCategoryList();
    }
}
</script>

<style>

</style>