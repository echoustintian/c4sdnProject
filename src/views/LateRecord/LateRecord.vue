<template>
    <div class="late">
        <div class="top">
            <div class="top-left">
                <el-button type="primary" @click="handleAdd">新增</el-button>
                <el-button type="warning" @click="handleDeleteAll">删除</el-button>
            </div>
            <div class="top-right">
                <LateSearch @Search="HandleSearch" :date="dateValue" @dateChange="dateChange">
                </LateSearch>
            </div>
        </div>
        <LateTable @SectionChange="SectionChange" :data="record" @getData="getRecord" :totalNum="totalNum"
            @pageChange="pageChange"></LateTable>
        <LateDialog v-model="dialogVisible" :formData="formData" @getData="getRecord"></LateDialog>
    </div>
</template>

<script setup>
import LateSearch from '@/components/Late/LateSearch.vue';
import LateTable from '@/components/Late/LateTable.vue';
import LateDialog from '@/components/Late/LateDialog.vue';
import { LateService } from '@/api/api';
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
const dateValue = ref("")
const dateChange = (value) => {
    dateValue.value = value;
}
watch(dateValue, (value) => {
    getRecord();
})

//学生搜索
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
const currentPage = ref(1);
const totalNum = ref(0);
const pageChange = (value) => {
    currentPage.value = value;
    getRecord();
}

const getRecord = (offset = currentPage.value) => {
    LateService.getLateList({ offset, size: 10, date: dateValue.value }).then(res => {
        if (res.data != null) {
            record.value = res.data.row;
            totalNum.value = res.data.total;
        } else {
            record.value = [];
            totalNum.value = 0;
        }
    }).catch(err => {
        console.log(err);
    })
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