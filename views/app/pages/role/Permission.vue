<template>
    <div>
        <h2>Permissions</h2>
	  			<form>
                    <div class="contActionFrame">
                        <div class="checkAll">
                            <input type="checkbox" v-model="selectedAll" id="checkAll" class="form-check-input" @click="checkAll">
                            <label for="checkAll"><b>checkAll</b></label>
                        </div>
					</div>
	  				<template v-for="(item,index) in controllersAndActionsList">
			  			<div class="contActionFrame" v-for="(val,key) in item" v-if="val.length > 0">
			  				<h4 class="heading"><span>{{key}}</span></h4>
					  		<div class="row">
							  	<div class="col-lg-2 col-md-2 form-group form-check"  v-for="(action,k) in val">
							  		<div>
									    <input type="checkbox" v-model="permissions" :value="{action_id:action.id,conts_id:action.conts_id}"   :id="`check${key}${action.code}`" class="form-check-input" checked="true">
									    <label class="form-check-label" :for="`check${key}${action.code}`">
									    	<b>{{action.code}}</b>
									    </label>
							  		</div>
							  		<span class="action_comment">
							  			{{action.name}}
							  		</span>
							  	</div>
					  		</div>
			  			</div>
	  				</template>
		  			<div class="row">
		  				<div class="col-lg-12 col-md-12 btnPermit">
					  		<button type="submit" class="btn btn-outline-primary btnPermit" @click.prevent="save">
					  			Сохранить
					  		</button>
				  		</div>
	  				</div>
				</form>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
import { adminRoot } from '../../../../constants/config';
	export default{
		components: {
		},
		data(){
			return{
				permissions: [],
				rolName:null,
				selectedAll:false,
			}
		},
        watch:{
            getPermissions: function(params) {
                let newArr = this.getPermissions.permissions.map((item)=>{
                    return{
                        conts_id:item.conts_id,
                        action_id:parseInt(item.action_id)
                    }
                })
                this.permissions = newArr
                this.rolName = this.getPermissions.role.label
            }
        },
		computed:{
            ...mapGetters(['controllersAndActionsList', 'getPermissionsMsg', 'getRoleMsg', 'getPermissions'])
		},
		methods:{
            ...mapActions(['getAllControllerAndActions', 'updateRoleAction', 'actionPermission', 'actionPermissionStore']),
			async save(){
				if (this.permissions.length > 0) {
					this.permissions.forEach(elem => {
						elem.role_id =  parseInt(this.$route.params.role_id)
					})
					await this.actionPermissionStore({permissions:this.permissions,id:this.$route.params.role_id})
					await this.actionPermission({role_id:this.$route.params.role_id})
                     this.$notify('success', 'Store', 'Success', { duration: 3000, permanent: false });
				    location.reload();
				}else{
                    this.$notify('error', 'Ошибка', 'Выберите action!', { duration: 3000, permanent: false });
				}
			},
			checkAll(){
				if(!this.selectedAll){
					this.controllersAndActionsList.forEach(p_item => {
						let thisPItem = Object.entries(p_item)[0][1];
						thisPItem.forEach(item => {
							this.permissions.push({conts_id:item.conts_id, action_id:parseInt(item.id)})
						})
					})
				}else{
					this.permissions = []
				}
			},
		},
		async mounted(){
			await this.actionPermission({role_id:this.$route.params.role_id})
			await this.getAllControllerAndActions()

		}
	}
</script>

<style scoped>
	.action_comment,.roleName{
	    text-decoration: underline;
    	text-transform: capitalize;
    	margin-left:10px;
	}
	.heading{
	  position:relative;
	  text-align: center;
      margin-bottom: 15px;
	}
	.heading:before {
	  content: "";
	  display: block;
	  border-top:1px solid #bebebe;
	  width: 100%;
	  height: 2px;
	  position: absolute;
	  top: 50%;
	  z-index: 0;
	}
	.heading span {
	  background: #fff;
	  padding: 0 10px;
	  position: relative;
	  z-index: 1;
	}
	.contActionFrame{
		border: 1px solid #bebebebe;
    	padding: 5px 20px;
	}
	.btnPermit{
	    display: flex;
	    margin-top: 10px;
	    justify-content: flex-end;
	}
</style>