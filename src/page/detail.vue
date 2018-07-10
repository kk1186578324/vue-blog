<template>
<div>
  <head-top></head-top>
  <el-card class="box-card">
    <div class="head-box">
    <h2>标题</h2>
    <b class="fa  fa-tags">标签</b>
    <span class="fa  fa-clock-o date-box" style="margin-left: 10px" >时间</span>

    </div>
    <div class="content">

      <p>11111</p>
    </div>

  </el-card>

</div>
</template>

<script>
  import headTop from "@/components/headTop"
    export default {
      data(){

      },
      components: {
        headTop
      },
    }
</script>

<style scoped>

  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    min-height: 800px;
    position: absolute;
    left: 50%;
    margin-left: -500px;
    width: 1000px;

  }
  .head-box{
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px dashed #eee;
  }
  .content{

  }

</style>
