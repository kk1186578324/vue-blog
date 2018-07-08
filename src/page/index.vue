<template>
<div class="bg">
    <head-top></head-top>
    <el-row :gutter="20" style="margin-top:20px;">
      <el-col :span="4"><div class="grid-content bg-purple-light">
        <left-menu></left-menu>
      </div></el-col>
      <el-col :span="16">
        <div class="grid-content">
        <article-component></article-component>
        <article-component></article-component>
        <article-component></article-component>


      </div>
        <div class="foot">
          <foot-component></foot-component>
        </div>

      </el-col>
      <el-col :span="4">
        <div class="grid-content">
        <share-component></share-component>


      </div>
      </el-col>
    </el-row>


</div>
</template>

<script>
  import headTop from "@/components/headTop"
  import leftMenu from "./leftMenu"
  import articleComponent from "./articleComponent"
  import shareComponent from "./shareComponent"
  import footComponent from "@/components/footComponent"
    export default {
        data(){
          return{

          }
        },
      components:{
          headTop,
          leftMenu,
          articleComponent,
          shareComponent,
          footComponent

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
