<template>
  <div>
 
    <b-row class="card p-4 mt-3">
      <h2>{{ $t('createBook.OrderTaker') }}</h2>
      <b-col cols="12">
        <div class="col-md-6 mt-3">
          <div class="list-group">
            <div class="list-group-item">
              <span>{{ $t('createBook.Name') + ": " }}</span>
              <span class="text-primary" v-if="userData[0]">{{
                userData[0].name
              }}</span>
            </div>
            <div class="list-group-item">
              <span>{{ $t('createBook.email')+ ": " }}</span>
              <span v-if="userData[0]"> {{ userData[0].email }}</span>
            </div>
            <div class="list-group-item">
              <span>{{ $t('createBook.telephone')+ ": " }}</span>
              <span v-if="userData[0]"> {{ userData[0].phone }}</span>
            </div>
            <div class="list-group-item">
              <span>{{ $t('createBook.address')+ ": " }}</span>
              <span v-if="userData[0]">{{ userData[0].address }}</span>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  props: {
    userData: {
      type: Array,
      required: true,
    
    },
  },
  data() {
    return {
 
    };
  },
};
</script>
<style></style>
