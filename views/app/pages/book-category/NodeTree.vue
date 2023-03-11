<template>
    <li class="list-group-item">
        {{child.name_oz}} | {{child.name_ru}} | {{child.name_en}}

        <ul class="list-group nested pl-3" v-if="child.items.length > 0">
            <NodeTree v-for="item in child.items" :key="item.id" :child="child.items"></NodeTree>
        </ul>
    </li>
</template>

<script>
import ViewTree from "./ViewTree";
export default {
    name: "NodeTree",
    props:{
        child:Object
    },
    components:{
        ViewTree
    }
}
</script>

<style scoped>

</style>
