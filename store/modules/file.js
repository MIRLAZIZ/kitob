import axios from "axios";
import { apiUrl } from "../../constants/config";
const token = localStorage.getItem("access_token");
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
import instance from "../instance";
instance();
const state = {
    files: [],
    epubContent: [],
    cropFile: [],
    uploadProgressNum: 0,
};

const getters = {
    filesList: (state) => state.files,
    cropfileList: (state) => state.cropFile,
    getEpubContent: (state) => state.epubContent,
    getUploadProgressNum: (state) => state.uploadProgressNum,
};

const mutations = {
    setFiles(state, items) {
        state.files = items;
    },
    setEpubContent(state, items) {
        state.epubContent = items;
    },
    setCropFiles(state, items) {
        state.cropFile = items;
    },
    setUploadProgressNum(state, items) {
        state.uploadProgressNum = items;
    },
};

const actions = {
    async storeImage({ commit }, file) {
        await axios
            .post(`${apiUrl}/api/file/store`, file)
            .then((r) => r.data)
            .then((res) => {
                if (res.success) {
                    commit("setFiles", res.files);
                }
            });
    },
    async storeEpub({ commit }, file) {
        const config = {
            onUploadProgress: (progressEvent) => {
                commit(
                    "setUploadProgressNum",
                    parseInt(
                        Math.round(
                            (progressEvent.loaded / progressEvent.total) * 100
                        )
                    )
                );
            },
        };
        await axios
            .post(`${apiUrl}/api/book/epub`, file, config)
            .then((r) => r.data)
            .then((res) => {
                if (res.success) {
                    commit("setEpubContent", res.result);
                }
            });
    },
    async storeCropImage({ commit }, file) {
        await axios
            .post(`${apiUrl}/api/file/cropped`, file)
            .then((r) => r.data)
            .then((res) => {
                if (res.success) {
                    commit("setCropFiles", res.files);
                }
            });
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
