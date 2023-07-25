import axios from "axios";
import { apiUrl } from "../../constants/config";
const token = localStorage.getItem("access_token");
axios.defaults.headers.common = {
  Authorization: `Bearer ${token}`,
};
import instance from "../instance";
instance();

const state = {
  books: [],
  booksArray: null,
  bookAudio: null,
  currentBook: {},
  found_books: [],
  searchResult: [],
  searchResultAuto: [],
  alertMsg: null,
  msgTableOfContent: null,
  gallery: [],
  serchBooks: {
    result: [],
  },
  coponData:[]
};

const getters = {
  bookList: (state) => state.books,
  getBookAudio: (state) => state.bookAudio,
  bookListArray: (state) => state.booksArray,
  currentBook: (state) => state.currentBook,
  getBookAlertMsg: (state) => state.alertMsg,
  getSearchResult: (state) => state.searchResult,
  getSearchResultAuto: (state) => state.searchResultAuto,
  getFoundBook: (state) => state.found_books,
  getMsgTableOfContent: (state) => state.msgTableOfContent,
  getGallery: (state) => state.gallery,
  GET_BOOKS_SEARCH: (state) => state.serchBooks,
  Get_COUPON_DATA: (state) => state.coponData
};

const mutations = {
  setMsgTableOfContent(state, items) {
    state.msgTableOfContent = items;
  },
  setBooks(state, items) {
    state.books = items;
  },
  setBooksArray(state, items) {
    state.booksArray = items;
  },
  // addNewBook(state,book){
  //   // state.book = state.books.unshift(book)
  //   state.alertMsg = book
  // },
  addNewBook(state, book) {
    // state.book = state.books.unshift(book)
    state.alertMsg = book;
  },
  setCurrentBook(state, book) {
    state.currentBook = book;
  },
  setSearchResult(state, book) {
    state.searchResult = book;
  },
  setSearchResultAuto(state, book) {
    state.searchResultAuto = book;
  },
  setFoundBook(state, book) {
    state.found_books = book;
  },
  setBookAudio(state, audio) {
    state.bookAudio = audio;
  },
  updateTheBook: (state, book) => {
    state.alertMsg = book;
  },
  destroyBook: (state, book) => {
    const index = state.books.findIndex((item) => item.id === book.id);
    if (index !== -1) {
      state.books.splice(index, 1);
    }
  },
  setGallery: (state, items) => {
    state.gallery = items;
  },
};

const actions = {
  async addBookStep({ commit }, book) {
    await axios
      .post(`${apiUrl}/api/book/step`, book)
      .then((r) => r.data)
      .then((res) => {
        commit("addNewBook", res);
      });
  },
  async getBookList({ commit }, query) {
    await axios
      .get(
        `${apiUrl}/api/book?${query}`
        //`/api/book?page=${query.page}&search=${query.search}&per_page=${query.perPage}`
      )
      .then((r) => r.data)
      .then((res) => {
        if (res.success) {
          commit("setBooks", res);
        }
      });
  },
  async getBookListArray({ commit }) {
    await axios
      .get(`${apiUrl}/api/book/list`)
      .then((r) => r.data)
      .then((res) => {
        if (res.success) {
          commit("setBooksArray", res);
        }
      });
  },
  async addBook({ commit }, book) {
    await axios
      .post(`${apiUrl}/api/book/store`, book)
      .then((r) => r.data)
      .then((res) => {
        commit("addNewBook", res);
      });
  },
  async addTableOfContent({ commit }, payload) {
    await axios
      .post(`${apiUrl}/api/table/store`, payload)
      .then((r) => r.data)
      .then((res) => {
        commit("setMsgTableOfContent", res);
      });
  },
  async searchBook({ commit }, query) {
    await axios
      .post(`${apiUrl}/api/book/search`, query)
      .then((r) => r.data)
      .then((res) => {
        commit("setSearchResult", res.result);
      });
  },

  async searchBookAutocomplete({ commit }, query) {
    await axios
      .get(`${apiUrl}/api/book/public-search?name=${query.name}`)
      .then((r) => r.data)
      .then((res) => {
        commit("setSearchResultAuto", res.result.books);
      });
  },
  async SEARCH_COUPON(context, query) {
    await axios.post(`${apiUrl}/api/coupon/check?code=${query}`).then((res) => {
      context.state.coponData = res.data;
    });
  },

  async SEARCH_BOOK_NAME(context, query) {
    await axios
      .get(`${apiUrl}/api/book/public-search?name=${query}`)
      .then((res) => {
        context.state.serchBooks = res.data;
      });
  },

  async actionFindBook({ commit }, book) {
    await axios
      .post(`${apiUrl}/api/book/find`, book)
      .then((r) => r.data)
      .then((res) => {
        commit("setFoundBook", res.result);
      });
  },
  async updateBook({ commit }, book) {
    await axios
      .post(`${apiUrl}/api/book/update/${book.id}`, book)
      .then((r) => r.data)
      .then((res) => {
        commit("updateTheBook", res);
        // console.log(state.alertMsg);
      });
  },
  async addTranslation({ commit }, book) {
    await axios
      .post(`${apiUrl}/api/book/add-translation`, book)
      .then((r) => r.data)
      .then((res) => {
        commit("updateTheBook", res);
      });
  },
  async destroyEpub({ commit }, path) {
    await axios
      .post(`${apiUrl}/api/book/epub/destroy`, { path: path })
      .then((r) => r.data)
      .then((res) => {
        commit("updateTheBook", res);
      });
  },
  async getTheBook({ commit }, id) {
    await axios
      .get(`${apiUrl}/api/book/edit/${id}`)
      .then((r) => r.data)
      .then((res) => {
        if (res.success) {
          commit("setCurrentBook", res.result);
        }
      });
  },
  async deleteBook({ commit }, theID) {
    await axios
      .delete(`${apiUrl}/api/book/destroy/${theID}`)
      .then((r) => r.data)
      .then((res) => {
        commit("updateTheBook", res);
      });
  },
  async deleteTocItem({ commit }, id) {
    await axios
      .delete(`${apiUrl}/api/table/destroy/${id}`)
      .then((r) => r.data)
      .then((res) => {
        commit("setMsgTableOfContent", res);
      });
  },
  //Store audio
  async storeAudio({ commit }, file) {
    await axios
      .post(`${apiUrl}/api/book/audio`, file)
      .then((r) => r.data)
      .then((res) => {
        if (res.success) {
          commit("setBookAudio", res.result);
        } else {
          commit("addNewBook", res);
        }
      });
  },
  //Store audio
  async removeAudioById({ commit }, mp3id) {
    await axios
      .delete(`${apiUrl}/api/book/audio/remove/${mp3id}`)
      .then((r) => r.data)
      .then((res) => {
        if (res.success) {
          commit("setBookAudio", res.result);
        } else {
          commit("addNewBook", res);
        }
      });
  },
  //Trim audio
  async trimAudioFile({ commit }, file) {
    await axios
      .post(`${apiUrl}/api/book/trim-audio`, file)
      .then((r) => r.data)
      .then((res) => {
        if (res.success) {
          commit("setBookAudio", res.result);
        } else {
          commit("addNewBook", res);
        }
      });
  },
  //Generate fake book
  async generateFakeBook({ commit }, data) {
    await axios
      .post(`/api/book/fake`, data)
      .then((r) => r.data)
      .then((res) => {
        commit("addNewBook", res);
      });
  },
  async getGalleryList({ commit }, id) {
    await axios
      .get(`${apiUrl}/api/book/gallery/${id}`)
      .then((r) => r.data)
      .then((res) => {
        commit("setGallery", res.result);
      });
  },
  async storeGallery({ commit }, file) {
    await axios
      .post(`${apiUrl}/api/book/gallery`, file)
      .then((r) => r.data)
      .then((res) => {
        commit("addNewBook", res);
      });
  },
  async CREATE_ORDER_BOOK(_, data) {
   return await axios.post(`${apiUrl}/api/order/create/book`, data);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
