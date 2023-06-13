<template>
    <el-dialog v-model="props.modelValue" :title="title" width="40%">
        <el-form label-position="left" label-width="100px" :model="formData" style="max-width: 460px">
            <el-form-item label="姓名">
                <el-input v-model="formData.name" />
            </el-form-item>
            <el-form-item label="宿舍楼">
                <el-input v-model="formData.position" />
            </el-form-item>
            <el-form-item label="宿舍号">
                <el-input v-model="formData.dormitoryNum" />
            </el-form-item>
            <el-form-item label="是否在寝">
                <el-select v-model="formData.isIn" class="m-2" placeholder="请选择" size="middle">
                    <el-option v-for="item in isInOptions" :key="item.label" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="进入时间">
                <el-date-picker v-model="formData.lastEnterTime" type="datetime" placeholder="选择进入时间" />
            </el-form-item>
            <el-form-item label="离开时间">
                <el-date-picker v-model="formData.lastLeaveTime" type="datetime" placeholder="选择离开时间" />
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
import { ref } from "vue";

const props = defineProps(['modelValue', 'title', 'formData']);
const emit = defineEmits(['update:modelValue', 'getData']);
const handleConfirm = () => {
    emit('update:modelValue', false);
    //上传数据 并重新调API
    emit('getData');
}
const handleCancel = () => {
    emit('update:modelValue', false);
    emit('getData');
}

//选择
const isInOptions = ref([{ label: '在寝', value: true }, { label: '离去', value: false },])
</script>

<style scoped lang="less"></style>