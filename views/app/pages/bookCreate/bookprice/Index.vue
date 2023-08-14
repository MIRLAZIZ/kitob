<template>
  <div>
    <BookSteps :bookData="bookData" />

    <div class="px-3">
      <ValidationObserver ref="bookPrice">
        <!-- ---------------kitob muqovasi qarab narxi-------------- -->

        <b-row
          class="bg-white mt-3 p-3 forFonts"
          v-if="bookData && bookData?.book_type == 'paper'"
        >
          <b-col cols="2"
            ><p class="fontWeght">Kitob muqovasi va narxi</p></b-col
          >
          <b-col cols="10">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              voluptas earum consectetur voluptatem itaque nulla?
            </p>
            <b-row
              v-for="(item, index) in book.bookData"
              :key="index"
              class="mt-2"
            >
              <b-col cols="3">
                <ValidationProvider
                  #default="{ errors }"
                  name="kitob muqovasi"
                  rules="required"
                >
                  <v-select v-model="item.cover" :options="cover" />
                  <p class="text-danger mt-2">
                    {{ errors[0] }}
                  </p>
                </ValidationProvider>
              </b-col>

              <b-col cols="3">
                <ValidationProvider
                  #default="{ errors }"
                  name="kitob og'irligi"
                  rules="required"
                >
                  <b-input-group class="" append="so'm">
                    <b-form-input
                      type="number"
                      v-model="item.price"
                    ></b-form-input>
                  </b-input-group>

                  <p class="text-danger mt-2">
                    {{ errors[0] }}
                  </p>
                </ValidationProvider>
              </b-col>

              <b-col cols="3">
                <ValidationProvider
                  #default="{ errors }"
                  name="kitob o'girligi"
                  rules="required"
                >
                  <b-input-group
                    class=""
                    append="gramm"
                    :style="{ border: errors[0] ? '1px solid #E28275FF' : '' }"
                  >
                    <b-form-input type="number" v-model="item.weight" />
                  </b-input-group>

                  <p class="text-danger mt-2">
                    {{ errors[0] }}
                  </p>
                </ValidationProvider>
              </b-col>

              <b-col cols="2"
                ><b-button
                  variant="white"
                  class="border"
                  @click="deletPraticipandts(item.id)"
                  >O'chirish
                </b-button></b-col
              >
            </b-row>
            <span v-show="book.bookData.length !== 2">
              <b-button
                variant="white"
                class="border mt-3"
                @click="addParticipant"
                >Boshqasini qo'shing</b-button
              ></span
            >
          </b-col>
        </b-row>
        <!-- ------------------------------kitob narxi----------------------------------------- -->
        <b-row
          class="bg-white mt-5 p-3 forFonts"
          v-if="bookData?.book_type !== 'paper'"
        >
          <b-col cols="2"><p class="fontWeght">Kitob naxi</p></b-col>
          <b-col cols="10">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              voluptas earum consectetur voluptatem itaque nulla?
            </p>
            <ValidationProvider
              #default="{ errors }"
              name="kitob narxi"
              rules="required"
            >
              <b-input-group
                class="w-50"
                append="so'm"
                :style="{ border: errors[0] ? '1px solid #E28275FF' : '' }"
              >
                <b-form-input type="number" v-model="book.price" />
              </b-input-group>
              <p class="text-danger mt-2">
                {{ errors[0] ? $t("createBook.requiredPrice") : "" }}
              </p></ValidationProvider
            >
          </b-col>
        </b-row>
        <!-- -----------------------------------------Chegirma--------------------------------- -->

        <b-row class="bg-white mt-3 p-3 forFonts">
          <b-col cols="2"><p class="fontWeght">Chegirma</p></b-col>
          <b-col cols="10">
            <b-input-group class="w-50" append="%">
              <b-form-input
                type="number"
                v-model="book.discount"
              /> </b-input-group
          ></b-col>
        </b-row>
        <!-- -----------------------------kitob ogirligi----------------------- -->
        <!-- <b-row class="bg-white mt-3 p-3 forFonts">
          <b-col cols="2"><p class="fontWeght">Kitob og'irligi</p></b-col>
          <b-col cols="10">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              voluptas earum consectetur voluptatem itaque nulla?
            </p>
            <ValidationProvider
              #default="{ errors }"
              name="kitob o'girligi"
              rules="required"
            >
              <b-input-group
                class="w-50"
                append="gramm"
                :style="{ border: errors[0] ? '1px solid #E28275FF' : '' }"
              >
                <b-form-input type="number" v-model="book.weight" />
              </b-input-group>

              <p class="text-danger mt-2">
                {{ errors[0] ? $t("createBook.requiredTheft") : "" }}
              </p>
            </ValidationProvider>
          </b-col>
        </b-row> -->

        <!-- -----------------------Sahifalar soni--------------- -->
        <b-row
          class="bg-white mt-3 p-3 forFonts"
          v-if="bookData && bookData?.book_type == 'paper'"
        >
          <b-col cols="2"><p class="fontWeght">Sahifalar soni</p></b-col>
          <b-col cols="10">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              voluptas earum consectetur voluptatem itaque nulla?
            </p>

            <b-form-input type="number" v-model="book.numb_pages" />
            ></b-col
          >
        </b-row></ValidationObserver
      >

      <b-row v-show="success">
        <b-col cols="12" class="forBordered">
          <h3>Bo'sh qoldirilgan maydonni to'ldiring</h3></b-col
        >
      </b-row>
      <div class="d-flex justify-content-end mt-3">
        <b-button variant="success" class="ml-1" @click="$emit('stepValue', 2)"
          >back</b-button
        >
        <b-button variant="success" class="ml-1" @click="bookPriceSend"
          >next</b-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { required } from "../../../../../utils/validations/validations.js";
import BookSteps from "../BookSteps.vue";
import { mapActions, mapGetters } from "vuex";
import { adminRoot } from "../../../../../constants/config";

export default {
  components: {
    vSelect,
    ValidationObserver,
    ValidationProvider,
    BookSteps,
  },
  data() {
    return {
      book_type: null,
      required,

      book: {
        type:null,
        book_id: null,
        price: null,
        discount: null,
        numb_pages: null,
        step: 4,
        type: null,
        bookData: [
          {
            id: 1,
            cover: "Qattiq muqovali",
            price: null,
            weight: null,
          },
        ],
      },
      bookData: null,
      cover: ["Qattiq muqovali", "Yumshoq muqovali"],
      success: false,
    };
  },

  methods: {
    ...mapActions(["GET_BOOK_DATA", "CREATE_STEP_THIRD"]),
    addParticipant() {
      let participant = {
        id: this.book.bookData.length + 1,
        cover: "Qatiq muqovali",
        price: null,
        weight: null,
      };
      this.book.bookData.push(participant);
    },
    deletPraticipandts(id) {
      if (this.book.bookData.length > 1) {
        this.book.bookData = this.book.bookData.filter((c) => c.id !== id);
      } else {
        this.book.bookData[0].cover = null;
        this.book.bookData[0].price = null;
        this.book.bookData[0].weight = null;
      }
    },

    bookPriceSend() {
      this.$refs.bookPrice.validate().then((success) => {
        if (success) {
          this.CREATE_STEP_THIRD(this.book).then((res) => {
            if (res.data.success) {
              this.$notify("success", this.$t("categoryaFile.successful"));
              this.$router.push(`${adminRoot}/book/default`);
            }
          });
        } else {
          this.success = true;
        }
      });
    },
  },
  computed: {
    ...mapGetters(["GET_BOOK"]),
  },
  async mounted() {
    await this.GET_BOOK_DATA(this.$route.params.id).then(() => {
      if (this.GET_BOOK && this.GET_BOOK.result) {
        this.book.book_id = this.GET_BOOK.result.book_id;
        let book_data = {
          book_type: this.GET_BOOK.result.book_type,
          step: this.GET_BOOK.result.step,
        };
        this.bookData = book_data;
        this.book.type = this.GET_BOOK.result.book_type;
        this.book.book_id = this.GET_BOOK.result.book_id;
        this.book.type = this.GET_BOOK.result.book_type

      }
    });
  },
};
</script>
<style></style>
