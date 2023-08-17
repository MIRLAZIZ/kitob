<template>
  <div>
    {{ bookData }}
    <div class="formSteps">
      <div
        class="steps"
        :class="[
          { stepProcess: bookData?.step === 1 },
          { stepSuccessful: bookData?.step > 1 },
        ]"
      >
        <div class="ml-1">
          <h2>Elektron kitobi tafsilotlari</h2>
          <span v-show="bookData?.step == 1"><img :src="img" alt="" /></span>
          <span v-show="bookData?.step > 1"
            ><img :src="imgCheck" alt="" class="checkWidth"
          /></span>

          <span>
            {{
              bookData?.step == 1
                ? "Jarayonda"
                : bookData?.step > 1
                ? "Bajarildi"
                : "Boshlanmagan"
            }}</span
          >
        </div>
      </div>

      <div
        class="steps"
        :class="[
          { stepProcess: bookData?.step === 2 },
          { stepSuccessful: bookData?.step > 2 },
        ]"
      >
        <div class="ml-1">
          <h2>Elektron kitob mazmuni</h2>
          <span v-show="bookData?.step < 3"><img :src="img" alt="" /></span>
          <span v-show="bookData?.step > 2"
            ><img :src="imgCheck" alt="" class="checkWidth"
          /></span>
          <span>
            {{
              bookData?.step == 2
                ? "jarayonda"
                : bookData?.step > 2
                ? "Bajarildi"
                : "Boshlanmagan"
            }}</span
          >
        </div>
      </div>
      <div
        class="steps"
        :class="[
          { stepProcess: bookData?.step === 3 },
          { stepSuccessful: bookData?.step > 3 },
        ]"
      >
        <div class="ml-1">
          <h2>Elektron kitob narxi</h2>
          <span><img :src="img" alt="" /></span>
          <span>
            {{
              bookData?.step == 3
                ? "jarayonda"
                : bookData?.step > 3
                ? "Bajarildi"
                : "Boshlanmagan"
            }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    bookData: {
      typeof: Object,
    },
  },
  data() {
    return {
      img: "../../../../assets/img/book/warning.svg",
      imgCheck: "../../../../assets/img/book/check-mark-icon-free-png.png",
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
