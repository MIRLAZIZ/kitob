<template>
  <div class="px-3">
    <validation-observer ref="step2">
      <!-- --------------------elektron kitobi ISBN-------------------- -->
      <b-row class="bg-white mt-4 p-3 forFonts">
        <b-col cols="2"><p class="fontWeght">Elektron kitobi ISBN</p></b-col>
        <b-col cols="10">
          <p>
            ISBN (ixtiyoriy) Kindle elektron kitoblarida ISBN bo'lishi shart
            emas. ISBN nima?
          </p>
          <b-form-input class="mb-2" />
          <b-form-group label="Nashriyotchi (ixtiyoriy)">
            <b-form-input v-model="book.isbn" />
          </b-form-group>
        </b-col>
      </b-row>

      <!-- ---------------------------------------------Tavsif------------------------------------ -->

      <b-row class="bg-white p-3 mt-2 forFonts">
        <b-col cols="2"><p class="fontWeght">Tavsif</p></b-col>
        <b-col cols="10"
          ><p>
            Kitobingizni umumlashtiring. Bu sizning Amazondagi mahsulotingiz
            tavsifi bo'ladi, shuning uchun mijozlar kitobingiz haqida ko'proq
            bilib olishlari mumkin.
            <span
              class="text-info"
              v-b-popover.hover.bottom="
                'Ta\'rifingizni formatlash uchun matn muharriri yoki asosiy HTML dan foydalanishingiz mumkin. Siz qalin, kursiv yoki yangi paragraflar yaratishingiz mumkin. Buni qanday qilish haqida batafsil ma\'lumot uchun Kitob tavsifi qo\'llanmamizga tashrif buyuring .'
              "
              ><span class="hoverData"
                >Tavsifni qanday formatlashim mumkin?
                <i
                  class="simple-icon-arrow-down"
                  style="font-size: 7px" /></span
            ></span>
          </p>
          <validation-provider
            #default="{ errors }"
            name="tafsif"
            rules="required"
          >
            <small class="text-danger">{{ errors[0] }}</small>
            <editor
              v-model="book.description"
              initialValue
              :init="{
                height: 300,
                menubar: false,
              }"
            ></editor>
          </validation-provider>
        </b-col>
      </b-row>

      <!-- --------------------------------------Kalit so'zlari-------------------------------------- -->

      <b-row class="bg-white mt-2 p-3 forFonts">
        <b-col cols="2"><p class="fontWeght">Kalit so'zlar</p></b-col>
        <b-col cols="10">
          <p>
            Kitobingizni tavsiflovchi 7 tagacha qidiruv kalit so'zlarini
            kiriting.
            <span
              class="text-info"
              v-b-popover.hover.bottom="
                'Qidiruv kalit so\'zlari o\'quvchilarga Amazon saytini ko\'rib chiqishda kitobingizni topishga yordam beradi. Siz kitobingizni tavsiflovchi va uning mazmuniga mos keladigan kalit so\'zlarni yoki qisqa iboralarni kiritishingiz mumkin. Eng yaxshi kalit so\'zlar sarlavha, toifa yoki tavsifdagi so\'zlarni takrorlamaydigan so\'zlardir, chunki ular o\'quvchilarga kitobingizni topishga yordam berish uchun allaqachon ishlatilgan. Kalit so\'zlarning ayrim turlari taqiqlangan va kontent sotuvdan olib tashlanishiga olib kelishi mumkin. KDP kalit so\'z qoidalari haqida ko\'proq bilib oling .'
              "
              ><span class="hoverData">
                Kalit so'zlarni qanday tanlash mumkin?
                <i
                  class="simple-icon-arrow-down"
                  style="font-size: 7px" /></span
            ></span>
          </p>
          <p><b>Kalit so'zlaringiz</b> (ixtiyoriy)</p>

          <b-row>
            <b-col cols="6"
              ><b-form-input v-model="book.keywords.keyword1"
            /></b-col>
            <b-col cols="6"
              ><b-form-input v-model="book.keywords.keyword2"
            /></b-col>
            <b-col cols="6" class="mt-3"
              ><b-form-input v-model="book.keywords.keyword3"
            /></b-col>
            <b-col cols="6" class="mt-3"
              ><b-form-input v-model="book.keywords.keyword4"
            /></b-col>
            <b-col cols="6" class="mt-3"
              ><b-form-input v-model="book.keywords.keyword5"
            /></b-col>
            <b-col cols="6" class="mt-3"
              ><b-form-input v-model="book.keywords.keyword6"
            /></b-col>
            <b-col cols="6" class="mt-3"
              ><b-form-input v-model="book.keywords.keyword7"
            /></b-col>
          </b-row>
        </b-col>
      </b-row>
    </validation-observer>
    <div class="d-flex justify-content-end mt-3">
      <b-button variant="success" class="ml-1" @click="bookContentSend"
        >next</b-button
      >
    </div>
  </div>
</template>
<script>
import { Cropper } from "vue-advanced-cropper";
import Editor from "@tinymce/tinymce-vue";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { required } from "../../../../../utils/validations/validations.js";

export default {
  components: {
    Cropper,
    Editor,
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      required,
      book: {
        isbn: null,
        description: null,
        keywords: {
          keyword1: null,
          keyword2: null,
          keyword3: null,
          keyword4: null,
          keyword5: null,
          keyword6: null,
          keyword7: null,
        },
      },
    };
  },

  methods: {
    bookContentSend() {
      this.$refs.step2.validate().then((success) => {
        if (success) {
          //   this.CREATE_BOOK(this.book);
          this.$emit("stepOne", 3);
          console.log("success");
        } else {
          console.log("xatooooooooooooooooooo");
        }
      });
    },
  },
  mounted() {},
};
</script>

<style>
.borderDashed {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 130px;
  border: 3px dashed #c8c8c8ff;
  text-align: center;
}
.forBorder {
  width: 100%;
  border: 2px solid #1196abff;
  border-radius: 10px;
  border-left: 13px solid #1196abff;
  padding: 20px;
  margin-top: 10px;
}

.cropper {
  height: 250px;
  background: #ddd;
}

.crop_block {
  position: relative;
}

.btn_crop {
  position: absolute;
  top: 5px;
  right: 5px;
  border: none;
  border-radius: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #000;
  background: transparent;
  padding: 0;
}

.btn_crop i {
  position: relative;
}

.btn_crop::before {
  content: "";
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0;
  bottom: 0;
  -webkit-filter: blur(20px);
  -moz-filter: blur(20px);
  -o-filter: blur(20px);
  -ms-filter: blur(20px);
  filter: blur(1px);
  opacity: 1;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.8);
}
</style>
