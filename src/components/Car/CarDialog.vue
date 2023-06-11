<template>
    <el-dialog v-model="props.modelValue" :title="title" width="40%">
        <el-form label-position="left" label-width="100px" :model="formData" style="max-width: 460px">
            <el-form-item label="车牌号">
                <el-input v-model="formData.CarNumber" />
            </el-form-item>
            <el-form-item label="停车场">
                <el-input v-model="formData.parking" />
            </el-form-item>
            <el-form-item label="层数">
                <el-input v-model="formData.floor" />
            </el-form-item>
            <el-form-item label="车位">
                <el-input v-model="formData.position" />
            </el-form-item>
            <el-form-item label="进入时间">
                <el-input v-model="formData.enterTime" />
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
</script>

<style scoped lang="less"></style>