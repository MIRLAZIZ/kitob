// import ToastificationContent from '../components/ToastificationContent.vue'

export default {
  methods: {
    $_successToast() {
        this.$bvToast.toast(this.$t('categoryaFile.successful'), {
          title:null,
            variant: 'primary',
            
           
          })
    },
    errorToast(error) {
      this.$bvToast.toast(error, {
        variant: "danger",
        solid: true
      })
    }
  },
}
