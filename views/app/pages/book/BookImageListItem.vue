<template>
    <b-card
        @click.prevent="toggleItem($event, data.id)"
        :class="{ active: selectedItems.includes(data.id) }"
        no-body
    >
        <div class="position-relative">
            <router-link :to="`?p=${data.id}`" class="w-40 w-sm-100">
                <img :src="data.img" class="card-img-top" :alt="data.name" />
            </router-link>
            <b-badge
                pill
                :variant="data.statusColor"
                class="position-absolute badge-top-left"
                >{{ data.status }}</b-badge
            >
        </div>
        <b-card-body>
            <b-row>
                <b-colxx xxs="10" class="mb-3">
                    <h6 class="mb-4 card-subtitle">{{ data.name }}</h6>
                    <p
                        class="text-muted text-small mb-0 font-weight-light card-text"
                    >
                        {{ data.birthday }}
                    </p>
                </b-colxx>
            </b-row>
        </b-card-body>
    </b-card>
</template>

<script>
export default {
    props: ["data", "selectedItems"],
    methods: {
        toggleItem(event, itemId) {
            this.$emit("toggle-item", event, itemId);
        }
    },
    updated() {
        console.log(this.data);
    }
};
</script>
