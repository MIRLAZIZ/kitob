<template>
    <div>
        <h2>Add Controller</h2>
          <b-row>
            <b-colxx xxs="12">
            <b-card class="mb-4">
                <b-form @submit.prevent="onAddControllerFormSubmit">
                	<div class="alert alert-danger" v-if="errrorMsg">{{errrorMsg}}</div>
                <label class="form-group has-float-label">
                    <input type="text" class="form-control" v-model="addControllerForm.name" required="required" />
                    <span>{{ $t('controller.controller-name') }}</span>
                </label>
                <label class="form-group has-float-label">
                    <input type="text" class="form-control" v-model="addControllerForm.label" required="required" />
                    <span>{{ $t('controller.label') }}</span>
                </label>
                <b-button type="submit" variant="primary" class="mt-4">{{ $t('forms.submit') }}</b-button>
                </b-form>
            </b-card>
            </b-colxx>
        </b-row>
    </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';
import { adminRoot } from '../../../../constants/config';

export default {
    data(){
        return {
            addControllerForm:{
                name:'',
                label:''
            },
            errrorMsg: null,
        }
    },
    computed: {
        ...mapGetters(['controllersList', 'getAlertMsg' ])
    },
    mounted() {
    },
    methods:{
        ...mapActions(['addController']),
        async onAddControllerFormSubmit(){
            let controller = this.addControllerForm;
            await this.addController(controller);
			if(this.getAlertMsg.error){
				this.errrorMsg = this.getAlertMsg.message.name[0]
			}else{
				this.$router.push(`${adminRoot}/controller/default`)
			}
        }
    }
}
</script>

<style>

</style>
