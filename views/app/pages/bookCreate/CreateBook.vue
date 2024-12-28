<template>
  <div>
    <b-row class="">
      <b-col cols="12" class="mt-2">
        <h1>Nima yaratmoqchisiz?</h1>
      </b-col>
    </b-row>

    <b-row class="createFlex">
      <b-col class="border createData mt-2 pt-2 ml-2" v-for="(createData, index) in crateType" :key="index">
        <div class="d-flex justify-content-center imgHeight">
          <img :src="createData.img" :style="{
            width: createData.id === 2 ? '70px' : '80px',
          }" />
        </div>
        <div style="height: 100px" class="mb-5">
          <h4 class="mt-2 text-center">{{ createData.title }}</h4>
          <p class="text-center">{{ createData.description }}</p>
        </div>
        
        <div class="d-flex justify-content-center">
          <b-button :disabled="createData.id === 4" variant="primary" v-b-modal.create_book
          @click="book_type = createData.type"><span>{{ createData.create }}</span></b-button>
          <!-- @click="createBook(createData.type)" -->
        </div>
      </b-col></b-row>
      
      
      
      <b-modal id="create_book" no-close-on-backdrop centered cancel-title="orqaga" @ok.prevent="createBook">
        {{book_type  }}
        <ValidationObserver ref="isPaid">
          <ValidationProvider 
          #default="{ errors }" 
          name="tafsif" 
          rules="required">
          <b-form-group label="Sotuv turini kiriting">
            <b-form-radio v-model="is_paid" :value=true>Pullik</b-form-radio>
            <b-form-radio v-model="is_paid" :value=false>Bepull</b-form-radio>
          </b-form-group>
          <p class="text-danger">{{ errors[0] }}</p>


        </ValidationProvider>
      </ValidationObserver>
    </b-modal>
  </div>
</template>
<script>
import { adminRoot } from "../../../../constants/config";
import { mapActions } from "vuex";
import { required } from '../../../../utils/validations/validations';
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      required,
      is_paid: null,
      book_type: null,
      crateType: [
        {
          id: 1,
          type: "ebook",
          title: "Elektron kitob",
          description:
            "Elektron kitoblaringizni EPUB formatida joylashtiring va biz bilan soting.  ",
          create: "Elektron kitob yaratish",
          img: "../../../../assets/img/book/elektronKitob.png",
        },
        {
          id: 2,
          type: "audio",
          title: "Audio kitob",
          description:
            " Audio kitoblar qo'shing va mijozlaringiz  sonini va sotuv samaradorligini  oshiring",
          create: "Audiokitob yaratish",
          img: "../../../../assets/img/book/big-audio-book.png",
        },
        {
          id: 3,
          type: "paper",
          title: "Qog'oz muqovali",
          description:
            "Sarlavhangizni chop etishda mavjud qiling va butun dunyo bo'ylab jo'natiladi.",
          create: "Qog'oz kitob yaratish",
          img: "../../../../assets/img/book/qogoz_muqova.png",
        },
        {
          id: 4,
          type: "ebook",
          title: "Seriya sahifasi",
          description:
            "Kitoblaringizni birgalikda to'plang va bitta Amazon Series sahifasini yarating .",
          create: "Seriya yaratish",
          img: "../../../../assets/img/book/seriya.png",
        },
        // {
        //   id: 5,
        //   title: "Tarjima kitoblar",
        //   description:
        //     "Kitoblaringizni birgalikda to'plang va bitta Amazon Series sahifasini yarating .",
        //   create: "Tarjima kitob yaratish",
        //   img: "../../../../srcs/assets/img/book/3.png",
        // },
      ],
    };
  },
  methods: {
    ...mapActions(["CREATE_BOOK"]),
     createBook() {
      let user = JSON.parse(localStorage.getItem("user"));
      let userId = user.id;
      let bookType = { book_type: this.book_type, user_id: userId, step: 1, is_paid: this.is_paid };
      this.$refs.isPaid.validate().then(success => {
        if(success) {
           this.CREATE_BOOK(bookType).then((res) => {
        if (res.data.message == "Success") {
          this.$bvModal.hide('create_book')
          this.$router.push(
            `${adminRoot}/bookDetils/${res.data.result.book_id}`
          );
        }
      })
        }

      })

        .catch(error => {
          this.$notify("error", error.message);
        })
    },
  },
  mounted() { },
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
