<template>
  <div>
    <!-- ----------------------------to'lov turi---------------------------- -->
    <ValidationObserver ref="payment">
      <b-row class="card p-4 mt-3"
        ><h2>To'lov turi</h2>
        <b-col cols="12">
          <ValidationProvider
            #default="{ errors }"
            rules="required"
            name="to'lov turi"
          >
            <b-form-radio
              v-model="selected"
              @change="paymentDelivery"
              value="cash"
              >Naqd</b-form-radio
            >
            <b-form-radio
              v-model="selected"
              @change="paymentDelivery"
              value="card"
              >karta</b-form-radio
            >
            <p class="text-danger">{{ errors[0] }}</p>
          </ValidationProvider>
        </b-col>
      </b-row>
 

    <!-- -----------------------------------yetgazib berish----------------------------------- -->
    <b-row class="card p-4 mt-3"
      ><h2>Yetgazib berish</h2>
      <b-col cols="12">
        <ValidationProvider
          #default="{ errors }"
          rules="required"
          name="yetgzib berish"
        >
          <b-form-radio
            @change="paymentDelivery"
            v-model="todeliver"
            value="bts"
            >BTS
          </b-form-radio>
          <b-form-radio
            @change="paymentDelivery"
            v-model="todeliver"
            value="yandex"
            >Yandex.Taxi</b-form-radio
          >
          <b-form-radio
            @change="paymentDelivery"
            v-model="todeliver"
            value="self "
            >Self
          </b-form-radio>
          <p class="text-danger">{{ errors[0] }}</p>
        </ValidationProvider>

        <ValidationProvider
        #default="{errors}"
        rules="required"
        name="yetgazib berish manzili"
        >
          <b-form-group
            class="mt-3"
            label="yetgazib berish manzilini aniqroq kiriting"
          >
            <b-form-input @change="paymentDelivery" v-model="deliveryAddress"
          /></b-form-group>
          <p class="text-danger">{{ errors[0] }}</p>
        </ValidationProvider>
      </b-col>
    </b-row>
  </ValidationObserver>
  </div>
</template>
<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { required } from "../../../../../utils/validations/validations";
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      required,
      selected: null,
      todeliver: null,
      deliveryAddress: null,
    };
  },
  methods: {
    validateForm() {
      this.$refs.payment.validate();
    },
    paymentDelivery() {
      this.$emit(
        "paymentDelivery",
        this.selected,
        this.todeliver,
        this.deliveryAddress
      );
    },
  },
};
</script>
<style></style>
