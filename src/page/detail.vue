<template>
<div>
  <head-top></head-top>
  <el-card class="box-card">
    <div class="head-box">
    <h2>{{tableData.title}}</h2>
    <b class="fa  fa-tags">{{tags.join(',')}}</b>
    <span class="fa  fa-clock-o date-box" style="margin-left: 10px" >{{tableData.date}}</span>

    </div>
    <div class="content">

      <p v-html="tableData.content"></p>
    </div>

  </el-card>
  <div class="foot">
  <foot-component></foot-component>
  </div>

</div>
</template>

<script>
  import axios from 'axios'
  import headTop from "@/components/headTop"
  import footComponent from "@/components/footComponent"
    export default {
      data(){
        return{

          tableData:{},
          tags:[]

        }

      },
      components: {
        headTop,
        footComponent
      },
      created(){

        this.initGetData()

      },
      methods:{
        initGetData(){
          var id = this.$route.query.id
          axios.get("/article/detail?id="+id).then((res)=>{
            if(res.data.status==="1"){
              this.tableData = res.data.content
              this.tags = this.tableData.tag
            }
          })



        }
      }
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
    border-bottom: 1px dashed #ccc;
  }
  .content{

  }
 .foot{
   position: absolute;
   left: 30%;
   bottom:0;
 }
</style>
