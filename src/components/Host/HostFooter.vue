
<template>
	<el-footer>
		<div class="footer">
			<el-pagination background layout="prev, pager, next" :total="1000" />
		</div>
	</el-footer>
</template>
 
<script setup>
	import { ref } from "vue"
</script>

<style scoped lang="less">
.footer{
    width: 100%;
    height: 65px;
}
</style>