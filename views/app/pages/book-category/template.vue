<template>
    <div>
      <h2>Category tree</h2>
      <div class="card">
        <div class="card-body mb-4 d-flex">
          <div class="form-group w-90">
            <input
              type="text"
              class="form-control"
              placeholder="Search"
              v-model="search"
            />
          </div>
          <div class="form-group w-10">
            <button type="button" class="btn btn-primary">Search</button>
          </div>
        </div>
        <div class="card-body">
          <div>
            {{ clickToggle }}
            <b-card>
              <b-button variant="success" @click="langueUz"> uz </b-button>
              <b-button variant="success" class="mx-1" @click="langueRu">
                ru
              </b-button>
              <b-button variant="success" @click="langueEn"> en </b-button>
            </b-card>
            <b-button @click="fileToggle">+</b-button>
  
            <b-button @click="addNode" variant="primary">Add Node</b-button>
            <vue-tree-list
              @click="onClick"
              @change-name="onChangeName"
              @delete-node="onDel"
              :model="categary"
              :default-tree-node-name="lang_sort"
              default-leaf-node-name="new leaf"
              @add-node="onAddNode"
              :default-expanded="false"
            >
              <template v-slot:leafNameDisplay="slotProps">
                <span v-show="langue == 'oz'">
                  {{
                    slotProps.model.name_oz ? slotProps.model.name_oz : lang_sort
                  }}
                </span>
                <span v-show="langue == 'ru'">
                  {{
                    slotProps.model.name_ru ? slotProps.model.name_ru : lang_sort
                  }}
                </span>
                <span v-show="langue == 'en'">
                  {{
                    slotProps.model.name_en ? slotProps.model.name_en : lang_sort
                  }}
                </span>
              </template>
  
              <span class="icon" slot="addTreeNodeIcon">📂</span>
              <span class="icon" slot="addLeafNodeIcon"></span>
              <span class="icon" slot="editNodeIcon">📃</span>
              <span class="icon" slot="delNodeIcon">✂️</span>
              <span class="icon" slot="leafNodeIcon">🍃</span>
              <span class="icon" slot="treeNodeIcon"> 📂</span>
            </vue-tree-list>
          </div>
  
          <!-- <div class="list-group">
                      <ViewTree :tree-data="categoryListArray" :variant="'primary'"></ViewTree>
                  </div> -->
        </div>
      </div>
      <pre> {{ categary }}</pre>
  
      <pre>{{ categoryListArray }}</pre>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from "vuex";
  import { adminRoot } from "../../../../constants/config";
  import { VueTreeList, Tree, TreeNode } from "vue-tree-list";
  // import ViewTree from "./ViewTree";
  
  export default {
    components: {
      VueTreeList,
      Tree,
      TreeNode,
    },
    data() {
      return {
        search: "",
        categary: {},
        data: new Tree([
          {
            name_uz: "yangi file",
            name_ru: "новый файл",
            name_en: "new file ",
            id: 1,
            pid: 0,
            //   dragDisabled: true,
            //   addTreeNodeDisabled: true,
            //   addLeafNodeDisabled: true,
            //   editNodeDisabled: true,
            //   delNodeDisabled: true,
            children: [
              {
                name_uz: "yangi file",
                name_ru: "новый файл",
                name_en: "new file ",
                id: 2,
                isLeaf: false,
                pid: 1,
                children: [
                  {
                    name_uz: "yangi file",
                    name_en: "new file ",
                    name_ru: "новый файл",
  
                    id: 2,
                    isLeaf: false,
                    pid: 1,
                    children: [
                      {
                        name: {
                          name_uz: "kategoria",
                          name_uz: " catedoria",
                          name_uz: "категория",
                        },
                        id: 555,
                        isLeaf: false,
                        pid: 1,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name_uz: "yangi file",
            name_ru: "новый файл",
            name_en: "new file ",
            id: 3,
            pid: 0,
            disabled: false,
            children: [
              {
                name_uz: "yangi file",
                name_ru: "новый файл",
                name_en: "new file ",
                id: 2,
                isLeaf: false,
                pid: 1,
              },
            ],
          },
          {
            name_uz: "yangi file",
            name_ru: "новый файл",
            name_en: "new file ",
            id: 4,
            pid: 0,
            isLeaf: false,
          },
        ]),
        langue: "oz",
        clickToggle: true,
        lang_sort: "yangi file",
      };
    },
  
    computed: {
      ...mapGetters(["categoryList", "getCategoryAlertMsg", "categoryListArray"]),
    },
    methods: {
      ...mapActions([
        "getCategoryList",
        "destroyCategory",
        "getCategoryTreeList",
        "CREATE_CATEGORY",
        "UPDATE_CATEGORY",
        "DELET_CATEGORY",
      ]),
      // edit(id){
      //     this.$router.push(`${adminRoot}/book-category/edit/${id}`)
      // },
      // async remove(id){
      //     if(confirm('Are you sure?')){
      //         await this.destroyCategory(id);
  
      //         var type = 'success filled';
      //         var title = 'Removing';
      //         var message = 'Data successfully deleted';
  
      //         if(!this.getCategoryAlertMsg.success)
      //         {
      //             type = 'error filled';
      //             message = 'Data cannot be deleted';
      //         }
      //         else {
      //             this.categoryList.splice(this.index, 1)
      //         }
  
      //         this.$notify(type, title, message, { duration: 3000, permanent: false });
      //     }
      // }
      refresh() {
        this.getCategoryTreeList("?search=" + this.search);
      },
  
      fileToggle() {
        this.clickToggle = !this.clickToggle;
      },
      onDel(node) {
        console.log(node.id, "delate");
        let a = confirm("uchirilsinmi");
        if (a) {
          this.destroyCategory(node.id).then(() => {
            this.refresh();
          });
          // node.remove();
        }
      },
  
      setUnEditable(params) {
        this.UPDATE_CATEGORY({id: params.id, name_oz: params.newName})
      ;
        console.log(params.newName);
        console.log(params, "event blur edit uchun");
      },
  
      onAddNode(params) {
        this.CREATE_CATEGORY({
          parent_id: params.parent.id,
          id: params.id,
          name_oz: "yangi file",
          name_ru: "новый файл",
          name_en: "new file ",
          isLeaf: true,
        }).then(() => {
          this.refresh();
        });
        console.log(params.parent.id);
  
        console.log(params.id, "bargi yaratish uchun");
      },
  
      onClick(params) {
        params.toggle();
        console.log(params.toggle);
        console.log(params, "file ochildi");
      },
  
      addNode() {
        this.CREATE_CATEGORY({
          name_oz: "yangi file",
          name_ru: "новый файл",
          name_en: "new file ",
          isLeaf: false,
        }).then(() => {
          this.refresh();
        });
        //   var node = new TreeNode({
        //     name_oz: "yangi file",
        //     name_ru: "новый файл",
        //     name_en: "new file ",
        //     isLeaf: false,
        //   });
        //   if (!this.data.children) this.data.children = [];
        //   this.data.addChildren(node);
  
        console.log("yangi daraxt q'shildi");
      },
      langueUz() {
        this.langue = "oz";
        this.lang_sort = "yangi file";
      },
      langueRu() {
        this.langue = "ru";
        this.lang_sort = "новый файл";
      },
      langueEn() {
        this.langue = "en";
        this.lang_sort = "new file";
      },
    },
    watch: {
      search(newValue, oldValue) {
        if (newValue.length >= 3) {
          this.getCategoryTreeList("?search=" + newValue);
        }
      },
    },
    async mounted() {
      await this.getCategoryTreeList("?search=" + this.search);
      this.categary = new Tree(this.categoryListArray);
    },
  };
  </script>
  
  <style>
  .icon:hover {
    cursor: pointer;
  }
  
  .muted {
    color: gray;
    font-size: 80%;
  }
  .vtl .vtl-drag-disabled {
    background-color: #d0cfcf;
  }
  .vtl-disabled {
    background-color: #d0cfcf;
  }
  .vtl .vtl-drag-disabled:hover {
    background-color: #d0cfcf;
  }
  </style>
  