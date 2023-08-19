<template>
  <div>
    <pre v-if="GET_BOOK.result && GET_BOOK.result.audios">
      {{GET_BOOK.result }}

    </pre>

    <BookSteps :bookData="bookData" />

    <div class="px-3">
      <validation-observer ref="templateRef">
        <!-- Epub file -->

        <b-row
          v-show="
            GET_BOOK && GET_BOOK.result && GET_BOOK.result.book_type !== 'paper'
          "
          class="bg-white mt-5 p-3 forFonts"
        >
          <b-col cols="2" class="fontWeght"
            ><span>{{
              GET_BOOK.result?.book_type == "ebook"
                ? "EPUB fayli"
                : "Audio fayli"
            }}</span></b-col
          >
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
              <div style="position: relative" class="mb-5">
                <ValidationProvider
                  #default="{ errors }"
                  name="name"
                  rules="required"
                >
                  <input
                    ref="epub"
                    type="file"
                    class="d-none"
                    :accept="getAcceptValue"
                    @change="setEpubFile($event, 'ebook')"
                  />

                  <small class="text-danger">{{
                    errors[0]
                  }}</small></ValidationProvider
                >

                <b-button
                  @click="$refs.epub.click()"
                  variant="primary"
                  :disabled="epubfile !== null"
                >
                  yuklab oling</b-button
                >
                <b-button
                  variant="danger"
                  @click="deleteEpub(false)"
                  v-if="epubfile"
                >
                  o'chirish</b-button
                >
                <span class="ml-5" v-if="epubfile">
                  {{ epubfile }} <i></i
                ></span>

                <div
                  class="scrollDiv"
                  v-if="
                    GET_BOOK &&
                    GET_BOOK.result &&
                    GET_BOOK.result.audios &&
                    GET_BOOK.result.audios.length > 0
                  "
                >
                  <draggable
                    :move="checkMove"
                    v-model="GET_BOOK.result.audios"
                    class="list-group list-group-flush cursor-move"
                    tag="ul"
                  >
                    <transition-group type="transition" name="flip-list">
                      <b-list-group-item
                        v-for="(mp3, index) in GET_BOOK.result.audios"
                        :key="mp3.id"
                        tag="li"
                      >
                        <b-row>
                          <b-col cols="12">
                            <p>{{ mp3.song }}</p></b-col
                          >
                          <b-col cols="8">
                            <audio id="audio" controls class="w-100">
                              <source
                                :src="apiUrl + '/' + mp3.audio"
                                type="audio/mpeg"
                              />
                            </audio>
                          </b-col>
                          <b-col cols="4" class="d-flex align-items-center"
                            ><b-button
                              class=""
                              size="sm"
                              variant="danger"
                              @click="deleteAudio(mp3.id)"
                              >O'chirish</b-button
                            ></b-col
                          >
                        </b-row>
                      </b-list-group-item>
                    </transition-group>
                  </draggable>
                </div>
              </div>
              <b-col cols="8">
                <b-progress
                  v-if="progBarCount > 0"
                  :value="progBarCount"
                  max="100"
                  animated
                ></b-progress>
              </b-col>
            </div>
          </b-col>
        </b-row>

        <!-- --------------------------------------fragment-------------------------------------- -->
        <b-row
          class="bg-white mt-3 p-3 forFonts"
          :class="{ 'mt-5': GET_BOOK.result?.book_type == 'paper' }"
        >
          <b-col cols="2"><p class="fontWeght">Parcha</p></b-col>
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

            <b-button
              @click="$refs.docsfile.click()"
              variant="primary"
              :disabled="book.fragment !== null"
              >yuklab oling</b-button
            >
            <b-button
              variant="danger"
              @click="deleteEpub(true)"
              v-if="book.fragment"
              >o'chrish</b-button
            >
            <span> {{ book.fragment ? "fayl yuklandi" : "" }}</span>
            <b-col cols="8" class="mt-5">
              <b-progress
                v-if="progresFragment > 0"
                :value="progresFragment"
                max="100"
                animated
              ></b-progress>
            </b-col>
          </b-col>
        </b-row>

        <!-- ----------------------------Kindle elektron kitob qopqog'i---------------------------- -->
        <b-row class="bg-white mt-3 p-3 forFonts"
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
                <div class="card mb-4 text-white crop_block" v-if="optionsImg">
                  <cropper
                    class="cropper"
                    :src="optionsImg"
                    ref="cropperImgoptions"
                  ></cropper>
                  <b-button
                    type="button"
                    @click="cropImg('options', 'cropperImgoptions')"
                  >
                    saqlash
                  </b-button>
                </div>
                <div
                  v-if="optionsImg == null && book.coverImg == null"
                  class="borderDashed"
                >
                  <small>Muqova yuklanmagan</small>
                </div>

                <div v-if="book.coverImg" class="w-75 border mt-4">
                  <img
                    :src="apiUrl + '/' + book.coverImg"
                    alt="bu yerda kitob muqova rasmi"
                    class="img-fluid"
                  />
                </div>
              </b-col>

              <b-col cols="9">
                <input
                  type="file"
                  ref="coverfile"
                  class="d-none"
                  @change="coverImgFile"
                />

                <b-button @click="$refs.coverfile.click()" variant="primary"
                  >yuklab oling</b-button
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
                    :reduce="option => option.value"
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
                  name="Muallif ismi va familiyasi"
                  rules="required"
                >
                  <b-form-group
                    :style="{ border: errors[0] ? '1px solid #E28275FF' : '' }"
                  >
                    <b-form-input
                      v-model="book.authorFullName"
                      placeholder="ismi familiyasi"
                    />
                  </b-form-group>
                  <p class="text-danger">{{ errors[0] }}</p>
                </validation-provider></b-col
              >
              <!-- <b-col cols="6">
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
              > -->
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
                  v-model="book.author"
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
                    style="font-size: 15px !important"
                /></b-col>
              </b-row>
              <br />
              <p class="text-danger">{{ errors[0] }}</p>
            </validation-provider>
          </b-col>
        </b-row>
        <!-- ---------------------------------Yosh--------------------------------- -->
        <b-row class="bg-white mt-3 p-3 forFonts">
          <b-col cols="2"> <p class="fontWeght">Yosh</p></b-col>
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
import BookSteps from "../BookSteps.vue";
import { adminRoot } from "../../../../../constants/config";
import { apiUrl } from "../../../../../constants/config";
import draggable from "vuedraggable";

export default {
  components: {
    vSelect,
    ValidationObserver,
    ValidationProvider,
    Cropper,
    Treeselect,
    VueTreeList,
    AddAuthor,
    BookSteps,
    draggable,
  },
  data() {
    return {
      audio: [],
      test: null,
      optionsImg: null,
      progBarCount: 0,
      required,
      apiUrl,
      params: {
        fileDocx: null,
      },
      coordinates: {
        width: 0,
        height: 0,
        left: 0,
        top: 0,
        image: null,
      },
      epubfile: null,
      fragment: null,
      book: {
        coverImg: null,
        langueSelect: "Uzbek",
        editionNumber: null,
        subTitle: null,
        bookTitle: null,
        authorFullName: null,
        age: null,
        copyright: null,
        category: [],
        order: "now",
        description: null,
        author: [],
        epubfile: null,
        publisher: null,
        book_id: null,
        user_id: null,
        fragment: null,
        step: 2,
        // audiobook: null,
        type: null,
      },
      bookData: {},
      langueData: [
        { id: 1, name: "Uzbek" },
        { id: 2, name: "Russia" },
        { id: 3, name: "Engilish" },
      ],
      progBarCount: 0,
      progresFragment: 0,
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
      bookSort: [],
      success: false,
    };
  },
  methods: {
    ...mapActions([
      "getCategoryListArray",
      "CREATE_BOOK",
      "getAuthorsListArray",
      "storeEpub",
      "GET_BOOK_DATA",
      "CREATE_STEP_ONE",
      "storeCropImage",
      "FRAGMENT_CREATE",
      "CREATE_AUDIOBOOK",
      "DELETE_EPUB",
      "CREATE_AUDIO_FRAGMENT",
      "DELETE_AUDIO",
      "AUDIO_SORT",
    ]),
    async refresh() {
      await this.GET_BOOK_DATA(this.$route.params.id);
    },
    BookDetails() {
      console.log(this.fileRequired(), "require");
      if (this.fileRequired()) {
        this.$refs.templateRef.validate().then((success) => {
          if (success) {
            this.CREATE_STEP_ONE(this.book)
              .then((res) => {
                console.log(res);
                if (res.data.success) {
                  this.$notify("success", this.$t("categoryaFile.successful"));
                  this.$router.push(
                    `${adminRoot}/bookContent/${this.$route.params.id}`
                  );
                }
              })
              .catch((error) => {
                this.$notify("error", "Server Error: " + error.message);
              });
          } else {
            this.success = true;
            this.$notify("error", "kitob maydonini to'ldiring");
          }
        });
      } else {
        this.$notify("error", " Kitob faylini yuklang");
      }
    },

    fileRequired() {
      let file = false;
      if (
        this.GET_BOOK.result.book_type == "ebook" &&
        this.book.epubfile != null
      ) {
        file = true;
      }
      if (
        this.GET_BOOK.result.book_type == "audio" &&
        this.GET_BOOK.result.audios &&
        this.GET_BOOK.result.audios.length > 0
      ) {
        file = true;
      }
      if (
        this.GET_BOOK.result.book_type == "paper" &&
        this.book.epubfile == null
      ) {
        file = true;
      }
      return file;
    },
    // O'CHIRILMASIN KELAJAKDA FOYDALANILADI
    // addParticipant() {
    //   let participant = {
    //     id: this.participants.length + 1,
    //     participantRol: "muallif",
    //     participantName: null,
    //     participantsLastname: null,
    //   };
    //   this.participants.push(participant);
    // },

    // deletPraticipandts(id) {
    //   if (this.participants.length > 1) {
    //     this.participants = this.participants.filter((c) => c.id !== id);
    //   } else {
    //     this.participants[0].participantRol = "muallif";
    //     this.participants[0].participantName = null;
    //     this.participants[0].participantLastname = null;
    //   }
    // },

    // docx file yuklash function

    // FRAGMENT
    async onFileChange(event) {
      const file = event.target.files[0];
      let formData = new FormData();
      formData.append("is_fragment", true);

      
      if (this.GET_BOOK.result?.book_type == "audio") {
        formData.append("audio", file);
        formData.append("book_id", this.$route.params.id);
        this.CREATE_AUDIO_FRAGMENT(formData).then(() => {
          this.refresh();
        });
      }
      else{
        formData.append("ebook", file);
        formData.append("book_id", this.GET_BOOK.result.book_id);
        await this.FRAGMENT_CREATE(formData);
        await this.refresh();
      }
    },

    // bu kitob muqovasi yuklash uchun funksiya
    async cropImg(a, refOption) {
      const { coordinates, canvas } = this.$refs[refOption].getResult();
      this.croppedImage = canvas.toDataURL();
      let image = new FormData();
      image.append("image", this.coordinates.image);
      image.append("width", coordinates.width);
      image.append("height", coordinates.height);
      image.append("x", coordinates.left);
      image.append("y", coordinates.top);
      image.append("book_id", this.$route.params.id);
      await this.storeCropImage(image);
      this.book.coverImg = this.cropfileList[0].path;
      this.optionsImg = null;
      this.refresh();
    },

    //cover
    coverImgFile(e) {
      this.optionsImg = null;
      const cover = e.target.files[0];
      this.coordinates.image = cover;
      this.optionsImg = URL.createObjectURL(cover);
    },

    //  EPUB FILE
    async setEpubFile(event) {
      this.test = event;
      let epub = new FormData();
      epub.append("is_fragment", false);
      if (this.GET_BOOK.result?.book_type == "ebook") {
        epub.append("book_id", this.$route.params.id);
        epub.append("ebook", event.target.files[0]);
        await this.storeEpub(epub);
        await this.refresh();
      } else {
        epub.append("audio", event.target.files[0]);
        epub.append("book_id", this.$route.params.id);
        epub.append("sort", this.GET_BOOK.result?.audios.length + 1);
        await this.CREATE_AUDIOBOOK(epub).then(() => {
          this.refresh();
        });
      }
    },
    deleteEpub(boolean) {
      let delate = confirm("Epub faylingiz o'chirilsinmi");
      if (delate) {
        this.DELETE_EPUB({ id: this.$route.params.id, is_fragment: boolean });
        this.refresh();
      }
    },
    checkMove(e) {
      let sort = [];
      setTimeout(() => {
        this.GET_BOOK.result.audios.forEach((element, index) => {
          let item = {
            audio_id: element.id,
            sort: index + 1,
          };
          sort.push(item);
        });
        this.AUDIO_SORT({audios: sort}).then(() => {
          // this.refresh();
        });
      }, 1000);

      // this.AUDIO_SORT(sortData).then(() => {
      //   this.refresh();
      // });
    },
    deleteAudio(e) {
      let a = confirm("audio fayl O'chirilsinmi");
      if (a) {
        this.DELETE_AUDIO(e).then(() => {
          this.refresh();
        });
      }
    },
  },
  computed: {
    ...mapGetters([
      "categoryListArray",
      "authorsListArray",
      "getEpubContent",
      "getUploadProgressNum",
      "cropfileList",
      "GET_BOOK",
      "GET_FRAGMENT_UPLODED",
      "AUDIO_PROGRESS",
      "AUDIO_FRAGENT",
    ]),
    getAcceptValue() {
      return this.GET_BOOK.result?.book_type == "audio" ? ".mp3" : ".epub";
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
    AUDIO_PROGRESS(newCount, oldCount) {
      this.progBarCount = newCount;
      if (newCount == 100) {
        setTimeout(() => {
          this.progBarCount = 0;
        }, 1500);
      }
    },
    //FRAAGMENT
    GET_FRAGMENT_UPLODED(newCount, oldCount) {
      this.progresFragment = newCount;
      if (newCount == 100) {
        setTimeout(() => {
          this.progresFragment = 0;
        }, 1500);
      }
    },

    AUDIO_FRAGENT(newCount, oldCount) {
      this.progresFragment = newCount;
      if (newCount == 100) {
        setTimeout(() => {
          this.progresFragment = 0;
        }, 1500);
      }
    },
  },
  async mounted() {
    await this.refresh().then(() => {
      let book_data = {
        book_type: this.GET_BOOK.result.book_type,
        step: this.GET_BOOK.result.step,
      };
      this.book.epubfile = this.GET_BOOK.result.ebook_path;
      this.book.subTitle = this.GET_BOOK.result.subtitle;
      this.book.editionNumber = this.GET_BOOK.result.edition;
      this.book.age = this.GET_BOOK.result.age_access;
      this.book.category = this.GET_BOOK.result.category_id;
      this.book.type = this.GET_BOOK.result.book_type;
      this.bookData = book_data;
    });

    await this.getCategoryListArray();
    await this.getAuthorsListArray();
  },
  updated() {
    this.GET_BOOK;
    if (this.GET_BOOK.result.book_type == 'ebook') {

      this.book.bookTitle = this.GET_BOOK.result.title;
      this.book.publisher = this.GET_BOOK.result.publisher;
      this.book.coverImg = this.GET_BOOK.result.cover;
      this.book.authorFullName = this.GET_BOOK.result.creator;
    }
    this.epubfile = this.GET_BOOK.result.title;
    this.book.book_id = this.GET_BOOK.result?.book_id;
    this.book.user_id = this.GET_BOOK.result?.user_id;
    this.book.fragment = this.GET_BOOK.result.fragment;
    this.book.epubfile = this.GET_BOOK.result.ebook_file;
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
.borderDashed {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 130px;
  border: 3px dashed #c8c8c8ff;
  text-align: center;
}
.cropper {
  height: 250px;
  background: #ddd;
}
.cover_image {
  height: 250px;
}

.dropdown-toggle {
  padding: 10px 0 10px 10px !important;
}
.list-group-item {
  transition: all 0.2s;
  border: 1px solid green !important;
  margin: 5px 0;
  border-radius: 6px !important;
  padding: 10px 0 10px 10px !important;
}
.cursor-move {
  cursor: all-scroll;
}
.scrollDiv {
  width: 50%;
  /* height: 200px; */
  border: 1px solid green;
  padding: 15px;
  margin-top: 50px;
  border-radius: 5px;
  /* overflow-y: scroll; */
}
.scrollDiv::-webkit-scrollbar {
  display: none;
}
</style>
