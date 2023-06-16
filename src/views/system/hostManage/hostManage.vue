<template>
	<div class="main">
		<el-container>
			<div class="right">
				<HostMain :data="Table"></HostMain>
				<HostFooter></HostFooter>
			</div>
		</el-container>
	</div>
</template>

<script setup>
import { defineComponent, reactive,onMounted, ref} from 'vue';
import HostFooter from '@/components/Host/HostFooter.vue';
import HostMain from '@/components/Host/HostMain.vue';
const handleClick = () => {
    console.log('click')
}
const Table = ref([]);
const GetTableData = () => {		
	Table.value = [{
		"id":"00:00:00:00:00:40/None",
		"mac":"00:00:00:00:00:40",
		"vlan":"None",
		"innerVlan":"None",
		"outerTpid":"0x0000",
		"configured":false,
		"suspended":false,
		"ipAddresses":[
		"2001:2:4::1"
		],
		//获取与主机相连的交换机
		"locations":[{
		"elementId":"device:leaf2",
		"port":"4"
		}],
		"annotations":{
		"gridX":"850.0",
		"gridY":"700.0",
		"latitude":null,
		"locType":"grid",
		"longitude":null,
		"name":"h4"//name信息可以用于获取链路时延
		}      
	},
	{
		"id":"00:00:00:00:00:50/None",
		"mac":"00:00:00:00:00:50",
		"vlan":"None",
		"innerVlan":"None",
		"outerTpid":"0x0000",
		"configured":false,
		"suspended":false,
		"ipAddresses":[
		"2001:2:4::3"
		],
		//获取与主机相连的交换机
		"locations":[{
		"elementId":"device:leaf2",
		"port":"4"
		}],
		"annotations":{
		"gridX":"850.0",
		"gridY":"700.0",
		"latitude":null,
		"locType":"grid",
		"longitude":null,
		"name":"h5"//name信息可以用于获取链路时延
		}      
	},
	{
		"id":"00:00:00:00:00:60/None",
		"mac":"00:00:00:00:00:60",
		"vlan":"None",
		"innerVlan":"None",
		"outerTpid":"0x0000",
		"configured":false,
		"suspended":false,
		"ipAddresses":[
		"2001:2:4::2"
		],
		//获取与主机相连的交换机
		"locations":[{
		"elementId":"device:leaf2",
		"port":"4"
		}],
		"annotations":{
		"gridX":"850.0",
		"gridY":"700.0",
		"latitude":null,
		"locType":"grid",
		"longitude":null,
		"name":"h6"//name信息可以用于获取链路时延
		}      
	},
	]    
return {
      Table
}  
}
onMounted(() => {
    GetTableData();
	console.log("下面是table")
	console.log(Table);
})
</script>

<style scoped lang="less">
.main{
	width: 100%;
	overflow-x: hidden;
}
.input{
	padding: 20px 0px;
}
.right {
    width: 100%;
    height: calc(100vh - 105px);
}
</style>