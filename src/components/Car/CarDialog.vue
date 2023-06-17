<template>
    <el-dialog v-model="props.modelValue" :title="title" width="40%">
        <el-form label-position="left" label-width="100px" :model="formData" style="max-width: 460px">
            <el-form-item label="车牌号">
                <el-input v-model="formData.carNumber" />
            </el-form-item>
            <el-form-item label="停车场">
                <el-select v-model="formData.parking" class="m-2" placeholder="Select" size="large">
                    <el-option v-for="item in parkingOptions" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="层数">
                <el-select v-model="formData.floor" class="m-2" placeholder="Select" size="large">
                    <el-option v-for="item in floorOptions" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="类型">
                <el-select v-model="formData.identity" class="m-2" placeholder="Select" size="large">
                    <el-option v-for="item in identityOptions" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="车位">
                <el-input v-model="formData.position" />
            </el-form-item>
            <el-form-item label="进入时间">
                <el-date-picker v-model="formData.enterTime" type="datetime" placeholder="选择时间"
                    value-format="YYYY-MM-DD hh:mm:ss" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="handleCancel">取消</el-button>
                <el-button type="primary" @click="handleConfirm">
                    提交
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup>
import { CarService } from '@/api/api';
import { ref } from 'vue';
const props = defineProps(['modelValue', 'title', 'formData']);
const emit = defineEmits(['update:modelValue', 'getData']);

const floorOptions = ref([
    { label: '一层', value: 1 },
    { label: '二层', value: 2 },
    { label: '三层', value: 3 },
    { label: '负一层', value: -1 },
    { label: '负二层', value: -2 },
    { label: '负三层', value: -3 },
])
const parkingOptions = ref([
    { label: '东部停车场', value: '东部停车场' },
    { label: '操场停车场', value: '操场停车场' }
])
const identityOptions = ref([
    { label: '月租车', value: '月租车' },
    { label: '年租车', value: '年租车' },
    { label: '临时车', value: '临时车' },
    { label: '永久卡', value: '永久卡' },
])
const handleConfirm = () => {
    if (props.title === '新增') {
        CarService.addCar(props.formData, {}).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    } else {
        CarService.editCar(props.formData).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }
    emit('update:modelValue', false);
    setTimeout(() => {
        emit('getData');
    }, 1000);
}
const handleCancel = () => {
    emit('update:modelValue', false);
    emit('getData');
}
</script>

<style scoped lang="less"></style>