<template>
    <div class="sard card mb-3" v-if="book">
        <div class="card-body d-flex align-items-center justify-content-between">
            <div class="form-group w-40">
                <label for="">{{$t('forms.book')}}</label>
                <h6 class="text-dark mb-0">{{book.name}}</h6>
                <p class="text-muted text-small mb-0">({{book.author.length ? book.author[0].fio : ''}})</p>
            </div>
            <div class="form-group">
                <label for="">{{$t('forms.price')}}</label>
                <input type="number" @change="updatePrice" class="form-control" :value="book.price">
            </div>
            <div class="form-group">
                <label for="">{{$t('forms.quantity')}}</label>
                <input type="number" @change="updateQty" class="form-control" :value="book.quantity">
            </div>
            <div class="form-group">
                <label for="">{{$t('forms.weight')}}</label>
                <input type="number" @change="updateWeight" class="form-control" :value="book.weight">
            </div>
            <div class="form-group">
                <label for="">{{ $t('book.cover') }}</label>
                <b-form-select class="form-control" v-model="book.cover" @change="updateCover" :options="options"></b-form-select>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Items",
    props:['book','index'],
    data() {
        return {
            options: [
                { value: null, text: 'Please select a cover' },
                { value: 'qattiq', text: 'Qattiq' },
                { value: 'yumshoq', text: 'Yumshoq' },
            ]
        }
    },
    methods:{
        updateQty($value){
            this.$emit('updateParentBooks',$value.target.value,'quantity',this.index);
        },
        updatePrice($value){
            this.$emit('updateParentBooks',$value.target.value,'price',this.index);
        },
        updateWeight($value){
            this.$emit('updateParentBooks',$value.target.value,'weight',this.index);
        },
        updateCover(){
            this.$emit('updateParentBooks',this.book.cover,'cover',this.index);
        },
    }
}
</script>

<style scoped>

</style>
