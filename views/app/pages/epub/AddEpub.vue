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
            <b-card class="mb-4" :title="$t('menu.coupon')">
                <b-form @submit.prevent="onFromSubmit">
                    <div class="errors" v-if="errorMsg">
                    <div class="alert alert-danger" v-for="(err,key) in errorMsg" :key="key">{{err[0]}}</div>
                    </div>
                    <b-row>
                       <div class="col-md-4">
                           <div class="form-group">
                               <label for="title">Title</label>
                               <input type="text" class="form-control" name="title" id="title" v-model="epubForm.title">
                           </div>
                           <div class="form-group">
                               <label for="identifier">Identifier</label>
                               <input type="text" class="form-control" name="identifier" id="identifier" v-model="epubForm.identifier">
                           </div>
                           <div class="form-group">
                               <label for="description">Description</label>
                               <input type="text" class="form-control" name="description" id="description" v-model="epubForm.description">
                           </div>                           
                       </div>

                       <div class="col-md-4">
                           <div class="form-group">
                               <label for="author">Author</label>
                               <input type="text" class="form-control" name="author" id="author" v-model="epubForm.author">
                           </div>
                           <div class="form-group">
                               <label for="sourceurl">Sourceurl</label>
                               <input type="text" class="form-control" name="sourceurl" id="sourceurl" v-model="epubForm.sourceurl">
                           </div>
                           <div class="form-group">
                               <label for="publisher">Publisher</label>
                               <input type="text" class="form-control" name="publisher" id="publisher" v-model="epubForm.publisher">
                           </div>
                       </div>

                       <div class="col-md-4">
                           <div class="form-group">
                               <label for="rights">Rights</label>
                               <input type="text" class="form-control" name="rights" id="rights" v-model="epubForm.rights">
                           </div>
                           <div class="form-group">
                               <label for="doc">Content (format: MSWord - docx)</label>
                               <input type="file" class="form-control" name="doc" id="doc" @change="setFile($event)">
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

export default {
    data() {
        return {
            errorMsg:null,
            epubForm: {
                title: "",
                identifier: "",
                description: "",
                author: "",
                rights: "",
                sourceurl: "",
                publisher: "",
                doc: null,
            }
        };
    },
    computed: {
        ...mapGetters(["getEpubAlertMsg"]),
    },
    methods: {
        ...mapActions(['addEpub']),
        async onFromSubmit() {
            let forms = new FormData();
            forms.append("title", this.epubForm.title);
            forms.append("identifier", this.epubForm.identifier);
            forms.append("description", this.epubForm.description);
            forms.append("author", this.epubForm.author);
            forms.append("sourceurl", this.epubForm.sourceurl);
            forms.append("publisher", this.epubForm.publisher);
            forms.append("rights", this.epubForm.rights);
            forms.append("doc", this.epubForm.doc);
            await this.addEpub(forms);
            if (this.getEpubAlertMsg.error) {
                this.errorMsg = this.getEpubAlertMsg.message;
            } else {
                this.$router.push(`${adminRoot}/epub`);
            }
        },
        setFile(event) {
            this.epubForm.doc = event.target.files[0];
        },
    }
};
</script>
