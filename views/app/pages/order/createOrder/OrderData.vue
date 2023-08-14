<template>
  <div>

    <b-row class="card p-4 mt-3" id="printTable">
      <h2>{{ $t("createBook.OrderTaker") }}</h2>
      <b-col cols="12">
        <div class="col-md-6 mt-3">
          <div class="list-group">
            <div
              class="list-group-item"
              v-if="getCurrentOrder && getCurrentOrder.user_name"
            >
              <span>{{ $t("createBook.Name") + ": " }}</span>
              <span class="text-primary">{{ getCurrentOrder.user_name }}</span>
            </div>
            <div
              class="list-group-item"
              v-if="getCurrentOrder && getCurrentOrder.email"
            >
              <span>{{ $t("createBook.email") + ": " }}</span>
              <span> {{ getCurrentOrder.email }}</span>
            </div>
            <div
              class="list-group-item"
              v-if="getCurrentOrder && getCurrentOrder.phone"
            >
              <span>{{ $t("createBook.telephone") + ": " }}</span>
              <span> {{ getCurrentOrder.phone }}</span>
            </div>
            <div class="list-group-item" v-if="getCurrentOrder">
              <span>{{ $t("createBook.address") + ": " }}</span>
              <span>{{
                getCurrentOrder.deliveryAddress == null
                  ? $t("createBook.self")
                  : getCurrentOrder.deliveryAddress
              }}</span>
            </div>
            <div
              class="list-group-item"
              v-if="getCurrentOrder && getCurrentOrder.total_amount"
            >
              <span>{{ $t("createBook.total_amount") + ": " }}</span>
              <span>{{ getCurrentOrder.total_amount }} so'm</span>
            </div>

            <div
              class="list-group-item"
              v-if="getCurrentOrder && getCurrentOrder.paymentMethod"
            >
              <span>{{ $t("createBook.payment") + ": " }}</span>
              <span>{{ getCurrentOrder.paymentMethod }}</span>
            </div>
          </div>
        </div>
      </b-col>
      <b-table
        v-if="getCurrentOrder && getCurrentOrder.book"
        :fields="fields"
        striped
        hover
        :items="getCurrentOrder.book"
        responsive
        class="mt-5"
      >
        <template #head()="{ label }">
          {{ $t(label) }}
        </template>
        <template #cell(discount_percent)="data">
          {{ data.item.discount_percent }}%
        </template>
      </b-table>
    </b-row>

    <div class="d-flex justify-content-end mt-3">
      <b-button @click="$router.go(-1)">orqaga</b-button>
      <b-button class="mx-3" @click="printPage"> printer</b-button>
      <b-button
        :class="{
          'button-disabled':
            getCurrentOrder && getCurrentOrder.status === 'pending' ||
            getCurrentOrder.status === 'inprocess' ||
            getCurrentOrder.status === 'delivered' ||
            getCurrentOrder.status === 'completed',
        }"
        @click="pendingStatus"
        >tasdiqlash</b-button
      >
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { adminRoot } from "../.././../../../constants/config";
export default {
  data() {
    return {
      userData: [],
      fields: [
        { key: "name", label: "createBook.Name" },
        { key: "author", label: "mullifi" },
        { key: "cover", label: "muqova turi" },
        { key: "price", label: "kitob narxi" },
        { key: "quantity", label: "kitob soni" },
        { key: "discount_percent", label: "chegirma" },
        { key: "total_price", label: "jami" },
      ],
    };
  },
  methods: {
    ...mapActions(["getTheOrder", "UPDATE_STATUS"]),
    pendingStatus() {
      this.UPDATE_STATUS({ id: this.$route.params.id, status: "pending" }).then(
        (success) => {
          console.log(success, "tadam");
          this.$router.push(`${adminRoot}/order/default`);
        }
      );
    },

    printPage() {
      const printWindow = window.open(" ", "_blanc");

      const tableStyle = `
    <style>
      table {
        border-collapse: collapse;
        margin-top: 40px
      }
      th, td {
        border: 1px solid black;
        padding: 8px;
      }
    </style>
  `;

      const orderData = this.getCurrentOrder;
      let tableHtml = "<table>";
      tableHtml += `<tr><th>${this.$t(
        "createBook.Name"
      )}</th><th>Muallifi</th><th>Muqova turi</th><th>Kitob narxi</th><th>Kitob soni</th>
      <th>chegirma</th> <th>jami</th>
      </tr>`;
      for (const book of orderData.book) {
        tableHtml += `<tr><td>${book.name}</td><td>${book.author}</td><td>${book.cover}</td><td>${book.price}</td><td>${book.quantity}</td> <td>${book.discount_percent}</td> <td>${book.total_price}</td></tr>`;
      }
      tableHtml += "</table>";

      const userInfoHtml = `
    <h2>${this.$t("createBook.OrderTaker")}</h2>
    <div class="col-md-6 mt-3">
      <div class="list-group">
        <div class="list-group-item">
          <span>${this.$t("createBook.Name") + ": "}</span>
          <span class="text-primary">${orderData.user_name}</span>
        </div>
        <div class="list-group-item">
          <span>${this.$t("createBook.email") + ": "}</span>
          <span>${orderData.email}</span>
        </div>
        <div class="list-group-item">
          <span>${this.$t("createBook.telephone") + ": "}</span>
          <span>${orderData.phone}</span>
        </div>
        <div class="list-group-item">
          <span>${this.$t("createBook.address") + ": "}</span>
          <span>${
            orderData.deliveryAddress == null
              ? this.$t("createBook.self")
              : orderData.deliveryAddress
          }</span>
        </div>

        <div class="list-group-item">
          <span>${this.$t("createBook.payment") + ": "}</span>
          <span>${orderData.paymentMethod == "cash" ? "naqt" : "karta"}</span>
        </div>

        <div class="list-group-item">
          <span>${this.$t("createBook.total_amount") + ": "}</span>
          <span>
                  ${orderData.total_amount}</span>
        </div>

       


      </div>
    </div>
  `;

      printWindow.document.write(`
    <html>
      <head>
        ${tableStyle}
      </head>
      <body>
        ${userInfoHtml}
        ${tableHtml}
      </body>
    </html>
  `);
      printWindow.print();
    },
  },
  computed: {
    ...mapGetters(["getCurrentOrder"]),
  },
  async mounted() {
    await this.getTheOrder(this.$route.params.id);
  },
};
</script>
<style>
.button-disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
