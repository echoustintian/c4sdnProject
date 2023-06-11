<template>
  <div class="main">
    <el-container>
      <el-header>
        <div class="input">
          <el-button type="primary">新增</el-button>
          <el-button type="danger">删除</el-button>
        </div>
      </el-header>
      <el-main>
        <div class="table">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column type="selection" width="55" />
            <el-table-column fixed prop="date" label="Date" width="150" />
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="state" label="State" width="120" />
            <el-table-column prop="city" label="City" width="120" />
            <el-table-column prop="address" label="Address" width="600" />
            <el-table-column prop="zip" label="Zip" width="120" />
            <el-table-column fixed="right" label="Operations" width="160">
              <template #default>
                <el-button link type="primary" size="small" @click="handleClick"
                  >Detail</el-button
                >
                <el-button link type="primary" size="small">Edit</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-main>
      <el-footer><el-pagination background layout="prev, pager, next" :total="1000" /></el-footer>
    </el-container>
  </div>
</template>

<script lang="js">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  setup() {
    const handleClick = () => {
      console.log('click')
    }

    const tableData = [
      {
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
      },
      {
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
      },
    ]
    return {
      handleClick,
      tableData
    }
  },
})
</script>

<style lang="less">
.main{
  height: 100%;
}
.input{
  padding: 20px 0px;
}
</style>