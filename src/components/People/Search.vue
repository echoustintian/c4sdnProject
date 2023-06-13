<template>
    <div class="search">
        <div class="search1">
            <span style="width: 60px;">查询未归</span>
            <el-switch v-model="isSonBack" />
        </div>
        <div class="search2">
            <span style="width: 80px;">寝室号</span>
            <el-input placeholder="请输入寝室号" v-model="DormitoryNum"></el-input>
            <el-button style="margin-left: 10px;" type="primary" @click="search">
                <el-icon>
                    <Search />
                </el-icon>搜索
            </el-button>
        </div>
    </div>
</template>

<script setup>
import { ref, defineEmits, watch } from 'vue';
const props = defineProps(['isBack']);
const emit = defineEmits(["search", "isBackChange"])
const DormitoryNum = ref('');

//实现isBack父子组件的双向绑定与V-model问题
const isSonBack = ref(props.isBack);
watch(
    () => props.isBack,
    (value) => {
        isSonBack.value = value;
    }
);
watch(
    isSonBack,
    (value) => {
        emit('isBackChange', value)
    }
)

const search = () => {
    emit("search", DormitoryNum);
}
</script>

<style scoped lang="less">
.search {
    width: 100%;
    height: 65px;
    display: flex;
    align-items: center;

    .search1 {
        display: flex;
        align-items: center;
        margin-right: 60px;
    }

    .search2 {
        display: flex;
        align-items: center;
    }

    span {
        font-weight: 700;
        margin-right: 10px;
        font-size: 14px;
    }
}
</style>