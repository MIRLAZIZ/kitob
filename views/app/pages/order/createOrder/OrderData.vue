<template>
  <div>
    <!-- foydalanuvchi ismi familiyasi  telifon nomeri yetgazib berish manzili  to'lov summasi kitob nomi -->
    <b-row class="card p-4 mt-3" ref="printContent">
      <h2>Buyurtma qabul qiluvchi:</h2>
      <b-col cols="12">
        <div class="col-md-6 mt-3">
          <div class="list-group">
            <div class="list-group-item">
             <span>{{ $t('createBook.Name') }}</span>
              <span class="text-primary" v-if="userData">{{
                userData.name
              }}</span>
            </div>
            <div class="list-group-item">
              Email:
              <span v-if="userData"> {{ userData.email }}</span>
            </div>
            <div class="list-group-item">
              Phone:
              <span v-if="userData"> {{ userData.telNumber }}</span>
            </div>
            <div class="list-group-item">
              Address:
              <span v-if="userData">{{ userData.dilever }}</span>
            </div>
            <div class="list-group-item">
              to'lov turi:
              <span v-if="userData">{{ userData.tolov }}</span>
            </div>

            <div class="list-group-item">
              tolov summasi:
              <span v-if="userData">{{ userData.tolovJami }}</span>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    <div class="d-flex justify-content-end mt-3">   <b-button @click="printPage"> printer</b-button></div>
 
  </div>
</template>
<script>
export default {
  data() {
    return {
      userData: {
        name: "Mirtolipov Mirlaziz",
        telNumber: 998936284882,
        dilever: "tepa masjid",
        tolov: "naqd",
        tolovJami: 20000,
      },
    };
  },
  methods: {
    printPage() {
      const printContent = this.$refs.printContent;
      const printWindow = window.open(" ", "_blanc");
      printWindow.document.write(printContent.innerHTML);
      printWindow.document.close();
      printWindow.print();
   
    },
  },
};
</script>
<style></style>
