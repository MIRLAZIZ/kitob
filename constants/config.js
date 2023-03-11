export const defaultMenuType = "menu-default"; // 'menu-default', 'menu-sub-hidden', 'menu-hidden';
export const adminRoot = "/app";
export const searchPath = `${adminRoot}/pages/miscellaneous/search`;
export const buyUrl = "https://1.envato.market/nEyZa";
export const apiUrl =  "http://pub-kitab.loc";
export const appUrl =
    process.env.NODE_ENV == "development"
        ? process.env.MIX_APP_URL
        : "https://pub.kytab.uz";

export const subHiddenBreakpoint = 1440;
export const menuHiddenBreakpoint = 768;

export const defaultLocale = "oz";
export const defaultDirection = "ltr";
export const localeOptions = [
    { id: "en", name: "English", direction: "ltr" },
    { id: "oz", name: "O'zbek", direction: "ltr" },
    { id: "ru", name: "Russkiy", direction: "ltr" },
];

export const firebaseConfig = {
    apiKey: "AIzaSyDe94G7L-3soXVSpVbsYlB5DfYH2L91aTU",
    authDomain: "piaf-vue-login.firebaseapp.com",
    databaseURL: "https://piaf-vue-login.firebaseio.com",
    projectId: "piaf-vue-login",
    storageBucket: "piaf-vue-login.appspot.com",
    messagingSenderId: "557576321564",
    appId: "1:557576321564:web:bc2ce73477aff5c2197dd9",
};

export const currentUser = {
    id: 1,
    name: "Saidorif Kadirov",
    photo: "/assets/img/profiles/l-2.jpg",
    date: "Last seen today 18:36",
    phone: "",
    email: "",
    gender: "",
    birthday: "",
};

export const isAuthActive = false;
export const themeRadiusStorageKey = "theme_radius";
export const themeSelectedColorStorageKey = "theme_selected_color";
export const defaultColor = "light.blueolympic";
export const colors = [
    "bluenavy",
    "blueyale",
    "blueolympic",
    "greenmoss",
    "greenlime",
    "purplemonster",
    "orangecarrot",
    "redruby",
    "yellowgranola",
    "greysteel",
];
