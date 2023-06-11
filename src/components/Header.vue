<template>
    <div class="header">
        <div class="header-left">
            <el-icon style="cursor: pointer;" @click="handleCollapse">
                <component :is="CollapseStore.isCollapse?'Fold':'Expand'"> </component>
            </el-icon>
        </div>
        <div class="header-right">
            <el-dropdown trigger="click">
                <div>
                    <el-avatar :size="40" :src="user.imgUrl" style="margin-right: 5px;" />
                    <el-icon>
                        <CaretBottom />
                    </el-icon>
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="handleSetting"><el-icon>
                                <Setting />
                            </el-icon>设置</el-dropdown-item>
                        <el-dropdown-item @click="handleQuit"><el-icon>
                                <SwitchButton />
                            </el-icon>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'


import { useCollapseStore } from '@/stores/collapse';


//折叠
const CollapseStore = useCollapseStore();

const user = reactive({
    name: '',
    username: '',
    password: '',
    imgUrl: 'https://s1mimg.oss-cn-chengdu.aliyuncs.com/img/4.jpg',
})
const handleCollapse = () => {
    CollapseStore.collapse();
};

const handleSetting = () => {

}

const handleQuit = () => {

}
</script>

<style scoped>
.header-left {
    width: 20%;
}

.header-right {
    display: flex;
    flex-direction: row-reverse;
    width: 80%;
}

.header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>