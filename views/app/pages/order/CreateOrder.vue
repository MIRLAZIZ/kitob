<template>
  <div>
    <h1>{{ $t("createBook.CreateOrder") }}</h1>
    <b-row>
      <b-col cols="12" class="card p-4">
        <b-row>
          <b-col cols="10"
            ><ValidationObserver>
              <ValidationProvider
                #default="{ errors }"
                rules="min:9"
                :name="$t('createBook.telephone')"
                ><b-form-group :label="$t('menu.search') + ':'">
                  <b-input-group class="border-radius" prepend="+998">
                    <b-form-input
                      type="number"
                      v-model="telNumber"
                      @keydown.enter="searchPhone"
                    />
                  </b-input-group>
                </b-form-group>
                <p class="text-danger">{{ errors[0] }}</p>
              </ValidationProvider>
            </ValidationObserver></b-col
          >
          <b-col
            cols="2"
            v-if="showCreateUsser"
            class="d-flex align-items-center pt-2"
            ><b-button v-b-modal.createuser @click="telNumber = null"
              ><i class="simple-icon-plus" /></b-button
          ></b-col>
        </b-row>

        <p class="text-danger" v-show="showCreateUsser">
          Siz qidirga foydalanuvchi bazadan topilmadi
        </p>
      </b-col>

      <b-col cols="12" class="text-center" v-show="lading">
        <b-spinner variant="primary" label="Spinning"></b-spinner
      ></b-col>

      <b-col
        cols="12"
        v-if="
          GET_UCER_DATA &&
          GET_UCER_DATA.result &&
          GET_UCER_DATA.result.data &&
          GET_UCER_DATA.result.data[0]
        "
        ><DataUser :userData="GET_UCER_DATA.result.data"
      /></b-col>

      <b-col cols="12" class="pl-0"
        ><OrderBook
          @bookFunction="bookData"
          @selectBook="selectBook"
        
      /></b-col>
      <b-col cols="12"
        ><PaymentType @paymentDelivery="sendData" ref="childForm"
      /></b-col>
      <b-col cols="12" class="d-flex justify-content-end mt-4"
        ><b-button @click="saveBookData">saqlash</b-button></b-col
      >
    </b-row>
    <CreateUser @searchUser="telNumberEmit" />
  </div>
</template>
<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { required } from "../../../../utils/validations/validations.js";
import DataUser from "./createOrder/DataUser.vue";
import CreateUser from "./createOrder/CreateUser.vue";
import OrderBook from "./createOrder/OrderBook.vue";
import PaymentType from "./createOrder/PaymentType.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    DataUser,
    CreateUser,
    OrderBook,
    PaymentType,
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      required,
      telNumber: null,
      showCreateUsser: false,
      lading: false,
    };
  },
  methods: {
    ...mapActions(["FETCH_UCER_DATA"]),

    async searchPhone() {
      if (
        this.GET_UCER_DATA &&
        this.GET_UCER_DATA.result &&
        !this.GET_UCER_DATA.result.data[0]
      ) {
        this.GET_UCER_DATA.result.data = [];
      }
      if (this.telNumber.length > 8) {
        this.lading = true;
        await this.FETCH_UCER_DATA(this.telNumber);
        this.lading = false;
        if (
          this.GET_UCER_DATA &&
          this.GET_UCER_DATA.result &&
          !this.GET_UCER_DATA.result.data[0]
        ) {
          this.showCreateUsser = true;
        } else {
          this.showCreateUsser = false;
        }
      }
    },
    telNumberEmit(phone) {
      this.lading = true;

      this.telNumber = phone;
      this.searchPhone();

      this.loading = false;
    },

    // to'lov turi va yetgazib berish  turlari emit orqli bola companentadan olib kelindi
    sendData(payment, delivery, deliveryAddress) {
      console.log(
        payment,
        "to'lov turi",
        delivery,
        "yatgazib berish",
        deliveryAddress,
        " yetgazib berish Manzili"
      );
    },
    // kitob haqidagi input malumotlari  bola companentadan olib kelindi

    bookData(bookPrice, bookQuantity, cover) {
      console.log(
        bookPrice,
        "kitob narxi",
        bookQuantity,
        "kitob soni",
        cover,
        "muqova turi"
      );
    },
    // kitob datalarini emit qilib bola companentada olib kelindi
    selectBook(item) {
      console.log(item, "book data");
    },
    saveBookData() {
      this.$refs.childForm.$refs.payment.validate().then((success) => {
        if (success) {
          // Bekendga post zaprosh yuborish uchun
          console.log("Bekendga so'rov yuborildi");
        } else {
          this.$notify("error", "kitob maydonini to'ldiring");
        }
      });
    },
  },
  computed: {
    ...mapGetters(["GET_UCER_DATA"]),
  },
};
</script>
<style></style>
