<template>
  <div>
    <!-- ----------------------------to'lov turi---------------------------- -->
    <ValidationObserver ref="payment">
      <b-row class="card p-4 mt-3"
        ><h2>{{ $t("createBook.payment") }}</h2>
        <b-col cols="12">
          <ValidationProvider
            #default="{ errors }"
            rules="required"
            :name="$t('createBook.payment')"
          >
            <b-form-radio
              v-model="selected"
              @change="paymentDelivery"
              value="cash"
              >{{ $t("createBook.cash") }}</b-form-radio
            >
            <b-form-radio
              v-model="selected"
              @change="paymentDelivery"
              value="card"
              >{{ $t("createBook.card") }}</b-form-radio
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
            :name="$t('createBook.delivery')"
          >
            <b-form-radio
              @change="paymentDelivery"
              v-model="todeliver"
              value="bts"
              >{{ $t("createBook.bts") }}
            </b-form-radio>

            <b-form-radio
              @change="paymentDelivery"
              v-model="todeliver"
              value="yandex"
            >
              {{ $t("createBook.yandex") }}
            </b-form-radio>

            <b-form-radio
              @change="paymentDelivery"
              v-model="todeliver"
              value="self"
              >{{ $t("createBook.self") }}
            </b-form-radio>

            <p class="text-danger">{{ errors[0] }}</p>
          </ValidationProvider>

          <ValidationProvider
            v-if="todeliver !== 'self'"
            #default="{ errors }"
            rules="required"
            :name="$t('createBook.diliveryAdress')"
          >
            <b-form-group class="mt-3" :label="$t('createBook.diliveryAdress')">
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
