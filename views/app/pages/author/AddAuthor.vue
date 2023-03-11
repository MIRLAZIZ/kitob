<template>
    <div>
        <h2>Add Author</h2>
          <b-row>
            <b-colxx xxs="12">
            <b-card class="mb-4" >
                <b-form @submit.prevent="onaddAuthorFormSubmit">
                    <div class="alerts" v-if="errorMsgs">
                	    <div class="alert alert-danger"><template  v-for="(err) in errorMsgs" > {{err[0]}} </br></template> </div>
                    </div>
                    <label class="form-group has-float-label">
                        <input type="text" class="form-control" v-model="addAuthorForm.fio" required />
                        <span>{{ $t('user.name') }}</span>
                    </label>
                    <label class="form-group has-float-label">
                        <input type="date" class="form-control" v-model="addAuthorForm.birthday" />
                        <span>{{ $t('user.birthday') }}</span>
                    </label>
                    <label class="form-group has-float-label">
                        <input type="date" class="form-control" v-model="addAuthorForm.death_day" />
                        <span>{{ $t('user.deathday') }}</span>
                    </label>
                    <label class="form-group has-float-label">
                        <textarea cols="10" rows="4" class="form-control" v-model="addAuthorForm.description"></textarea>
                        <span>{{ $t('user.biography') }}</span>
                    </label>
                    
                     <!-- <label class="form-group has-float-label">
                        <v-select
                            :options="selectData"
                            :value="defaultStatus"
                            :dir="direction"
                            @input="setStatus"
                        />
                        <span>{{ $t('user.status') }}</span>
                    </label> -->

                    <label class="form-group has-float-label">
                        <input type="file" class="form-control" @change="setFile($event)">
                        <span>{{ $t('user.photo') }}</span>
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
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { getDirection } from "../../../../utils";
import { adminRoot } from '../../../../constants/config';

export default {
    data(){
        return {
            addAuthorForm:{
                fio:'',
                birthday:'',
                death_day:'',
                // status:'active',
                description:'',
                photo:null
            },
            selectData: [
                { label: "Active", value: "active" },
                { label: "Inactive", value: "inactive" },
            ],
            direction: getDirection().direction,
            defaultStatus: { label: "Active", value: "active" },
            errorMsgs: null
        }
    },
    props: ['frommodal'],
    components: {
        "v-select": vSelect,
    },
    computed: {
        ...mapGetters(["getAlertAuthorMsg"]),
    },
    methods:{
        ...mapActions(['addAuthor', 'getAuthorsListArray']),
        async onaddAuthorFormSubmit(){
            let author = new FormData();
            if(this.addAuthorForm.photo){
                author.append('photo',this.addAuthorForm.photo);
            }
            author.append('fio',this.addAuthorForm.fio);
            author.append('birthday',this.addAuthorForm.birthday);
            author.append('death_day',this.addAuthorForm.death_day);
            author.append('description',this.addAuthorForm.description);
            author.append('status',this.addAuthorForm.status);

            await this.addAuthor(author);

            if(this.getAlertAuthorMsg.error){
                this.errorMsgs = this.getAlertAuthorMsg.message
            }else{
                await this.getAuthorsListArray();
                if(!this.$props.frommodal){
                    this.$router.push(`${adminRoot}/author/default`);
                }else{
                    this.$bvModal.hide('authormodal')
                }
            }
        },
        setFile(event){console.log(event)
            this.addAuthorForm.photo = event.target.files[0]
        },
        setStatus(event){
            this.addAuthorForm.status = event.value;
            this.defaultStatus.status = event.value;
            this.defaultStatus.label = event.label;
        }
    },
}
</script>

<style>

</style>