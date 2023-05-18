<template>
  <div>
    <div class="formSteps">
      <div
        class="steps"
        :class="[{ stepProcess: step === 1 }, { stepSuccessful: stepOne }]"
      >
        <div class="ml-1">
          <h2>Elektron kitobi tafsilotlari</h2>
          <img src="../../../../srcs/assets/img/book/Yes-check-icon-transparent.png" alt="">
   
          <span>
            
            {{
              step == 1 ? "jarayonda" : step > 1 ? "Bajarildi" : "Boshlanmagan"
            }}</span
          >
        </div>
      </div>
      <div
        class="steps"
        :class="[{ stepProcess: step === 2 }, { stepSuccessful: stepTwo }]"
      >
        <div class="ml-1">
          <span>Elektron kitob mazmuni</span>
          <br />
          <span>
            {{
              step == 2 ? "jarayonda" : step > 2 ? "Bajarildi" : "Boshlanmagan"
            }}</span
          >
        </div>
      </div>
      <div
        class="steps"
        :class="[{ stepProcess: step === 3 }, { stepSuccessful: stepThree }]"
      >
        <div class="ml-1">
          <span>Elektron kitob narxi</span>
          <br />
          <span>
            {{
              step == 3 ? "jarayonda" : step > 3 ? "Bajarildi" : "Boshlanmagan"
            }}</span
          >
        </div>
      </div>
    </div>
    <div v-show="step == 1">
      <BookDetils @stepOne="stepstwo" />
    </div>
    <div v-show="step == 2"><BookContent @stepOne="stepstwo" /></div>
    <div v-show="step == 3"><Bookprice @stepOne="stepstwo" /></div>
  </div>
</template>
<script>
import { BButton } from "bootstrap-vue";
import BookDetils from "./bookStepOne/BookDetails.vue";
import BookContent from "./bookContent/Index.vue";
import Bookprice from "./bookprice/Index.vue";

export default {
  components: {
    BButton,
    BookDetils,
    BookContent,
    Bookprice,
  },
  data() {
    return {
      step: 1,
      stepOne: false,
      stepTwo: false,
      stepThree: false,
    };
  },
  methods: {
    // saveData() {
    //   this.$refs.templateRef.validate().then((success) => {
    //     if (success) {
    //       this.step = 2;
    //       this.stepOne = true;
    //     }
    //   });
    // },
    stepstwo(a) {
      if (a > 1) {
        this.step = a;
        this.stepOne = true;
      }
      if (a > 2) {
        this.step = a;
        this.stepTwo = true;
      }
    },
  },
};
</script>
<style>
.formSteps {
  display: flex;
  width: 100%;
  overflow: hidden;
  border-radius: 5px;
}

.steps {
  position: relative;
  width: 30%;
  height: 100px;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
}

.steps:before {
  content: "";
  display: block;
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-bottom: 50px solid transparent;
  border-left: 30px solid #ddd;
  position: absolute;
  top: 50%;
  margin-top: -50px;
  margin-left: 1px;
  left: 100%;
  z-index: 1;
}

.steps:after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-bottom: 50px solid transparent;
  border-left: 30px solid #f5f5f5;
  position: absolute;
  top: 50%;
  margin-top: -50px;
  left: 100%;
  z-index: 2;
}

/* progress */
.stepProcess {
  position: relative;
  width: 30%;
  height: 100px;
  background: #b1dfbbff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.stepProcess:after {
  content: " ";
  display: block;
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-bottom: 50px solid transparent;
  border-left: 30px solid #b1dfbbff;
  position: absolute;
  top: 50%;
  margin-top: -50px;
  left: 100%;
  z-index: 2;
}

/* successful */

.stepSuccessful {
  position: relative;
  width: 30%;
  height: 100px;
  background: #5cb85cff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.stepSuccessful:after {
  content: " ";
  display: block;
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-bottom: 50px solid transparent;
  border-left: 30px solid #5cb85cff;
  position: absolute;
  top: 50%;
  margin-top: -50px;
  left: 100%;
  z-index: 2;
}
</style>
