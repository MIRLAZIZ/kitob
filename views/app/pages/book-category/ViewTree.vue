<template>
    <div>
        <div class="accordion" role="tablist" v-for="category in treeData" :key="category.id">
            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle="'accordion-'+category.id" :variant="variant">
                        <span class="d-flex justify-content-between">
                            <span>{{category.name_oz}}</span>
                            <span>{{category.name_ru}}</span>
                            <span>{{category.name_en}}</span>
                            <span v-if="category.items.length > 0" class=" text-right iconsminds-arrow-down-3"></span>
                        </span>
                    </b-button>
                </b-card-header>
                <b-collapse :id="'accordion-'+category.id" accordion="my-accordion" role="tabpanel" v-if="category.items.length > 0">
                    <b-card-body>
                        <ViewTree :tree-data="category.items" :variant="'success'"></ViewTree>
                    </b-card-body>
                </b-collapse>
            </b-card>
        </div>
    </div>
    <!-- <div> -->
        <!-- <ul v-for="category in treeData" :key="category.id">
            <li class="list-group-item">
    
                {{category.name_oz}} | {{category.name_ru}} | {{category.name_en}}
    
               <ul class="list-group nested pl-3" v-if="category.items.length > 0">
                    <ViewTree :tree-data="category.items"></ViewTree>
                </ul>
            </li>
        </ul> -->
    <!-- </div> -->
</template>

<script>

import NodeTree from "./NodeTree";

export default {
    name: "ViewTree",
    props:{
        treeData:Array,
        variant:String
    },
    components:{
        NodeTree
    }
}
</script>

<style scoped>

</style>
