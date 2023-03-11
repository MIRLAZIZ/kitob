<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.add-new')" />
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
        <b-colxx xxs="12">
            <b-card class="mb-4" :title="$t('menu.booktype')">
                <b-form @submit.prevent="onFromSubmit">
                    <div class="errors" v-if="errorMsg">
                        <div class="alert alert-danger" v-for="(err,key) in errorMsg" :key="key">{{err[0]}}</div>
                    </div>
                    <b-row>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="book_id">{{$t('forms.book')}}</label>
                                <b-form-select v-model="selected" :options="books" @change="setBook($event)" value-field="value" text-field="label"></b-form-select>
                            </div>
                            <div class="form-group">
                                <label for="price">{{$t('forms.price')}}</label>
                                <input type="text" id="" class="form-control" v-model="booktypeFrom.price">
                            </div>
                        </div><!-- /. column -->
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="type">{{$t('forms.type')}}</label>
                                <select name="type" id="type" class="form-control" @change="setValue($event,'type')">
                                    <option value="ebook">Ebook</option>
                                    <option value="paper">Paper</option>
                                    <option value="audio">Audio</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="quantity">{{$t('forms.quantity')}}</label>
                                <input type="integer" id="" class="form-control" v-model="booktypeFrom.quantity">
                            </div>
                        </div>
                        <!-- Cover (Muqova) -->
                        <div class="col-md-6" v-if="showCover">
                            <label class="form-group has-float-label">
                                <v-select
                                    :options="cover"
                                    :dir="direction"
                                    @input="setSelectedCover"
                                    v-model="booktypeFrom.cover"
                                />
                                <span>{{ $t('book.cover') }}</span>
                            </label>
                        </div>
                        <div class="col-sm-3 mb-4" v-if="showEpub">
                            <div class="p-4 border mt-4" style="position: relative;">
                                <label class="form-group has-float-label">
                                    <input type="file" class="form-control" ref="epub"/>
                                </label>
                                <span>{{ $t('book.ebook') }}</span>
                            </div>
                        </div>
                        <!-- Epub file -->
                        <div class="col-sm-3 mb-4"  v-if="showEpub">
                            <div class="p-4 border mt-4" style="position: relative;">
                                <label class="form-group has-float-label jv_input_file_label">
                                    <input type="file" class="form-control jv_input_file" @change="setEpubFragment($event,'ebook')" />
                                    <i class="simple-icon-notebook"></i>
                                </label>
                                <span>Epub fragment</span>
                            </div>
                        </div>
                        <!-- Audio file -->
                        <div class="col-sm-3 mb-4" v-if="showAudio">
                            <div class="p-4 border mt-4">
                                <div class="audio_wrap" v-if="hasAudio">
                                    <audio id="audio" controls class="w-100">
                                    <source :src="'/'+ booktypeFrom.audio" type="audio/mpeg">
                                        Your browser does not support the audio element.
                                    </audio>
                                </div>
                                <label class="form-group has-float-label jv_input_file_label">
                                    <input type="file" class="form-control jv_input_file" @change="setAudioFile($event)" />
                                    <i class="iconsminds-loudspeaker"></i>
                                </label>
                                <span>{{ $t('book.audio') }}</span>
                            </div>
                        </div>
                        <!-- Audio fragment -->
                        <div class="col-sm-3 mb-4" v-if="showAudio">
                            <div class="p-4 border mt-4">
                                <div class="audio_wrap" v-if="hasAudioFragment">
                                    <audio id="audio" controls class="w-100">
                                    <source :src="'/'+ booktypeFrom.audio_fragment" type="audio/mpeg">
                                        Your browser does not support the audio element.
                                    </audio>
                                </div>
                                <label class="form-group has-float-label jv_input_file_label">
                                    <input type="file" class="form-control jv_input_file" @change="setAudioFragment($event)" />
                                    <i class="iconsminds-loudspeaker"></i>
                                </label>
                                <span>Audo fragment</span>
                            </div>
                        </div>
                    </b-row>
                    <b-button type="submit" variant="primary" class="mt-4">{{ $t('forms.save') }}</b-button>
                    </b-form>
            </b-card>
        </b-colxx>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { adminRoot } from '../../../../constants/config';
import { getDirection } from "../../../../utils";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default {
    data() {
        return {
            errorMsg:null,
            booktypeFrom: {
                "book_id":null,
                "price":"",
                "type":"ebook",
                "quantity":0,
                "cover":'',
                "file_path":'no',
                "file_fragment":'no',
                "file_type":'no',
                "audio":'',
                "audio_fragment":'',
            },
            hasAudio:false,
            hasAudioFragment:false,
            formdata: {},
            audio: {
                start:0,
                end:30,
            },
            showCover:false,
            showEpub:true,
            showAudio:false,
            books:{},
            direction: getDirection().direction,
            selected:{value:null,text:'Please select a book'},
            cover: [
                { label: "Qattiq", value: "qattiq" },
                { label: "Yumshoq", value: "yumshoq" },
            ],
            progBarCount:0,
        };
    },
    computed: {
        ...mapGetters(["getBooktypeAlertMsg","bookListArray","getEpubContent","getBookAudio"]),
    },
    components: {
        "v-select": vSelect,
    },
    methods: {
        ...mapActions(['addBooktype','getBookListArray','storeEpub','storeAudio']),
        async onFromSubmit() {
            let theForm = new FormData();
            theForm.set('type',this.booktypeFrom.type);
            theForm.set('audio',this.booktypeFrom.audio);
            theForm.set('book_id',this.booktypeFrom.book_id);
            theForm.set('price',this.booktypeFrom.price);
            theForm.set('quantity',this.booktypeFrom.quantity);
            theForm.set('cover',this.booktypeFrom.cover);
            if(this.booktypeFrom.type == 'ebook'){
                theForm.append("ebook", this.$refs.epub.files[0]);
            }
            await this.addBooktype(theForm);
            if (this.getBooktypeAlertMsg.error) {
                this.errorMsg = this.getBooktypeAlertMsg.message;
            } else {
                this.$router.push(`${adminRoot}/book-store/default`);
            }
        },
        setValue($event,type){
            if(type == 'book'){
                this.booktypeFrom.book_id = $event.target.value;
            }
            if(type == 'type'){
                this.booktypeFrom.type = $event.target.value;
                if($event.target.value == 'paper'){
                    this.showCover = true;
                    this.showEpub = false;
                }else if($event.target.value == 'ebook'){
                    this.showEpub = true;
                    this.showCover = false;
                    this.booktypeFrom.cover = '';
                }else if($event.target.value == 'audio'){
                    this.showAudio = true;
                    this.showEpub = false;
                    this.showCover = false;
                    this.booktypeFrom.cover = '';
                }
            }
        },
        setBook(value){
            this.booktypeFrom.book_id = value;
        },
        setSelectedCover(event){
            this.booktypeFrom.cover = event.value;
        },
        async setEpubFile(event, key) {
            let epub = new FormData();
            epub.append("ebook", event.target.files[0]);
            epub.append("type", 'paid');
            await this.storeEpub(epub);
            console.log(this.getEpubContent);
            this.booktypeFrom.file_path = this.getEpubContent.file_path;
            this.booktypeFrom.file_type = this.getEpubContent.file_type;
        },
        async setEpubFragment(event, key) {
            let epub = new FormData();
            epub.append("ebook", event.target.files[0]);
            epub.append("type", 'free');
            epub.append("api", 'booktype');
            await this.storeEpub(epub);
            this.booktypeFrom.file_fragment = this.getEpubContent.file_path;
            this.booktypeFrom.file_type = this.getEpubContent.file_type;
        },
        async setAudioFile(event) {
            let audio = new FormData();
            audio.append("audio", event.target.files[0]);
            audio.append("type", 'paid');
            await this.storeAudio(audio);
            if(this.getBookAudio){
                this.booktypeFrom.audio = this.getBookAudio.file_path;
                this.booktypeFrom.file_path = this.getBookAudio.file_path;
                this.booktypeFrom.file_type = this.getBookAudio.file_type;
                this.hasAudio = true;
            }
        },
        async setAudioFragment(event) {
            let audio = new FormData();
            audio.append("audio", event.target.files[0]);
            audio.append("type", 'free');
            await this.storeAudio(audio);
            if(this.getBookAudio){
                this.booktypeFrom.audio_fragment = this.getBookAudio.file_path;
                this.booktypeFrom.file_fragment = this.getBookAudio.file_path;
                this.booktypeFrom.file_type = this.getBookAudio.file_type;
                this.hasAudioFragment = true;
            }
        },
    },
    async mounted(){
        await this.getBookListArray();
        this.books = this.bookListArray.result;
    }
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
.progress_line{
  height: 4px;
  background: #ffffff;
  border-radius: 6px;
  position: relative;
  z-index: 1;
}
.data-pernum::before{
  content: attr('data-pernum');
  position: absolute;
  top: 0;
}
.progress_bar{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: #00000061;
    display: flex;
    align-items: center;
    padding: 10px;
}
.progress_bar::before{
  content: '';
  position: absolute;
  width: calc(100% - 20px);
  left: 10px;
  right: 10px;
  background: rgba(255,255,255,.5);
  height: 4px;
  border-radius: 6px;
  z-index: 0;
}
</style>
