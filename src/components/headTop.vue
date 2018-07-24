<template>
    <div class="head">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"  router>
        <el-menu-item class="head-image"><img src="../assets/img/head.jpg" alt=""></el-menu-item>
        <el-menu-item>mybolg</el-menu-item>
        <el-menu-item index="index">博客</el-menu-item>
        <el-menu-item index="4">个人相册</el-menu-item>
        <el-menu-item index="5">留言</el-menu-item>
        <el-menu-item index="6">关于我</el-menu-item>
        <el-menu-item>
          <el-select v-model="form.key" placeholder="搜索项" size="small" style="width: 100px;">
            <el-option label="标题" value="标题"></el-option>
            <el-option label="标签" value="标签"></el-option>
          </el-select>
          <el-input v-model="form.value" size="small" style="width: 200px;"></el-input>
          <el-button size="small" @click="onSubmit()"  type="success">搜索</el-button>

        </el-menu-item>

      </el-menu>


    </div>
</template>

<script>
  import {mapMutations, mapActions} from 'vuex';
  // import VueCropper from 'vue-cropper';
    export default {
      data() {
        return {
          crap: false,
          previews: {},
          activeIndex:'index',
          form:{
            key:"",
            value:""
          },


        }
      },
      components:{
        // VueCropper
      },
      methods: {

          ...mapMutations([
            'add',
            'reduce'
          ]),
          ...mapActions(['addAction','reduceAction']),

        handleSelect(key, keyPath) {

        },
        onSubmit() {

        }
      },

    }
</script>

<style scoped>
  .head-image img{
    width: 50px;
  }

</style>
