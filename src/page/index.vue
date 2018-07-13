<template>
  <!--http://www.skysun.name/-->
<div class="bg">
    <head-top></head-top>
    <el-row :gutter="20" style="margin-top:20px;">
      <el-col :span="4"><div class="grid-content bg-purple-light">
        <left-menu @initData = "initData"></left-menu>
      </div></el-col>
      <el-col :span="16">
        <div class="grid-content" style="height: 800px;">
        <article-component v-for="item in tableData"
           :title = item.title
           :tag = item.tag
           :date = item.date
           :id = item._id

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
            pageSize:5,
            status:'all'
          }
        },
      components:{
          headTop,
          leftMenu,
          articleComponent,
          footComponent
      },
      created(){
        this.initData("all");
      },
      methods:{
        //初始化列表
        initData(val){
          this.status=val
          axios.get("/article/list?status="+val).then((res)=>{
            if(res.data.status==="1"){
              this.total = res.data.content;
              this.initPage(val);
            }
          })

        },
        handleCurrentChange(val,item){
          this.currentPage = val;
          this.initPage(this.status)

        },
        //分页
        initPage(val){
          var param = {
            page:this.currentPage,
            pageSize:this.pageSize,
            tag:val
          };
          axios.get("/article/page",{params:param}).then((res)=>{
            if(res.data.status==="1"){
              this.tableData = res.data.content
              console.log(this.tableData)
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
