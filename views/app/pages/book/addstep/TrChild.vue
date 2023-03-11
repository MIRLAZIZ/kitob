<template>
    <div class="childblock">
        <div class="d-flex justify-content-between mb-1 align-items-center">
            <div class="childtitle"><span> <template v-if="pind">{{ pind }}.</template>{{ ind + 1 }}</span> {{
                node.title
            }}</div>
            <div>
                <button type="button" class="btn btn-success padding05em" @click="$emit('addChildToc', node)">
                    <i class="iconsminds-add"></i>
                </button>
                <button type="button" class="btn btn-danger padding05em" @click="$emit('rmTocItem', node)">
                    <i class="iconsminds-remove"></i>
                </button>
            </div>
        </div>
        <div v-if="tocData.parent_id == node.id">
            <div colSpan="2">
                <label class="form-group has-float-label">
                    <input type="text" class="form-control" v-model="tocData.title" />
                    <span>{{ $t("book.title") }}</span>
                </label>
            </div>
        </div>
        <template v-if="hasChildren">
            <TrChild v-for="(child, index) in     node.children" :key="child.id" :node="child"
                @addChildToc="$emit('addChildToc', child)" @rmTocItem="$emit('rmTocItem', child)" :tocData="tocData"
                :ind="index" :pind="ind + 1" />
        </template>
    </div>

</template>
<script>
export default {
    name: 'TrChild',
    props: {
        node: {
            type: Object,
            required: true
        },
        tocData: {
            type: Object,
            required: true
        },
        ind: {
            type: Number,
            required: true
        },
        pind: {
            type: Number,
            required: false
        }
    },
    computed: {
        hasChildren() {
            const { children } = this.node
            return children && children.length > 0
        }
    }
}
</script>
<style>
.padding05em {
    padding: .5em;
}
</style>