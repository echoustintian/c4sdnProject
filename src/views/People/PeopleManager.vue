<template>
    <div class="people">
        <el-row>
            <el-col :span="4">
                <PeopleTree @nodeClick="handleNodeClick"></PeopleTree>
            </el-col>
            <el-col :span="20">
                <div class="right">
                    <Search @search="handleSearch" :isBack="isBack" @isBackChange="isBackChange"></Search>
                    <Table :data="people" :totalNum="totalNum" @getdata="getPeopleData" @clickAdd="handleAdd"
                        @clickEdit="handleEdit"></Table>
                </div>
            </el-col>
        </el-row>
        <PeopleDialog v-model="dialogVisible" :title="dialogTitile" :formData="formData" @getData="getPeopleData">
        </PeopleDialog>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Search from '@/components/People/Search.vue';
import Table from '@/components/People/Table.vue';
import PeopleTree from "@/components/People/PeopleTree.vue"
import PeopleDialog from '@/components/People/PeopleDialog.vue';
//搜索栏Search
const handleSearch = (value) => {
    console.log(value);
}
const isBack = ref(false);
const isBackChange = (value) => {
    isBack.value = value;
}

//列表Table
const people = ref([]);
const totalNum = ref(0);
const getPeopleData = () => {
    people.value = [{
        id: 'X5-426',
        name: '贺禹轩',
        position: '欣苑五栋',
        dormitoryNum: '426',
        isIn: false,
        lastEnterTime: '2023-6-3 15:40',
        lastLeaveTime: '2023-6-3 15:42',
    }, {
        id: 'X5-426',
        name: '王鑫磊',
        position: '欣苑五栋',
        dormitoryNum: '426',
        isIn: true,
        lastEnterTime: '2023-6-3 15:40',
        lastLeaveTime: '2023-6-3 15:42',
    },
    ]
    totalNum.value = people.value.length;
}
onMounted(() => {
    getPeopleData();
})
//dialog
const dialogVisible = ref(false);
const dialogTitile = ref('新增');

const handleAdd = () => {
    dialogVisible.value = true;
    dialogTitile.value = '新增'
    formData.value = {
        id: '',
        name: '',
        position: '',
        dormitoryNum: '',
        isIn: null,
        lastEnterTime: '',
        lastLeaveTime: '',
    }
}
const handleEdit = (data) => {
    console.log(data);
    formData.value = data;
    dialogVisible.value = true;
    dialogTitile.value = '编辑'
}
//dialog form
const formData = ref({});

//PeopleTree 
const handleNodeClick = () => {
    //对应某种搜索  看前端处理还是给后端搜索
}
</script>

<style scoped lang="less">
.people {
    width: 100%;

    .right {
        width: 100%;
        height: calc(100vh - 130px);

        .right-main {
            width: 100%;
        }
    }
}
</style>