<template>
  <div>
    <b-row>
      <b-col cols="12" class="mt-2"><h1>Nima yaratmoqchisiz?</h1></b-col>
    </b-row>

    <b-row class="createFlex">
      <b-col
        class="border createData mt-2 pt-2 ml-2"
        v-for="(createData, index) in crateType"
        :key="index"
      >
        <div class="d-flex justify-content-center imgHeight">
          <img
            :src="createData.img"
            :style="{
              width: createData.id === 2 ? '70px' : '80px',
            }"
          />
        </div>
        <div style="height: 100px" class="mb-5">
          <h4 class="mt-2 text-center">{{ createData.title }}</h4>
          <p class="text-center">{{ createData.description }}</p>
        </div>

        <div class="d-flex justify-content-center">
          <b-button variant="primary" @click="createBook(createData.id)"
            ><span>{{ createData.create }}</span></b-button
          >
        </div>
      </b-col></b-row
    >
  </div>
</template>
<script>
// import { BRow, BCol, BImg, BButton } from "bootstrap-vue";
import { adminRoot } from "../../../../constants/config";

export default {
  components: {},
  data() {
    return {
      crateType: [
        {
          id: 1,
          title: "Elektron kitob",
          description:
            "Kindle va boshqa qo'l qurilmalarida raqamli nashr qiling . Komikslar va mangalarni o'z ichiga oladi.",
          create: "Elektron kitob yaratish",
          img: "../../../../srcs/assets/img/book/elektronKitob.png",
        },
        {
          id: 2,
          title: "Audio kitob",
          description:
            "Sarlavhangizni chop etishda mavjud qiling va butun dunyo bo'ylab jo'natiladi.",
          create: "Audiokitob yaratish",
          img: "../../../../srcs/assets/img/book/big-audio-book.png",
        },
        {
          id: 3,
          title: "Qog'oz muqovali",
          description:
            "Sarlavhangizni chop etishda mavjud qiling va butun dunyo bo'ylab jo'natiladi.",
          create: "Qog'oz kitob yaratish",
          img: "../../../../srcs/assets/img/book/qogoz_muqova.png",
        },
        {
          id: 4,
          title: "Seriya sahifasi",
          description:
            "Kitoblaringizni birgalikda to'plang va bitta Amazon Series sahifasini yarating .",
          create: "Seriya yaratish",
          img: "../../../../srcs/assets/img/book/seriya.png",
        },
        {
          id: 5,
          title: "Tarjima kitoblar",
          description:
            "Kitoblaringizni birgalikda to'plang va bitta Amazon Series sahifasini yarating .",
          create: "Tarjima kitob yaratish",
          img: "../../../../srcs/assets/img/book/3.png",
        },
      ],
    };
  },
  methods: {
    createBook(id) {
      this.$router.push(`${adminRoot}/booksteps/${id}`);
    },
  },
};
</script>
<style>
.createData {
  height: 275px;
  background-image: linear-gradient(0deg, #5cb85c67, white, white);
  border-radius: 10px;
}
.createFlex {
  display: flex;
  justify-content: space-between;
}
.imgHeight {
  height: 70px;
}
</style>
