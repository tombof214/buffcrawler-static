<template>
  <div id="app">

  <div>涨跌榜</div>
    请输入时间区间:
        <input type="text" v-model="span">
        请输入起始时间：
        <input type="text" v-model="starttime">
        <a href="#/up" v-on:click = 'down'>按跌幅</a>
        <a href="#/up" v-on:click = 'up'>按涨幅</a>
    <el-table
    :data="infos"
    style="width: 100%"
    :row-class-name="tableRowClassName"
    :fit = true
    >
    <el-table-column
      prop="name"
      label="名称"
      align= "center">
    </el-table-column>
    <el-table-column
      prop="price"
      label="价格"
      align= "center">
    </el-table-column>
    <el-table-column
      prop="gap"
      label="涨/跌幅"
      align= "center">
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
      :total="total">
    </el-pagination>
  </div>
  </div>
</template>

<script>
export default {
  name: 'UP',
 data() {
   return {
     starttime: "2021-12-10",
     span: 14,
     pagenum:0,
     total: 0,
     pageSize: 10,
     infos: [],
     currentPage: 1,
     upordown:1
   }
 },
 methods: {
   up() {
     this.upordown = 1;
      this.$http.get("http://localhost:8081/index/up?span="+this.span+"&time="+ this.starttime + "&limit=" + this.pageSize +"&pagenum="+ parseInt(this.currentPage)).then((res) =>{
      console.log(res.data)
      this.infos = res.data.data.list;
      this.total = res.data.data.count;
    })
    ;
   },
   down(){
        this.upordown = 0;
       this.$http.get("http://localhost:8081/index/down?span="+this.span+"&time="+ this.starttime+ "&limit=" + this.pageSize +"&pagenum="+ parseInt(this.currentPage)).then((res) =>{
       this.infos = res.data.data.list;
       this.total = res.data.data.count;
    })
    ;
   },
   handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.currentPage = 1;
				this.pageSize = val;
      },
   handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage = val;
        if(parseInt(this.upordown) == 1){
        this.up();
        }
			  else{
          this.down();
        }
      },
            tableRowClassName({row, rowIndex}) {
        if (rowIndex % 2 === 1) {
          return 'warning-row';
        } else if (rowIndex %2 === 0) {
          return 'success-row';
        }
        return '';
      }
    
 },
  components: {
    
  },
  created () {
    // 　　let yy = new Date().getFullYear();
    // 　　let mm = new Date().getMonth()+1;
    // 　　let dd = new Date().getDate();
    // 　　this.starttime = yy+'-'+mm+'-'+dd 
    this.$http.get("http://localhost:8081/index/up?span="+this.span+"&time="+ this.starttime+ "&limit=" + 10 +"&pagenum="+ 1).then((res) =>{
      console.log(res.data)
      this.infos = res.data.data.list;
      this.total = res.data.data.count
    })
    ;
  },
}
</script>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .el-table{
    text-align: center;
  }
</style>
