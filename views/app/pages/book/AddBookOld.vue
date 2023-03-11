<template>
  <div>
    <h2>Add Book</h2>
    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('forms.top-labels-over-line')">
          <b-form @submit.prevent="onAddBookFormSubmit">
            <div class="alert alert-danger" v-if="errForm">You have to fill out all fields...</div>
            <div class="errors" v-if="errorMsg">
              <div class="alert alert-danger" v-for="(err,key) in errorMsg" :key="key">{{err[0]}}</div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <label class="form-group has-float-label">
                  <input type="text" class="form-control" v-model="addBookForm.name" />
                  <span>{{ $t('book.name') }}</span>
                </label>
              </div>
              <!-- /. column -->
              <div class="col-md-6">
                <label class="form-group has-float-label">
                  <v-select
                    :options="authorsListArray"
                    :dir="direction"
                    @input="setSelectedAuthor"
                  />
                  <span>{{ $t('book.author_id') }}</span>
                  <button
                    type="button"
                    class="btn_add_select"
                    v-b-modal.authormodal
                    variant="outline-primary"
                  >
                    <i class="simple-icon-plus"></i>
                  </button>
                </label>
              </div>
              <!-- /. column -->
              <b-modal
                id="authormodal"
                ref="modalbasic"
                :title="$t('modal.modal-title')"
                :hide-footer="true"
              >
                <AddAuthor />
              </b-modal>
              <div class="col-md-4">
                <label class="form-group has-float-label">
                  <input
                    type="number"
                    min="1900"
                    max="2099"
                    step="1"
                    class="form-control"
                    v-model="addBookForm.year"
                  />
                  <span>{{ $t('book.year') }}</span>
                </label>
              </div>
              <div class="col-md-4">
                <label class="form-group has-float-label">
                  <input type="text" class="form-control" v-model="addBookForm.publishing_house" />
                  <span>{{ $t('book.publishing_house') }}</span>
                </label>
              </div>
              <div class="col-md-4">
                <label class="form-group has-float-label">
                  <input type="text" class="form-control" v-model="addBookForm.edition" />
                  <span>{{ $t('book.edition') }}</span>
                </label>
              </div>
              <div class="col-md-4">
                <label class="form-group has-float-label">
                  <input type="text" class="form-control" v-model="addBookForm.age_access" />
                  <span>{{ $t('book.age_access') }}</span>
                </label>
              </div>
              <div class="col-md-4">
                <label class="form-group has-float-label">
                  <input type="text" class="form-control" v-model="addBookForm.isbn" />
                  <span>{{ $t('book.isbn') }}</span>
                </label>
              </div>
              <div class="col-md-4">
                <label class="form-group has-float-label">
                  <input type="text" class="form-control" v-model="addBookForm.number_of_pages" />
                  <span>{{ $t('book.number_of_pages') }}</span>
                </label>
              </div>
              <!-- ebooks -->
              <div class="border card col-sm-12 mb-4 pb-4" id="ebooks">
                <b-button v-b-toggle.collapseAccordion2 variant="link">Ebook</b-button>
                <b-collapse id="collapseAccordion2" accordion="my-accordion">
                  <div class="p-4 border mt-4">
                    <label class="form-group has-float-label">
                      <input type="text" class="form-control" v-model="addBookForm.ebook_price" />
                      <span>{{ $t('book.ebook_price') }}</span>
                    </label>
                    <div class="mb-3 col-lg-3 col-xs-6 col-12" v-if="addBookForm.ebook_image">
                      <div class="card mb-4 text-white">
                        <img v-bind:src="'/'+ addBookForm.ebook_image" class="card-img" />
                      </div>
                    </div>
                    <div class="mb-3 col-lg-3 col-xs-6 col-12">
                      <div class="card mb-4 text-white crop_block" v-if="bookImg">
                        <cropper
                          class="cropper"
                          :src="'/'+bookImg.path"
                          :stencil-props="{aspectRatio: 10/12}"
                          ref="cropperImg"
                        ></cropper>
                        <button type="button" class="btn_crop" @click="cropImg('book', 'cropperImg')">
                          <i class="simple-icon-crop"></i>
                        </button>
                      </div>
                    </div>
                    <label class="form-group has-float-label jv_input_file_label">
                      <input
                        type="file"
                        class="form-control jv_input_file"
                        @change="setEbookImage($event,'ebook')"
                      />
                      <i class="simple-icon-camera"></i>
                    </label>
                  </div>
                </b-collapse>
              </div>
              <!-- papers -->
              <div class="border card col-sm-12 mb-4 pb-4" id="papers">
                <b-button v-b-toggle.collapseAccordion3 variant="link">Paper</b-button>
                <b-collapse id="collapseAccordion3" accordion="my-accordion">
                  <div class="p-4 border mt-4">
                    <label class="form-group has-float-label">
                      <input type="text" class="form-control" v-model="addBookForm.paper_price" />
                      <span>{{ $t('book.paper_price') }}</span>
                    </label>
                  </div>
                </b-collapse>
              </div>
              <!-- audios -->
              <div class="border card col-sm-12 mb-4 pb-4" id="audios">
                <b-button v-b-toggle.collapseAccordion5 variant="link">Audios</b-button>
                <b-collapse id="collapseAccordion5" accordion="my-accordion">
                  <div class="p-4 border mt-4">
                    <label class="form-group has-float-label">
                      <input type="text" class="form-control" v-model="addBookForm.audio_price" />
                      <span>{{ $t('book.audio_price') }}</span>
                    </label>
                    
                    <label class="form-group has-float-label">
                      <input type="file" class="form-control" @change="setFile($event,'audio')" />
                      <span>{{ $t('book.audio') }}</span>
                    </label>
                  </div>
                </b-collapse>
              </div>
              <!-- Options -->
              <div class="border card col-sm-12 mb-4 pb-4" id="options">
                <b-button v-b-toggle.collapseAccordion4 variant="link">Options</b-button>
                <b-collapse id="collapseAccordion4" accordion="my-accordion">
                  <div class="p-4 border mt-4">
                    <div class="form-group">
                      <div class="custom-control custom-checkbox">
                        <input
                          @change="setCheckBox($event,'is_new')"
                          type="checkbox"
                          class="custom-control-input"
                          id="is_new"
                          v-model="addBookForm.is_new"
                        />
                        <label class="custom-control-label" for="is_new">{{ $t('book.is_new') }}</label>
                      </div>
                      <div class="custom-control custom-checkbox">
                        <input
                          @change="setCheckBox($event,'is_bestseller')"
                          type="checkbox"
                          id="is_bestseller"
                          class="custom-control-input"
                          v-model="addBookForm.is_bestseller"
                        />
                        <label
                          class="custom-control-label"
                          for="is_bestseller"
                        >{{ $t('book.is_bestseller') }}</label>
                      </div>
                    </div>
                    <label class="form-group has-float-label">
                      <input type="text" class="form-control" v-model="addBookForm.category" />
                      <span>{{ $t('book.category') }}</span>
                    </label>
                    <label class="form-group has-float-label">
                      <v-select
                        :options="genresListArray"
                        :dir="direction"
                        @input="setSelectedGenre"
                      />
                      <span>{{ $t('book.genre_id') }}</span>
                    </label>
                    <label class="form-group has-float-label">
                      <editor
                        initialValue
                        v-model="addBookForm.content"
                        :init="{
                                                height: 500,
                                                menubar: false,
                                                plugins: [
                                                    'advlist autolink lists link image charmap',
                                                    'searchreplace visualblocks code fullscreen',
                                                    'print preview anchor insertdatetime media',
                                                    'paste code help wordcount table image'
                                                ],
                                                toolbar:
                                                    'undo redo | formatselect | bold italic | \
                                                    alignleft aligncenter alignright | \
                                                    bullist numlist outdent indent | help'
                                                }"
                      ></editor>
                      <!-- <textarea type="text" cols="10" rows="4" class="form-control" v-model="addBookForm.content"></textarea> -->
                      <span>{{ $t('book.content') }}</span>
                    </label>
                    <label class="form-group has-float-label">
                      <v-select
                        v-model="addBookForm.status"
                        :options="selectData"
                        :dir="direction"
                      />
                      <span>{{ $t('book.status') }}</span>
                    </label>
                    <label class="form-group has-float-label">
                      <textarea
                        cols="10"
                        rows="4"
                        class="form-control"
                        v-model="addBookForm.description"
                      ></textarea>
                      <span>{{ $t('book.description') }}</span>
                    </label>
                    <label class="form-group has-float-label">
                      <textarea
                        cols="10"
                        rows="4"
                        class="form-control"
                        v-model="addBookForm.fragment"
                      ></textarea>
                      <span>{{ $t('book.fragment') }}</span>
                    </label>
                    <label  class="form-group has-float-label">
                      <v-select
                        :options="getFoundBook"
                        @input="setSelectedBook"
                        @search="findBooksEvent" 
                      />
                    <span>{{ $t('book.translation') }}</span>
                    </label>
                    <div class="mb-3 col-lg-3 col-xs-6 col-12">
                      <div class="card mb-4 text-white crop_block" v-if="optionsImg">
                        <cropper
                          class="cropper"
                          :src="'/'+optionsImg.path"
                          :stencil-props="{aspectRatio: 10/12}"
                          ref="cropperImgoptions"
                        ></cropper>
                        <button type="button" class="btn_crop" @click="cropImg('options', 'cropperImgoptions')">
                          <i class="simple-icon-crop"></i>
                        </button>
                      </div>
                    </div>
                    <label class="form-group has-float-label jv_input_file_label">
                      <input
                        type="file"
                        class="form-control jv_input_file"
                        @change="setEbookImage($event,'options')"
                      />
                      <i class="simple-icon-camera"></i>
                    </label>
                    <!-- <label class="form-group has-float-label">
                      <input type="file" class="form-control" @change="setFile($event,'image')" />
                      <span>{{ $t('book.image') }}</span>
                    </label> -->
                  </div>
                </b-collapse>
              </div>
            </div>
            <!-- /.row -->
            <b-button type="submit" variant="primary" class="mt-4">{{ $t('forms.submit') }}</b-button>
          </b-form>
        </b-card>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Editor from "@tinymce/tinymce-vue";
import { Cropper } from "vue-advanced-cropper";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { getDirection } from "../../../../utils";
import { adminRoot } from "../../../../constants/config";
import CustomInputExample from "../../../../containers/forms/CustomInputExample";
import AddAuthor from "../author/AddAuthor";
export default {
  data() {
    return {
      direction: getDirection().direction,
      addBookForm: {
        name: "",
        author_id: null,
        paper_price: null,
        audio_price: null,
        ebook_price: null,
        image: null,
        fragment: "",
        audio: null,
        ebook: null,
        description: "",
        year: 2020,
        publishing_house: "",
        edition: "",
        age_access: 18,
        isbn: "",
        number_of_pages: 0,
        category: "",
        genre_id: "",
        content: "",
        status: "",
        is_new: 0,
        is_bestseller: 0,
        ebook_image: null,
      },
      selectData: [
        { label: "Active", value: "active" },
        { label: "Inavtive", value: "inactive" },
      ],
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
      },
      // img: '/uploads/0001/0002/0dcf972e3c25e5f34dccf6d749e49d5f.png'
    };
  },
  components: {
    "v-select": vSelect,
    "custom-input-example": CustomInputExample,
    editor: Editor,
    Cropper,
    AddAuthor,
  },
  computed: {
    ...mapGetters([
      "getBookAlertMsg",
      "filesList",
      "authorsListArray",
      "genresListArray",
      "cropfileList",
      "getFoundBook",
    ]),
  },
  methods: {
    ...mapActions([
      "addBook",
      "storeImage",
      "storeCropImage",
      "getAuthorsListArray",
      "getGenresListArray",
      "actionFindBook",
    ]),
    async onAddBookFormSubmit() {
      let book = new FormData();
      if (this.addBookForm.image) {
        book.append("image", this.addBookForm.image);
      }
      if (this.addBookForm.audio) {
        book.append("audio", this.addBookForm.audio);
      }
      if (this.addBookForm.ebook) {
        book.append("ebook", this.addBookForm.ebook);
      }
      book.append("name", this.addBookForm.name);
      book.append("author_id", this.addBookForm.author_id);
      book.append("paper_price", this.addBookForm.paper_price);
      book.append("audio_price", this.addBookForm.audio_price);
      book.append("ebook_price", this.addBookForm.ebook_price);
      book.append("paper_price", this.addBookForm.paper_price);
      book.append("fragment", this.addBookForm.fragment);
      book.append("year", this.addBookForm.year);
      book.append("publishing_house", this.addBookForm.publishing_house);
      book.append("edition", this.addBookForm.edition);
      book.append("age_access", this.addBookForm.age_access);
      book.append("isbn", this.addBookForm.isbn);
      book.append("number_of_pages", this.addBookForm.number_of_pages);
      book.append("category", this.addBookForm.category);
      book.append("genre_id", this.addBookForm.genre_id);
      book.append("content", this.addBookForm.content);
      book.append("isbn", this.addBookForm.isbn);
      book.append("is_new", this.addBookForm.is_new);
      book.append("is_bestseller", this.addBookForm.is_bestseller);
      book.append("description", this.addBookForm.description);
      book.append("status", this.addBookForm.status.value);
      book.append("bookImg", this.bookImg.path);
      book.append("optionsImg", this.optionsImg.path);   
      await this.addBook(book);
      if (this.getBookAlertMsg.error) {
        this.errorMsg = this.getBookAlertMsg.message;
      } else {
        this.$router.push(`${adminRoot}/book`);
      }
    },
    setFile(event, key) {
      this.addBookForm[key] = event.target.files[0];
    },
    async setEbookImage(event, key) {
      let image = new FormData();
      image.append("files[]", event.target.files[0]);
      await this.storeImage(image);
      if (key == "ebook") {
        this.bookImg = this.filesList[0];
      } else if (key == "options") {
        this.optionsImg = this.filesList[0];
      }
    },
    setCheckBox(event, key) {
      if (event.target.checked) {
        this.addBookForm[key] = 1;
      } else {
        this.addBookForm[key] = 0;
      }
    },
    setSelectedAuthor(event) {
      this.addBookForm.author_id = event.value;
    },
    setSelectedBook(event) {
      this.addBookForm.author_id = event.value;
    },
    setSelectedGenre(event) {
      this.addBookForm.genre_id = event.value;
    },
    async findBooksEvent(search, loading){
      let thisval = search;
      if(thisval != ""){
        await this.actionFindBook({name: thisval})
      }
    },
    async cropImg(itemKey, refOption) {
      const { coordinates, canvas } = this.$refs[refOption].getResult();
      this.coordinates = coordinates;
      this.croppedImage = canvas.toDataURL();
      let image = new FormData();
      image.append("files[]", this.croppedImage);
      await this.storeCropImage(image);
      if (this.cropfileList.length) {
        if (itemKey == "book") {
          this.bookImg = this.cropfileList[0];
        } else if (itemKey == "options") {
          this.optionsImg = this.cropfileList[0];
        }
      }
    },
  },
  created() {
    this.getAuthorsListArray();
    this.getGenresListArray();
  },
};
</script>

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
</style>