<template>
  <div>
    <b-modal
      id="category"
      centered
      :title="$t('createBook.twoCategories')"
      :ok-title="$t('createBook.save')"
      :cancel-title="$t('categoryaFile.cancel')"
    >
      {{ categorySelection }}
      <b-row>
        <b-col
          cols="12"
          class="border p-3"
          style="overflow-y: scroll; height: 200px; border-radius: 10px"
        >
          <div v-for="category in GET_CATEGORY_LIST.result" :key="category.id">
            <div>
              <span
                :style="{
                  visibility:
                    category.items && category.items.length
                      ? 'visible'
                      : 'hidden',
                }"
              >
                <span
                  @click="categoryid(category.id)"
                  v-show="!categorId.includes(category.id)"
                  class="cursorPointer"
                >
                  <i class="simple-icon-arrow-right" style="font-size: 7px" />
                </span>
                <span
                  v-show="categorId.includes(category.id)"
                  @click="categoryid(category.id)"
                  class="cursorPointer"
                >
                  <i class="simple-icon-arrow-down" style="font-size: 7px"
                /></span>
              </span>
              <span @click="categoryid(category.id)" class="cursorPointer">
                {{
                  $i18n.locale == "oz"
                    ? category.name_oz
                    : $i18n.locale == "en"
                    ? category.name_en
                    : category.name_ru
                }}</span
              >
              <div v-show="categorId.includes(category.id)">
                <div
                  v-for="categoryItems in category.items"
                  :key="categoryItems.id"
                  style="margin-left: 15px"
                  class="d-flex"
                >
                  <span class="d-flex align-items-center">
                    <input
                      type="checkbox"
                      class="mr-1 cursorPointer"
                      @click="categoryData(category, categoryItems)"
                  /></span>
                  <span class="cursorPointer">{{
                    $i18n.locale == "oz"
                      ? categoryItems.name_oz
                      : $i18n.locale == "en"
                      ? categoryItems.name_en
                      : categoryItems.name_ru
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      categorId: [],
      categorySelection: [],
    };
  },
  methods: {
    ...mapActions(["FETCH_CATEGORY_TREE"]),
    categoryData(parentName, childName) {
      // if (this.categorySelection.items.includes(childName.id)) {
      //   let indexElement = this.categorySelection.items.indexOf(childName.id);
      //   this.categorySelection.items.splice(indexElement, 1);
      // }
      // else {
      //   this.categorySelection.push(parentName)

      // }
      // console.log(parentName.items.filter((item) => item.id == childName.id));
      console.log(parentName, childName);
    },
    categoryid(id) {
      if (this.categorId.includes(id)) {
        let indexElement = this.categorId.indexOf(id);
        this.categorId.splice(indexElement, 1);
      } else {
        this.categorId.push(id);
      }
    },
  },
  computed: {
    ...mapGetters(["GET_CATEGORY_LIST"]),
  },
  mounted() {
    this.FETCH_CATEGORY_TREE();
  },
};
</script>
<style>
.cursorPointer {
  cursor: pointer;
}
</style>
