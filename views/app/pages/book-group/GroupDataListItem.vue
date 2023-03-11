<template>
<b-card :class="{'d-flex flex-row':true,'active' : selectedItems.includes(data.id)}" no-body>
    <div class="pl-2 d-flex flex-grow-1 min-width-zero">
        <div class="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
            <div class="w-40 w-sm-100">
                <p class="list-item-heading mb-0 truncate">{{data.name_en}}</p>
            </div>
            <div class="w-15 w-sm-100">
                    {{ data.name_oz }}
            </div>
            <div class="w-15 w-sm-100">
                    {{ data.name_ru }}
            </div>
            <div class="w-25 w-sm-100 text-right">
                <b-button :id="'translation_btn'" @click.prevent="addBooks($event,data.id)" variant="secondary" class="btn btn-info">
                    <i class="iconsminds-add"></i>
                </b-button>
                <b-tooltip :target="'translation_btn'"
                        :title="'Add Books'">
                </b-tooltip>
                <button :id="'edit_btn'" class="btn btn-success" variant="secondary" @click.prevent="editBook($event,data.id)">
                    <i class="simple-icon-note"></i>
                </button>
                <b-tooltip :target="'edit_btn'"
                        :title="'Edit'">
                </b-tooltip>
                <button :id="'destroy_btn'" class="btn btn-danger" variant="secondary" @click.prevent="deleteGroup($event,data.id)">
                    <i class="iconsminds-trash-with-men"></i>
                </button>
                <b-tooltip :target="'destroy_btn'"
                        :title="'Delete'">
                </b-tooltip>
            </div>
        </div>
    </div>
</b-card>
</template>

<script>
import { adminRoot } from '../../../../constants/config';
import { mapGetters, mapActions } from 'vuex';

export default {
    props: ['items','index','data','selectedItems'],
    methods: {
        ...mapActions(['destroyGroup']),

        editBcategory(event,id) {
            this.$router.push(`${adminRoot}/book-group/edit/${id}`);
        },
        upppercase(str){
            return str.toUpperCase();
        },
        addBooks(event,id) {
            this.$router.push(`${adminRoot}/book-group/add-books/${id}`);
        },
        editBook(event,id) {
            this.$router.push(`${adminRoot}/book-group/edit/${id}`);
        },
        async deleteGroup(event,id) {
            if(confirm('Are you sure?')){
                await this.destroyGroup(id);
                
                var type = 'success filled';
                var title = 'Removing';
                var message = 'Data successfully deleted';

                if(!this.getGroupAlertMsg.success)
                {
                    type = 'error filled';
                    message = 'Data cannot be deleted';
                }
                else {
                    this.items.splice(this.index, 1)
                }

                this.$notify(type, title, message, { duration: 3000, permanent: false });
            }
        },
    },
    computed: {
        ...mapGetters(['getGroupAlertMsg']),
    }
}
</script>
