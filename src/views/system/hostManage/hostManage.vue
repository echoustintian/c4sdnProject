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
        date: '2016-05-03',
        name: 'jiang',
        mac:'00:00:00:00:00:40',
		ipaddress:'2001:2:4::1',
      },
      {
        date: '2016-05-04',
        name: 'xiaomi',
        mac:'00:00:00:00:00:40',
      	ipaddress:'2001:2:4::1',
      },
	  {
	    date: '2016-05-05',
	    name: 'xiaoli',
	    mac:'00:00:00:00:00:40',
	  	ipaddress:'2001:2:4::1',
	  },
	  {
	    date: '2016-05-06',
	    name: 'xiaohua',
	    mac:'00:00:00:00:00:40',
	  	ipaddress:'2001:2:4::1',
	  },
    ]
    return {
      Table
    }
   
}
onMounted(() => {
    GetTableData();
	// console.log("下面是table")
	// console.log(Table);
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