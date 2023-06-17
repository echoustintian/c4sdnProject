<template>
    <div class="search">
        <div class="search2">
            <div style="display: flex; align-items: center;"> <span style="width: 80px;">寝室号</span>
                <el-input placeholder="请输入寝室号" v-model="DormitoryNum"></el-input>
                <el-button style="margin-left: 10px;" type="primary" @click="search">
                    <el-icon>
                        <Search />
                    </el-icon>搜索
                </el-button>
            </div>
            <div style=" margin-left: 20px; display: flex; align-items: center;"> <span style="width: 80px;">学生名</span>
                <el-input placeholder="请输入学生名" v-model="name"></el-input>
                <el-button style="margin-left: 10px;" type="primary" @click="search">
                    <el-icon>
                        <Search />
                    </el-icon>搜索
                </el-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
const emit = defineEmits(["search"])
const DormitoryNum = ref('');
const name = ref('')

const search = () => {
    emit("search", DormitoryNum.value, name.value);
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