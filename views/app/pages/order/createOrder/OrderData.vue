<template>
  <div>
    {{ $route.params.id }}
    {{ getCurrentOrder }}
    <pre> {{ this.$route.query.orderData }}</pre>
    <b-row class="card p-4 mt-3" ref="printContent">
      <!-- <b-row class="card p-4 mt-3">
        <h2>{{ $t("createBook.OrderTaker") }}</h2>
        <b-col cols="12">
          <div class="col-md-6 mt-3">
            <div class="list-group">
              <div class="list-group-item">
                <span>{{ $t("createBook.Name") + ": " }}</span>
                <span class="text-primary">{{
                  // getCurrentOrder.user_name
                }}</span>
              </div>
              <div class="list-group-item">
                <span>{{ $t("createBook.email") + ": " }}</span>
                <span v-if="userData[0]"> {{ getCurrentOrder.email }}</span>
              </div>
              <div class="list-group-item">
                <span>{{ $t("createBook.telephone") + ": " }}</span>
                <span v-if="userData[0]"> {{ getCurrentOrder.phone }}</span>
              </div>
              <div class="list-group-item">
                <span>{{ $t("createBook.address") + ": " }}</span>
                <span v-if="userData[0]">{{ getCurrentOrder.address }}</span>
              </div>
            </div>
          </div>
        </b-col>
      </b-row> -->

      <b-table :fields="fields" striped hover :items="getCurrentOrder.book" responsive>
        <!-- <template #cell(bookData.name)="data">
        <pre> {{ data.item }}</pre>
       
      </template> -->
      </b-table>
    </b-row>
    <div class="d-flex justify-content-end mt-3">
      <b-button @click="printPage"> printer</b-button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      userData: [],
      fields: [
       

        { key: "name", label: "kitob nomi" },
        { key: "author", label: "mullifi" },
        { key: "cover", label: "muqova turi" },
        { key: "price", label: "kitob narxi" },
        { key: "orderQuantity", label: "kitob soni" },
      ],
    };
  },
  methods: {
    ...mapActions(["getTheOrder"]),
    printPage() {
      const printContent = this.$refs.printContent;
      const printWindow = window.open(" ", "_blanc");
      printWindow.document.write(printContent.innerHTML);
      printWindow.document.close();
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
<style></style>
