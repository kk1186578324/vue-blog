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

  <div class="comment clearfloat">
    <div class="comment-head">
      <b>默认评论</b>
      <div class="btn">
      <el-button  size="mini" type="info" round>默认排序</el-button>
      <el-button  size="mini" type="info" round>时间排序</el-button>
      </div>
    </div>
    <div class="comment-man clearfloat">

      <div class="man-img">
        <p>
        <img src="../assets/img/man.png" alt="">
        </p>
      </div>
      <div class="comment-content">
        <p class="comment-time"><b>用户1</b><span>1小时前</span></p>

        <div class="fmt"><p>Astar Lab成立于2017年，旗下有两个子品牌：Astar Fund &amp; Astar IBD。Astar Lab的基金品牌Astar Fund 拥有严格筛选的一级市场投资策略和稳健的二级市场操作策略，是多个世界顶级区块链项目的基石私募投资机构，量化基金子品牌Bit Valley上一季度平均回报率超过100%。而作为区块链投行的服务商，Astar IBD可以承担财务顾问，行业顾问，保荐商，承销商等多个角色，目前已经累计在多个环节服务二十余家机构。更多了解或有合作意向，请关注公众号：Astar区块链实验室</p></div>

      </div>

    </div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>

    </el-form>


  </div>

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
          tags:[],
          form:{

          }

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
@import "../style/common.css";
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    min-height: 800px;
    margin-left: 20%;
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
   margin-left: 20%;

 }
  .comment{
    margin-left: 20%;
    width: 1000px;
    margin-top: 10px;
    /*position: absolute;*/
    /*left: 30%;*/
    /*width: 1000px;*/
    /*margin: 0 auto;*/
    /*bottom:50px;*/
  }
  .comment-head{
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }
  .comment-head .btn{
    float: right;
  }
  .man-img{

    float: left;

  }
  .fmt {
    line-height: 1.6;
    font-size: 14px;
    color: gray;
    word-wrap: break-word;
  }
.man-img p{
  width: 40px;
  height: 40px;
  border-radius: 20px;
  overflow: hidden;
}
  .comment-content{
    padding-left:50px ;
    /*float: left;*/
  }
  .man-img img{
    width: 40px;
  }

  .comment-time b{
    color: #3abcff;
    font-size: 14px;
    vertical-align: middle;
  }
.comment-time span{
  color: #ccc;
  font-size: 14px;
  margin-left: 10px;
  vertical-align: middle;
}


</style>
