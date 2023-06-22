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

          <span
            v-if="
              GET_BOOKS_SEARCH.result &&
              GET_BOOKS_SEARCH.result.books &&
              GET_BOOKS_SEARCH.result.books[0] &&
              GET_BOOKS_SEARCH.result.books[0].name
            "
          >
            <b-row
              v-for="(book, index) in GET_BOOKS_SEARCH.result.books"
              :key="index"
            >
              <b-col class="bookHover" cols="12" @click="bookSelect(book.id)"
                ><span>{{ book.name }}</span>
              </b-col>
            </b-row>
          </span>

          <h3
            v-show="
              GET_BOOKS_SEARCH.result &&
              GET_BOOKS_SEARCH.result.books &&
              !GET_BOOKS_SEARCH.result.books[0] &&
              showBookData
            "
            class="text-danger"
          >
            Siz qidirgan kitob ombordan topilmadi
          </h3>
        </b-col>

        <b-col cols="12" v-if="bookData.length">
          <b-row
            v-for="(book, index) in bookData"
            :key="index"
            class="border mt-2 pt-3 pr-3"
          >
            <b-col cols="5">
              <label for="">{{ $t("forms.book") }}</label>
              <h6 class="text-dark mb-0">
                <span v-if="book && book.name">{{ book.name }}</span>
              </h6>
              <p class="text-muted text-small mb-0">
                <span v-if="book && book.author && book.author"
                  >({{ book.author }})
                </span>
              </p>
            </b-col>
            <b-col cols="7" class="">
              <b-row>
                <!-- ------------------------kitob muqovasi------------------------ -->

                <b-col cols="3" class="p-0" v-if="book && book.cover"
                  ><label for="">{{ $t("book.cover") + ":" }}</label>
                  <!-- <b-form-select
                    class=""
                    v-model="cover"
                    @change="bookChange"
                    :options="bookData.cover"
                  ></b-form-select
                > -->
                  <p class="border bookData">{{ book.cover }}</p>
                </b-col>
                <!-- ------------------ombordagi kitoblar soni------------------ -->
                <b-col cols="3" class="p-0">
                  <label for="">obmordagi kitob soni:</label>
                  <p class="border bookData">{{ book.quantity }}</p>
                  <!-- <b-form-input disabled type="number" class="" /> -->
                </b-col>
                <!-- ------------------------kitob narxi------------------------ -->
                <b-col cols="3" class="p-0">
                  <label for="">{{ $t("forms.price") + ":" }}</label>
                  <p class="border bookData">{{ book.price }} so'm</p>
                </b-col>
                <!-- ------------------kitob soni------------------ -->

                <b-col cols="3" class="p-0">
                  <label for="">{{ $t("forms.quantity") + ":" }}</label>
                  <ValidationObserver ref="bookOrder">
                    <ValidationProvider
                      #default="{ errors }"
                      rules="required"
                      name="narxi"
                    >
                      <b-form-input
                        class="bookData"
                        type="number"
                        v-model="book.bookQuantity"
                        @change="bookChange(book.id, book.bookQuantity)"
                      />
                      <p class="text-danger">{{ errors[0] }}</p>
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
      <!-- --------------------------coupon serch-------------------------- -->
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
        <b-col cols="12" v-if="loading" class="text-center"
          ><b-spinner variant="primary" label="Spinning"></b-spinner
        ></b-col>

        <b-col cols="12">
          <p
            v-if="Get_COUPON_DATA && Get_COUPON_DATA.error"
            class="text-danger"
          >
            {{
              Get_COUPON_DATA.message == "Coupon not found"
                ? $t("createBook.couponNot")
                : $t("createBook.CouponExpired")
            }}
          </p>
          <div
            class="list-group"
            v-if="Get_COUPON_DATA && Get_COUPON_DATA.success"
          >
            <div class="list-group-item">
              <span
                >{{ $t("forms.type") }} :
                {{
                  Get_COUPON_DATA.result.type == "fixed" ? $t("nav.active") : ""
                }}
              </span>
            </div>

            <div class="list-group-item">
              <span
                >{{ $t("createBook.discount") }} :
                {{ Get_COUPON_DATA.result.amount }}
              </span>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
    <!-- {{ bookData }} -->
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
      bookQuantity: null,
      cover: null,
      options: [
        { value: "Qattiq", text: this.$t("createBook.hardCover") },
        { value: "yumshoq", text: this.$t("createBook.softCover") },
      ],
      search: null,
      bookData: [],
      coupon: null,
      loading: false,
      showBookData: true,
    };
  },
  methods: {
    ...mapActions(["SEARCH_BOOK_NAME", "SEARCH_COUPON"]),
    async couponSearch() {
      this.loading = true;
      await this.SEARCH_COUPON(this.coupon);
      this.loading = false;
      if (!this.Get_COUPON_DATA.error) {
        this.$emit("emitCoupon", this.coupon);
      }
    },
    bookSelect(id) {
      let selectedBook = this.GET_BOOKS_SEARCH.result.books.find(
        (book) => book.id === id
      );
      if (this.bookData.length) {
        this.bookData.forEach((item) => {
          if (item.id !== id) {
            this.bookData.push(selectedBook);
          }
        });
      } else {
        this.bookData.push(selectedBook)
      }

      // this.bookData.push(selectedBook)
      this.GET_BOOKS_SEARCH.result.books = [];
      this.showBookData = false;
      this.$emit("selectBook", this.bookData);
    },
    bookChange(id, quantity) {
      this.$emit("bookFunction", id, quantity);
    },

    validateForm() {
      this.$refs.bookOrder.validate();
    },
  },
  computed: {
    ...mapGetters(["GET_BOOKS_SEARCH", "Get_COUPON_DATA"]),
  },
  watch: {
    search(newValue, oldValue) {
      if (newValue.length > 3) {
        this.SEARCH_BOOK_NAME(newValue);
        this.showBookData = true;
      }
      if (newValue.length == 0) {
        this.showBookData = false;
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
