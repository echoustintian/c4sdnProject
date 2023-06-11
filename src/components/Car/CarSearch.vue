<template>
    <div class="search">
        <div class="search1">
            <span style="width: 80px;">车牌号</span>
            <el-input placeholder="请输入车牌号" v-model="LicPlateNumSearch"></el-input>
            <el-button style="margin-left: 10px;" type="primary" @click="search1">
                <el-icon>
                    <Search />
                </el-icon>搜索
            </el-button>
        </div>
        <div class="search2">
            <span style="width: 80px;">车位号</span>
            <el-input placeholder="请输入车位号" v-model="ParNumSearch"></el-input>
            <el-button style="margin-left: 10px;" type="primary" @click="search2" icon="Search">
                搜索</el-button>
        </div>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
const LicPlateNumSearch = ref('');
const ParNumSearch = ref('');
const emit = defineEmits(["search1", "search2"])
const search1 = () => {
    emit("search1", LicPlateNumSearch.value);
}
const search2 = () => {
    emit("search2", ParNumSearch.value);
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
        margin-right: 20px;
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