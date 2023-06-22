<template>
  <div>
    <div class="px-3">
      <validation-observer ref="templateRef">
        <!-- --------------------------------------Qo'lyozma-------------------------------------- -->
        <b-row
          class="bg-white mt-5 p-3 forFonts"
          v-show="$route.params.id !== '3'"
        >
          <b-col cols="2"><p class="fontWeght">Qo'lyozma</p></b-col>
          <b-col cols="10">
            <p>
              KDP kontenti bo'yicha ko'rsatmalarimizni o'qing elektron
              kitobingiz uchun ichki kontentni o'z ichiga olgan KPF, EPUB yoki
              docx faylini yuklang. KDP-da qo'llab-quvvatlanadigan fayl turlari
              haqida ko'proq bilib oling .
            </p>

            <input
              type="file"
              ref="docsfile"
              class="d-none"
              :accept="getAcceptValue"
              @change="onFileChange"
            />

            <b-button @click="$refs.docsfile.click()" variant="primary"
              >Elektron kitob qo'lyozmasini yuklash</b-button
            >'
          </b-col>
        </b-row>

        <!-- Epub file -->

        <b-row
          v-show="$route.params.id !== '3'"
          class="bg-white mt-3 p-3 forFonts"
        >
          <b-col cols="2" class="fontWeght">EPUB fayli</b-col>
          <b-col cols="10">
            <p>
              EPUB raqamli kitoblar uchun eng mashhur fayl formati EPUB fayl
              formati ( elektron nashr uchun qisqartirilgan ) kengaytmasi
              bo'lgan elektron pochtasi formatidir .pub. Siz EPUB fayllarini
              yuklab olishingiz va smartfonlaringiz, planshetlaringiz, elektron
              o'quvchilaringiz yoki kompyuteringizdan ularni o'qishingiz mumkin.
              Ushbu erkin foydalanish mumkin bo'lgan elektron kitob standarti
              boshqa har qanday fayl formatidan ko'ra ko'proq qo'shimcha
              qurilmalar uchun elektron kitoblarni o'qiydi.
            </p>
            <div>
              <div style="position: relative" v-if="!book.epubfile">
                <input
                  ref="epub"
                  type="file"
                  class="d-none"
                  accept=".epub"
                  @change="setEpubFile($event, 'ebook')"
                />
                <b-button @click="$refs.epub.click()" variant="primary">
                  <i class="simple-icon-notebook"></i>
                  Epub file yuklang</b-button
                >

                <!-- <span>{{ $t("book.ebook") }}</span> -->
                <!-- <b-progress
                  v-if="progBarCount > 0"
                  :value="progBarCount"
                  max="100"
                  animated
                ></b-progress> -->
              </div>
              <div class="p-4 mt-3" style="position: relative" v-else>
                <label
                  class="form-group has-float-label jv_input_file_label jv_error_btn"
                  @click="deleteEpub"
                >
                  <i class="simple-icon-close"></i>
                </label>
                <span>{{ book.epubfile.name }}</span>
              </div>
            </div>
          </b-col>
        </b-row>

        <!-- ----------------------------Kindle elektron kitob qopqog'i---------------------------- -->
        <b-row
          class="bg-white mt-3 p-3 forFonts"
          :class="{ 'mt-5': $route.params.id === '3' }"
          ><b-col cols="2"
            ><p class="fontWeght">Elektron kitob muqovasi</p></b-col
          >
          <b-col cols="10">
            <p>
              Yaxshi o'quvchi tajribasi uchun kitob qopqog'ini tavsiya qilamiz.
              Siz Muqova yaratuvchi vositamizdan foydalanib muqova yaratishingiz
              yoki o'zingizning muqovangizni yuklashingiz mumkin. Muqova
              ko'rsatmalarimizga qarang.
              <br />
              <b>Sizda mavjud bo'lgan muqovani yuklang (faqat JPG/TIFF)</b>
            </p>

            <b-row>
              <b-col cols="3">
                <div
                  class="card mb-4 text-white crop_block"
                  v-if="params.coverImg !== null"
                >
                  <cropper
                    class="cropper"
                    :src="params.coverImg"
                    ref="cropperImgoptions"
                  ></cropper>
                  <button type="button" @click="cropImg('cropperImgoptions')">
                    <i class="simple-icon-crop"></i>
                  </button>
                </div>

                <div v-else class="borderDashed">
                  <small>Muqova yuklanmagan</small>
                </div></b-col
              >
              <b-col cols="9">
                <input
                  type="file"
                  ref="coverfile"
                  class="d-none"
                  @change="coverImgFile"
                />

                <b-button @click="$refs.coverfile.click()" variant="primary"
                  >Muqova faylingizni yuklang</b-button
                ></b-col
              >
            </b-row>
          </b-col></b-row
        >

        <!-- Til tanlash uchun -->
        <b-row class="p-3 bg-white forFonts mt-3">
          <b-col cols="2"><p class="fontWeght">Til</p></b-col>
          <b-col cols="10"
            ><p>
              Elektron kitobingizning asosiy tilini tanlang (kitob qaysi tilda
              yozilgan). Tillar haqida ko'proq bilib oling .
            </p>
            <validation-provider
              #default="{ errors }"
              name="name"
              rules="required"
            >
              <b-row>
                <b-col cols="3"
                  ><v-select
                    v-model="book.langueSelect"
                    label="name"
                    :options="langueData"
                /></b-col>
              </b-row>

              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider></b-col
          >
        </b-row>

        <!-- ---------------------------------Book Title---------------------------- -->
        <b-row class="bg-white mt-3 p-3 forFonts">
          <b-col clos="2"><p class="fontWeght">Kitob nomi</p></b-col>
          <b-col cols="10"
            ><p>
              Sarlavhangizni kitob muqovasida ko'rsatilganidek kiriting.
              Kitobingiz chop etilgandan keyin bu maydonni o'zgartirib
              bo'lmaydi. Kitob nomlari haqida ko'proq bilib oling .
            </p>
            <b-form-group label="Kitob nomi" class="mb-3"
              ><validation-provider
                #default="{ errors }"
                name="lastName"
                rules="required"
              >
                <b-form-input
                  v-model="book.bookTitle"
                  :style="{ border: errors[0] ? '1px solid #E28275FF' : '' }"
                />
                <p class="text-danger">{{ errors[0] }}</p>
              </validation-provider></b-form-group
            >
            <b-form-group label="Subtitr (ixtiyoriy)"
              ><b-form-input v-model="book.subTitle"
            /></b-form-group>
          </b-col>
        </b-row>

        <!-- ---------------------------------Nashr raqami --------------------------------------- -->
        <b-row class="bg-white p-3 mt-3">
          <b-col cols="2"><p class="fontWeght">Nashr raqami</p></b-col>
          <b-col cols="10">
            <p>
              Agar bu nom mavjud kitobning yangi nashri bo'lsa, nashr raqamini
              ko'rsatishingiz mumkin.
              <span
                class="text-info"
                v-b-popover.hover.bottom="
                  'Nashr - bu kitobning ma\'lum bir versiyasi. Nashr raqami o\'quvchilarga kitobning asl nusxasi yoki yangilangan versiyasi ekanligini bildiradi. Agar siz ushbu kitobni birinchi marta nashr qilayotgan bo\'lsangiz, 1 raqamini kiriting. Agar kitob avval nashr etilgan bo\'lsa va siz nashr etayotgan versiyada sezilarli o\'zgarishlar bo\'lsa, 2 raqamini (va hokazo) kiriting.'
                "
              >
                <span class="hoverData"
                  >Yangi nashr nima hisoblanadi?
                  <i class="simple-icon-arrow-down" style="font-size: 7px"
                /></span>
              </span>
            </p>

            <b-form-group label="Nashr raqami (ixtiyoriy">
              <b-form-input
                v-model="book.editionNumber"
                class="w-25"
                type="number"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <!-- -------------------------------Mualliflik------------------- -->
        <b-row class="bg-white p-3 mt-3 forFonts">
          <b-col cols="2"> <p class="fontWeght">Muallif</p></b-col>
          <b-col cols="10"
            ><p>
              Asosiy muallif yoki hissa qo'shuvchini kiriting. Taxalluslarga
              ruxsat beriladi. Himoyachilar maydoniga qo'shimcha mualliflar
              qo'shilishi mumkin. Mualliflik haqida ko'proq bilib oling .
            </p>
            <p>Asosiy muallif yoki hissa qo'shuvchi</p>
            <b-row>
              <b-col cols="6"
                ><validation-provider
                  #default="{ errors }"
                  name="muallifism"
                  rules="required"
                >
                  <b-form-group
                    :style="{ border: errors[0] ? '1px solid #E28275FF' : '' }"
                  >
                    <b-form-input
                      v-model="book.autorFirstName"
                      placeholder="ism"
                    />
                  </b-form-group>
                  <p class="text-danger">{{ errors[0] }}</p>
                </validation-provider></b-col
              >
              <b-col cols="6">
                <validation-provider
                  #default="{ errors }"
                  name="mualliffamiliya"
                  rules="required"
                >
                  <b-form-group
                    :style="{ border: errors[0] ? '1px solid #E28275FF' : '' }"
                  >
                    <b-form-input
                      v-model="book.autorLastName"
                      placeholder="familia"
                  /></b-form-group>

                  <p class="text-danger">{{ errors[0] }}</p>
                </validation-provider></b-col
              >
            </b-row>
          </b-col>
        </b-row>

        <!-- -----------------------------------------Ishtirokchilar----------------------------- -->

        <b-row class="bg-white p-3 mt-3 forFonts">
          <b-col cols="2" class=""
            ><p class="fontWeght">Ishtirokchilar</p></b-col
          >

          <b-col cols="10"
            ><p>
              Agar kitobingizga boshqalar hissa qo'shgan bo'lsa, siz ularni
              qo'shishingiz mumkin va ular Amazon mahsulotining batafsil
              sahifasida ro'yxatga olinadi. Bir nechta mualliflar uchun ular
              quyida qo'shishingiz bilan bir xil ketma-ketlikda paydo bo'ladi.
            </p>
            <p><b>Ishtirokchilar </b>(ixtiyoriy)</p>
            <div class="col-md-6 mb-4 px-0">
              <label class="form-group has-float-label">
                <v-select
                  multiple
                  :options="authorsListArray"
                  v-model="book.autor"
                  :reduce="(option) => option.id"
                  label="fio"
                />

                <!-- <span>{{ $t("book.author_id") }}</span> -->

                <button
                  class="btn_add_select"
                  v-b-modal.authormodal
                  variant="outline-primary"
                  type="button"
                >
                  <i class="simple-icon-plus"></i>
                </button>
              </label>
            </div>

            <b-modal
              id="authormodal"
              ref="modalbasic"
              :title="$t('modal.modal-title')"
              :hide-footer="true"
            >
              <AddAuthor :frommodal="true" />
            </b-modal>
            <!-- uchirilmasin kelejakda foydalaniladi -->

            <!-- <b-row
              v-for="(item, index) in participants"
              :key="index"
              class="mt-2"
            >
              <b-col cols="3">
                <v-select v-model="item.participantRol" :options="rol"
              /></b-col>
              <b-col cols="3">
                <b-form-input placeholder="ism" v-model="item.participantName"
              /></b-col>
              <b-col cols="3">
                <b-form-input
                  placeholder="familiya"
                  v-model="item.participantLastname"
              /></b-col>
              <b-col cols="3"
                ><b-button
                  variant="white"
                  class="border"
                  @click="deletPraticipandts(item.id)"
                  >O'chirish
                </b-button></b-col
              >
            </b-row>
            <span v-show="participants.length !== 8">
              <b-button
                variant="white"
                class="border mt-3"
                @click="addParticipant"
                >Boshqasini qo'shing</b-button
              ></span
            > -->
          </b-col>
        </b-row>

        <!-- ----------------------------------------Kategoriyalar---------------------------------------- -->
        <b-row class="bg-white mt-3 p-3 forFonts">
          <b-col cols="2"><p class="fontWeght">Kategoriyalar</p></b-col>
          <b-col cols="10"
            ><p>
              Ikkitagacha ko'rish toifalarini tanlang.
              <span
                class="text-info"
                v-b-popover.hover.bottom="
                  'Ko\'rib chiqish toifasi - bu Amazon saytining foydalanuvchilar kitobingizni topa oladigan bo\'limi. Ko\'rib chiqish toifasini jismoniy kitob do\'konining bo\'limlari (badiiy adabiyot, tarix va boshqalar) kabi o\'ylab ko\'ring. Siz kitobingiz uchun ikkita ko\'rish toifasini tanlashingiz mumkin. Ko\'rib chiqishning aniq toifalari o\'quvchilarga kitobingizni topishga yordam beradi, shuning uchun kitobingiz uchun eng mos toifalarni tanlaganingizga ishonch hosil qiling.'
                "
              >
                <span class="hoverData"
                  >Nima uchun toifalar muhim?
                  <i
                    class="simple-icon-arrow-down"
                    style="font-size: 7px" /></span
              ></span>
            </p>

            <validation-provider
              #default="{ errors }"
              name="categorya"
              rules="required"
            >
              <b-row>
                <b-col cols="6">
                  <treeselect
                    :options="categoryListArray"
                    v-model="book.category"
                    :multiple="true"
                    :style="{ border: errors[0] ? '1px solid #E28275FF' : '' }"
                    style="font-size: 15px !important "
                /></b-col>
              </b-row>
              <br />
              <p class="text-danger">{{ errors[0] }}</p>
            </validation-provider>
          </b-col>
        </b-row>
        <!-- ---------------------------------Yosh va daraja oralig'i--------------------------------- -->
        <b-row class="bg-white mt-3 p-3 forFonts">
          <b-col cols="2">
            <p class="fontWeght">Yosh va daraja oralig'i</p></b-col
          >
          <b-col cols="10"
            ><p>
              <b>Bolalar kitobi yosh oralig'i </b>(ixtiyoriy)<br />
              Inson ushbu kitobdan bahramand bo'lishi mumkin bo'lgan eng yosh va
              eng keksa yoshni tanlang.
            </p>
            <b-form-input v-model="book.age" class="w-25" type="number" />
          </b-col>
        </b-row>
      </validation-observer>

      <div class="d-flex justify-content-end mt-3">
        <b-button variant="success" class="ml-1" @click="BookDetails"
          >next</b-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { required } from "../../../../../utils/validations/validations.js";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
import { mapActions, mapGetters } from "vuex";
import { VueTreeList, Tree, TreeNode } from "vue-tree-list";
import { Cropper } from "vue-advanced-cropper";
import AddAuthor from "../../author/AddAuthor";

export default {
  components: {
    vSelect,
    ValidationObserver,
    ValidationProvider,
    Cropper,
    Treeselect,
    VueTreeList,
    AddAuthor,
  },
  data() {
    return {
      required,
      params: {
        fileDocx: null,
        coverImg: null,
      },
      coordinates: {
        width: 0,
        height: 0,
        left: 0,
        top: 0,
        image: null,
      },
      book: {
        langueSelect: "Uzbek",
        editionNumber: null,
        subTitle: null,
        bookTitle: null,
        autorFirstName: null,
        autorLastName: null,
        age: null,
        copyright: null,
        category: null,
        order: "now",
        description: null,
        autor: null,
        epubfile: null,
      },
      langueData: [
        { id: 1, name: "Uzbek" },
        { id: 2, name: "Russia" },
        { id: 3, name: "Engilish" },
      ],
      progBarCount: 0,
      rol: [
        "Mualif",
        "Muharrir",
        "Muqaddima",
        "Illustrator",
        "Tarjimon",
        "Kirish",
        "Hikoyachi",
        "Fotosuratchi",
      ],
      participants: [
        {
          id: 1,
          participantRol: "muallif",
          participantName: null,
          participantLastname: null,
        },
      ],
      success: false,
    };
  },
  methods: {
    ...mapActions([
      "getCategoryListArray",
      "CREATE_BOOK",
      "getAuthorsListArray",
      "storeEpub",
    ]),
    BookDetails() {
      this.$refs.templateRef.validate().then((success) => {
        if (success) {
          this.CREATE_BOOK(this.book);

          this.$emit("stepOne", 2);
        } else {
          this.success = true;
          console.log("xatooooooooooooooooooo");
        }
      });
    },
    addParticipant() {
      let participant = {
        id: this.participants.length + 1,
        participantRol: "muallif",
        participantName: null,
        participantsLastname: null,
      };
      this.participants.push(participant);
    },
    deletPraticipandts(id) {
      if (this.participants.length > 1) {
        this.participants = this.participants.filter((c) => c.id !== id);
      } else {
        this.participants[0].participantRol = "muallif";
        this.participants[0].participantName = null;
        this.participants[0].participantLastname = null;
      }
    },

    // docx file yuklash function
    onFileChange(event) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
    },
    cropImg(refOption) {
      const { coordinates, canvas } = this.$refs[refOption].getResult();
      this.croppedImage = canvas.toDataURL();
      let image = new FormData();
      image.append("image", this.coordinates.image);
      image.append("width", coordinates.width);
      image.append("height", coordinates.height);
      image.append("x", coordinates.left);
      image.append("y", coordinates.top);
      console.log(image);
    },
    //cover
    coverImgFile(e) {
      const cover = e.target.files[0];
      this.coordinates.image = cover;
      this.params.coverImg = URL.createObjectURL(cover);
    },
    async setEpubFile(event, key) {
      let epub = new FormData();
      epub.append("ebook", event.target.files[0]);
      await this.storeEpub(epub);
      // this.epubfile = event.target.files[0];
      // this.formdata.author = this.getEpubContent.creator;
      // this.formdata.ebook = this.getEpubContent.file_path;
      // this.formdata.name = this.getEpubContent.title;
      // this.formdata.publishing_house = this.getEpubContent.publisher;
      // this.formdata.uuid = this.getEpubContent.identifier.replace(
      //   "urn:uuid:",
      //   ""
      // );
      // this.formdata.content = "";
      // this.getEpubContent.chapters.map((e) => {
      //   this.formdata.content += e.title + "\r\n";
      // });
      // // this.formdata.content = this.getEpubContent.chapters;
      // this.formdata.description = this.getEpubContent.description;
      // this.formdata.image = this.getEpubContent.content["cover"];
      // this.formdata.lang = this.getEpubContent.language;
      // await this.makeSelectedLang();
      // // await this.makeSelectedAuthor();
    },
  },
  computed: {
    ...mapGetters(["categoryListArray", "authorsListArray"]),
    getAcceptValue() {
      return this.$route.params.id == "2"
        ? ".3gp,.aa,.aac,.aax,.act,.aiff,.alac,.amr,.ape,.au,.awb,.dss,.dvf,.flac,.gsm,.iklax,.ivs,.m4a,.m4b,.m4p,.mmf,.mp3,.mpc"
        : ".doc,.pdf";
    },
  },
  watch: {
    getUploadProgressNum(newCount, oldCount) {
      this.progBarCount = newCount;
      if (newCount == 100) {
        setTimeout(() => {
          this.progBarCount = 0;
        }, 1500);
      }
    },
  },
  mounted() {
    this.getCategoryListArray();
    this.getAuthorsListArray();
  },
};
</script>

<style>
.forFonts {
  font-size: 13px;
}
.fontWeght {
  font-weight: bolder;
}

.popover {
  max-width: 30%;
}
.hoverData:hover {
  color: #e92549ff;
  cursor: pointer;
  text-decoration: underline;
}
.borderRounded {
  border-radius: 10px;
}
.activeRadio {
  border-bottom: 1px solid #d5d9d9ff;
  background: #f3f3f3ff;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
.activeAfter {
  border-top: 1px solid #d5d9d9ff;
  background: #f3f3f3ff;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.btn_add_select {
  position: absolute;
  right: 1px;
  top: 1px;
  bottom: 1px;
  padding: 5px;
  border: 0px;
  background: #fff;
  font-size: 18px;
}
.jv_input_file_label input {
  opacity: 0;
  position: absolute;
  pointer-events: none;
}

.jv_input_file_label i {
  cursor: pointer;
}
.forBordered {
  border: 2px solid #ad3947ff;
  border-radius: 10px;
  border-left: 13px solid #ad3947ff;
  padding: 10px;
  margin: 10px 0;
}
</style>
