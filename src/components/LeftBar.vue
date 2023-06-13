<template>
    <div class="leftbar">
        <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#2d3d51" text-color="#BFCBD9"
            :collapse="CollapseStore.isCollapse">
            <div class="mb-2 logobox">
                <img src="@/assets/img/logo.png" alt="logo" style="">
                <span v-show="!CollapseStore.isCollapse">SDN平台</span>
            </div>
            <el-sub-menu v-for=" menu  in  menus " :key="menu.menuid" :index="menu.label">
                <template #title>
                    <el-icon>
                        <component :is="menu.icon"></component>
                    </el-icon>
                    <span>{{ menu.label }}</span>
                </template>
                <el-menu-item v-for=" childmenu  in  menu.menus " :key="childmenu.menuid" :index="childmenu.label"
                    @click="handleJump(childmenu.name)">
                    <el-icon>
                        <component :is="childmenu.icon"></component>
                    </el-icon>
                    <span>{{ childmenu.label }}</span>
                </el-menu-item>
            </el-sub-menu>
        </el-menu>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue'
import { useCollapseStore } from '@/stores/collapse';


//折叠
const CollapseStore = useCollapseStore();

const menus = ref([]);

// router跳转
const router = useRouter();
const handleJump = (name) => {
    console.log("test")
    router.push({
        name,
    })
}
//获取数据
const getMenuData = () => {
    menus.value = [
        {
            menuid: 71,
            icon: 'Setting',
            label: '系统管理',
            url: null,
            menus: [
                {
                    menuid: 72,
                    icon: 'User',
                    label: '用户管理',
                    name: 'user',
                    url: 'system/user',
                },
                {
                    menuid: 73,
                    icon: 'Avatar',
                    label: '角色管理',
                    name: 'role',
                    url: 'system/Role',
                },
                {
                    menuid: 76,
                    icon: 'Document',
                    label: '日志管理',
                    name: 'log',
                    url: 'system/Permission',
                },
                {
                    menuid: 77,
                    icon: 'Document',
                    label: '主机管理',
                    name: 'hostManage',
                    url: 'system/hostManage',
                    menus: null
                }
            ]
        },
        {
            menuid: 81,
            icon: 'Notification',
            label: '危险监控',
            url: null,
            menus: [
                {
                    menuid: 82,
                    icon: 'Connection',
                    label: '违停预警',
                    name: 'illegalparking',
                    url: 'forewarning/illegalparking',
                },
            ]
        },
        {
            menuid: 91,
            icon: 'Setting',
            label: '园区管理',
            url: null,
            menus: [
                {
                    menuid: 92,
                    icon: 'Van',
                    label: '车辆管理',
                    name: 'carmanager',
                    url: 'car/carmanager',
                },
                {
                    menuid: 93,
                    icon: 'Avatar',
                    label: '人员管理',
                    name: 'peoplemanager',
                    url: 'people/peopleManager',
                },
            ]
        }
    ];
}



onMounted(() => {
    getMenuData();
})


</script>

<style scoped>
.logobox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    margin: 0;
    text-align: center;
    line-height: 50px;
    background-color: #2d3d51;
    color: #fff;
}

img {
    width: 32px;
    height: 32px;
}

.el-menu {
    border: 0px;
    height: 100vh;
}
</style>