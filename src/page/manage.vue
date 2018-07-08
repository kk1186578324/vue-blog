<template>

  <div class="fill">
    <head-top></head-top>
  <el-row>
    <el-col :span="4">
      <el-menu
        default-active="articleList"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        router
      >

        <el-menu-item index="articleList">
          <i class="el-icon-location"></i>
          <span>文章列表</span>
        </el-menu-item>
        <el-menu-item index="addArticle">
          <i class="el-icon-document"></i>
          <span>添加文章</span>
        </el-menu-item>
        <el-menu-item index="draft">
          <i class="el-icon-menu"></i>
          <span>草稿</span>
        </el-menu-item>

        <el-menu-item index="account">
          <i class="el-icon-setting"></i>
          <span>账户</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="20">
      <keep-alive>
      <router-view>123</router-view>
     </keep-alive>
    </el-col>
  </el-row>
  </div>



</template>

<script>
  import headTop from "@/components/headTop"
    export default {
        name: "manage",
      data(){
          return{

          }
      },
      components: {
        headTop
      },
      methods:{
        handleClose(){

        },
        handleOpen(){

        }
      }
    }
</script>

<style scoped>
.fill{
  width: 100%;
  height:100%;
}
</style>
