<template>
    <div class="camera">
        <el-row>
            <el-col :span="4">
                <div>
                    <h4>快速查找</h4>
                    <div style="padding-left: 20px;">
                        <el-tree :data="tree"></el-tree>
                    </div>
                </div>
            </el-col>
            <el-col :span="20">
                <div class="main">
                    <div v-for="video in videos" :key="video.id" class="video">
                        <div class="top">
                            <el-select v-model="video.url" class="m-2" placeholder="选择摄像头" size="default">
                                <el-option v-for="item in options" :key="item.label" :label="item.label"
                                    :value="item.value" />
                            </el-select>
                            <el-button type="primary" style="margin-left: 20px;" size="default"
                                @click="HandlePlay(video.id)">播放</el-button>
                        </div>
                        <video :src="video.link"></video>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { ref } from "vue";
const tree = ref([{
    label: '查看校门口摄像头'
}, {
    label: '查看宿舍楼摄像头'
}, {
    label: '查看教学楼摄像头'
},
{
    label: '查看食堂摄像头'
},
{
    label: '查看操场摄像头'
}
])
const videos = ref([
    {
        id: 1,
        url: "",
        link: '',
    },
    {
        id: 2,
        url: "",
        link: '',
    },
    {
        id: 3,
        url: "",
        link: '',
    },
    {
        id: 4,
        url: "",
        link: '',
    }
]);
const options = ref([{
    label: 'h1',
    value: 'https://www.bilibili.com/video/BV1Gk4y1H7TE',
},
{
    label: 'h2',
    value: 'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8',
},])
const HandlePlay = (id) => {
    videos.value.forEach((item) => {
        if (item.id === id) {
            item.link = item.url;
        }
    });
}
</script>

<style scoped lang="less">
.camera {
    width: 100%;
    height: calc(100vh - 65px);

    h4 {
        width: 100%;
        text-align: center;
    }

    .main {
        height: calc(100% - 20px);
        border: 1px solid black;
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;

        .video {
            width: 45%;
            height: 280px;
            margin: 20px;
        }

        video {
            width: 90%;
            height: 90%;
        }
    }
}
</style>