<template>
    <user-layout>

        <b-row class="h-100">
            <b-colxx xxs="12" md="10" class="mx-auto my-auto">
                <b-card class="auth-card" no-body>
                    <div class="position-relative image-side">
                        <p class="text-white h2">Kitab | al-ilm.uz</p>
                        <p class="white mb-0">
                            Nashriyotlar, Kitob do'konlari va Mualliflar uchun
                            <br />onlayn platformaga Hush Kelibsiz!
                            <router-link tag="a" to="/register" class="white"
                                >Ro'yxatdan o'tish</router-link
                            >.
                        </p>
                    </div>
                    <div class="form-side">
                        <router-link tag="a" to="/">
                            <span class="logo-single" />
                        </router-link>
                        <h6 class="mb-4">{{ $t("user.login-title") }}</h6>



                        <b-form
                            @submit.prevent="formSubmit"
                            class="av-tooltip tooltip-label-bottom"
                        >



                            <b-form-group
                                :label="$t('user.email')"
                                class="has-float-label mb-4"
                            >
                                <b-form-input
                                    type="text"
                                    v-model="$v.form.email.$model"
                                    :state="!$v.form.email.$error"
                                />
                                <b-form-invalid-feedback
                                    v-if="!$v.form.email.required"
                                    >Пожалуйста, введите Ваш адрес электронной
                                    почты</b-form-invalid-feedback
                                >
                                <b-form-invalid-feedback
                                    v-else-if="!$v.form.email.email"
                                    >Пожалуйста, введите действительный адрес
                                    электронной почты</b-form-invalid-feedback
                                >
                                <b-form-invalid-feedback
                                    v-else-if="!$v.form.email.minLength"
                                    >Ваш адрес электронной почты должен быть не
                                    менее 6 символов</b-form-invalid-feedback
                                >
                            </b-form-group>




                            <b-form-group
                                :label="$t('user.password')"
                                class="has-float-label mb-4"
                            >
                                <b-form-input
                                    type="password"
                                    v-model="$v.form.password.$model"
                                    :state="!$v.form.password.$error"
                                />
                                <b-form-invalid-feedback
                                    v-if="!$v.form.password.required"
                                    >Пожалуйста, введите
                                    пароль</b-form-invalid-feedback
                                >
                                <b-form-invalid-feedback
                                    v-else-if="
                                        !$v.form.password.minLength ||
                                            !$v.form.password.maxLength
                                    "
                                    >Ваш пароль должен быть не менее 6
                                    символов</b-form-invalid-feedback
                                >
                            </b-form-group>



                            <div
                                class="d-flex justify-content-between align-items-center"
                            >
                                <router-link tag="a" to="/forgot-password">{{
                                    $t("user.forgot-password-question")
                                }}</router-link>
                                <b-button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    :disabled="processing"
                                    :class="{
                                        'btn-multiple-state btn-shadow': true,
                                        'show-spinner': processing,
                                        'show-success':
                                            !processing && loginError === false,
                                        'show-fail': processing
                                    }"
                                >
                                    <span class="spinner d-inline-block">
                                        <span class="bounce1"></span>
                                        <span class="bounce2"></span>
                                        <span class="bounce3"></span>
                                    </span>
                                    <span class="icon success">
                                        <i class="simple-icon-check"></i>
                                    </span>
                                    <span class="icon fail">
                                        <i class="simple-icon-exclamation"></i>
                                    </span>
                                    <span class="label">{{
                                        $t("user.login-button")
                                    }}</span>
                                </b-button>
                            </div>
                        </b-form>
                    </div>
                </b-card>
            </b-colxx>
        </b-row>
    </user-layout>
</template>

<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import { adminRoot } from "../../constants/config";
import UserLayout from "../../layouts/UserLayout";
const {
    required,
    maxLength,
    minLength,
    email
} = require("vuelidate/lib/validators");

export default {
    data() {
        return {
            form: {
                email: "",
                password: ""
            }
        };
    },
    components: {
        "user-layout": UserLayout
    },
    mixins: [validationMixin],
    validations: {
        form: {
            password: {
                required,
                maxLength: maxLength(30),
                minLength: minLength(6)
            },
            email: {
                required,
                email,
                minLength: minLength(6)
            }
        }
    },
    computed: {
        ...mapGetters(["currentUser", "processing", "loginError"])
    },
    methods: {
        ...mapActions(["login", "doLogin"]),
        formSubmit() {
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }
            this.doLogin({
                email: this.form.email,
                password: this.form.password
            }).then(response => {
                axios.defaults.headers.common = {
                    Authorization: `Bearer ${response.data.access_token}`
                };
                this.$router.push(adminRoot);
            });
        }
    },
    watch: {
        currentUser(val) {
            if (val && val.uid && val.uid.length > 0) {
                setTimeout(() => {
                    this.$router.push(adminRoot);
                }, 200);
            }
        },
        loginError: {
            deep: true,
            immediate: true,
            handler: function(newVal, oldVal) {
                if (newVal != null) {
                    this.$notify("error", "Error", "Неверные учетные данные", {
                        duration: 3000,
                        permanent: false
                    });
                }
            }
        }
    }
};
</script>
