<template>
    <nav class="navbar fixed-top">
        <div class="d-flex align-items-center navbar-left">
            <a
                href="#"
                class="menu-button d-none d-md-block"
                @click.prevent.stop="
                    changeSideMenuStatus({
                        step: menuClickCount + 1,
                        classNames: menuType,
                        selectedMenuHasSubItems
                    })
                "
            >
                <menu-icon />
            </a>
            <a
                href="#"
                class="menu-button-mobile d-xs-block d-sm-block d-md-none"
                @click.prevent.stop="changeSideMenuForMobile(menuType)"
            >
                <mobile-menu-icon />
            </a>
            <div
                :class="{ search: true, 'mobile-view': isMobileSearch }"

            >
                <b-input
                    :placeholder="$t('menu.search')"
                    @keypress.native.enter="search"
                    v-model="searchKeyword"
                    @input="searchClick"
                />
                <span class="search-icon" @click="searchClick">
                    <i class="simple-icon-magnifier"></i>
                </span>
                <!-- Search result -->
                <div class="search-results">
                    <template v-for="(search, key) in searcheres">
                        <router-link  class="s_item" 
                        :to="`/app/book/edit/${search.id}`"
                            
                        >{{ search.name }}
                        </router-link>
                    </template>
                </div>
            </div>
        </div>
        <router-link class="navbar-logo" tag="a" :to="adminRoot">
            <span class="logo d-none d-xs-block"></span>
            <span class="logo-mobile d-block d-xs-none"></span>
        </router-link>

        <div class="navbar-right">
            <div class="d-inline-block">
                <b-dropdown
                    id="langddm"
                    class="ml-2"
                    variant="light"   
                    size="sm"
                    toggle-class="language-button"
                >
                    <template slot="button-content">
                        <span class="name">{{
                            $i18n.locale.toUpperCase()
                        }}</span>
                    </template>
                    <b-dropdown-item
                        v-for="(l, index) in localeOptions"
                        :key="index"
                        @click="changeLocale(l.id, l.direction)"
                        >{{ l.name ? l.name : "" }}</b-dropdown-item
                    >
                </b-dropdown>
            </div>
            <div class="header-icons d-inline-block align-middle">
                <div class="position-relative d-inline-block">
                    <b-dropdown
                        variant="empty"
                        size="sm"
                        right
                        toggle-class="header-icon notificationButton"
                        menu-class="position-absolute mt-3 notificationDropdown"
                        no-caret
                    >
                        <template slot="button-content">
                            <i class="simple-icon-bell" />
                            <span class="count">3</span>
                        </template>
                        <vue-perfect-scrollbar
                            :settings="{
                                suppressScrollX: true,
                                wheelPropagation: false
                            }"
                        >
                            <div
                                class="d-flex flex-row mb-3 pb-3 border-bottom"
                                v-for="(n, index) in notifications"
                                :key="index"
                            >
                                <router-link
                                    tag="a"
                                    :to="`${adminRoot}/pages/product/details`"
                                >
                                    <img
                                        :src="n.img"
                                        :alt="n.title"
                                        class="img-thumbnail list-thumbnail xsmall border-0 rounded-circle"
                                    />
                                </router-link>
                                <div class="pl-3 pr-2">
                                    <router-link
                                        tag="a"
                                        :to="
                                            `${adminRoot}/pages/product/details`
                                        "
                                    >
                                        <p class="font-weight-medium mb-1">
                                            {{ n.title }}
                                        </p>
                                        <p class="text-muted mb-0 text-small">
                                            {{ n.date }}
                                        </p>
                                    </router-link>
                                </div>
                            </div>
                        </vue-perfect-scrollbar>
                    </b-dropdown>
                </div>
                <div class="position-relative d-none d-sm-inline-block">
                    <div class="btn-group">
                        <b-button
                            variant="empty"
                            class="header-icon btn-sm"
                            @click="toggleFullScreen"
                        >
                            <i
                                :class="{
                                    'd-inline-block': true,
                                    'simple-icon-size-actual': fullScreen,
                                    'simple-icon-size-fullscreen': !fullScreen
                                }"
                            />
                        </b-button>
                    </div>
                </div>
            </div>
            <div class="user d-inline-block">
                <b-dropdown
                    class="dropdown-menu-right"
                    right
                    variant="empty"
                    toggle-class="p-0"
                    menu-class="mt-3"
                    no-caret
                >
                    <template slot="button-content">
                        <span class="name mr-1">{{
                            currentUser ? currentUser.name : ""
                        }}</span>
                        <span>
                            <img
                                :alt="currentUser ? currentUser.name : ''"
                                :src="currentUser ? currentUser.photo : ''"
                            />
                        </span>
                    </template>
                    <b-dropdown-item>Account</b-dropdown-item>
                    <b-dropdown-divider />
                    <b-dropdown-item @click="logout">Sign out</b-dropdown-item>
                </b-dropdown>
            </div>
        </div>
    </nav>
</template>

<script>
import Switches from "vue-switches";
import notifications from "../../data/notifications";

import { mapGetters, mapMutations, mapActions } from "vuex";
import { MenuIcon, MobileMenuIcon } from "../../components/Svg";
import {
    searchPath,
    menuHiddenBreakpoint,
    localeOptions,
    buyUrl,
    adminRoot
} from "../../constants/config";
import {
    getDirection,
    setDirection,
    getThemeColor,
    setThemeColor
} from "../../utils";
import axios from "axios";
import { localize } from 'vee-validate'

export default {
    components: {
        "menu-icon": MenuIcon,
        "mobile-menu-icon": MobileMenuIcon,
        switches: Switches
    },
    data() {
        return {
            searchKeyword: "",
            isMobileSearch: false,
            isSearchOver: false,
            fullScreen: false,
            searcheres: [],
            menuHiddenBreakpoint,
            searchPath,
            adminRoot,
            localeOptions,
            buyUrl,
            notifications,
            isDarkActive: false 
        };
    },
    methods: {
        ...mapMutations(["changeSideMenuStatus", "changeSideMenuForMobile"]),
        ...mapActions(["setLang", "signOut", "searchBook","logoutAsUser"]),
        search() {
            // this.$router.push(
            //     `${this.searchPath}?search=${this.searchKeyword}`
            // );
            // this.searchKeyword = "";
        },
        async searchClick() {
            if(this.searchKeyword.length > 3){
                await this.searchBook({ name: this.searchKeyword });
                this.searcheres = this.getSearchResult;
            }
            // if (window.innerWidth < this.menuHiddenBreakpoint) {
            //   if (!this.isMobileSearch) {
            //     this.isMobileSearch = true;
            //   } else {
            //     this.search();
            //     this.isMobileSearch = false;
            //   }
            // } else {
            //   this.search();
            // }
        },
        handleDocumentforMobileSearch() {
            if (!this.isSearchOver) {
                this.isMobileSearch = false;
                this.searchKeyword = "";
            }
        },

        changeLocale(locale, direction) {
            const currentDirection = getDirection().direction;
            if (direction !== currentDirection) {
                setDirection(direction);
            }
            localStorage.setItem('currentLanguage', locale)
            this.setLang(locale);
            localize(locale)
        },
        logout() {
            //if admin is logged in as some user
            if(localStorage.getItem('monitoring') == 1){
                this.logoutAsUser().then(response => {
                    axios.defaults.headers.common = {
                        Authorization: `Bearer ${localStorage.getItem('access_token')}`
                    };
                    this.$forceUpdate();
                    location.reload();
                    this.$router.push('/app/user/default');
                });
            }else{
                this.signOut().then(() => {
                    this.$router.push("/login");
                });
            }
        },

        toggleFullScreen() {
            const isInFullScreen = this.isInFullScreen();

            var docElm = document.documentElement;
            if (!isInFullScreen) {
                if (docElm.requestFullscreen) {
                    docElm.requestFullscreen();
                } else if (docElm.mozRequestFullScreen) {
                    docElm.mozRequestFullScreen();
                } else if (docElm.webkitRequestFullScreen) {
                    docElm.webkitRequestFullScreen();
                } else if (docElm.msRequestFullscreen) {
                    docElm.msRequestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
            this.fullScreen = !isInFullScreen;
        },
        isInFullScreen() {
            return (
                (document.fullscreenElement &&
                    document.fullscreenElement !== null) ||
                (document.webkitFullscreenElement &&
                    document.webkitFullscreenElement !== null) ||
                (document.mozFullScreenElement &&
                    document.mozFullScreenElement !== null) ||
                (document.msFullscreenElement &&
                    document.msFullscreenElement !== null)
            );
        }
    },
    computed: {
        ...mapGetters({
            currentUser: "currentUser",
            getSearchResult: "getSearchResult",
            menuType: "getMenuType",
            menuClickCount: "getMenuClickCount",
            selectedMenuHasSubItems: "getSelectedMenuHasSubItems"
        })
    },
    beforeDestroy() {
        document.removeEventListener(
            "click",
            this.handleDocumentforMobileSearch
        );
    },
    created() {
        const color = getThemeColor();
        this.isDarkActive = color.indexOf("dark") > -1;
    },
    mounted() {
        //======================================================
        // Bu validatsiyani messageni keraklik tilga o'zgartirib beradi
        if(localStorage.getItem('currentLanguage')){
            localize(localStorage.getItem('currentLanguage')) 
        }
        //======================================================
    },
    watch: {
        "$i18n.locale"(to, from) {
            if (from !== to) {
                this.$router.go(this.$route.path);
            }
        },
        isDarkActive(val) {
            let color = getThemeColor();
            let isChange = false;
            if (val && color.indexOf("light") > -1) {
                isChange = true;
                color = color.replace("light", "dark");
            } else if (!val && color.indexOf("dark") > -1) {
                isChange = true;
                color = color.replace("dark", "light");
            }
            if (isChange) {
                setThemeColor(color);
                setTimeout(() => {
                    window.location.reload();
                }, 500);
            }
        },
        isMobileSearch(val) {
            // if (val) {
            //     document.addEventListener(
            //         "click",
            //         this.handleDocumentforMobileSearch
            //     );
            // } else {
            //     document.removeEventListener(
            //         "click",
            //         this.handleDocumentforMobileSearch
            //     );
            // }
        }
    }
};
</script>

<style scoped>
.navbar .navbar-logo {
    width: 130px;
    height: 50px;
}
.navbar .navbar-logo .logo {
    background: url(/assets/logos/logo-lg.png) no-repeat;
    
    background-size: cover;
    background-position: center;
}
.search-results{
    position: absolute;
    left: 0;
    right: 0;
    background: white;
    box-shadow: 0 1px 15px rgb(0 0 0 / 4%), 0 1px 6px rgb(0 0 0 / 4%);
    border-radius: 10px;
    overflow: auto;
    max-height: 200px;
}
.s_item{
    padding: 5px 10px;
    margin: 0px;
    display: block;
}
.s_item:hover{
    background-color: #f5f5f5;
    color: black;
}
</style>
