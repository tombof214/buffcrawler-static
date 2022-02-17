<template>
  <div>
    商品名称:<input type="text" v-model="name" /> 商品具体类型:
    <input type="text" v-model="tablename" />
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        匕首类型<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown"  >
        <el-dropdown-item command= "a" >
          蝴蝶刀
         </el-dropdown-item>
           <el-dropdown-item command= "b" >
          爪子刀
         </el-dropdown-item>
           <el-dropdown-item command= "c" >
          刺刀刀
         </el-dropdown-item>
           <el-dropdown-item  command= "d" >
          折叠刀
         </el-dropdown-item>
           <el-dropdown-item  command= "e">
          短剑
         </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <a href="javascript:;" @click="onsubmit">搜索</a>
    <el-table
      :data="searchInfo"
      style="width: 100%"
      :row-class-name="tableRowClassName"
      :fit="true"
    >
      <el-table-column prop="name" label="名称" align="center">
      </el-table-column>
      <el-table-column prop="transact_time" label="交易时间" align="center">
      </el-table-column>
      <el-table-column prop="sell_price" label="价格" align="center">
      </el-table-column>
      <el-table-column prop="paint_wear" label="磨损" align="center">
      </el-table-column>
      <el-table-column prop="paint_seed" label="模板" align="center">
      </el-table-column>
      <el-table-column prop="phase" label="分档" align="center">
      </el-table-column>
    </el-table>
    <div class="block">
      <span class="demonstration"></span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchInfo: [],
      pagenum: 0,
      total: 0,
      pageSize: 10,
      currentPage: 1,
      name: "",
      tablename: "",
      total: 0,
  
    };
  },
  methods: {


    handleCommand(command) {
      if(command == "a"){
        this.tablename = "butterfly_history"
      }
       if(command == "b"){
        this.tablename = "karambit_history"
      }
       if(command == "c"){
        this.tablename = "bayonet_history"
      }
       if(command == "d"){
        this.tablename = "flip_history"
      }
       if(command == "e"){
        this.tablename = "stiletto_history"
      }
      
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 1) {
        return "warning-row";
      } else if (rowIndex % 2 === 0) {
        return "success-row";
      }
      return "";
    },
    onsubmit() {
      this.$http
        .get("http://localhost:8081/index/search", {
          params: {
            tablename: this.tablename,
            name: this.name,
            limit: this.pageSize,
            pagenum: this.currentPage,
          },
        })
        .then((res) => {
          this.searchInfo = res.data.data.list;
          this.total = res.data.data.count;
        });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.onsubmit();
    },
  },
};
</script>

<style scoped>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
.el-table {
  text-align: center;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>