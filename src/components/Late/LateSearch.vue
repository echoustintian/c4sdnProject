<template>
    <div class="search" style="margin-right: 20px;">
        <div style="display: flex;">
            <el-date-picker v-model="dateValue" type="date" placeholder="选择日期" :disabled-date="disabledDate"
                :shortcuts="shortcuts" />
            <el-input placeholder="请输入学生名" v-model="value" style="margin-right: 10px; margin-left: 10px;"></el-input>
            <el-button @click="HandleSearch" type="primary">搜索</el-button>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from "vue"

const emit = defineEmits(['Search', 'dateChange'])
const props = defineProps(['date'])
//选择日期组件
const dateValue = ref(props.date);

watch(dateValue, (value) => {
    emit('dateChange', value)
})
const shortcuts = [
    {
        text: 'Today',
        value: new Date(),
    },
    {
        text: 'Yesterday',
        value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            return date
        },
    },
    {
        text: 'A week ago',
        value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            return date
        },
    },
]
const disabledDate = (time) => {
    return time.getTime() > Date.now()
}
//搜索
const value = ref('')

const HandleSearch = () => {
    emit('search', value)
}
</script>

<style lang="less" scoped></style>