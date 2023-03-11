<template>
<user-layout>
  <b-row class="h-100">
    <b-colxx xxs="12" md=10  class="mx-auto my-auto">
      <b-card class="auth-card" no-body>
          <div class="position-relative image-side ">
            <p class=" text-white h2">{{ $t('dashboards.magic-is-in-the-details') }}</p>
              <p class="white mb-0">  Please use this form to register. <br />If you are a member, please
                <router-link tag="a" to="/user/login" class="white">login</router-link>.
              </p>
          </div>
          <div class="form-side">
            <router-link tag="a" to="/"><span class="logo-single"/></router-link>
            <!-- Activation via SMS -->
            <template v-if="activationStatus">
              <h6 class="mb-4">{{ $t('user.activate')}}</h6>
              <b-form @submit.prevent="activateForm">
                  <label class="form-group has-float-label mb-4">
                  <input type="text" class="form-control" v-model="activationCode">
                  <span>{{ $t('user.activationCode') }}</span>
                </label>
                <div class="d-flex justify-content-end align-items-center">
                  <b-button type="submit" variant="primary" size="lg" class="btn-shadow">{{ $t('user.activate-button')}}</b-button>
              </div>
              </b-form>
            </template>
            <!-- Registeration form -->
            <template v-if="!activationStatus">
              <h6 class="mb-4">{{ $t('user.register')}}</h6>
              <b-form @submit.prevent="formSubmit">
                 <label class="form-group has-float-label mb-4">
                  <input type="text" class="form-control" v-model="name">
                  <span>{{ $t('user.name') }}</span>
                </label>
                <label class="form-group has-float-label mb-4">
                  <input type="email" class="form-control" v-model="email">
                  <span>{{ $t('user.email') }}</span>
                </label>
                <label class="form-group has-float-label mb-4">
                  <input type="password" class="form-control" v-model="password">
                  <span>{{ $t('user.password') }}</span>
                </label>
                <label class="form-group has-float-label mb-4">
                  <input type="password" class="form-control" v-model="confirm_password">
                  <span>{{ $t('forms.password-confirm') }}</span>
                </label>
                <label class="form-group has-float-label mb-4">
                  <select type="text" class="form-control" v-model="gender">
                    <option value="male">{{$t('user.male')}}</option>
                    <option value="male">{{$t('user.female')}}</option>
                  </select>
                  <span>{{ $t('user.gender') }}</span>
                </label>
                <label class="form-group has-float-label mb-4">
                  <input type="text" class="form-control" v-model="phone">
                  <span>{{ $t('user.phone') }}</span>
                </label>
                <label class="form-group has-float-label mb-4">
                  <input type="text" class="form-control" v-model="photo">
                  <span>{{ $t('user.photo') }}</span>
                </label>
                <label class="form-group has-float-label mb-4">
                  <input type="date" class="form-control" v-model="birthday">
                  <span>{{ $t('user.birthday') }}</span>
                </label>
                <div class="d-flex justify-content-end align-items-center">
                    <b-button type="submit" variant="primary" size="lg" class="btn-shadow">{{ $t('user.register-button')}}</b-button>
                </div>
            </b-form>
          </template>
        </div>
      </b-card>
    </b-colxx>
  </b-row>
  </user-layout>
</template>
<script>
import axios from 'axios';
import { apiUrl, adminRoot } from '../../constants/config';
import { validationMixin } from "vuelidate";
import { setCurrentUser } from '../../utils'
import UserLayout from "../../layouts/UserLayout";
const {
    required,
    maxLength,
    minLength,
    email
} = require("vuelidate/lib/validators");
export default {
  data () {
    return {
      name: '',
      email: '',
      password: '',
      gender: '',
      phone: '',
      photo: null,
      birthday: '',
      confirm_password: '',
      activationCode:'',
      activationStatus:false
    }
  },
      components: {
        "user-layout": UserLayout
    },
  validations: {
    password: {
        required,
        maxLength: maxLength(16),
        minLength: minLength(6)
    },
    email: {
        required,
        email,
        minLength: minLength(6)
    }
  },
  methods: {
    formSubmit () {
      let post = {
        name:this.name,
        email:this.email,
        password:this.password,
        confirm_password:this.confirm_password,
        gender:this.gender,
        phone:this.phone,
        photo:this.photo,
        birthday:this.birthday,
      }
      console.log(post)
      axios.post(`/api/register`,post).then(response => {
          if(response.data.success){
            this.activationStatus = true;
          }
        }).catch(err => {
          console.log(err);
        });
    },
    activateForm(){
      let codePost = {
        phone:this.phone,
        code:this.activationCode
      };
      console.log('Activating....');
      axios.post(`/api/activate-user`,codePost).then(response => {
        if(response.data.success){
          // const token = response.data.access_token;
          // const user = response.data.user;
          // localStorage.setItem('access_token', token)
          // setCurrentUser(user)
          alert('Registeration success!!!');
          this.$router.push('/user/login');
          // this.activationStatus = false;
        }
      }).catch(err => {
        console.log(err);
      });
    }
  }
}
</script>
