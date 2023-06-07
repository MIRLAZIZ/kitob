<template>
  <div>
    <div class="card mt-3">
      <b-row class="p-4">
        <b-col>
          <b-form-group label="kitob nomi bilan izlash">
            <b-input-group>
              <!-- <template #append>
                <b-input-group-text
                  ><i class="simple-icon-magnifier"
                /></b-input-group-text>
              </template> -->
              <b-form-input v-model="search" />
            </b-input-group>
          </b-form-group>
          <!-- <pre>
          {{ GET_BOOKS_SEARCH }}
</pre
          > -->
          <span
            v-if="
              GET_BOOKS_SEARCH.result &&
              GET_BOOKS_SEARCH.result.data &&
              GET_BOOKS_SEARCH.result.data[0] &&
              GET_BOOKS_SEARCH.result.data[0].name
            "
          >
            <b-row
              v-for="(book, index) in GET_BOOKS_SEARCH.result.data"
              :key="index"
            >
              <b-col class="bookHover" cols="12" @click="bookSelect(book.id)"
                ><span>{{ book.name }}</span>
              </b-col>
            </b-row>
          </span>

          <h3
            v-show="
              GET_BOOKS_SEARCH.result && GET_BOOKS_SEARCH.result.from == null
            "
            class="text-danger"
          >
            Siz qidirgan kitob ombordan topilmadi
          </h3>
        </b-col>
       

        <b-col cols="12"  >
          <b-row>
            <b-col cols="5" class="">
              <label for="">{{ $t("forms.book") }}</label>
              <h6 class="text-dark mb-0">
                <span v-if="bookData && bookData.name">{{
                  bookData.name
                }}</span>
              </h6>
              <p class="text-muted text-small mb-0">
                <span
                  v-if="
                    bookData && bookData.author[0] && bookData.author[0].fio
                  "
                  @change="bookChange(bookData.id)"
                  >({{ bookData.author[0].fio }})
                </span>
              </p>
            </b-col>
            <b-col cols="7" class="">
              <b-row>
                <!-- ------------------------kitob muqovasi------------------------ -->
                <b-col cols="3" class="p-0"
                  ><label for="">{{ $t("book.cover") + ":" }}</label>
                  <b-form-select
                    class=""
                    v-model="cover"
                    @change="bookChange"
                    :options="options"
                  ></b-form-select
                ></b-col>
                <!-- ------------------ombordagi kitoblar soni------------------ -->
                <b-col cols="3" class="p-0">
                  <label for="">obmordagi kitob soni:</label>
                  <p class="border bookData">10</p>
                  <!-- <b-form-input disabled type="number" class="" /> -->
                </b-col>
                <!-- ------------------------kitob narxi------------------------ -->
                <b-col cols="3" class="p-0">
                  <label for="">{{ $t("forms.price") + ":" }}</label>
                  <p class="border bookData">50000</p>
                </b-col>
                <!-- ------------------kitob soni------------------ -->

                <b-col cols="3" class="p-0">
                  <label for="">{{ $t("forms.quantity") + ":" }}</label>
                  <ValidationObserver ref="bookOrder">
                    <ValidationProvider
                    #default="{errors}"
                    rules="required"
                    name="narxi"
                    
                    >
                      <b-form-input
                        class="bookData"
                        type="number"
                        v-model="bookQuantity"
                        @change="bookChange"
                      />
                      <p class="text-danger"> {{ errors[0] }}</p>
                    </ValidationProvider>
                  </ValidationObserver>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
    <div class="card mt-3 p-4">
      <b-row>
        <b-col cols="10">
          <b-form-group label="kupon izlash">
            <b-form-input
              placeholer="kupon nomi"
              v-model="coupon"
            /> </b-form-group
        ></b-col>
        <b-col cols="2" class="d-flex align-items-center pt-2"
          ><b-button @click="couponSearch">izlash</b-button></b-col
        >
      </b-row>
    </div>
  </div>
</template>
<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { mapActions, mapGetters } from "vuex";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { required } from "../../../../../utils/validations/validations";

export default {
  components: {
    vSelect,
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      required,
      orderBook: {
        bookname: [],
        amout: 1,
      },
      bookPrice: 100000,
      bookQuantity: null,
      cover: null,
      options: [
        { value: "Qattiq", text: this.$t("createBook.hardCover") },
        { value: "yumshoq", text: this.$t("createBook.softCover") },
      ],
      search: null,
      bookData: null,
      coupon: null,
    };
  },
  methods: {
    ...mapActions(["SEARCH_BOOK_NAME", "SEARCH_COUPON"]),
    couponSearch() {
      this.SEARCH_COUPON(this.coupon);
    },
    bookSelect(id) {
      let selectedBook = this.GET_BOOKS_SEARCH.result.data.find(
        (book) => book.id === id
      );
      this.$emit("selectBook", selectedBook);
      this.bookData = selectedBook;
      this.GET_BOOKS_SEARCH.result.data = [];
    },
    bookChange() {
      this.$emit("bookFunction", this.bookPrice, this.bookQuantity, this.cover);
    },

    validateForm() {
      this.$refs.bookOrder.validate();
    },
  },
  computed: {
    ...mapGetters(["GET_BOOKS_SEARCH"]),
  },
  watch: {
    search(newValue, oldValue) {
      if (newValue.length > 3) {
        this.SEARCH_BOOK_NAME(newValue);
      }
    },
  },
};
</script>
<style>
.amout {
  display: flex;
  align-items: center;
  width: 115px;
  height: 40px;
  padding: 5px 5px;
}
.amoutPlyus {
  font-size: 30px;
}
.amoutPlyus:hover {
  cursor: pointer;
}
.InputAmout {
  width: 70px;
  text-align: center;
  border: none;
}
.bookHover:hover {
  cursor: pointer;
  background: #e7e7e7ff;
}
.bookHover {
  display: flex;
  align-items: center;
  height: 30px;
}
.bookData {
  height: 42px !important;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
