<template>
  <div class="p-5">
    <h1>Yaratmoq. Boshqarish. Nashr qilish.</h1>
    <h4>
      Yaratish tugmasini bosish orqali yangi sarlavhani nashr eting. Yoki
      quyidagi kitoblaringizdan mavjud nomlaringizni boshqaring.
    </h4>
    <b-row>
      <b-col cols="12" class="border bg-white my-4 p-2">
        <h4>Yangi nom yoki seriya yarating.</h4>
        <p variant="primary">
          O'quvchilarga ular xohlagan formatda murojaat qiling. Endi siz
          elektron kitob, muqovali yoki qattiq muqovali kitobni nashr
          qilishingiz mumkin. Agar seriyani nashr qilsangiz, Amazon seriyali
          sahifasini yaratishingiz va kitoblaringizni qo'shishingiz mumkin.
        </p>
        <p>
          <b
            >KDP uchun yangimi? Ishni boshlashingizga yordam beradigan
            resurslarimiz haqida ko'proq bilib oling:</b
          >
        </p>
        <p>
          Kitob yarat | Kitob vaqt jadvallari | Bepul ISBN | Asboblar va
          resurslar
        </p>
      </b-col>
      <b-col class="d-flex justify-content-end">
        <b-button
          variant="primary"
          size="lg"
          @click="$router.push('createbook')"
          >yaratish</b-button
        >
      </b-col>

      <b-col cols="12" class="bg-white mt-2 p-2">
        <b-row class="p-5"> <b-col cols="12 w-100" class="forBorder"><h3>Kitob yaratganingizdan so'ng, u shu yerda Kitob javoningizda paydo bo'ladi</h3></b-col></b-row>
       
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { BRow, BCol, BButton } from "bootstrap-vue";
export default {
  components: {
    BRow,
    BCol,
    BButton,
  },
};
</script>
<style>
.forBorder {
  border: 2px solid #1196abff;
  border-radius: 10px;
  border-left: 13px solid #1196abff;
  padding: 20px;
  margin: 10px 0;
}
</style>
