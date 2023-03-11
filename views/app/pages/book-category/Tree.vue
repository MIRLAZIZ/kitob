<template>
    <div>
        <h2>Category tree</h2>
        <div class="card">
            <div class="card-body mb-4 d-flex">
                <div class="form-group w-90">
                    <input type="text" class="form-control" placeholder="Search" v-model="search">
                </div>
                <div class="form-group w-10">
                    <button type="button" class="btn btn-primary">Search</button>
                </div>
            </div>
            <div class="card-body">
                <div class="list-group">
                    <ViewTree :tree-data="categoryListArray" :variant="'primary'"></ViewTree>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
import { adminRoot } from '../../../../constants/config';

import ViewTree from "./ViewTree";

export default {
    data(){
        return{
            search:''
        }
    },
    components:{
        ViewTree
    },
    computed:{
        ...mapGetters(['categoryList', 'getCategoryAlertMsg','categoryListArray'])
    },
    methods:{
        ...mapActions(['getCategoryList', 'destroyCategory','getCategoryTreeList']),
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
    watch:{
        search(newValue, oldValue) {
            if(newValue.length >= 3){
                this.getCategoryTreeList('?search='+newValue);
            }
        },
    },
    async mounted(){
        await this.getCategoryTreeList('?search='+this.search);
    }
}
</script>

<style>

</style>
