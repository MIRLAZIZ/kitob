<template>
  <div>
    {{ GET_BOOK }}
    <BookSteps :bookData="bookData" />
    <div class="px-3">
      <validation-observer ref="step2">
        <!-- --------------------elektron kitobi ISBN-------------------- -->
        <b-row class="bg-white mt-5 p-3 forFonts">
          <b-col cols="2"><p class="fontWeght">Elektron kitobi ISBN</p></b-col>
          <b-col cols="10">
            <p>
              ISBN (ixtiyoriy) Kindle elektron kitoblarida ISBN bo'lishi shart
              emas. ISBN nima?
            </p>

            <b-form-input class="mb-2" v-model="book.isbn" type="number" />
          </b-col>
        </b-row>

        <!-- ---------------------------------------------Tavsif------------------------------------ -->

        <b-row class="bg-white p-3 mt-3 forFonts">
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
              <p class="text-danger">{{ errors[0] }}</p>
              <editor
                :style="{ border: errors[0] ? '1px solid #E28275FF' : '' }"
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

        <!-- nashryot -->

        <!-- <b-row class="bg-white mt-5 p-3 forFonts">
          <b-col cols="2"><p class="fontWeght">Nashryot</p></b-col>
          <b-col cols="10">
            <validation-provider
              #default="{ errors }"
              name="publisher"
              rules="required"
            >
              <b-form-group label="Nashriyotchi">
                <b-form-input v-model="book.publisher" />
              </b-form-group>
              <p class="text-danger">{{ errors[0] }}</p>
            </validation-provider>
          </b-col>
        </b-row> -->

        <!-- --------------------------------------Kalit so'zlari-------------------------------------- -->

        <b-row class="bg-white mt-3 p-3 forFonts">
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
                ><b-form-input v-model="keywords.keyword1"
              /></b-col>
              <b-col cols="6"
                ><b-form-input v-model="keywords.keyword2"
              /></b-col>
              <b-col cols="6" class="mt-3"
                ><b-form-input v-model="keywords.keyword3"
              /></b-col>
              <b-col cols="6" class="mt-3"
                ><b-form-input v-model="keywords.keyword4"
              /></b-col>
              <b-col cols="6" class="mt-3"
                ><b-form-input v-model="keywords.keyword5"
              /></b-col>
              <b-col cols="6" class="mt-3"
                ><b-form-input v-model="keywords.keyword6"
              /></b-col>
              <b-col cols="6" class="mt-3"
                ><b-form-input v-model="keywords.keyword7"
              /></b-col>
              <b-col cols="6" class="mt-3"
                ><b-form-input v-model="keywords.keyword8"
              /></b-col>
            </b-row>
          </b-col>
        </b-row>
      </validation-observer>

      <div class="d-flex justify-content-end mt-3">
        <b-button variant="success" class="ml-1" @click="goBack">back</b-button>
        <b-button variant="success" class="ml-1" @click="bookContentSend"
          >next</b-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import { Cropper } from "vue-advanced-cropper";
import Editor from "@tinymce/tinymce-vue";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { required } from "../../../../../utils/validations/validations.js";
import BookSteps from "../BookSteps.vue";
import { adminRoot } from "../../../../../constants/config";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Cropper,
    Editor,
    ValidationObserver,
    ValidationProvider,
    BookSteps,
  },
  data() {
    return {
      required,
      book: {
        keywords: [],
        step: 3,
        isbn: null,
        user_id: null,
        book_id: null,
        description: null,
        type: null,
      },
      keywords: {
        keyword1: null,
        keyword2: null,
        keyword3: null,
        keyword4: null,
        keyword5: null,
        keyword6: null,
        keyword7: null,
        keyword8: null,
      },
      success: false,
      bookData: {},
    };
  },

  methods: {
    ...mapActions(["GET_BOOK_DATA", "CREATE_STEP_TWO", "CREATE_BOOK"]),
    bookContentSend() {
      this.forObject();
      this.$refs.step2.validate().then((success) => {
        if (success) {
          this.CREATE_STEP_TWO(this.book)
            .then((res) => {
              console.log(res.data.success);
              if (res.data.success) {
                this.$notify("success", this.$t("categoryaFile.successful"));
                this.$router.push(
                  `${adminRoot}/bookPrice/${this.$route.params.id}`
                );
              }
            })
            .catch((error) => {
              this.$notify("error", "Server Error: " + error.message);
            });
        } else {
          this.success = true;
          this.$notify("error", "Server Error: " + error.message);
        }
      });
    },
    forObject() {
      for (const key in this.keywords) {
        if (this.keywords[key] !== null) {
          this.book.keywords.push(this.keywords[key]);
        }
      }
    },
    goBack() {
      let bookType = {
        book_type: this.GET_BOOK.result.book_type,
        user_id: this.GET_BOOK.result.user_id,
        step: 1,
      };
      this.CREATE_BOOK(bookType).then(() => {
        this.$router.push(`${adminRoot}/bookDetils/${this.$route.params.id}`);
      });
    },
  },
  computed: {
    ...mapGetters(["GET_BOOK"]),
  },
  async mounted() {
    await this.GET_BOOK_DATA(this.$route.params.id)
      .then((res) => {
        this.book.user_id = this.GET_BOOK.result.user_id;
        this.book.book_id = this.GET_BOOK.result.book_id;
        this.book.isbn = this.GET_BOOK.result.isbn;
        this.book.description = this.GET_BOOK.result.description;
        this.book.type = this.GET_BOOK.result.book_type;

        this.GET_BOOK.result.keyword.forEach((data, index)=> {
          this.keywords[`keyword${index + 1}`] = data 
        });

        let book_data = {
          book_type: this.GET_BOOK.result.book_type,
          step: this.GET_BOOK.result.step,
        };
        this.bookData = book_data;
      })
      // .catch((error) => {
      //   this.$notify("error", "Server Error: " + error.message);
      // });
  },
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
