<template>
  <div>
    {{ getCurrentOrder }}
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.add-new')" />
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('menu.order')">
          <div class="errors" v-if="errorMsg">
            <div
              class="alert alert-danger"
              v-for="(err, key) in errorMsg"
              :key="key"
            >
              {{ err[0] }}
            </div>
          </div>
          <b-row>
            <div class="col-md-6">
              <div class="list-group">
                <div class="list-group-item">
                  Name:
                  <span class="text-primary">{{
                    invoiceFrom.user ? invoiceFrom.user.name : "No name"
                  }}</span>
                </div>
                <div class="list-group-item">
                  Email:
                  {{ invoiceFrom.user ? invoiceFrom.user.email : "no email" }}
                </div>
                <div class="list-group-item">
                  Phone:
                  {{ invoiceFrom.user ? invoiceFrom.user.phone : "no phone" }}
                </div>
                <div class="list-group-item">
                  Address:
                  {{
                    invoiceFrom.user ? invoiceFrom.user.address : "no address"
                  }}
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <b-button
                :class="{
                  'button-disabled':
                    (getCurrentOrder &&
                      getCurrentOrder.status === 'inprocess') ||
                    getCurrentOrder.status === 'delivered' ||
                    getCurrentOrder.status === 'completed',
                }"
                @click="fetchStatus('inprocess')"
                >{{ $t("createBook.inprocess") }}</b-button
              >
              <b-button
                :class="{
                  'button-disabled':
                    (getCurrentOrder &&
                      getCurrentOrder.status === 'delivered') ||
                    getCurrentOrder.status === 'completed',
                }"
                @click="fetchStatus('delivered')"
                >{{ $t("createBook.delivered") }}</b-button
              >
              <b-button
                :class="{
                  'button-disabled':
                    getCurrentOrder && getCurrentOrder.status === 'completed',
                }"
                @click="fetchStatus('completed')"
                >{{ $t("createBook.completed") }}</b-button
              >
              <b-button
                :class="{
                  'button-disabled':
                    getCurrentOrder && getCurrentOrder.status === 'canceled',
                }"
                @click="fetchStatus('canceled')"
                variant="danger"
                >{{ $t("createBook.canceled") }}</b-button
              >
              <div class="list-group text-right">
                <div class="">
                  <h3 class="text-primary text-uppercase">
                    <!-- {{ invoiceFrom.status }} -->
                    {{ getCurrentOrder.status }}
                  </h3>
                </div>
                <div class="">
                  <b-button
                    @click="gotoFargoOrder"
                    variant="primary"
                    size="lg"
                    class="top-right-button"
                    ><i class="iconsminds-checkout"></i>
                    {{ $t("pages.create-fargo-order") }}</b-button
                  >
                </div>
              </div>
            </div>
          </b-row>
        </b-card>
        <b-card class="mb-4" :title="$t('menu.invoice-items')">
          <b-row>
            <div class="col-md-12">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Book</th>
                    <th>Type</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in invoiceFrom.items" :key="index">
                    <td>{{ item.booktype.book.name }}</td>
                    <td>{{ item.booktype.type }}</td>
                    <td>{{ numberFormat(item.amount) }}</td>
                  </tr>
                  <tr>
                    <td><strong>TOTAL</strong></td>
                    <td></td>
                    <td>
                      <strong>{{
                        numberFormat(invoiceFrom.total_amount)
                      }}</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-row>
        </b-card>
        <b-card class="mb-4" :title="$t('menu.shipping-costs')">
          <b-row>
            <div class="col-md-12">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Weight</th>
                    <th>Status</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(ship_cost, key) in invoiceFrom.shippingcosts"
                    :key="key"
                  >
                    <td>{{ ship_cost.name }}</td>
                    <td>{{ ship_cost.type }}</td>
                    <td>{{ ship_cost.weight }}</td>
                    <td class="text-upppercase">
                      <b-badge
                        pill
                        v-if="ship_cost.status == 'draft'"
                        variant="warning"
                      >
                        {{ ship_cost.status }}
                      </b-badge>
                      <b-badge
                        pill
                        v-if="ship_cost.status == 'canceled'"
                        variant="danger"
                      >
                        {{ ship_cost.status }}
                      </b-badge>
                      <b-badge
                        pill
                        v-if="ship_cost.status == 'success'"
                        variant="success"
                      >
                        {{ ship_cost.status }}
                      </b-badge>
                    </td>
                    <td>{{ numberFormat(ship_cost.price) }}</td>
                  </tr>
                  <tr>
                    <td><strong>TOTAL</strong></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <strong>{{
                        numberFormat(getShippingCostsTotal())
                      }}</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-row>
        </b-card>
        <b-card
          class="mb-4"
          :title="$t('menu.order-details')"
          v-if="invoiceFrom.fargo"
        >
          <b-row>
            <div class="col-md-12">
              <div class="success" v-if="successMsg">
                <div class="alert alert-success">{{ successMsg }}</div>
              </div>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Order Number</th>
                    <th>Address</th>
                    <th>Package</th>
                    <th>Status</th>
                    <th>Option</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(order, index) in invoiceFrom.fargo" :key="index">
                    <td>{{ order.order_id }}</td>
                    <td>{{ order.order_number }}</td>
                    <td>{{ order.data.recipient_data.address }}</td>
                    <td>
                      {{ order.data.package_type.name }}
                      <br />
                      {{ order.data.package_type.description }}
                    </td>
                    <td>
                      <b-badge
                        pill
                        v-if="order.status == 'canceled'"
                        variant="danger"
                      >
                        {{ order.status }}
                      </b-badge>
                      <b-badge
                        pill
                        v-if="order.status == 'active'"
                        variant="success"
                      >
                        {{ order.status }}
                      </b-badge>
                    </td>
                    <td>
                      <button
                        class="btn btn-sm btn-primary"
                        @click="checkFargoOrder(order.order_number)"
                      >
                        <i class="iconsminds-24-hour"></i>
                        Check Status
                      </button>
                      <button
                        class="btn btn-sm btn-danger"
                        @click="cancelFargoOrder(order.order_id)"
                      >
                        <i class="iconsminds-delete-file"></i>
                        Cancel
                      </button>
                      <button
                        class="btn btn-sm btn-success"
                        @click="infoFargoOrder(order.data)"
                      >
                        <i class="iconsminds-folder"></i>
                        Info
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-row>
        </b-card>
      </b-colxx>
    </b-row>
    <!-- Modal for fargo statuses -->
    <b-modal ref="my-modal" size="lg" hide-footer title="Fargo order statuses">
      <div class="d-block text-center">
        <table
          class="table table-bordered table-striped"
          v-if="orderStatuses.total > 0"
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Status</th>
              <th>Status_desc</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, key) in orderStatuses.list" :key="key">
              <td>{{ value.id }}</td>
              <td>{{ value.status }}</td>
              <td>{{ value.status_desc }}</td>
              <td>{{ value.date }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </b-modal>
    <!-- /. end modal -->

    <!-- Modal for fargo data -->
    <b-modal
      ref="order-data-modal"
      size="xl"
      hide-footer
      title="Fargo order details"
    >
      <div class="d-block text-center table-responsive" v-if="orderData">
        <div class="card">
          <h3>Sender Data</h3>
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <th>actual_recipient_name</th>
                <th>chargeable_weight</th>
                <th>created_date</th>
                <th>currency</th>
                <th>customer</th>
                <th>customer merchant_type</th>
                <th>delivery_attempts</th>
                <th>device_details</th>
                <th>domestic</th>
                <th>id</th>
                <th>last_status_date</th>
                <th>logistic_type</th>
                <th>no_service_area</th>
                <th>order_number</th>
                <th>paid</th>
                <th>payer</th>
                <th>payment_type</th>
                <th>pickup_attempts</th>
                <th>pickup_date</th>
                <th>recipient_city_changed</th>
                <th>recipient_not_available</th>
                <th>status</th>
                <th>total_charge</th>
                <th>version</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ orderData.actual_recipient_name }}</td>
                <td>{{ orderData.chargeable_weight }}</td>
                <td>{{ orderData.created_date }}</td>
                <td>{{ orderData.currency.code }}</td>
                <td>{{ orderData.customer.name }}</td>
                <td>{{ orderData.customer.merchant_type }}</td>
                <td>{{ orderData.delivery_attempts }}</td>
                <td>{{ orderData.device_details }}</td>
                <td>{{ orderData.domestic }}</td>
                <td>{{ orderData.id }}</td>
                <td>{{ orderData.last_status_date }}</td>
                <td>{{ orderData.logistic_type }}</td>
                <td>{{ orderData.no_service_area }}</td>
                <td>{{ orderData.order_number }}</td>
                <td>{{ orderData.paid }}</td>
                <td>{{ orderData.payer }}</td>
                <td>{{ orderData.payment_type }}</td>
                <td>{{ orderData.pickup_attempts }}</td>
                <td>{{ orderData.recipient_city_changed }}</td>
                <td>{{ orderData.recipient_not_available }}</td>
                <td>{{ orderData.status }}</td>
                <td>{{ orderData.total_charge }}</td>
                <td>{{ orderData.version }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card">
          <h3>recipient_data</h3>
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <th>address</th>
                <th>address_type</th>
                <th>building</th>
                <th>city code</th>
                <th>city name</th>
                <th>city_code</th>
                <th>city_id</th>
                <th>country code</th>
                <th>country name</th>
                <th>country_id</th>
                <th>default_address</th>
                <th>landmark</th>
                <th>lat</th>
                <th>lon</th>
                <th>neighborhood name</th>
                <th>neighborhood_name</th>
                <th>phone</th>
                <th>street</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ orderData.recipient_data.address }}</td>
                <td>{{ orderData.recipient_data.address_type }}</td>
                <td>{{ orderData.recipient_data.city.code }}</td>
                <td>{{ orderData.recipient_data.city.name }}</td>
                <td>{{ orderData.recipient_data.city_code }}</td>
                <td>{{ orderData.recipient_data.city_id }}</td>
                <td>{{ orderData.recipient_data.country.code }}</td>
                <td>{{ orderData.recipient_data.country.name }}</td>
                <td>{{ orderData.recipient_data.country_id }}</td>
                <td>{{ orderData.recipient_data.default_address }}</td>
                <td>{{ orderData.recipient_data.landmark }}</td>
                <td>{{ orderData.recipient_data.lat }}</td>
                <td>{{ orderData.recipient_data.lon }}</td>
                <td>{{ orderData.recipient_data.name }}</td>
                <td>{{ orderData.recipient_data.neighborhood.name }}</td>
                <td>{{ orderData.recipient_data.neighborhood_name }}</td>
                <td>{{ orderData.recipient_data.phone }}</td>
                <td>{{ orderData.recipient_data.street }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </b-modal>
    <!-- /. end modal -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { adminRoot } from "../../../../constants/config";

export default {
  data() {
    return {
      errorMsg: null,
      shippingcostTotal: 0,
      successMsg: null,
      invoiceFrom: {},
      selected: null,
      statuses: [
        { value: null, text: "Please choose" },
        { value: "pending", text: "Pending" },
        { value: "canceled", text: "Canceled" },
        { value: "completed", text: "Completed" },
      ],
      orderStatuses: {},
      orderData: null,
    };
  },
  computed: {
    ...mapGetters(["getUzcardAlertMsg", "getCurrentOrder"]),
  },
  methods: {
    ...mapActions([
      "updateCoupon",
      "getTheOrder",
      "cancelOrderOfFargo",
      "createFargoOrder",
      "getFargoOrderStatus",
      "UPDATE_STATUS",
    ]),
    async onFromSubmit(event) {
      event.preventDefault();
    },
    async cancelFargoOrder(order_id) {
      await this.cancelOrderOfFargo(order_id);
      if (confirm("Are you sure?")) {
        if (this.getUzcardAlertMsg.error) {
          this.errorMsg = this.getUzcardAlertMsg.message;
        } else {
          location.reload();
        }
      }
    },
    async gotoFargoOrder() {
      let data = { invoice_id: this.invoiceFrom.id };
      await this.createFargoOrder(data);
      if (this.getUzcardAlertMsg.error) {
        this.errorMsg = this.getUzcardAlertMsg.message;
      } else {
        location.reload();
        // console.log('super');
      }
    },
    async checkFargoOrder(order_number) {
      let data = { order_number: order_number };
      await this.getFargoOrderStatus(data);
      if (this.getUzcardAlertMsg.error) {
        this.errorMsg = this.getUzcardAlertMsg.message;
      } else {
        this.orderStatuses = this.getUzcardAlertMsg.result;
        this.showModal();
      }
    },
    numberFormat(number) {
      // Create our number formatter.
      var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "UZS",
      });
      return formatter.format(number);
    },
    getShippingCostsTotal() {
      let total = 0;
      $.each(this.invoiceFrom.shippingcosts, function (key, value) {
        total = total + value.price;
      });
      return total;
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    infoFargoOrder(order_data) {
      this.orderData = order_data;
      console.log(this.orderData);
      this.$refs["order-data-modal"].show();
    },
    async fetchStatus(status) {
      await this.UPDATE_STATUS({ id: this.$route.params.id, status: status });
      await this.getTheOrder(this.$route.params.id);
    },
  },
  async mounted() {
    await this.getTheOrder(this.$route.params.id);
    this.invoiceFrom = await this.getCurrentOrder;
    this.selected = await this.invoiceFrom.status;
  },
};
</script>
<style>
.button-disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
