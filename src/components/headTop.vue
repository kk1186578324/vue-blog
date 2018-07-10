<template>
    <div class="head">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
        <el-menu-item  index="1" class="head-image"><img src="../assets/head.jpg" alt=""></el-menu-item>
        <el-menu-item index="2">mybolg</el-menu-item>
        <el-menu-item index="index">博客</el-menu-item>
        <el-menu-item index="4">个人相册</el-menu-item>
        <el-menu-item index="5">留言</el-menu-item>
        <el-menu-item index="6">关于我</el-menu-item>
        <el-menu-item index="7">

          <el-select v-model="form.region" placeholder="搜索项" size="small" style="width: 100px;">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-input v-model="form.value" size="small" style="width: 200px;"></el-input><el-button size="small" @click.prevent="removeDomain(domain)"  type="success">搜索</el-button>

        </el-menu-item>

      </el-menu>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          activeIndex: '1',
          activeIndex2: '1',
          form:{
            region:"",
            value:""
          }
        }
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
        onSubmit() {
          console.log('submit!');
        }
      }
    }
</script>

<style scoped>
  .head-image img{
    width: 50px;
  }

</style>
