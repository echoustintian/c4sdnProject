<template>
    <div class="car">
        <el-row>
            <el-col :span="4">
                <Tree @handleNodeClick="handleNodeClick"></Tree>
            </el-col>
            <el-col :span="20">
                <div class="right">
                    <CarSearch @search="search"></CarSearch>
                    <CarTable :data="Cars" @clickAdd='handleAdd' @clickEdit="handleEdit" @getData="getCars"
                        :totalNum="totalNum" @pageChange="pageChange"></CarTable>
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
import { CarService } from '@/api/api';
//搜索
const search = (carNumber, position) => {
    SearchCar.carNumber = carNumber;
    SearchCar.position = position;
    getCars();
}
//车辆信息
const Cars = ref([]);
let SearchCar = {
    carNumber: '',
    parking: '',
    floor: '',
    position: '',
}

const currentPage = ref(1)
const totalNum = ref(0)
const pageChange = (value) => {
    currentPage.value = value
    getCars();
}
const getCars = (offset = currentPage.value) => {
    CarService.getCarListByCondition(SearchCar, { offset, size: 10 }).then(res => {
        if (res.data != null) {
            console.log(res.data.row);
            Cars.value = res.data.row;
            totalNum.value = res.data.total;
        } else {
            Cars.value = [];
            totalNum.value = 0;
        }
    }).catch(err => {
        console.log(err);
    })
}
onMounted(() => {
    getCars(1);
})
//dialog
const dialogVisible = ref(false);
const dialogTitile = ref('新增');

const handleAdd = () => {
    dialogVisible.value = true;
    dialogTitile.value = '新增'
    formData.value = {
        carId: null,
        carNumber: null,
        parking: null,
        floor: null,
        identity: null,
        position: null,
        enterTime: null,
    }
}
const handleEdit = (data) => {
    dialogVisible.value = true;
    dialogTitile.value = '编辑'
    console.log(data);
    formData.value = data;
}
//dialog form
const formData = ref({});

//Tree组件
const handleNodeClick = (data) => {
    if (data.children) {
        SearchCar.parking = data.label;
    }
    else {
        SearchCar.floor = data.label;
    }
    getCars();
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