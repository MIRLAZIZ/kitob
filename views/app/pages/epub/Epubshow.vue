<template>
  <div id="apps">
    <PreferencesDropdown
      :themes="themes"
      :current-theme.sync="currentTheme"
      :font-size.sync="size"
      v-model="searchQuery"
      @searchResults="onSearchResults"
    >
      <template slot="book-content" slot-scope="">
        <button class="my-find my-content" @click="showContent">
          <img src="https://uploads.codesandbox.io/uploads/user/8973517b-ade3-4128-b0c2-2cf0f387882a/4_gy-icons8-align-left-50.png" alt="">
        </button>
        <div class="search-widget1" v-if="openContent">
          <TreeMenu :subContent="toc"/>
        </div>
      </template>
      <template slot="book-search" slot-scope="props">
        <button class="my-find" @click="toggleSearchWidget">
          <img id="find" src="https://uploads.codesandbox.io/uploads/user/8973517b-ade3-4128-b0c2-2cf0f387882a/Ciwo-icons8-search-50.png" alt="">
        </button>
        <div class="search-widget1" v-if="openSearch">
          <input type="text"
            :value="searchQuery"
            @change="props.findText($event.target.value)"
          >
          <button @click="props.removeHighlight">x</button>
          <ul>
            <li v-for="(excerpt, i) in searchContent" :key="i" @click="props.showPage(excerpt.cfi)">
              <p>{{excerpt.excerpt}}</p>
            </li>
          </ul>
        </div>
      </template>
    </PreferencesDropdown>
    <BookReader v-if="loaded"
      :epub-url="url"
      :font-size="size"
      :themes="themes"
      :theme="currentTheme"
      :progress.sync="readingProgress"
      :book-area="'area-content'"
      @toc="getContent"
      :contentBookModify="140"
    >
      <template slot="book-content" slot-scope="">
        <div id="area-content"  class="content-container"></div>
      </template>
      <template slot="progress-bar" slot-scope="props">
        <div class="progress-bar">
          <input size="3" type="range" max="100" min="0" step="1" id="input-progress-bar"
            @change="props.onChange($event.target.value)"
            :value="readingProgress"
            /> %
            <!-- <input type="text" id="input-progress-bar-value"
              @change="props.onChange($event.target.value)"
              @mousedown="props.onMousedown"
              @mouseup="props.onMouseup"
              :value="readingProgress"
            > -->
            <input type="text" id="input-progress-bar-value"
              @change="props.onChange($event.target.value)"
              :value="readingProgress"
            >
        </div>
      </template>
    </BookReader>
  </div>
</template>

<script>
import { BookReader, PreferencesDropdown, TreeMenu } from "vue-epub-reader";
import {mapGetters,mapActions} from 'vuex';
import { appUrl } from '../../../../constants/config';
export default {
  name: "App",
  components: {
    BookReader,
    PreferencesDropdown,
    TreeMenu
  },
  data() {
    return {
      epubForm: {},
      url: "",//http://book.loc:8888/epub/google.epub
      size: 80,
      currentTheme: "beige",
      themes: {
        white: {
          body: {
            color: "#000000",
            background: "#ffffff"
          },
          name: "WHITE"
        },
        beige: {
          body: {
            color: "#000000",
            background: "#ffffff"
          },
          name: "BEIGE"
        },
        night: {
          body: {
            color: "#ffffff",
            background: "#ffffff"
          },
          name: "NIGHT"
        }
      },
      searchQuery: "",
      readingProgress: 20,
      openSearch: false,
      openContent: false,
      searchContent: [],
      toc: [],
      loaded: false,
    };
  },
  computed:{
      ...mapGetters(['epubsList','theEpub'])
  },
  methods: {
    ...mapActions(['getEpubsList','getTheEpub']),
    toggleSearchWidget() {
      this.openSearch = !this.openSearch;
    },

    showContent() {
      this.openContent = !this.openContent;
    },

    onSearchResults(value) {
      this.searchContent = value;
    },

    getContent(value) {
      this.toc = value;
    }
  },
  async mounted() {
    await this.getTheEpub(this.$route.params.id);
    // console.log(this.$store.state);
    // this.epubForm = this.theEpub;
    this.url = `/${this.theEpub.epub}`;
    this.loaded = true
    // this.$forceUpdate();
    // console.log(this.theEpub)
    this.$root.$on("toc", toc => {
      this.toc = toc;
    });
    this.$router.beforeEach((to, from, next) => {
        this.loaded = false
        next()
    })
  },
};
</script>

<style>
  .search-widget1 {
    overflow: auto;
    position: fixed;
    padding: 20px;
    border: 5px solid #f1f1f1;
    background: #fff;
    border-radius: 5px;
    font-family: "Roboto", sans-serif;
    width: 16%;
    height: 81%;
    z-index: 100;
  }

  .search-widget1 h3 {
    margin-bottom: 20px;
    text-align: center;
    font-size: 24px;
    font-weight: normal;
    color: #424949;
  }

  .search-widget1 ul {
    margin: 0;
    padding: 0;
    list-style: none;
    width: 250px;
  }

  .search-widget1 li {
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 15px;
    margin-bottom: 15px;
  }

  .search-widget1 li:before {
    font-family: FontAwesome;
    font-size: 20px;
    vertical-align: bottom;
    color: #dd3333;
    margin-right: 14px;
  }

  #area-content {
    width: 800px;
    height: auto;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    margin-top: 0;
  }
  #apps{
    max-width: 90%;
    border: 1px solid;
    margin: 0 auto;
  }
  .epub-container{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  #area-content iframe {
    border: none;
  }

  .progress-bar {
    margin-top: 8vh;
  }
  .epub-view{
    width: 100%  !important;
  }
  #input-progress-bar {
    width: 95%;
  }

  #input-progress-bar-value {
    width: 2%;
  }

  #find {
    width: 20px;
  }

  .buton {
      background-color: #4a4a4a;
      border: none;
      color: white;
      padding: 13px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 22px;
      margin: 26px -115px;
      border-radius: 50%;
      font-family: 'Montserrat', sans-serif;
  }
</style>
