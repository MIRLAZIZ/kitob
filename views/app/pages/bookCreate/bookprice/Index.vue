<template>
  <div class="px-3">
    <ValidationObserver ref="bookPrice">
      <!-- ------------------------------kitob narxi----------------------------------------- -->
      <b-row class="bg-white mt-5 p-3 forFonts">
        <b-col cols="2"><p class="fontWeght">Kitob naxi</p></b-col>
        <b-col cols="10">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptas earum consectetur voluptatem itaque nulla?</p>
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
      <b-row class="bg-white mt-3 p-3 forFonts">
        <b-col cols="2"><p class="fontWeght">Kitob og'irligi</p></b-col>
        <b-col cols="10">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptas earum consectetur voluptatem itaque nulla?</p>
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
      </b-row>
      <!-- ---------------kitob muqovasi-------------- -->

      <b-row class="bg-white mt-3 p-3 forFonts">
        <b-col cols="2"><p class="fontWeght">Kitob muqovasi</p></b-col>
        <b-col cols="10">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptas earum consectetur voluptatem itaque nulla?</p>
          <b-row
            v-for="(item, index) in participants"
            :key="index"
            class="mt-2"
          >
            <b-col cols="3">
              <v-select v-model="item.participantRol" :options="cover"
            /></b-col>
            <b-col cols="4">
              <b-input-group class="" append="so'm">
                <b-form-input type="number" v-model="item.cover"></b-form-input>
              </b-input-group>
            </b-col>

            <b-col cols="3"
              ><b-button
                variant="white"
                class="border"
                @click="deletPraticipandts(item.id)"
                >O'chirish
              </b-button></b-col
            >
          </b-row>
          <span v-show="participants.length !== 2">
            <b-button
              variant="white"
              class="border mt-3"
              @click="addParticipant"
              >Boshqasini qo'shing</b-button
            ></span
          >
        </b-col>
      </b-row>
      <!-- -----------------------Sahifalar soni--------------- -->
      <b-row class="bg-white mt-3 p-3 forFonts">
        <b-col cols="2"><p class="fontWeght">Sahifalar soni</p></b-col>
        <b-col cols="10">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptas earum consectetur voluptatem itaque nulla?</p>
          <b-input-group class="w-50">
            <b-form-input type="number"></b-form-input> </b-input-group
        ></b-col> </b-row
    ></ValidationObserver>
    <div class="d-flex justify-content-end mt-3">
      <b-button variant="success" class="ml-1" @click="bookPriceSend"
        >next</b-button
      >
    </div>
  </div>
</template>
<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { required } from "../../../../../utils/validations/validations.js";
export default {
  components: {
    vSelect,
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      required,
      participants: [
        {
          id: 1,
          participantRol: null,
          cover: null,
          weight: null,
        },
      ],
      book: {
        price: null,
        discount: null,
      },
      cover: ["Qatiq muqovali", "Yumshoq muqovali"],
    };
  },

  methods: {
    addParticipant() {
      let participant = {
        id: this.participants.length + 1,
        participantRol: null,
        cover: null,
      };
      this.participants.push(participant);
    },
    deletPraticipandts(id) {
      if (this.participants.length > 1) {
        this.participants = this.participants.filter((c) => c.id !== id);
      } else {
        this.participants[0].participantRol = null;
        this.participants[0].cover = null;
      }
    },

    bookPriceSend() {
      this.$refs.bookPrice.validate().then((success) => {
        if (success) {
        //   this.CREATE_BOOK(this.book);

        console.log('success');
        } else {
          console.log("xatooooooooooooooooooo");
        }
      });
    },
  },
};
</script>
<style></style>
