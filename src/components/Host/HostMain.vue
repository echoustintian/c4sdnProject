<template>
	
	<el-header :data="data" >
          <div class="input">
            <el-button type="primary" >新增</el-button>
            <el-button type="danger" plain @click="handleDeleteAll" :disabled="!multipleSelection.length">
                删除
            </el-button>
          </div>
	</el-header>
	
   <el-main>
     <div class="table" >
       <el-table :data="data" @selection-change="handleSelectionChange" style="width: 100%">
         <el-table-column type="selection" width="55" />
         <el-table-column prop="date" label="Date" width="150"/>
         <el-table-column prop="name" label="Name" width="120"/>
         <el-table-column prop="mac" label="Mac" width="120"/>
         <el-table-column prop="ipaddress" label="Ipaddress" width="120">
           <template #default>
             <el-button link type="primary" size="small" @click="handleClick">Detail</el-button>
             <el-button link type="primary" size="small">Edit</el-button>
           </template>
         </el-table-column>
       </el-table>
     </div>
   </el-main>

</template>
 
<script setup>
  import { ref } from 'vue';
const props = defineProps(['data'])
console.log(props.data)
//   const props = defineProps({
//     data: {
//       default: []
//     }
//   });
// const data = ref(props.data);
const multipleSelection = ref([])
	const handleSelectionChange = (val) => {
	    multipleSelection.value = val
	    console.log(multipleSelection);
	}
	const handleDeleteAll = () => {
	    console.log(multipleSelection);
	}
</script>

<style scoped lang="less">
.input {
	    width: 100%;
	    height: 100px;
		display:flex;
		align-items: center;}
.table {
    width: 100%;
	}

</style>