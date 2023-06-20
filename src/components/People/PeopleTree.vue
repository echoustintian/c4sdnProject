<template>
    <div class="tree">
        <h4>快速查找</h4>
        <el-tree ref="treeRef" :data="data" @node-click="handleNodeClick" />
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue"

const emit = defineEmits(['handleNodeClick'])
const data = ref([])

const getTreeData = () => {
    //获取数据
    data.value = [{
        label: '宿舍楼1号',
        children: [{
            label: "一层"
        },
        {
            label: "二层"
        },
        {
            label: "三层"
        },
        ]
    }, {
        label: '宿舍楼2号',
        children: [{
            label: "一层"
        },
        {
            label: "二层"
        },
        {
            label: "三层"
        },]
    }]
}
onMounted(() => {
    getTreeData();
})

const handleNodeClick = (data) => {
    emit('handleNodeClick', data);
    //对应某种查询 等后端api
}
</script>

<style scoped lang="less">
h4 {
    text-align: center;
}
</style>