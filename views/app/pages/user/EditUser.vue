<template>
    <div>
        <b-row>
            <b-colxx xxs="12">
                <b-card class="mb-4" :title="$t('user.add-user')">
                    <b-form @submit.prevent="onAddUserFormSubmit">
                        <div class="errors" v-if="errorMsg">
                            <div
                                class="alert alert-danger"
                                v-for="(err, key) in errorMsg"
                                :key="key"
                            >
                                {{ err[0] }}
                            </div>
                        </div>

                        <label class="form-group has-float-label">
                            <b-form-input
                                type="text"
                                class="form-control"
                                v-model="$v.userForm.name.$model"
                                :state="!$v.userForm.name.$error"
                            />
                            <b-form-invalid-feedback
                                v-if="!$v.userForm.name.required"
                                >Поле, обязательное для
                                заполнения</b-form-invalid-feedback
                            >
                            <span>{{ $t("user.name") }}</span>
                        </label>
                        <label class="form-group has-float-label">
                            <b-form-input
                                type="email"
                                class="form-control"
                                v-model="$v.userForm.email.$model"
                                :state="!$v.userForm.email.$error"
                            />
                            <b-form-invalid-feedback
                                v-if="!$v.userForm.email.required"
                                >Поле, обязательное для
                                заполнения</b-form-invalid-feedback
                            >
                            <b-form-invalid-feedback
                                v-else-if="!$v.userForm.email.email"
                                >Пожалуйста, введите действительный адрес
                                электронной почты</b-form-invalid-feedback
                            >
                            <span>{{ $t("user.email") }}</span>
                        </label>
                        <label class="form-group has-float-label">
                            <b-form-input
                                type="password"
                                class="form-control"
                                v-model="$v.userForm.password.$model"
                                :state="!$v.userForm.password.$error"
                            />
                            <b-form-invalid-feedback
                                v-if="!$v.userForm.password.required"
                                >Поле, обязательное для
                                заполнения</b-form-invalid-feedback
                            >
                            <b-form-invalid-feedback
                                v-if="!$v.userForm.password.minLength"
                                >Должен быть не менее 6
                                символов</b-form-invalid-feedback
                            >
                            <span>{{ $t("user.password") }}</span>
                        </label>
                        <label class="form-group has-float-label">
                            <b-form-input
                                type="password"
                                class="form-control"
                                v-model="$v.userForm.confirm_password.$model"
                                :state="!$v.userForm.confirm_password.$error"
                            />
                            <!-- <b-form-invalid-feedback
                                v-if="!$v.userForm.confirm_password.required"
                                >Поле, обязательное для
                                заполнения</b-form-invalid-feedback
                            > -->
                            <b-form-invalid-feedback
                                v-if="
                                    !$v.userForm.confirm_password
                                        .confirm_password
                                "
                                >Пароли не совпадают</b-form-invalid-feedback
                            >
                            <span>{{ $t("user.password-again") }}</span>
                        </label>
                        <label class="form-group has-float-label">
                            <b-form-input
                                type="text"
                                class="form-control"
                                v-model="$v.userForm.phone.$model"
                                :state="!$v.userForm.phone.$error"
                            />
                            <b-form-invalid-feedback
                                v-if="!$v.userForm.phone.required"
                                >Поле, обязательное для
                                заполнения</b-form-invalid-feedback
                            >
                            <span>{{ $t("user.phone") }}</span>
                        </label>
                        <label class="form-group has-float-label">
                            <b-form-input
                                type="date"
                                class="form-control"
                                v-model="$v.userForm.birthday.$model"
                                :state="!$v.userForm.birthday.$error"
                            />
                            <b-form-invalid-feedback
                                v-if="!$v.userForm.birthday.required"
                                >Поле, обязательное для
                                заполнения</b-form-invalid-feedback
                            >
                            <span>{{ $t("user.birthday") }}</span>
                        </label>
                        <label class="form-group has-float-label">
                            <!-- <v-select
                                v-model="userForm.status"
                                :options="selectData"
                                :dir="direction"
                            /> -->
                            <b-form-select
                                :options="selectData"
                                :dir="direction"
                                class="form-control"
                                v-model="$v.userForm.status.$model"
                                :state="!$v.userForm.status.$error"
                            />
                            <b-form-invalid-feedback
                                v-if="!$v.userForm.status.required"
                                >Поле, обязательное для
                                заполнения</b-form-invalid-feedback
                            >
                            <span>{{ $t("user.status") }}</span>
                        </label>
                        <label class="form-group has-float-label">
                            <!-- <v-select
                                v-model="userForm.gender"
                                :options="selectGender"
                                :dir="direction"
                            /> -->
                            <b-form-select
                                :options="selectGender"
                                :dir="direction"
                                class="form-control"
                                v-model="$v.userForm.gender.$model"
                                :state="!$v.userForm.gender.$error"
                            />
                            <b-form-invalid-feedback
                                v-if="!$v.userForm.gender.required"
                                >Поле, обязательное для
                                заполнения</b-form-invalid-feedback
                            >
                            <span>{{ $t("user.gender") }}</span>
                        </label>
                        <label class="form-group has-float-label">
                            <!-- <v-select
                                v-model="userForm.role"
                                :options="selectRoles"
                                :dir="direction"
                            /> -->
                            <b-form-select
                                :options="selectRoles"
                                :dir="direction"
                                class="form-control"
                                v-model="$v.userForm.role_id.$model"
                                :state="!$v.userForm.role_id.$error"
                                text-field="label"
                            />
                            <b-form-invalid-feedback
                                v-if="!$v.userForm.role_id.required"
                                >Поле, обязательное для
                                заполнения</b-form-invalid-feedback
                            >
                            <span>{{ $t("user.role") }}</span>
                        </label>
                        <br />

                        <!-- <label class="form-group has-float-label">
                    <input type="file" class="form-control" @change="setFile($event)">
                    <span>{{ $t('user.photo') }}</span>
                </label> -->

                        <div class="col-md-3">
                            <div
                                class="card mb-4 text-white crop_block"
                                v-if="optionsImg"
                            >
                                <cropper
                                    class="cropper"
                                    :src="optionsImg"
                                    :stencil-props="{ aspectRatio: 10 / 12 }"
                                    ref="cropperImgoptions"
                                ></cropper>
                                <button
                                    type="button"
                                    class="btn_crop"
                                    @click="cropImg('cropperImgoptions')"
                                >
                                    <i class="simple-icon-crop"></i>
                                </button>
                            </div>
                            <div class="p-4 border mt-4 bgui" :class="{'show': userphoto != null}" :style="{ backgroundImage: 'url(/' + userphoto + ')' }">
                                <i class="simple-icon-trash" v-if="userphoto != null" @click="userphoto = null"></i>
                                <label
                                    class="form-group has-float-label jv_input_file_label"
                                >
                                    <input
                                        type="file"
                                        class="form-control jv_input_file"
                                        @change="setEbookImage($event)"
                                    />
                                    <i class="simple-icon-camera"></i>
                                </label>
                                <span>{{ $t("book.image") }}</span>
                            </div>
                        </div>

                        <b-button
                            type="submit"
                            variant="primary"
                            class="mt-4"
                            >{{ $t("forms.submit") }}</b-button
                        >
                    </b-form>
                </b-card>
            </b-colxx>
        </b-row>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { getDirection } from "../../../../utils";
import { adminRoot } from "../../../../constants/config";
import { validationMixin } from "vuelidate";
import { Cropper } from "vue-advanced-cropper";
const {
    required,
    maxLength,
    minLength,
    alpha,
    email,
    sameAs,
    numeric,
    maxValue,
    minValue,
    helpers
} = require("vuelidate/lib/validators");
const upperCase = helpers.regex("upperCase", /^[A-Z]*$/);

export default {
    data() {
        return {
            direction: getDirection().direction,
            userForm: {
                id: 0,
                name: "",
                email: "",
                password: "",
                confirm_password: "",
                gender: "",
                phone: "",
                role_id: "",
                photo: null,
                status: "active",
                birthday: null,
                type: "guest"
            },
            errorMsg: null,
            selectRoles: [],
            selectData: [
                { text: "Active", value: "active" },
                { text: "Inactive", value: "inactive" }
            ],
            selectGender: [
                { text: "Male", value: "male" },
                { text: "Female", value: "female" }
            ],
            img:
                "https://images.pexels.com/photos/226746/pexels-photo-226746.jpeg",
            croppedImage: null,
            optionsImg: null,
            coordinates: {
                width: 0,
                height: 0,
                left: 0,
                top: 0
            },
            userphoto: null,
        };
    },
    mixins: [validationMixin],
    validations: {
        userForm: {
            name: {
                required
            },
            email: {
                required,
                email
            },
            password: {
                minLength: minLength(6)
            },
            confirm_password: {
                confirm_password: sameAs("password")
            },
            gender: {
                required
            },
            phone: {
                required
            },
            role_id: {
                required
            },
            // photo: {
            //     required
            // },
            status: {
                required
            },
            birthday: {
                required
            },
            type: {
                required
            }
        }
    },
    components: {
        "v-select": vSelect,
        Cropper
    },
    computed: {
        ...mapGetters(["getUserAlertMsg", "getRoles", "theCurrentUser"])
    },
    async mounted() {
        await this.getRolesApi();
        this.selectRoles = this.getRoles;
        await this.getTheEmployee(this.$route.params.id);
        this.userForm.id = this.theCurrentUser.id;
        this.userForm.name = this.theCurrentUser.name;
        this.userForm.email = this.theCurrentUser.email;
        this.userForm.gender = this.theCurrentUser.gender;
        this.userForm.phone = this.theCurrentUser.phone;
        this.userForm.role_id = this.theCurrentUser.role_id;
        this.userForm.status = this.theCurrentUser.status;
        this.userForm.birthday = this.theCurrentUser.birthday;
        this.userForm.type = this.theCurrentUser.type;
        this.userphoto = this.theCurrentUser.photo;
    },
    methods: {
        ...mapActions(["updateEmployee", "getRolesApi", "getTheEmployee"]),
        async onAddUserFormSubmit() {
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }
            if (this.userForm.photo) {
                let user = new FormData();
                user.append("name", this.userForm.name);
                user.append("email", this.userForm.email);
                user.append("password", this.userForm.password);
                user.append("confirm_password", this.userForm.confirm_password);
                user.append("gender", this.userForm.gender);
                user.append("phone", this.userForm.phone);
                user.append("status", this.userForm.status);
                user.append("birthday", this.userForm.birthday);
                user.append("type", this.userForm.type);
                user.append("role_id", this.userForm.role_id);
                user.append("photo", this.userForm.photo);
                user.append("id", this.userForm.id);
                await this.updateEmployee({id: this.userForm.id, data: user});
            }else{
                await this.updateEmployee({id: this.userForm.id, data: this.userForm});
            }
            if (this.getUserAlertMsg.error) {
                this.errorMsg = this.getUserAlertMsg.message;
            } else {
                this.$router.push(`${adminRoot}/user/default`);
            }
        },
        async cropImg(refOption) {
            const { coordinates, canvas } = this.$refs[refOption].getResult();
            this.coordinates = coordinates;
            this.croppedImage = canvas.toDataURL();
            let image = new FormData();
            image.append("files[]", this.croppedImage);
            this.optionsImg = this.croppedImage;
            const base64Response = await fetch(this.croppedImage);
            const blob = await base64Response.blob();
            const file = new File([blob], "image.png");
            this.userForm.photo = file;
        },
        async setEbookImage(event) {
            let image = new FormData();
            image.append("files[]", event.target.files[0]);
            this.optionsImg = URL.createObjectURL(event.target.files[0]);
        },
        setFile(event) {
            this.userForm.photo = event.target.files[0];
        }
    }
};
</script>

<style>
.bgui{
    background-repeat: no-repeat;
    background-size: 80% auto;
    background-position: center;
}
.bgui.show span,
.bgui.show label{
    opacity: 0;
}
.bgui i{
    cursor: pointer;
}
.cropper {
    height: 250px;
    background: #ddd;
}
.crop_block {
    position: relative;
}
.btn_crop {
    position: absolute;
    top: 5px;
    right: 5px;
    border: none;
    border-radius: 8px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #000;
    background: transparent;
    padding: 0;
}
.btn_crop i {
    position: relative;
}
.btn_crop::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    left: 0;
    bottom: 0;
    -webkit-filter: blur(20px);
    -moz-filter: blur(20px);
    -o-filter: blur(20px);
    -ms-filter: blur(20px);
    filter: blur(1px);
    opacity: 1;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.8);
}
.jv_input_file_label {
    height: 50px;
    width: 50px;
    border: 4px solid #58b6f0;
    color: #58b6f0;
    border-radius: 8px;
    position: relative;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.4s;
}
.jv_input_file_label input {
    opacity: 0;
    position: absolute;
    pointer-events: none;
}
.jv_input_file_label i {
    cursor: pointer;
}
.jv_input_file_label:hover {
    background: #58b6f0;
    color: #fff;
}
.btn_add_select {
    position: absolute;
    right: 1px;
    top: 1px;
    bottom: 1px;
    padding: 5px;
    border: 0px;
    background: #fff;
    font-size: 18px;
}
.card-body {
    position: relative;
    overflow: hidden;
}
.loading_block {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(0 0 0 / 15%);
    z-index: 9;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
}
.loading_block .loading {
    display: inline-block;
    width: 100px;
    height: 100px;
    border: 2px solid rgba(0, 142, 204, 0.2);
    border-radius: 50%;
    border-top-color: #008ecc;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
    left: unset;
    top: unset;
    position: absolute;
    z-index: 155;
}
</style>
