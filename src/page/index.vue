<template>
  <!--http://www.skysun.name/-->
<div class="bg">
    <head-top></head-top>
    <el-row :gutter="20" style="margin-top:20px;">
      <el-col :span="4"><div class="grid-content bg-purple-light">
        <left-menu></left-menu>
      </div></el-col>
      <el-col :span="16">
        <div class="grid-content" style="height: 800px;">
        <article-component v-for="item in tableData"
           :title = item.title
           :tag = item.tag
           :date = item.date
        ></article-component>
       </div>
        <el-pagination
          style="margin-top: 10px;"
          background
          layout="prev, pager, next"
          :current-page="currentPage"
          @current-change = "handleCurrentChange"
          :page-size = "pageSize"
          :total="total">
        </el-pagination>
        <div class="foot">
          <foot-component></foot-component>
        </div>

      </el-col>
      <el-col :span="4">
        <div class="grid-content">



      </div>
      </el-col>
    </el-row>


</div>
</template>

<script>
  import headTop from "@/components/headTop"
  import leftMenu from "./leftMenu"
  import articleComponent from "./articleComponent"
  // import shareComponent from "./shareComponent"
  import footComponent from "@/components/footComponent"
  import axios from 'axios'
    export default {
        data(){
          return{
            tableData:[],
            total:0,
            currentPage:1,
            pageSize:5
          }
        },
      components:{
          headTop,
          leftMenu,
          articleComponent,
          footComponent
      },
      created(){
        this.initData()
      },
      methods:{
        //初始化列表
        initData(){
          axios.get("/article/list").then((res)=>{
            if(res.data.status==="1"){
              console.log(res)
              this.total = res.data.content;
              this.initPage();
            }
          })

        },
        handleCurrentChange(val){
          this.currentPage = val;
          this.initPage()

        },
        //分页
        initPage(){
          var param = {
            page:this.currentPage,
            pageSize:this.pageSize,
          };
          axios.get("/article/page",{params:param}).then((res)=>{
            if(res.data.status==="1"){
              this.tableData = res.data.content
            }
          })
        },
      }

    }
</script>

<style lang="less" scoped>
@import "../style/common.css";


.el-row {
  margin-bottom: 20px;
&:last-child {
   margin-bottom: 0;
 }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #f7f7f7;
}
.bg-purple {
  background: #f7f7f7;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
}
.row-bg {
  padding: 5px 0;
  background-color: #f9fafc;
}
  .foot{
    text-align: center;
  }
.bg{
  width: 100%;
  height: 100%;
  background: #f7f7f7;
}

</style>
