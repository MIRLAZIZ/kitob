<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4" :title="'Add Book (Moderator)'">
          <b-form @submit.prevent="onAddBookFormSubmit" v-if="!isLoad">
            <div class="alert alert-danger" v-if="errForm">
              You have to fill out all fields...
            </div>
            <div class="errors" v-if="errorMsg">
              <div
                class="alert alert-danger"
                v-for="(err, key) in errorMsg"
                :key="key"
              >
                {{ err[0] }}
              </div>
            </div>
            <div class="errors" v-if="successMsg">
              <div class="alert alert-success">
                {{ successMsg }}
              </div>
            </div>

            <div class="row">
              <!-- Cover imaage -->
              <div class="col-sm-4 mb-4">
                <div class="card mb-4 text-white crop_block" v-if="optionsImg">
                  <cropper
                    class="cropper"
                    :src="optionsImg"
                    ref="cropperImgoptions"
                  ></cropper>
                  <button
                    type="button"
                    class="btn_crop"
                    @click="cropImg('options', 'cropperImgoptions')"
                  >
                    <i class="simple-icon-crop"></i>
                  </button>
                </div>
                <div class="p-4 border mt-4">
                  <div class="cover_image">
                    <img
                      :src="apiUrl + '/' + formdata.image"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                  <div class="btn-group m-3 text-center d-flex">
                    <label class="btn btn-primary btn-xs">
                      <input
                        type="file"
                        class="d-none"
                        @change="setEbookImage($event, 'options')"
                      />
                      {{ $t("book.change") }}
                    </label>
                    <label class="btn btn-danger btn-xs">{{
                      $t("book.delete")
                    }}</label>
                  </div>
                </div>
              </div>

              <!-- Epub file -->
              <div class="col-sm-4 mb-4">
                <div
                  class="p-4 border mt-4"
                  style="position: relative"
                  v-if="!epubfile"
                >
                  <label class="form-group has-float-label jv_input_file_label">
                    <input
                      type="file"
                      class="form-control jv_input_file"
                      @change="setEpubFile($event, 'ebook')"
                    />
                    <i class="simple-icon-notebook"></i>
                  </label>
                  <span>{{ $t("book.ebook") }}</span>
                  <!-- v-if="progBarCount > 0" -->
                  <!-- <div class="progress_bar"  v-if="progBarCount > 0">
                          <div class="progress_line" :data-pernum="progBarCount+'%'" :style="{width: progBarCount+'%'}"></div>
                        </div> -->
                  <b-progress
                    v-if="progBarCount > 0"
                    :value="progBarCount"
                    max="100"
                    animated
                  ></b-progress>
                </div>
                <div class="p-4 border mt-4" style="position: relative" v-else>
                  <label
                    class="form-group has-float-label jv_input_file_label jv_error_btn"
                    @click="deleteEpub"
                  >
                    <i class="simple-icon-close"></i>
                  </label>
                  <span>{{ epubfile.name }}</span>
                </div>
              </div>
              <!-- Audio file -->
              <div class="col-sm-4 mb-4">
                <div class="p-4 border mt-4">
                  <div class="audio_wrap" v-if="hasAudio">
                    {{ formdata.audio }}
                    <template v-for="(mp3, index) in formdata.audio">
                      <div class="card p-3 shadow mb-2" :key="index">
                        <h5 class="text-primary">
                          {{ mp3.song }} 
                          <small class="text-secondary">
                            {{ mp3.artist }}
                          </small>
                        </h5>
                        <div class="d-flex align-items-center">
                          <audio id="audio" controls class="w-100">
                            <source
                              :src="apiUrl + '/' + mp3.audio"
                              type="audio/mpeg"
                            />
                            Your browser does not support the audio element.
                          </audio>
                          <button
                            class="btn btn-transparent"
                            type="button"
                            @click="removeAudio(mp3)"
                          >
                            <i class="iconsminds-close text-danger h5 ml-2"></i>
                          </button>
                        </div>
                      </div>
                    </template>
                  </div>
                  <label class="form-group has-float-label jv_input_file_label">
                    <input
                      type="file"
                      class="form-control jv_input_file"
                      @change="setAudioFile($event)"
                    />
                    <i class="iconsminds-loudspeaker"></i>
                  </label>
                  <span>{{ $t("book.audio") }}</span>
                </div>
              </div>
              <!-- Tree -->
              <div class="col-md-12 mb-5">
                <button class="btn btn-info" type="button" v-b-modal.modallong>
                  {{ $t("book.add_toc") }}
                </button>
                <b-modal
                  id="modallong"
                  ref="modallong"
                  :title="$t('book.add_toc')"
                >
                  <div>
                    <label class="form-group has-float-label">
                      <input
                        type="text"
                        class="form-control"
                        v-model="tocData.title"
                      />
                      <span>{{ $t("book.title") }}</span>
                    </label>
                    <label class="form-group has-float-label">
                      <input
                        type="text"
                        class="form-control"
                        v-model="tocData.sort"
                      />
                      <span>{{ $t("book.sort") }}</span>
                    </label>
                    <label class="form-group has-float-label">
                      <input
                        type="text"
                        class="form-control"
                        v-model="tocData.page"
                      />
                      <span>{{ $t("book.page") }}</span>
                    </label>
                  </div>
                  <table class="table table-borderd">
                    <thead>
                      <tr>
                        <th>{{ $t("book.title") }}</th>
                        <th>{{ $t("book.sort") }}</th>
                        <th>{{ $t("book.page") }}</th>
                        <th>{{ $t("book.action") }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, ind) in tocDataList" :key="ind">
                        <td>{{ item.title }}</td>
                        <td>{{ item.sort }}</td>
                        <td>{{ item.page }}</td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-danger"
                            @click="rmTocItem(item.id)"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <template slot="modal-footer">
                    <b-button
                      variant="primary"
                      @click="sendToc()"
                      class="mr-1"
                      >{{ $t("menu.add") }}</b-button
                    >
                  </template>
                </b-modal>
              </div>
              <!-- Title -->
              <div class="col-sm-12 mb-4">
                <label class="form-group has-float-label">
                  <input
                    type="text"
                    class="form-control"
                    v-model="formdata.name"
                  />
                  <span>{{ $t("book.name") }}</span>
                </label>
              </div>
              <!-- Publisher -->
              <div class="col-sm-6 mb-4">
                <label class="form-group has-float-label">
                  <input
                    type="text"
                    class="form-control"
                    v-model="formdata.publishing_house"
                  />
                  <span>{{ $t("book.publishing_house") }}</span>
                </label>
              </div>
              <!-- Author -->
              <div class="col-md-6 mb-4">
                <label class="form-group has-float-label">
                  <v-select
                    multiple
                    :options="authorsListArray"
                    v-model="formdata.author"
                    :reduce="(option) => option.id"
                    label="fio"
                  />

                  <span>{{ $t("book.author_id") }}</span>

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
              <!-- ISBN -->
              <div class="col-md-6 mb-4">
                <label class="form-group has-float-label">
                  <input
                    type="text"
                    class="form-control"
                    v-model="formdata.isbn"
                  />
                  <span>{{ $t("book.isbn") }}</span>
                </label>
              </div>
              <!-- UUID -->
              <div class="col-md-6 mb-4">
                <label class="form-group has-float-label">
                  <input
                    type="text"
                    class="form-control"
                    v-model="formdata.uuid"
                  />
                  <span>{{ $t("book.uuid") }}</span>
                </label>
              </div>
              <!-- Category -->
              <div class="col-md-6 mb-4">
                <treeselect
                  v-model="formdata.category"
                  :multiple="true"
                  :options="categoryListArray"
                />
              </div>
              <!-- Total pages -->
              <div class="col-md-3 mb-4">
                <label class="form-group has-float-label">
                  <input
                    type="text"
                    class="form-control"
                    v-model="formdata.number_of_pages"
                  />
                  <span>{{ $t("book.number_of_pages") }}</span>
                </label>
              </div>
              <!-- Age restriction -->
              <div class="col-md-3 mb-4">
                <label class="form-group has-float-label">
                  <input
                    type="text"
                    class="form-control"
                    v-model="formdata.age_access"
                  />
                  <span>{{ $t("book.age_access") }}</span>
                </label>
              </div>
              <!-- Published year -->
              <div class="col-md-3 mb-4">
                <label class="form-group has-float-label">
                  <input
                    type="number"
                    min="1900"
                    max="2099"
                    step="1"
                    class="form-control"
                    v-model="formdata.year"
                  />
                  <span>{{ $t("book.year") }}</span>
                </label>
              </div>
              <!-- Edition -->
              <div class="col-md-3 mb-4">
                <label class="form-group has-float-label">
                  <input
                    type="text"
                    class="form-control"
                    v-model="formdata.edition"
                  />
                  <span>{{ $t("book.edition") }}</span>
                </label>
              </div>
              <!-- Options -->
              <div class="border card col-sm-12 mb-4 pb-4" id="options">
                <b-button v-b-toggle.collapseAccordion4 variant="link"
                  >Options</b-button
                >
                <b-collapse id="collapseAccordion4" accordion="my-accordion">
                  <div class="row">
                    <!-- Description -->
                    <div class="col-md-12">
                      <label class="form-group has-float-label">
                        <editor
                          initialValue
                          v-model="formdata.description"
                          :init="{
                            height: 500,
                            menubar: false,
                            plugins: [
                              'advlist autolink lists link image charmap',
                              'searchreplace visualblocks code fullscreen',
                              'print preview anchor insertdatetime media',
                              'paste code help wordcount table image',
                            ],
                            toolbar:
                              'undo redo | formatselect | bold italic | \
                                                alignleft aligncenter alignright | \
                                                bullist numlist outdent indent | help',
                          }"
                        ></editor>
                        <span>{{ $t("book.description") }}</span>
                      </label>
                    </div>
                    <!-- Table of contents -->
                    <div class="col-md-7">
                      <label class="form-group has-float-label">
                        <textarea
                          cols="12"
                          rows="20"
                          class="form-control"
                          v-model="formdata.content"
                        ></textarea>
                        <span>{{ $t("book.content") }}</span>
                      </label>
                    </div>
                    <div class="col-md-5">
                      <div class="d-flex mb-3">
                        <div class="col-md-6 custom-control custom-checkbox">
                          <input
                            @change="setCheckBox($event, 'is_new')"
                            type="checkbox"
                            class="custom-control-input"
                            id="is_new"
                            v-model="formdata.is_new"
                          />
                          <label class="custom-control-label" for="is_new">{{
                            $t("book.is_new")
                          }}</label>
                        </div>
                        <div class="col-md-6 custom-control custom-checkbox">
                          <input
                            @change="setCheckBox($event, 'is_bestseller')"
                            type="checkbox"
                            id="is_bestseller"
                            true-value="1"
                            false-value="0"
                            class="custom-control-input"
                            v-model="formdata.is_bestseller"
                          />
                          <label
                            class="custom-control-label"
                            for="is_bestseller"
                            >{{ $t("book.is_bestseller") }}</label
                          >
                        </div>
                      </div>
                      <!-- /. form-inline -->
                      <div class="d-flex">
                        <!-- Status -->
                        <div
                          class="col-md-4 form-group pl-0"
                          v-if="currentUser.role_id == 1"
                        >
                          <label class="form-group has-float-label">
                            <v-select
                              v-model="selectedStatus"
                              :options="selectData"
                              :dir="direction"
                              @input="setSelectedStatus"
                            />
                            <span>{{ $t("book.status") }}</span>
                          </label>
                        </div>
                        <!-- Language -->
                        <div class="col-md-4 form-group pl-0">
                          <label class="form-group has-float-label">
                            <v-select
                              :options="languages"
                              :dir="direction"
                              @input="setSelectedLang"
                              v-model="selectedLang"
                            />
                            <span>{{ $t("book.language") }}</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <!-- /. col-md-6 -->
                  </div>
                  <!-- /.row -->
                </b-collapse>
              </div>

              <div class="border card col-sm-12 mb-4 pb-4" id="gallery">
                <b-button v-b-toggle.collapseAccordionGallery variant="link"
                  >Gallery</b-button
                >
                <b-collapse
                  id="collapseAccordionGallery"
                  accordion="gallery-accordion"
                >
                  <div class="card-body">
                    <div class="form-group">
                      <label
                        for="gallery_image"
                        class="form-group has-float-label m-auto jv_input_file_label"
                      >
                        <input
                          type="file"
                          id="gallery_image"
                          class="form-control jv_input_file"
                          @change="storeToGallery($event, 'ebook')"
                        />
                        <i class="simple-icon-plus"></i>
                      </label>
                    </div>
                    <hr />
                    <div
                      class="d-flex align-items-center justify-content-start"
                      v-if="galleries && galleries.length"
                    >
                      {{ galleries }}

                      <b-card
                        class="d-flex flex-row active ml-1"
                        no-body
                        v-for="(gallery, ind) in galleries"
                        :key="ind"
                      >
                        <img
                          :src="gallery.path"
                          class="list-thumbnail responsive border-0"
                          :alt="gallery.id"
                        />
                      </b-card>
                    </div>
                  </div>
                </b-collapse>
              </div>

              <!-- ebooks -->
              <b-modal
                id="authormodal"
                ref="modalbasic"
                :title="$t('modal.modal-title')"
                :hide-footer="true"
              >
                <AddAuthor :frommodal="true" />
              </b-modal>
            </div>
            <!-- /.row -->
            <b-button type="submit" variant="primary" class="mt-4">{{
              $t("forms.submit")
            }}</b-button>
          </b-form>
          <template v-else>
            <div class="loading"></div>
          </template>
        </b-card>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { validationMixin } from "vuelidate";
const {
  required,
  maxLength,
  minLength,
  email,
} = require("vuelidate/lib/validators");
import Editor from "@tinymce/tinymce-vue";
import { Cropper } from "vue-advanced-cropper";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { getDirection } from "../../../../utils";
import { adminRoot } from "../../../../constants/config";
import CustomInputExample from "../../../../containers/forms/CustomInputExample";
import AddAuthor from "../author/AddAuthor";
import { VueTreeList, Tree, TreeNode } from "vue-tree-list";
import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
import { apiUrl } from "../../../../constants/config";

export default {
  components: {
    "v-select": vSelect,
    "custom-input-example": CustomInputExample,
    editor: Editor,
    Cropper,
    AddAuthor,
    VueTreeList,
    Treeselect,
  },
  data() {
    return {
      apiUrl,
      direction: getDirection().direction,
      addBookForm: {
        name: "",
        author: "",
        paper_price: null,
        audio_price: null,
        ebook_price: null,
        image: null,
        fragment: "",
        audio: "",
        ebook: "",
        description: "",
        year: 2020,
        publishing_house: "",
        edition: "",
        age_access: 18,
        isbn: "",
        uuid: "",
        number_of_pages: 0,
        category: "",
        category_id: null,
        content: "",
        status: "",
        is_new: 0,
        is_bestseller: 0,
        selectedCover: "",
      },
      tocData: {
        title: "",
        sort: "",
        book_id: this.$route.params.id,
        page: "",
      },
      tocDataList: [],
      selectData: [
        { label: "Active", value: "active" },
        { label: "Inavtive", value: "draft" },
        { label: "Moderation", value: "moderation" },
        { label: "Editor", value: "editor" },
        { label: "Canceled", value: "canceled" },
      ],
      epubfile: null,
      errorMsg: null,
      successMsg: null,
      errForm: false,
      selectedAuthor: null,
      selectedCategory: null,
      selectedStatus: null,
      selectedLang: null,
      formdata: {
        category: null,
        name: null,
        image: null,
      },
      languages: [
        { label: "O'zbek", value: "oz" },
        { label: "Russian", value: "ru" },
        { label: "English", value: "en" },
      ],
      cover: [
        { label: "Qattiq", value: "qattiq" },
        { label: "Yumshoq", value: "yumshoq" },
      ],
      defaultLang: [{ label: "O'zbek", value: "oz" }],
      bookImg: "",
      errorMsg: null,
      errForm: false,
      img: "https://images.pexels.com/photos/226746/pexels-photo-226746.jpeg",
      croppedImage: null,
      optionsImg: null,
      coordinates: {
        width: 0,
        height: 0,
        left: 0,
        top: 0,
        image: null,
      },
      hasAudio: false,
      audio: {
        start: 0,
        end: 30,
      },
      last_audio: {
        file_path: "",
        file_type: "",
      },
      newTree: {},
      data: new Tree([]),
      progBarCount: 0,
      isLoad: false,
      galleries: [],
    };
  },
  mixins: [validationMixin],
  validations: {
    addBookForm: {
      name: {
        required,
        minLength: minLength(6),
      },
      edition: {
        required,
        minLength: minLength(4),
      },
    },
  },
  computed: {
    ...mapGetters([
      "getBookAlertMsg",
      "authorsListArray",
      "currentBook",
      "currentUser",
      "categoryListArray",
      "getEpubContent",
      "getBookAudio",
      "filesList",
      "getMsgTableOfContent",
      "getUploadProgressNum",
      "cropfileList",
      "getGallery",
    ]),
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
  methods: {
    ...mapActions([
      "addBook",
      "updateBook",
      "getAuthorsListArray",
      "getTheBook",
      "getCategoryListArray",
      "storeEpub",
      "storeAudio",
      "storeCropImage",
      "trimAudioFile",
      "storeImage",
      "addTableOfContent",
      "deleteTocItem",
      "removeAudioById",
      "destroyEpub",
      "storeGallery",
      "getGalleryList",
    ]),
    async sendToc() {
      await this.addTableOfContent(this.tocData);
      if (this.getMsgTableOfContent.success) {
        this.tocData = {
          title: "",
          sort: "",
          book_id: this.$route.params.id,
          page: "",
        };
        this.$notify("success", "Success", this.getMsgTableOfContent.message);
        this.tocDataList = this.getMsgTableOfContent.result;
      }
    },
    async rmTocItem(id) {
      await this.deleteTocItem(id);
      if (this.getMsgTableOfContent.success) {
        this.$notify("success", "Success", this.getMsgTableOfContent.message);
        this.tocDataList = this.getMsgTableOfContent.result;
      }
    },
    async onAddBookFormSubmit() {
      this.$v.$touch();
      let book = this.formdata;
      this.isLoad = true;
      await this.updateBook(book);
      if (this.getBookAlertMsg.error) {
        this.errorMsg = this.getBookAlertMsg.message;
        this.successMsg = null;
      }
      if (this.getBookAlertMsg.success) {
        this.errorMsg = null;
        this.successMsg = this.getBookAlertMsg.message;
      }
      this.isLoad = false;
    },
    setFile(event, key) {
      this.addBookForm[key] = event.target.files[0];
    },
    async trimAudio(event) {
      let audio = {
        audio: this.formdata.audio,
        start: this.audio.start,
        end: this.audio.end,
      };
      await this.trimAudioFile(audio);
      if (this.getBookAudio) {
        this.formdata.audio = this.getBookAudio;
        this.hasAudio = true;
        var audioPlayer = document.getElementById("audio");
        audioPlayer.load();
      }
    },
    async setEbookImage(event, key) {
      const file = event.target.files[0];
      // let image = new FormData();
      // image.append("files[]", event.target.files[0]);
      // await this.storeImage(image);
      // if (key == "ebook") {
      //     this.bookImg = this.filesList[0];
      // } else if (key == "options") {
      //     this.optionsImg = this.filesList[0];
      //     this.formdata.image = this.optionsImg.path;
      // }
      this.coordinates.image = file;
      this.optionsImg = URL.createObjectURL(file);
      console.log(URL, "bu urel");
      console.log(event.target.files[0]);
    },
    async setAudioFile(event) {
      console.log(event.target.files[0]);
      let audio = new FormData();
      audio.append("audio", event.target.files[0]);
      audio.append("book_id", this.$route.params.id);
      await this.storeAudio(audio);
      if (this.getBookAudio) {
        this.formdata.audio = this.getBookAudio;
        this.hasAudio = true;
        // var audioPlayer = document.getElementById('audio');
        // audioPlayer.load();
      }
    },
    async removeAudio(mp3) {
      if (confirm("Are you sure")) {
        await this.removeAudioById(mp3.id);
        if (this.getBookAudio) {
          this.formdata.audio = this.getBookAudio;
          this.hasAudio = true;
        }
      }
    },
    async storeToGallery(event) {
      let gallery = new FormData();
      gallery.append("image", event.target.files[0]);
      gallery.append("book_id", this.$route.params.id);
      await this.storeGallery(gallery);
      if (this.getBookAlertMsg.error) {
        this.errorMsg = this.getBookAlertMsg.message;
        this.successMsg = null;
      }
      if (this.getBookAlertMsg.success) {
        this.errorMsg = null;
        await this.getGalleryList(this.$route.params.id);
        this.galleries = this.getGallery;
      }
    },
    async setEpubFile(event, key) {
      let epub = new FormData();
      epub.append("ebook", event.target.files[0]);
      epub.append("book_id",)
      await this.storeEpub(epub);
      this.epubfile = event.target.files[0];
      this.formdata.author = this.getEpubContent.creator;
      this.formdata.ebook = this.getEpubContent.file_path;
      this.formdata.name = this.getEpubContent.title;
      this.formdata.publishing_house = this.getEpubContent.publisher;
      this.formdata.uuid = this.getEpubContent.identifier.replace(
        "urn:uuid:",
        ""
      );
      this.formdata.content = "";
      this.getEpubContent.chapters.map((e) => {
        this.formdata.content += e.title + "\r\n";
      });
      // this.formdata.content = this.getEpubContent.chapters;
      this.formdata.description = this.getEpubContent.description;
      this.formdata.image = this.getEpubContent.content["cover"];
      this.formdata.lang = this.getEpubContent.language;
      await this.makeSelectedLang();
      // await this.makeSelectedAuthor();
    },

    async deleteEpub() {
      this.isLoad = true;
      await this.destroyEpub(this.getEpubContent.file_path);
      if (this.getBookAlertMsg.error) {
        this.errorMsg = this.getBookAlertMsg.message;
        this.successMsg = null;
      }
      if (this.getBookAlertMsg.success) {
        this.errorMsg = null;
        this.epubfile = null;
        this.successMsg = this.getBookAlertMsg.message;
      }
      this.isLoad = false;
    },
    setCheckBox(event, key) {
      if (event.target.checked) {
        this.addBookForm[key] = 1;
      } else {
        this.addBookForm[key] = 0;
      }
    },
    setSelectedLang(event) {
      this.formdata.lang = event.value;
    },
    setSelectedCover(event) {
      this.formdata.selectedCover = event.value;
    },
    setSelectedStatus(event) {
      this.formdata.status = event.value;
    },
    async findBooksEvent(search, loading) {
      let thisval = search;
      if (thisval != "") {
        await this.actionFindBook({ name: thisval });
      }
    },
    async makeSelectedAuthor() {
      if (this.formdata.author) {
        let selectedAuthorObj = {
          label: this.formdata.author.fio,
          value: this.formdata.author_id,
        };
        this.selectedAuthor = selectedAuthorObj;
      }
    },
    async makeSelectedLang() {
      if (this.formdata.lang == "oz") {
        this.selectedLang = { label: "O'zbek", value: "oz" };
      }
      if (this.formdata.lang == "en") {
        this.selectedLang = { label: "English", value: "en" };
      }
      if (this.formdata.lang == "ru") {
        this.selectedLang = { label: "Russian", value: "ru" };
      }
    },
    async makeSelectedStatus() {
      let selectedStatusObj = {
        label: this.formdata.status,
        value: this.formdata.status,
      };
      if (this.formdata.status == "active") {
        selectedStatusObj.label = "Active";
      } else if (this.formdata.status == "draft") {
        selectedStatusObj.label = "Draft";
      } else if (this.formdata.status == "moderation") {
        selectedStatusObj.label = "Moderation";
      } else if (this.formdata.status == "editor") {
        selectedStatusObj.label = "Editor";
      } else if (this.formdata.status == "canceled") {
        selectedStatusObj.label = "Canceled";
      } else {
        selectedStatusObj.label = "Inactive";
      }
      this.selectedStatus = selectedStatusObj;
    },
    setStatus(event) {
      this.formdata.status = event.value;
      // console.log(event.value);
    },
    async cropImg(itemKey, refOption) {
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
      console.log(this.cropfileList);
      if (this.cropfileList.length) {
        if (itemKey == "book") {
          this.bookImg = this.cropfileList[0];
        } else if (itemKey == "options") {
          this.optionsImg = this.cropfileList[0].path;
        }
      }
    },
    onDel(node) {
      console.log(node);
      node.remove();
    },

    onChangeName(params) {
      console.log(params);
    },

    onAddNode(params) {
      console.log(params);
    },

    onClick(params) {
      console.log(params);
    },

    addNode() {
      var node = new TreeNode({ name: "new node", isLeaf: false });
      if (!this.data.children) this.data.children = [];
      this.data.addChildren(node);
    },

    getNewTree() {
      var vm = this;
      function _dfs(oldNode) {
        var newNode = {};

        for (var k in oldNode) {
          if (k !== "children" && k !== "parent") {
            newNode[k] = oldNode[k];
          }
        }

        if (oldNode.children && oldNode.children.length > 0) {
          newNode.children = [];
          for (var i = 0, len = oldNode.children.length; i < len; i++) {
            newNode.children.push(_dfs(oldNode.children[i]));
          }
        }
        return newNode;
      }

      vm.newTree = _dfs(vm.data);
    },
  },
  async mounted() {
    this.getAuthorsListArray();
    this.getCategoryListArray();
    await this.getTheBook(this.$route.params.id);
    this.formdata = this.currentBook;
    this.tocDataList = this.currentBook.table_of_content;

    if (this.formdata.audio) {
      this.hasAudio = true;
    }
    if (this.formdata.category) {
      var categories = [];
      this.formdata.category.map(function (value, key) {
        categories.push(value.id);
      });

      this.formdata.category = categories;
    }
    if (this.formdata.author) {
      var authors = [];
      this.formdata.author.map(function (val, key) {
        authors.push(val.id);
      });

      this.formdata.author = authors;
    }
    //await this.makeSelectedAuthor();
    await this.makeSelectedStatus();
    await this.makeSelectedLang();
    await this.getGalleryList(this.$route.params.id);
    this.galleries = this.getGallery;
  },
};
</script>

<style>
.vtl .vtl-drag-disabled {
  background-color: #d0cfcf;
}

.vtl .vtl-drag-disabled:hover {
  background-color: #d0cfcf;
}

.vtl .vtl-disabled {
  background-color: #d0cfcf;
}

.icon {
  cursor: pointer;
}

.icon:hover {
  cursor: pointer;
}

.muted {
  color: gray;
  font-size: 80%;
}
</style>

<style scoped>
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

.jv_input_file_label {
  height: 50px;
  width: 50px;
  border: 4px solid #58b6f0;
  color: #58b6f0;
  border-radius: 8px;
  position: relative;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.4s;
}

.jv_input_file_label input {
  opacity: 0;
  position: absolute;
  pointer-events: none;
}

.jv_input_file_label i {
  cursor: pointer;
}

.jv_input_file_label:hover {
  background: #58b6f0;
  color: #fff;
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

.progress_line {
  height: 4px;
  background: #ffffff;
  border-radius: 6px;
  position: relative;
  z-index: 1;
}

.data-pernum::before {
  content: attr("data-pernum");
  position: absolute;
  top: 0;
}

.progress_bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #00000061;
  display: flex;
  align-items: center;
  padding: 10px;
}

.progress_bar::before {
  content: "";
  position: absolute;
  width: calc(100% - 20px);
  left: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.5);
  height: 4px;
  border-radius: 6px;
  z-index: 0;
}

.jv_error_btn {
  border: 4px solid #f05883;
  color: #d6093c;
}

.jv_error_btn:hover {
  background: #f05883;
}
</style>
