// import ToastificationContent from '../components/ToastificationContent.vue'

export default {
  methods: {
    $_successToast() {
        this.$bvToast.toast(this.$t('categoryaFile.successful'), {
          title:null,
            variant: 'primary',
            
           
          })
    },
    $_errorToast(erorTitle) {
      this.$toast({
        component: ToastificationContent,
        props: {
          title:erorTitle,
          icon: 'AlertCircleIcon',
          variant: 'primary',
        },
      })
    },
  },
}
