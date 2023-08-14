<template>
  <div>
    <h2>Category tree</h2>

    <div class="card">
      <div class="card-body d-flex">
        <div class="form-group w-90">
          <input
            type="text"
            class="form-control"
            placeholder="Search"
            v-model="search"
          />
        </div>
        <!-- <div class="form-group w-10">
          <button type="button" class="btn btn-primary">Search</button>
        </div> -->
      </div>
      <div class="card-body mt-0">
        <div>
          <div class="mb-3">
            <b-button
              variant="success"
              @click="langue = 'oz'"
              :style="{
                'background-color': langue === 'oz' ? '#2C7BB7FF' : '',
              }"
            >
              uz
            </b-button>
            <b-button
              variant="success"
              class="mx-1"
              @click="langue = 'ru'"
              :style="{
                'background-color': langue === 'ru' ? '#2C7BB7FF' : '',
              }"
            >
              ru
            </b-button>
            <b-button
              variant="success"
              @click="langue = 'en'"
              :style="{
                'background-color': langue === 'en' ? '#2C7BB7FF' : '',
              }"
            >
              en
            </b-button>
          </div>
          <div class="mb-3">
            <b-button @click="toggleCategoty" class="ml-0" variant="success">
              <b-img
                src="../../../../assets/img/login/rightIcon.png"
                style="width: 10px"
                :style="[toggle ? { transform: 'rotate(90deg)' } : '']"
              />
            </b-button>
            <b-button @click="addFile" variant="success">{{
              $t("categoryaFile.addFile")
            }}</b-button>
          </div>
          <div v-if="!filterclient">
            <b-spinner />
            <span>Yuklanmoqda</span>
          </div>

          <div
            v-for="(category, index) in filterclient"
            :key="index"
            style="font-size: 16px; cursor: pointer; margin-left: "
          >
            <div>
              <!-- ota fila -->
              <div>
                <div class="d-flex files">
                  <div class="fileIcon">
                    <span v-show="category.items && category.items.length > 0"
                      ><b-img
                        src="../../../../assets/img/login/rightIcon.png"
                        style="width: 10px"
                        :style="[
                          toggle || toggleOne == category.id
                            ? { transform: 'rotate(90deg)' }
                            : '',
                        ]"
                    /></span>
                    <span>
                      <b-img
                        src="../../../../assets/img/login/icons8-file-folder-25.png"
                        :style="[
                          category.items && category.items.length > 0
                            ? { 'margin-left': '0' }
                            : { 'margin-left': '15px' },
                        ]"
                    /></span>
                  </div>

                  <div class="textFile">
                    <span
                      v-if="showInput === category.id"
                      @keydown.enter="updateCategory(category)"
                    >
                      <b-form-group>
                        <b-form-input
                          v-model="params.editCategory"
                          type="text"
                          style="height: 25px"
                        ></b-form-input> </b-form-group
                    ></span>

                    <span v-else @click="toggleCategory(category.id)">
                      <span>{{
                        langue === "oz"
                          ? category.name_oz
                          : langue === "ru"
                          ? category.name_ru
                          : category.name_en
                      }}</span>
                    </span>
                  </div>

                  <!-- ota fayli add edie delit  -->

                  <div class="crudIcon">
                    <span @click="addChildFile(category.id)">
                      <b-img
                        src="../../../../assets/img/login/icons8-add-25.png"
                        style="width: 25px; margin-left: 20px"
                    /></span>
                    <span class="mx-1" @click="toggleInput(category)">
                      <b-img
                        src="../../../../assets/img/login/icons8-pencil-30.png"
                        style="width: 25px"
                    /></span>
                    <span @click="deleteFile(category.id)">
                      <b-img
                        src="../../../../assets/img/login/icons8-remove-30.png"
                        style="width: 25px"
                    /></span>
                  </div>
                </div>

                <!-- bola file -->
                <div v-show="toggle || toggleOne == category.id">
                  <div
                    v-for="(item, itemIndex) in category.items"
                    :key="itemIndex"
                    class="ml-4"
                  >
                    <div class="d-flex files">
                      <div class="fileIconChild">
                        <span>
                          <!-- <span
                            v-show="
                              !toggle && item.items && item.items.length > 0
                            "
                            ><b-img
                              src="../../../../assets/img/login/rightIcon.png"
                              style="width: 10px"
                          /></span> -->
                          <!-- <span
                            v-show="
                              toggle && item.items && item.items.length > 0
                            "
                            ><b-img
                              src="../../../../assets/img/login/rightIcon.png"
                              style="width: 10px; transform: rotate(90deg)"
                          /></span> -->
                          <span>
                            <b-img
                              src="../../../../assets/img/login/icons8-file-folder-25.png"
                              alt=""
                          /></span>
                        </span>
                      </div>
                      <div class="textFile">
                        <span
                          v-if="showInput === item.id"
                          @keydown.enter="updateCategory(item)"
                        >
                          <b-form-group>
                            <b-form-input
                              v-model="params.editCategory"
                              type="text"
                              style="height: 25px"
                            ></b-form-input> </b-form-group
                        ></span>

                        <span v-else @click="toggleCategory(item.id)">
                          <span>{{
                            langue === "oz"
                              ? item.name_oz
                              : langue === "ru"
                              ? item.name_ru
                              : item.name_en
                          }}</span>
                        </span>
                      </div>
                      <!-- bola file uchun edit delet add-->
                      <div class="crudIcon">
                        <!-- <span @click="addChildFile(item.id)">
                          <b-img
                            src="../../../../srcs/assets/img/login/icons8-add-25.png"
                            style="width: 25px; margin-left: 20px"
                        /></span> -->
                        <span class="mx-1 ml-5" @click="toggleInput(item)">
                          <b-img
                            src="../../../../assets/img/login/icons8-pencil-30.png"
                            style="width: 25px"
                        /></span>
                        <span @click="deleteFile(item.id)">
                          <b-img
                            src="../../../../assets/img/login/icons8-remove-30.png"
                            style="width: 25px"
                        /></span>
                      </div>
                    </div>

                    <!-- nabira fayl -->
                    <!-- <div v-show="toggle && toggleOne == item.id">
                      <div
                        v-if="item.items && item.items.length > 0"
                        class="ml-4"
                      >
                        <div
                          v-for="(subItem, subItemIndex) in item.items"
                          :key="subItemIndex"
                        >
                          <div class="d-flex files">
                            <div class="fileIcon">
                              <span
                                v-show="
                                  !toggle &&
                                  subItem.items &&
                                  subItem.items.length > 0
                                "
                                ><b-img
                                  src="../../../../assets/img/login/rightIcon.png"
                                  style="width: 10px"
                              /></span>
                              <span
                                v-show="
                                  toggle &&
                                  subItem.items &&
                                  subItem.items.length > 0
                                "
                                ><b-img
                                  src="../../../../assets/img/login/rightIcon.png"
                                  style="width: 10px; transform: rotate(90deg)"
                              /></span>
                              <span>
                                <b-img
                                  src="../../../../assets/img/login/icons8-file-folder-25.png"
                                  alt=""
                                  :style="[
                                    item.items && item.items.length > 0
                                      ? { 'margin-left': '0' }
                                      : { 'margin-left': '15px' },
                                  ]"
                              /></span>
                            </div>

                            <div class="textFile">
                              <span
                                v-if="showInput === subItem.id"
                                @keydown.enter="updateCategory"
                              >
                                <b-form-group>
                                  <b-form-input
                                    v-model="params.editCategory"
                                    type="text"
                                    style="height: 25px"
                                  ></b-form-input> </b-form-group
                              ></span>

                              <span v-else @click="toggleCategory(subItem.id)"
                                ><span v-show="langue === 'oz'"
                                  >{{ subItem.name_oz }}
                                </span>
                                <span v-show="langue === 'ru'"
                                  >{{ subItem.name_ru }}
                                </span>
                                <span v-show="langue === 'en'"
                                  >{{ subItem.name_en }}
                                </span></span
                              >
                            </div>

                            nabira file uchun edit delet add
                            <div class="crudIcon">
                              <span @click="addChildFile(subItem.id)">
                                <b-img
                                  src="../../../../assets/img/login/icons8-add-25.png"
                                  style="width: 25px; margin-left: 20px"
                              /></span>
                              <span class="mx-1" @click="toggleInput(subItem)">
                                <b-img
                                  src="../../../../assets/img/login/icons8-pencil-30.png"
                                  style="width: 25px"
                              /></span>
                              <span @click="deleteFile(subItem.id)">
                                <b-img
                                  src="../../../../assets/img/login/icons8-remove-30.png"
                                  style="width: 25px"
                              /></span>
                            </div>
                          </div>

                          evara file

                          <div v-show="toggle || toggleOne == subItem.id">
                            <div
                              v-if="subItem.items && subItem.items.length"
                              class="ml-4"
                            >
                              <div
                                v-for="(
                                  subItem1, subItemIndex
                                ) in subItem.items"
                                class="ml-3"
                                :key="subItemIndex"
                              >
                                <div class="d-flex files">
                                  <div class="fileIcon">
                                    <span>
                                      <b-img
                                        src="../../../../assets/img/login/icons8-file-folder-25.png"
                                        alt=""
                                    /></span>
                                  </div>
                                  <div class="textFile">
                                    <span
                                      v-if="showInput === subItem1.id"
                                      @keydown.enter="updateCategory"
                                    >
                                      <b-form-group>
                                        <b-form-input
                                          v-model="params.editCategory"
                                          type="text"
                                          style="height: 25px"
                                        ></b-form-input> </b-form-group
                                    ></span>
                                    <span v-else>
                                      <span v-show="langue === 'oz'"
                                        >{{ subItem1.name_oz }}
                                      </span>
                                      <span v-show="langue === 'ru'"
                                        >{{ subItem1.name_ru }}
                                      </span>
                                      <span v-show="langue === 'en'"
                                        >{{ subItem1.name_en }}
                                      </span></span
                                    >
                                  </div>

                                  evara fayli add edie delit 
                                  <div class="crudIcon">
                                    <span
                                      class="mx-1"
                                      @click="toggleInput(subItem1)"
                                    >
                                      <b-img
                                        src="../../../../assets/img/login/icons8-pencil-30.png"
                                        style="width: 25px"
                                    /></span>
                                    <span @click="deleteFile(subItem1.id)">
                                      <b-img
                                        src="../../../../assets/img/login/icons8-remove-30.png"
                                        style="width: 25px"
                                    /></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
// import e from "cors";
import { mapGetters, mapActions } from "vuex";
// import { adminRoot } from "../../../../constants/config";

export default {
  components: {},
  data() {
    return {
      toggle: false,
      search: "",
      categary: {},
      langue: "oz",
      clickToggle: true,
      lang_sort: "yangi file",

      params: {
        id: null,
        editCategory: null,
      },
      showInput: null,
      toggleOne: null,
    };
  },

  computed: {
    ...mapGetters([
      "categoryList",
      "getCategoryAlertMsg",
      "categoryListArray",
      "GET_CATEGORY_LIST",
    ]),

    filterclient() {
      if (!this.search) return this.GET_CATEGORY_LIST.result;
      else {
        let a = "name_" + this.langue;
        let searchdata = this.GET_CATEGORY_LIST.result.filter((e) => {
          return e[a].toLowerCase().includes(this.search.toLowerCase());
        });
        return searchdata;
      }
    },
  },
  methods: {
    ...mapActions([
      "getCategoryList",
      "destroyCategory",
      "getCategoryTreeList",
      "CREATE_CATEGORY",
      "UPDATE_CATEGORY",
      "DELETE_FIELE",
      "FETCH_CATEGORY_TREE",
    ]),
    toggleCategoty() {
      this.toggle = !this.toggle;
      this.toggleOne = null;
    },

    //add paret file
    async addFile() {
      await this.CREATE_CATEGORY({
        name_oz: "yangi fayl",
        name_en: "new file",
        name_ru: "новый файл",
      });
      await this.FETCH_CATEGORY_TREE();
      await this.$_successToast();
    },
    //add child file
    async addChildFile(id) {
      await this.CREATE_CATEGORY({
        parent_id: id,
        name_oz: "test",
        name_en: "test",
        name_ru: "test",
      });
      await this.FETCH_CATEGORY_TREE();
      await this.$_successToast();
    },
    async deleteFile(id) {
      console.log(id);
      let request = confirm(this.$t("categoryaFile.delete"));
      if (request) {
        await this.DELETE_FIELE(id);
        await this.FETCH_CATEGORY_TREE();
      }
    },
    toggleInput(item) {
      console.log(item);
      let name = "name_" + this.langue;
      this.params.editCategory = item[name];
      console.log(this.params.editCategory);
      this.params.id = item.id;
      this.showInput = item.id;
    },
    //update category
    async updateCategory(item) {
      let name_oz = item.name_oz;
      let name_en = item.name_en;
      let name_ru = item.name_ru;

      if (this.langue == "oz") {
        await this.UPDATE_CATEGORY({
          id: this.params.id,
          name_oz: this.params.editCategory,
          name_en: name_en,
          name_ru: name_ru,
        });
      }
      if (this.langue == "ru") {
        await this.UPDATE_CATEGORY({
          id: this.params.id,
          name_oz: name_oz,
          name_en: name_en,
          name_ru: this.params.editCategory,
        });
      }

      if (this.langue == "en") {
        await this.UPDATE_CATEGORY({
          id: this.params.id,
          name_oz: name_oz,
          name_en: this.params.editCategory,
          name_ru: name_ru,
        });
      }

      this.showInput = null;
      await this.FETCH_CATEGORY_TREE();
    },
    toggleCategory(id) {
      if (this.toggleOne === id) {
        this.toggleOne = null;
      } else {
        this.toggleOne = id;
      }
      this.toggle = false;
    },
    refresh() {},
  },
  // watch: {
  //   search(newValue, oldValue) {
  //     if (newValue.length >= 3) {
  //       this.getCategoryTreeList("?search=" + newValue);
  //     }
  //   },
  // },
  async mounted() {
    await this.FETCH_CATEGORY_TREE();
  },
};
</script>

<style>
.fileIcon {
  width: 50px;
}
.fileIconChild {
  width: 30px;
}
.textFile {
  width: 200px;
}
.crudIcon {
  width: auto;
}
.files:hover {
  background-color: #efefefff;
}
</style>
