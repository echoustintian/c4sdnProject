<template>
    <div class="main">
        <div class="main-top">
            <el-button type="primary" @click="handleClick"><el-icon>
                    <Plus />
                </el-icon>新增</el-button>
            <el-button type="danger" @click="handleDeleteAll" :disabled="!multipleSelection.length">
                <el-icon>
                    <Delete />
                </el-icon>
                删除
            </el-button>
        </div>
        <el-table :data="data" style="width: 100%" :row-style="{ height: '45px' }"
            :cell-style="{ fontSize: '14px', textAlign: 'center' }"
            :header-cell-style="{ textAlign: 'center', background: 'rgb(248, 248, 249)' }"
            @selection-change="handleSelectionChange" max-height="530">
            <el-table-column type="selection" width="55" />
            <el-table-column prop="studentNumber" label="学号" />
            <el-table-column prop="name" label="姓名" />
            <el-table-column prop="dormitory" label="宿舍楼" width="120" />
            <el-table-column prop="room" label="宿舍号" />
            <el-table-column prop="inStatus
" label="状态">
                <template #default="scope">
                    <el-tag :type="scope.row.inStatus ? 'success' : 'info'" effect="dark">{{ scope.row.inStatus ? '在寝' :
                        '离去'
                    }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="lastEnterTime" label="进入时间" width="180" />
            <el-table-column prop="lastLeaveTime" label="离去时间" width="180" />
            <el-table-column fixed="right" label="操作">
                <template #default="scope">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            <el-icon>
                                <More />
                            </el-icon>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item @click="handleEdit(scope.row)"><el-icon>
                                        <EditPen />
                                    </el-icon>编辑</el-dropdown-item>
                                <el-dropdown-item @click="handleDelete(scope.row.studentNumber)"><el-icon>
                                        <Close />
                                    </el-icon>删除</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </template>
            </el-table-column>
        </el-table>
        <div style="display: flex; flex-direction: row-reverse; padding-right: 100px;">
            <el-pagination layout="prev, pager, next" :total="props.totalNum" background
                @current-change="handleCurrentChange" style="margin-top: 5px;" />
        </div>

    </div>
</template>



<script setup>
import { PeopleService } from "@/api/api"
import { ref } from "vue"
const props = defineProps(['data', 'totalNum'])
const emit = defineEmits(['clickAdd', 'clickEdit', 'getData', 'pageChange'])
const multipleSelection = ref([])
const handleSelectionChange = (val) => {
    multipleSelection.value = val
}
const handleClick = () => {
    emit('clickAdd')
}
const handleEdit = (data) => {
    emit('clickEdit', data)
}
const handleDelete = (studentNumber) => {
    PeopleService.deletePeople({ "student_number": studentNumber }).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
    setTimeout(() => {
        emit('getData');
    }, 1000);
}
const handleDeleteAll = () => {

    const send = multipleSelection.value.map(item => item.id)
    PeopleService.deleteAllPeople(send).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
    emit('getData');
}

const handleCurrentChange = (number) => {
    emit('pageChange', number)
    emit('getData');

}

</script>

<style scoped lang="less">
.el-dropdown-link:focus {
    outline: none;
}
</style>