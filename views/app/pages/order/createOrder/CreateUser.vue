<template>
  <div>
    <div>
      <b-modal
        id="createuser"
        :title="$t('createBook.createUser')"
        size="lg"
        no-close-on-backdrop
        :ok-title="$t('createBook.save')"
        :cancel-title="$t('categoryaFile.cancel')"
        @ok.prevent="createUser"
        @show="cancelModal"
      >
        <ValidationObserver ref="createUser">
          <BRow>
            <!-- -----------------------firstName----------------------- -->

            <BCol md="6">
              <ValidationProvider
                #default="{ errors }"
                rules="required|min:3"
                :name="$t('createBook.Name')"
              >
                <b-form-group label-size="sm" :label="$t('createBook.Name')"
                  ><BFormInput
                    v-model="userData.name"
                    :placeholder="$t('createBook.Name')"
                    :state="errors.length > 0 ? false : null"
                    size="lg"
                /></b-form-group>

                <small class="text-danger"> {{ errors[0] }}</small>
              </ValidationProvider>
            </BCol>

            <!-- -----------------------adress----------------------- -->

            <BCol md="6" class="">
              <ValidationProvider
                #default="{ errors }"
                rules="required|min:3"
                :name="$t('createBook.address')"
              >
                <b-form-group label-size="sm" :label="$t('createBook.address')">
                  <BFormInput
                    v-model="userData.address"
                    :placeholder="$t('createBook.address')"
                    :state="errors.length > 0 ? false : null"
                    size="lg"
                /></b-form-group>

                <small class="text-danger"> {{ errors[0] }}</small>
              </ValidationProvider>
            </BCol>

            <!-- -----------------------email----------------------- -->

            <BCol md="6" class="">
              <ValidationProvider
                #default="{ errors }"
                rules="email"
                :name="$t('user.email')"
              >
                <b-form-group label-size="sm" :label="$t('user.email')">
                  <BFormInput
                    v-model="userData.email"
                    :placeholder="$t('user.email')"
                    :state="errors.length > 0 ? false : null"
                    size="lg"
                  />
                </b-form-group>
                <small class="text-danger"> {{ errors[0] }}</small>
                <p class="text-danger">{{ emailEerror }}</p>
              </ValidationProvider>
            </BCol>

            <b-col md="6">
              <b-form-group label="status"
                ><b-form-select
                  :options="selectData"
                  class="form-control"
                  v-model="userData.status"
              /></b-form-group>
            </b-col>

            <!-- -----------------------phone----------------------- -->

            <BCol md="6" class="">
              <ValidationProvider
                #default="{ errors }"
                rules="required|min:9"
                :name="$t('createBook.telephone')"
              >
                <b-form-group
                  label-size="sm"
                  :label="$t('createBook.telephone')"
                >
                  <BFormInput
                    type="number"
                    v-model="telNumber"
                    :placeholder="$t('createBook.telephone')"
                    :state="errors.length > 0 ? false : null"
                    size="lg"
                  />
                </b-form-group>
                <small class="text-danger"> {{ errors[0] }}</small>
                <p class="text-danger">{{ phonenumber }}</p>
              </ValidationProvider>
              <span
                v-for="(userNumber, index) in userData.extraPhone"
                :key="index"
              >
                <b-row>
                  <b-col cols="10">
                    <b-form-group label-size="sm" :label="$t(userNumber.label)">
                      <BFormInput
                        v-model="userNumber.phoneNumber"
                        :placeholder="$t('createBook.additionalPhone')"
                        size="lg"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col
                    cols="2"
                    class="d-flex align-items-center justify-content-center h4 text-danger"
                    @click="deletPhoneNumber(userNumber.id)"
                    ><i
                      class="simple-icon-minus mt-3 cursor-pointer"
                      style="cursor: pointer"
                  /></b-col>
                </b-row>
              </span>
              <span v-show="userData.extraPhone.length !== 2"
                ><b-button @click="addPhoneNumber">{{
                  $t("createBook.exstraNumer")
                }}</b-button></span
              >
            </BCol>

            <!-- -----------------------age----------------------- -->

            <BCol md="6" class="">
              <b-form-group label-size="sm" :label="$t('createBook.age')">
                <BFormInput
                  type="number"
                  v-model="userData.age"
                  :placeholder="$t('createBook.age')"
                  size="lg"
                />
              </b-form-group>

              <!-- -----------------------gender----------------------- -->
              <ValidationProvider
                #default="{ errors }"
                rules="required"
                :name="$t('user.gender')"
              >
                <b-form-group :label="$t('user.gender')">
                  <b-form-radio v-model="userData.gender" value="male">{{
                    $t("user.male")
                  }}</b-form-radio>
                  <b-form-radio v-model="userData.gender" value="woman">{{
                    $t("user.female")
                  }}</b-form-radio>
                </b-form-group>
                <small class="text-danger"> {{ errors[0] }}</small>
              </ValidationProvider>
            </BCol>
          </BRow>
        </ValidationObserver>
      </b-modal>
    </div>
  </div>
</template>
<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { required } from "../../../../../utils/validations/validations.js";
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    telNumber: {
      type: String,
    },
  },
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      required,
      

      userData: {
        name: null,
        address: null,
        gender: null,
        age: null,
        phone: null,
        email: null,
        extraPhone: [],
        password: "",
        confirm_password: "",
        role_id: "2",
        status: "active",
        birthday: null,
        birthday: "02.05.2023",
        type: "guest",
      },
      selectData: [
        { text: "Active", value: "active" },
        { text: "Inactive", value: "inactive" },
      ],
      phonenumber: null,
      emailEerror: null,
    };
  },
  computed: {
    ...mapGetters(["getUserAlertMsg"]),
  },
  methods: {
    ...mapActions(["addUser"]),
    //  async createUser() {
    //  await this.addUser(this.userData)
    //  console.log(this.getUserAlertMsg.error);
    //  console.log(this.getUserAlertMsg.message.phone[0], '');

    //     //  console.log(this.getUserAlertMsg);
    //   },

    async createUser() {
      this.userData.phone = "998" + this.telNumber;

      this.$refs.createUser
        .validate()
        .then(async (success) => {
          if (success) {
            await this.addUser(this.userData);
            if (!this.getUserAlertMsg.error) {
              this.$emit("searchUser", this.userData.phone);
              this.userData.name = null;
              this.userData.address = null;
              this.userData.email = null;
              this.userData.age = null;
              this.userData.gender = null;
              this.userData.phone = null;
              this.userData.extraPhone = [];
              this.emailEerror = null;
              this.phonenumber = null;
              this.$bvModal.hide("createuser");
            } else {
              if (
                this.getUserAlertMsg.message &&
                this.getUserAlertMsg.message.email[0] ==
                  "The email has already been taken."
              ) {
                this.emailEerror = this.$t("createBook.emailRegistr");
              } else {
                this.emailEerror = null
              }
              if (
                this.getUserAlertMsg.message.phone[0] ==
                "The phone has already been taken."
              ) {
                this.phonenumber = this.$t("createBook.telphoneRegistr");
              } else{
                this.phonenumber = null
              }
              if (
                this.getUserAlertMsg.message.phone[0] ==
                "The phone may not be greater than 12 characters."
              ) {
                this.phonenumber = this.$t("createBook.numberMax");
              } else{
                this.phonenumber = null

              }
            }
          } else {
            this.errorToast(this.$t("createBook.information"));
          }
        })
        .catch((error) => {
          this.$notify("error", "Server Error: " + error.message);
        });
    },
    cancelModal() {
      this.userData.name = null;
      this.userData.address = null;
      this.userData.email = null;
      this.userData.age = null;
      this.userData.gender = null;
      this.userData.phone = null;
      this.userData.extraPhone = [];
      this.emailEerror = null;
      this.phonenumber = null;
    },
    addPhoneNumber() {
      let phoneNumber = {
        id: this.userData.extraPhone.length + 1,
        label: "createBook.additionalPhone",
        phoneNumber: null,
      };
      this.userData.extraPhone.push(phoneNumber);
    },
    deletPhoneNumber(id) {
      this.userData.extraPhone = this.userData.extraPhone.filter(
        (c) => c.id !== id
      );
    },
  },
  mounted() {
    let currentDate = new Date();
    const password = currentDate.getTime().toString().slice(-6);
    this.userData.password = password;
    this.userData.confirm_password = password;
   
  },
};
</script>
<style></style>
