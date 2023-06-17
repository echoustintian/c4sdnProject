<template>
    <div class="people">
        <el-row>
            <el-col :span="4">
                <PeopleTree @nodeClick="handleNodeClick"></PeopleTree>
            </el-col>
            <el-col :span="20">
                <div class="right">
                    <Search @search="handleSearch"></Search>
                    <Table :data="people" @getData="getPeopleListByCondition" @clickAdd="handleAdd" @clickEdit="handleEdit"
                        :totalNum="totalNum" @pageChange="pageChange">
                    </Table>
                </div>
            </el-col>
        </el-row>
        <PeopleDialog v-model="dialogVisible" :title="dialogTitile" :formData="formData"
            @getData="getPeopleListByCondition">
        </PeopleDialog>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Search from '@/components/People/Search.vue';
import Table from '@/components/People/Table.vue';
import PeopleTree from "@/components/People/PeopleTree.vue"
import PeopleDialog from '@/components/People/PeopleDialog.vue';
import { PeopleService } from '@/api/api.js'

//搜索栏Search

let searchValue = {
    room: '',
    name: '',
}
const getPeopleListByCondition = (offset = currentpage.value) => {
    PeopleService.getPeopleListByCondition(searchValue, { offset, size: 10 }).then(res => {
        people.value = res.data.row;
        totalNum.value = res.data.total;
    }).catch(err => {
        console.log(err);
    })
}
const handleSearch = (room, name) => {
    searchValue.room = room
    searchValue.name = name
    getPeopleListByCondition(1)
}

//列表Table
const people = ref([]);
const totalNum = ref(0);
const currentpage = ref(1);
const pageChange = (value) => {
    currentpage.value = value
}

// const getPeopleData = (offset = currentpage.value) => {
//     PeopleService.getPeopleList({ offset, size: 10 }).then(res => {
//         people.value = res.data.records;
//         totalNum.value = res.data.total;
//     }).catch(err => {
//         console.log(err);
//     })
// }
onMounted(() => {
    getPeopleListByCondition(1);
})
//dialog
const dialogVisible = ref(false);
const dialogTitile = ref('新增');

const handleAdd = () => {
    dialogVisible.value = true;
    dialogTitile.value = '新增'
    formData.value = {
        studentNumber: '',
        name: '',
        dormitory: '',
        room: '',
        inStatus: null,
        lastEnterTime: '',
        lastLeaveTime: '',
    }
}
const handleEdit = (data) => {
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