<template>
  <div>
    <div>
      <b-modal
        id="editModal"
        :title="$t('categoryaFile.editFile')"
        ok-variant="outline-secondary"
        centered
        no-close-on-backdrop
        :ok-title="$t('survey.save')"
        :cancel-title="$t('categoryaFile.cancel')"
        @ok="onSubmit"
      >
      {{ editData }}
        <p class="my-4">Hello from modal!</p>
      </b-modal>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    editData: {
      type: Object,
      required: true
    }
  },

  methods: {
    onSubmit() {
      console.log('ddadfd');
    }
  },
};
</script>
<style></style>
