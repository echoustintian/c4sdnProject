<template>
  <div id="main">

  </div>
</template>

<script setup>
import { onMounted } from "vue";
import * as echarts from 'echarts';
import devices from './devices.json'
import hosts from './hosts.json'
import links from './links.json'

// console.log(myChart);
onMounted(()=>{
    let linkLines = []

    let devicesMap = new Map()
    // 处理device节点
    let deviceNodes = []
    console.log(devices);
    devices.devices.forEach(element => {
        devicesMap.set(element.annotations.name, element)
        let item = {
            nodeName: element.annotations.name,
            value: [element.annotations.gridX, element.annotations.gridY],
            symbolSize: 30,
            symbol: 'path://M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905 c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478 c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014 C52.216,18.553,51.97,16.611,51.911,16.242z',
            itemStyle: {
                color: 'orange',
            }
        }
        deviceNodes.push(item)
        
    });

    // 处理host节点
    let hostNodes = []

    hosts.hosts.forEach(element => {
        let item = {
            nodeName: element.annotations.name,
            value: [element.annotations.gridX, element.annotations.gridY],
            symbolSize: 20,
            symbol: 'path://M232.727 139.636h558.546a93.09 93.09 0 0 1 93.09 93.091v372.364a93.09 93.09 0 0 1-93.09 93.09H232.727a93.09 93.09 0 0 1-93.09-93.09V232.727a93.09 93.09 0 0 1 93.09-93.09z m0 46.546a46.545 46.545 0 0 0-46.545 46.545v372.364a46.545 46.545 0 0 0 46.545 46.545h558.546a46.545 46.545 0 0 0 46.545-46.545V232.727a46.545 46.545 0 0 0-46.545-46.545H232.727z m256 512h46.546v139.636h-46.546V698.182zM279.273 837.818h465.454a23.273 23.273 0 0 1 0 46.546H279.273a23.273 23.273 0 0 1 0-46.546z',
            itemStyle: {
                color: 'orange',
            }
        }
        hostNodes.push(item)

        let line = {}
        let connectDevice = devicesMap.get(element.locations[0].elementId)

        line.coords =[[connectDevice.annotations.gridX, connectDevice.annotations.gridY] , [element.annotations.gridX, element.annotations.gridY]]
        linkLines.push(line)
    })

    // 处理连接线
    links.links.forEach(element => {
        let {src , dst , state} = element

        let srcDevice = devicesMap.get(src.device)
        let dstDevice = devicesMap.get(dst.device)

        let line = {}
        line.coords =[[srcDevice.annotations.gridX, srcDevice.annotations.gridY] , [dstDevice.annotations.gridX, dstDevice.annotations.gridY]]
        linkLines.push(line)
    })
  // 获取dom操作不能放在 setup 内，该生命周期钩子调用时，dom还未挂载，会导致dom无法正常获取
  // 基于准备好的dom，初始化echarts实例

let option = {
    backgroundColor: "#0B1321",
    xAxis: {
        min: 0,
        max: 1200,
        show: false,
        type: 'value'
    },
    yAxis: {
        min: 0,
        max: 1200,
        show: false,
        type: 'value'
    },
    tooltip:{},
    series: [
    // 节点
    {
        type: 'graph',
        coordinateSystem: 'cartesian2d',
        label: {
            show: true,
            position: 'bottom',
            color: 'orange',
            formatter: function(item) {
                return item.data.nodeName
            }
        },
        data: deviceNodes
    }, 
    {
        type: 'graph',
        coordinateSystem: 'cartesian2d',
        label: {
            show: true,
            position: 'bottom',
            color: 'orange',
            formatter: function(item) {
                return item.data.nodeName
            }
        },
        data: hostNodes
    }, 
    // 线
    {
        type: 'lines',
        polyline: true,
        coordinateSystem: 'cartesian2d',
        
        lineStyle: {
            type: 'dashed',
            width: 2,
            color: '#175064',
            curveness: 0.3

        },
        effect: {
            show: true,
            trailLength: 0.1,
            symbol: 'arrow',
            color: 'red',
            symbolSize: 8
        },
        data: linkLines
    },
]
};

  var myChart = echarts.init(document.getElementById('main'));
  // 绘制图表
  myChart.setOption(option);
})

</script>

<style scoped lang="less">
#main{
  height: 100%;
  width: 100%;
}
</style>