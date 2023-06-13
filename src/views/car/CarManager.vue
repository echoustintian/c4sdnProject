<template>
    <div class="car">
        <el-row>
            <el-col :span="4">
                <Tree @handleNodeClick="handleNodeClick"></Tree>
            </el-col>
            <el-col :span="20">
                <div class="right">
                    <CarSearch @search1="LicPlateNumSearch" @search2="ParNumSearch"></CarSearch>
                    <CarTable :data="Cars" @clickAdd='handleAdd' @clickEdit="handleEdit" @getData="getCars"></CarTable>
                </div>
            </el-col>
        </el-row>
        <CarDialog v-model="dialogVisible" :title="dialogTitile" :formData="formData" @getData="getCars"></CarDialog>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import CarSearch from '@/components/Car/CarSearch.vue';
import CarTable from '@/components/Car/CarTable.vue';
import CarDialog from '@/components/Car/CarDialog.vue';
import Tree from '@/components/Car/Tree.vue';
//搜索
const LicPlateNumSearch = (LicPlateNumSearch) => {
    console.log(LicPlateNumSearch);
}
const ParNumSearch = (ParNumSearch) => {
    console.log(ParNumSearch);
}
//车辆信息
const Cars = ref([]);
const getCars = () => {
    Cars.value = [{
        CarId: '1',
        CarNumber: '川K-94A12',
        parking: '西停车场',
        floor: '-2',
        position: 'B-292',
        enterTime: '2023-6-10 12:53',
    }, {
        CarId: '2',
        CarNumber: '川A-94A12',
        parking: '东停车场',
        floor: '-2',
        position: 'B-292',
        enterTime: '2023-6-10 12:53',
    },
    {
        CarId: '3',
        CarNumber: '川C-94A12',
        parking: '北停车场',
        floor: '-2',
        position: 'B-292',
        enterTime: '2023-6-10 12:53',
    },]
}
onMounted(() => {
    getCars();
})
//dialog
const dialogVisible = ref(false);
const dialogTitile = ref('新增');

const handleAdd = () => {
    dialogVisible.value = true;
    dialogTitile.value = '新增'
    formData.value = {
        CarId: null,
        CarNumber: null,
        parking: null,
        floor: null,
        position: null,
        enterTime: null,
    }
}
const handleEdit = (data) => {
    dialogVisible.value = true;
    dialogTitile.value = '编辑'
    formData.value = data;
}
//dialog form
const formData = ref({});

//Tree组件
const handleNodeClick = () => {
    //Tree组件Node被点击之后  调后端条件查询
}
</script>

<style scoped lang="less">
.car {
    width: 100%;

    .right {
        width: 100%;
        height: calc(100vh - 105px);

        .right-main {
            width: 100%;
        }
    }
}
</style>