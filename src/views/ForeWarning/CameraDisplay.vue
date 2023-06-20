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
                                @click="HandlePlay(video)">播放</el-button>
                        </div>
                        <video class="video-js vjs-default-skin" :id="video.id">
                            <source />
                        </video>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { ref } from "vue";
import videojs from "video.js";
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
        id: "tv1",
        url: "",
        link: '',
    },
    {
        id: "tv2",
        url: "",
        link: '',
    },
    {
        id: "tv3",
        url: "",
        link: '',
    },
    {
        id: "tv4",
        url: "",
        link: '',
    }
]);
const options = ref([{
    label: 'h1',
    value: 'http://ivi.bupt.edu.cn/hls/jshd.m3u8',
},
{
    label: 'h2',
    value: 'http://192.168.3.3:8080/index.m3u8',
},])
const HandlePlay = (video) => {
    getVideo(video.id);
    var myPlayer = videojs(video.id);
    myPlayer.src({
        src: video.url,
        type: "application/x-mpegURL"
    });
    myPlayer.play();
}

//video播放相关
const getVideo = (id) => {
    videojs(
        id,
        {
            width: 340,
            height: 252,
            fill: true,
            bigPlayButton: false,
            textTrackDisplay: false,
            posterImage: false,
            errorDisplay: false,
            controlBar: false,
        },
        function () {
            this.play();
        }
    );
}

//获取hls视频流并且播放

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

        .video-js {
            background-color: #fff;
        }

        video {
            width: 90%;
            height: 90%;
            overflow: hidden;
            background-color: #fff;
            object-fit: cover;
        }

        video:focus {
            outline: none;
        }
    }
}
</style>