<template>
    <el-dialog v-model="props.modelValue" title="新增" width="40%">
        <el-form label-position="left" label-width="100px" :model="formData" style="max-width: 460px">
            <el-form-item label="学号">
                <el-input v-model="formData.CarNumber" />
            </el-form-item>
            <el-form-item label="姓名">
                <el-input v-model="formData.parking" />
            </el-form-item>
            <el-form-item label="晚归时间">
                <el-date-picker v-model="formData.date" type="datetime" placeholder="晚归时间" />
            </el-form-item>
            <el-form-item label="宿舍楼">
                <el-select v-model="formData.dormitory" class="m-2" placeholder="选择宿舍楼" size="large">
                    <el-option v-for="item in options" :key="item.value" :label="item.value" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="宿舍号">
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
import { ref } from "vue";

const props = defineProps(['modelValue', 'formData']);
const emit = defineEmits(['update:modelValue', 'getData']);
const handleConfirm = () => {
    emit('update:modelValue', false);
    //上传数据 并重新调API
    console.log(props.formData);
    emit('getData');
}
const handleCancel = () => {
    emit('update:modelValue', false);
    emit('getData');
}

const options = ref([{
    value: '欣苑五栋'
},
{
    value: '欣苑四栋'
}])
</script>

<style scoped lang="less"></style>