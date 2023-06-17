<template>
    <div class="tree">
        <h4>快速查找</h4>
        <el-tree ref="treeRef" :data="data" @node-click="handleNodeClick" />
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue"

const emit = defineEmits(['handleNodeClick']);

const data = ref([])

const getTreeData = () => {
    //获取数据
    data.value = [{
        label: '东部停车场',
        children: [{
            label: 1,
        },
        {
            label: 2,
        },
        {
            label: 3,
        },
        {
            label: -1,
        },
        {
            label: -2,
        },
        {
            label: -3,
        }
        ]
    }, {
        label: '操场停车场',
        children: [{
            label: 1,
        },
        {
            label: 2,
        },
        {
            label: 3,
        },
        {
            label: -1,
        },
        {
            label: -2,
        },
        {
            label: -3,
        }
        ]
    }]
}
onMounted(() => {
    getTreeData();
})

const handleNodeClick = (data) => {
    //对应某种查询 等后端api
    emit('handleNodeClick', data);
}
</script>

<style scoped lang="less">
h4 {
    text-align: center;
}
</style>