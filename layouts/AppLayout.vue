<template>
  <div id="app-container" :class="getMenuType">
    <topnav />
    <sidebar />
    <main>
      <div class="container-fluid">
        <slot></slot>
      </div>
    </main>
    <footer-component />
  </div>
</template>

<script>
import Sidebar from "../containers/navs/Sidebar";
import Topnav from "../containers/navs/Topnav";
import Footer from "../containers/navs/Footer";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    topnav: Topnav,
    sidebar: Sidebar,
    "footer-component": Footer
  },
  data() {
    return {
      show: false
    };
  },
  computed: {
    ...mapGetters(["getMenuType"])
  },
  mounted() {
    if(!localStorage.getItem('state')){
      this.profileUser();
    }
    setTimeout(() => {
      document.body.classList.add("default-transition");
    }, 100);
  },
  methods:{
    ...mapActions([
      'profileUser'
    ]),
  }
};
</script>
