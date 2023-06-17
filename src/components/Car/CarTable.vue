<template>
    <div class="main">
        <div class="main-top">
            <el-button type="primary" plain @click="handleClick"><el-icon>
                    <Plus />
                </el-icon>新增</el-button>
            <el-button type="danger" plain @click="handleDeleteAll" :disabled="!multipleSelection.length">
                <el-icon>
                    <Delete />
                </el-icon>
                删除
            </el-button>
        </div>
        <el-table :data="data" style="width: 100%" :row-style="{ height: '45px' }"
            :cell-style="{ fontSize: '14px', textAlign: 'center' }"
            :header-cell-style="{ textAlign: 'center', background: 'rgb(248, 248, 249)' }"
            @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55" />
            <el-table-column prop="carNumber" label="车牌号" />
            <el-table-column prop="parking" label="停车点" />
            <el-table-column prop="floor" label="层数" />
            <el-table-column prop="identity" label="类型" />
            <el-table-column prop="position" label="车位号" />
            <el-table-column prop="enterTime" label="进入时间" width="180" />
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
                                <el-dropdown-item @click="handleDelete(scope.row.id)"><el-icon>
                                        <Close />
                                    </el-icon>删除</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </template>
            </el-table-column>
        </el-table>
        <div style="display: flex; flex-direction: row-reverse; margin-right: 20px;">
            <el-pagination background layout="prev, pager, next" :total="totalNum" @current-change="pageChange" />
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue"
import { CarService } from "@/api/api"

const props = defineProps(['data', 'totalNum'])
const emit = defineEmits(['clickAdd', 'clickEdit', 'getData', 'pageChange'])
const multipleSelection = ref([])
const handleSelectionChange = (val) => {
    multipleSelection.value = val
    console.log(multipleSelection);
}
const handleClick = () => {
    emit('clickAdd')
}
const handleEdit = (data) => {
    emit('clickEdit', data)
}
const handleDelete = (id) => {
    CarService.deleteCar({ id }).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
    //延迟1s
    setTimeout(() => {
        emit('getData');
    }, 1000);
}
const handleDeleteAll = () => {
    const send = multipleSelection.value.map(item => item.id)
    CarService.deleteAllCar(send).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
    emit('getData');
}

const pageChange = (value) => {
    emit('pageChange', value)
}
</script>

<style scoped lang="less">
.el-dropdown-link:focus {
    outline: none;
}
</style>