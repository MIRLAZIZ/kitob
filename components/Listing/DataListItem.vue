<template>
    <b-card
        :class="{
            'd-flex flex-row': true,
            active: selectedItems.includes(data.id)
        }"
        no-body
    >
        <div class="pl-2 d-flex flex-grow-1 min-width-zero">
            <div
                class="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center"
            >
                <router-link :to="`?p=${data.id}`" class="30 w-sm-100">
                    <p class="list-item-heading mb-0 truncate">
                        {{ data.name }} <br />
                        <small class="text-info">{{
                            data.role ? data.role.label : ""
                        }}</small>
                    </p>
                </router-link>
                <p class="mb-0 text-muted text-small w-20 w-sm-100">
                    {{ data.email }}
                </p>
                <p class="mb-0 text-muted text-small w-10 w-sm-100">
                    {{ data.birthday }}
                </p>
                <div class="w-10 w-sm-100">
                    <b-badge pill :variant="statusColor(data.status)">{{
                        data.status
                    }}</b-badge>
                </div>
                <div class="w-30 w-sm-100 text-right">
                    <button
                        :id="'login_as_user_btn'"
                        class="btn btn-warning"
                        variant="secondary"
                        @click.prevent="loginAsSomeUser($event, data.email)"
                    >
                        <i class="iconsminds-business-man"></i>
                    </button>
                    <b-tooltip :target="'login_as_user_btn'" :title="'Login as ' + data.name">
                    </b-tooltip>

                    <button
                        :id="'show_books'"
                        class="btn btn-info"
                        variant="secondary"
                        @click.prevent="showUserBooks($event, data.id)"
                    >
                        <i class="simple-icon-book-open"></i>
                    </button>
                    <b-tooltip :target="'show_books'" :title="'Show books'">
                    </b-tooltip>

                    <button
                        :id="'edit_btn'"
                        class="btn btn-success"
                        variant="secondary"
                        @click.prevent="toggleItem($event, data.id)"
                    >
                        <i class="simple-icon-note"></i>
                    </button>
                    <b-tooltip :target="'edit_btn'" :title="'Edit'">
                    </b-tooltip>
                    <button
                        :id="'destroy_btn'"
                        class="btn btn-danger"
                        variant="secondary"
                        @click.prevent="deleteUser($event, data.id)"
                    >
                        <i class="iconsminds-trash-with-men"></i>
                    </button>
                    <b-tooltip :target="'destroy_btn'" :title="'Delete'">
                    </b-tooltip>
                </div>
            </div>
        </div>
    </b-card>
</template>

<script>
import { adminRoot } from "../../constants/config";
import { mapGetters, mapActions } from "vuex";
import axios from "axios";

export default {
    props: ["data", "selectedItems"],
    computed: {
        ...mapGetters(["getUserAlertMsg"])
    },
    methods: {
        ...mapActions(["deleteEmployee","loginAsUser"]),
        toggleItem(event, itemId) {
            this.$emit("toggle-item", event, itemId);
        },
        showUserBooks(event,itemId){
            this.$router.push('/app/epub/user/'+itemId);
        },
        statusColor(status) {
            if (status == "active") {
                return "success";
            } else {
                return "danger";
            }
        },
        async deleteUser(event, theID) {
            if (confirm("Are you sure?")) {
                await this.deleteEmployee(theID);
                if (this.getUserAlertMsg.success) {
                    this.$emit("reloadData");
                }
            }
        },
        loginAsSomeUser(event,email){
            this.loginAsUser(email).then(response => {
                axios.defaults.headers.common = {
                    Authorization: `Bearer ${response.data.access_token}`
                };
                this.$forceUpdate();
                this.$router.push('/app/dashboards/default');
            });
            //await this.loginAsUser(email);
            //await this.$forceUpdate();
            //await this.$router.push('/app/dashboards/default');
            //alert('You are logged in as user with email: ' + email);
        }
    }
};
</script>
