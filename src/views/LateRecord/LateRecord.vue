<template>
    <div class="late">
        <div class="top">
            <div class="top-left">
                <el-button type="primary" @click="handleAdd">新增</el-button>
                <el-button type="warning" @click="handleDeleteAll">删除</el-button>
            </div>
            <div class="top-right">
                <LateSearch @Search="HandleSearch" :date="dateValue" @dateChange="dateChange"></LateSearch>
            </div>
        </div>
        <LateTable @SectionChange="SectionChange" :data="record" @getData="getRecord"></LateTable>
        <LateDialog v-model="dialogVisible" :formData="formData" @getData="getRecord"></LateDialog>
    </div>
</template>

<script setup>
import LateSearch from '@/components/Late/LateSearch.vue';
import LateTable from '@/components/Late/LateTable.vue';
import LateDialog from '@/components/Late/LateDialog.vue';
import { onMounted, ref, watch } from 'vue';

//dialog
const dialogVisible = ref(false);

const formData = ref({});

//新增按钮
const handleAdd = () => {
    dialogVisible.value = true;
    formData.value = {
        student_number: null,
        name: null,
        date: null,
        dormitory: null,
        room: null,
    }
}

//搜索时间
const dateValue = ref('')
const dateChange = (value) => {
    dateValue.value = value;
}
watch(dateValue, (value) => {
    console.log(getNowFormatDate(value));
})
function getNowFormatDate(date) {
    let year = date.getFullYear(); //获取完整的年份(4位)
    let month = date.getMonth() + 1; //获取当前月份(0-11,0代表1月)
    let strDate = date.getDate(); // 获取当前日(1-31)
    return `${year}-${month}-${strDate}`
}
//学生名搜索
const HandleSearch = (value) => {
    console.log(value);
}


//全部删除
const multipleSelection = ref([])

const SectionChange = (value) => {
    multipleSelection.value = value
}
const handleDeleteAll = () => {

}


//数据
const record = ref([]);

const getRecord = () => {
    record.value = [
        {
            student_number: '2021090914011',
            name: '王鑫磊',
            date: '2022-1-1',
            dormitory: '欣苑五栋',
            room: '426',
        },
        {
            student_number: '2021090914015',
            name: '贺禹轩',
            date: '2022-1-1',
            dormitory: '欣苑五栋',
            room: '426',
        }
    ]
}

onMounted(() => {
    getRecord();
})
</script>

<style lang="less" scoped>
.late {
    padding: 10px;

    .top {
        width: 100%;
        height: 65px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>