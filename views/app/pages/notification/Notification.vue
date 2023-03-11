<template>
    <div>
        <h2>{{$t('menu.notification')}}</h2>
        <div class="card">
            <div class="card-body">
            <button class="float-right btn btn-primary" @click="goToEdit()">{{$t('menu.add')}}</button>
            <br>
                <table class="table b-table table-striped">
                    <thead>
                        <th>{{ $t('forms.user-group') }}</th>
                        <th>{{ $t('forms.title') }}</th>
                        <th>{{ $t('forms.content') }}</th>
                    </thead>
                    <tbody>
                        <tr v-for="notification in notificationList" :key="notification.id">
                            <td>{{notification.role.label}}</td>
                            <td>{{notification.title}}</td>
                            <td>{{notification.body}}</td>
                            <td>
                                <button class="btn btn-primary btn-sm" @click="editAction(notification.id)">
                                    <i class="iconsminds-file-edit"></i>
                                </button>
                                <button class="btn btn-primary btn-sm" @click="deleteTheAction(notification)">
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
        ...mapGetters(['notificationList'])
    },
    methods:{
        ...mapActions(['getNotificationList']),
        editAction(id){
            this.$router.push(`${adminRoot}/notification/edit/${id}`)
        },
        deleteTheAction(notification){
            if(confirm('Are you sure?')){
                this.deleteAuthor(notification);
            }
        },
        goToEdit(){
            this.$router.push(`${adminRoot}/notification/add`)
        }
    },
    mounted(){
        this.getNotificationList();
    }
}
</script>

<style>

</style>