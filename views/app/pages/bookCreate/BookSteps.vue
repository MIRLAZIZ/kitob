<template>
  <div>
    <div class="formSteps">
      <div
        class="steps"
        :class="[{ stepProcess: step === 1 }, { stepSuccessful: stepOne }]"
      >
        <div class="ml-1">
          <h2>Elektron kitobi tafsilotlari</h2>
          <span v-show="step == 1"><img :src="img" alt="" /></span>
          <span v-show="step > 1"
            ><img :src="imgCheck" alt="" class="checkWidth"
          /></span>

          <span>
            {{
              step == 1 ? "Jarayonda" : step > 1 ? "Bajarildi" : "Boshlanmagan"
            }}</span
          >
        </div>
      </div>
      <div
        class="steps"
        :class="[{ stepProcess: step === 2 }, { stepSuccessful: stepTwo }]"
      >
        <div class="ml-1">
          <h2>Elektron kitob mazmuni</h2>
          <span v-show="step < 3"><img :src="img" alt="" /></span>
          <span v-show="step > 2"
            ><img :src="imgCheck" alt="" class="checkWidth"
          /></span>
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
          <h2>Elektron kitob narxi</h2>
          <span><img :src="img" alt="" /></span>
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
    <div v-show="step == 2">
      <BookContent @stepOne="stepstwo" @stepValue="stepsValue1" />
    </div>
    <div v-show="step == 3">
      <Bookprice @stepOne="stepstwo" @stepValue="stepsValue1" />
    </div>
  </div>
</template>
<script>
import BookDetils from "./bookStepOne/BookDetails.vue";
import BookContent from "./bookContent/Index.vue";
import Bookprice from "./bookprice/Index.vue";

export default {
  components: {
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
      img: "../../../../srcs/assets/img/book/warning.svg",
      imgCheck: "../../../../srcs/assets/img/book/check-mark-icon-free-png.png",
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
    stepsValue1(e) {
      console.log(e);
      if (e == 1) {
        this.step = e;
        this.stepOne = false;
      } else {
        this.step = e;
        this.stepTwo = false;
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
  background: #d0d8d0ff;
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
  border-left: 30px solid #fff;
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
  border-left: 30px solid #d0d8d0ff;
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
.checkWidth {
  width: 40px;
  height: 40px;
}
</style>
