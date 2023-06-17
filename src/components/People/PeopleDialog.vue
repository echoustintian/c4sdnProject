<template>
    <el-dialog v-model="props.modelValue" :title="title" width="40%">
        <el-form label-position="left" label-width="100px" :model="formData" style="max-width: 460px">
            <el-form-item label="学号">
                <el-input v-model="formData.studentNumber" />
            </el-form-item>
            <el-form-item label="姓名">
                <el-input v-model="formData.name" />
            </el-form-item>
            <el-form-item label="宿舍楼">
                <el-input v-model="formData.dormitory" />
            </el-form-item>
            <el-form-item label="宿舍号">
                <el-input v-model="formData.room" />
            </el-form-item>
            <el-form-item label="是否在寝">
                <el-select v-model="formData.inStatus
                    " class="m-2" placeholder="请选择">
                    <el-option v-for="item in isInOptions" :key="item.label" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="进入时间">
                <el-date-picker v-model="formData.lastEnterTime" type="datetime" placeholder="选择进入时间"
                    value-format="YYYY-MM-DD HH:mm:ss" />
            </el-form-item>
            <el-form-item label="离开时间">
                <el-date-picker v-model="formData.lastLeaveTime" type="datetime" placeholder="选择离开时间"
                    value-format="YYYY-MM-DD HH:mm:ss" />
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
import { onMounted, ref } from "vue";
import { PeopleService } from "@/api/api";

const props = defineProps(['modelValue', 'title', 'formData']);
const emit = defineEmits(['update:modelValue', 'getData']);

const handleConfirm = () => {
    if (props.title === '新增') {
        PeopleService.addPeople(props.formData, {}).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    } else {
        PeopleService.editPeople(props.formData).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }
    emit('update:modelValue', false);
    //延迟一秒
    setTimeout(() => {
        emit('getData');
    }, 1000);

}
const handleCancel = () => {
    emit('update:modelValue', false);
    emit('getData');
}
onMounted(() => {
})
//选择
const isInOptions = ref([{ label: '在寝', value: true }, { label: '离去', value: false },])
</script>

<style scoped lang="less"></style>