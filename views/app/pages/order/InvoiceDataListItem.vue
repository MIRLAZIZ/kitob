<template>
  <b-card
    :class="{
      'd-flex flex-row': true,
      active: selectedItems.includes(data.id),
    }"
    no-body
  >
    <div class="pl-2 d-flex flex-grow-1 min-width-zero">
      <div
        class="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center"
      >
        <div class="w-40 w-sm-100">
          <p
            class="list-item-heading mb-0 truncate"
            v-if="data.user && data.user.name"
          >
            {{ data.user.name }}
          </p>
        </div>
        <div class="w-15 w-sm-100">
          <b-badge pill v-if="data.status == 'pending'" variant="warning">
            {{$t('createBook.pending') }}
          </b-badge>
          <b-badge pill v-if="data.status == 'canceled'" variant="danger">
            {{ $t('createBook.canceled') }}
          </b-badge>
          <b-badge pill v-if="data.status == 'completed'" variant="success">
            {{ $t('createBook.completed') }}
          </b-badge>

          <b-badge pill v-if="data.status == 'draft'" variant="secondary">
            {{ $t('createBook.draft') }}
          </b-badge>

          <b-badge pill v-if="data.status == 'inprocess'" variant="primary">
            {{ $t('createBook.inprocess')}}
          </b-badge>

          <b-badge pill v-if="data.status == 'delivered'" variant="primary">
            {{ $t('createBook.delivered') }}
          </b-badge>




        </div>
        <div class="w-25 w-sm-100">
          <p class="list-item-heading mb-0 truncate">
            {{ numberFormat(data.total_amount) }}
          </p>
        </div>
        <div class="w-20 w-sm-100">
          <p class="list-item-heading mb-0 truncate">{{ data.created_at }}</p>
        </div>
        <div class="w-25 w-sm-100 text-right">
          <!-- @click.prevent="showInvoice($event, data.id)" -->
          <button
            :id="'edit_btn'"
            class="btn btn-success"
            variant="secondary"
            @click.prevent="showInvoice($event, data.id)"
          >
            <i class="simple-icon-note"></i>
          </button>
          <b-tooltip :target="'edit_btn'" :title="'Edit'"> </b-tooltip>

          <b-button variant="success" @click="(routData(data.id))"><i class="simple-icon-arrow-right" /></b-button>
        </div>
      </div>
    </div>
  </b-card>
</template>

<script>
import { adminRoot } from "../../../../constants/config";
export default {
  props: ["data", "selectedItems"],
  methods: {
    showInvoice(event, id) {
      this.$router.push(`${adminRoot}/order/edit/${id}`);
    },
    upppercase(str) {
      return str.toUpperCase();
    },
    toUZS(number) {
      return number / 100;
    },
    numberFormat(number) {
      // Create our number formatter.
      var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "UZS",
      });
      return formatter.format(number);
    },

    routData(id) {
      console.log(id, 'gggggggggggg');
      this.$router.push(`${adminRoot}/orderdata/${id}`)
    }
  },
};
</script>
