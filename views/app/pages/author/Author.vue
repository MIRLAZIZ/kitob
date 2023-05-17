<template>
  <div>
    <h2>Authors</h2>
    <div class="card">
      <div class="card-body">
        <table class="table b-table table-striped">
          <thead>
            <th>{{ $t("user.fio") }}</th>
            <th>{{ $t("user.birthday") }}</th>
            <th>{{ $t("user.status") }}</th>
            <th>{{ $t("user.options") }}</th>
          </thead>
          <tbody>
            <tr v-for="author in authorsList" :key="author.id">
              <td>{{ author.fio }}</td>
              <td>{{ author.birthday }}</td>
              <td>{{ author.status }}</td>
              <td>
                <button
                  class="btn btn-primary btn-sm"
                  @click="editAuthor(author.id)"
                >
                  <i class="iconsminds-file-edit"></i>
                </button>
                <button
                  class="btn btn-primary btn-sm"
                  @click="deleteTheAuthor(author)"
                >
                  <i class="iconsminds-trash-with-men"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { adminRoot } from "../../../../constants/config";

export default {
  computed: {
    ...mapGetters(["authorsList"]),
  },
  methods: {
    ...mapActions(["getAuthorsList", "deleteAuthor"]),
    editAuthor(id) {
      this.$router.push(`${adminRoot}/author/edit/${id}`);
    },
    deleteTheAuthor(author) {
      if (confirm("Are you sure?")) {
        this.deleteAuthor(author);
      }
    },
  },
  created() {
    this.getAuthorsList();
  },
};
</script>

<style></style>
