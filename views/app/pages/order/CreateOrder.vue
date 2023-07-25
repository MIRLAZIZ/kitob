<template>
  <div>
    <pre> {{ orderBook.bookData }}</pre>

    <span
      v-if="
        orderBook.bookData &&
        orderBook.bookData[0] &&
        orderBook.bookData[0].bookQuantity
      "
    >
      {{ orderBook.bookData[0].orderQuantity }}</span
    >

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
            ><b-button v-b-modal.createuser
              ><i class="simple-icon-plus" /></b-button
          ></b-col>
        </b-row>

        <p class="text-danger" v-show="showCreateUsser">
          {{ $t("createBook.userNot") }}
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
      >
        <DataUser :userData="GET_UCER_DATA.result.data"
      /></b-col>

      <b-col cols="12" class="pl-0"
        ><OrderBook
          @bookFunction="bookData"
          @selectBook="selectBook"
          @emitCoupon="couponData"
          ref="bookQuantityValidate"
      /></b-col>
      <b-col cols="12"
        ><PaymentType @paymentDelivery="sendData" ref="childForm"
      /></b-col>
      <b-col cols="12" class="d-flex justify-content-end mt-4"
        ><b-button @click="saveBookData">{{
          $t("survey.save")
        }}</b-button></b-col
      >
    </b-row>
    <CreateUser @searchUser="telNumberEmit" :telNumber="telNumber" />
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
import { adminRoot } from "../../../../constants/config";

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
      orderBook: {
        user_id: null,
        bookData: [],
        couponCode: null,
        paymentMethod: null,
        deliveryMethod: null,
        deliveryAddress: null,
      },
    };
  },
  methods: {
    ...mapActions(["FETCH_UCER_DATA", "CREATE_ORDER_BOOK"]),

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
          this.orderBook.user_id = this.GET_UCER_DATA.result.data[0].id;
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
      this.orderBook.paymentMethod = payment;
      this.orderBook.deliveryMethod = delivery;
      this.orderBook.deliveryAddress = deliveryAddress;
    },
    // kitob haqidagi input malumotlari  bola companentadan olib kelindi

    bookData(id, quantity) {
      this.orderBook.bookData = this.orderBook.bookData.map((items) => {
        if (items.id == id) {
          return { ...items, orderQuantity: quantity };
        }
        return items;
      });
    },

    // kitob datalarini emit qilib bola companentada olib kelindi
    selectBook(item) {
      const bookExists = this.orderBook.bookData.some((e) => e.id === item.id);
      if (!bookExists) {
        this.orderBook.bookData.push(item);
      }
    },

    couponData(coupon) {
      this.orderBook.couponCode = coupon;
    },

    saveBookData() {
      if (this.orderBook.user_id !== null && this.orderBook.bookId !== null) {
        const validationPromises =
          this.$refs.bookQuantityValidate.$refs.bookOrder.map((bookOrder) => {
            return bookOrder.validate();
          });

        Promise.all(validationPromises).then((results) => {
          const allValid = results.every((val) => val);
          if (allValid) {
            this.$refs.childForm.$refs.payment.validate().then((success) => {
              if (success) {
                this.CREATE_ORDER_BOOK(this.orderBook).then((res) => {
                  if (res.data.message == "Success") {
                    this.$notify(
                      "success",
                      this.$t("categoryaFile.successful")
                    );
                    console.log(res.data.result);
                    this.$router.push(`${adminRoot}/orderdata/${res.data.result}`);
                    // this.$router.push({
                    //   path: `${adminRoot}/orderdata`,
                    //   query: { orderData: res.data },
                    // });
                  }
                });
              } else {
                this.$notify("error", this.$t("createBook.bookRequrid"));
              }
            });
          } else {
            this.$notify("error", this.$t("createBook.bookRequrid"));
          }
        });
      } else {
        this.$notify("error", this.$t("createBook.warning"));
      }
    },
  },
  computed: {
    ...mapGetters(["GET_UCER_DATA"]),
  },
};
</script>
<style></style>
