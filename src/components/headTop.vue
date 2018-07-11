<template>
    <div class="head">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"  router>
        <el-menu-item class="head-image"><img src="../assets/head.jpg" alt=""></el-menu-item>
        <el-menu-item>mybolg</el-menu-item>
        <el-menu-item index="index">博客</el-menu-item>
        <el-menu-item index="4">个人相册</el-menu-item>
        <el-menu-item index="5">留言</el-menu-item>
        <el-menu-item index="6">关于我</el-menu-item>
        <el-menu-item>
          <el-select v-model="form.region" placeholder="搜索项" size="small" style="width: 100px;">
            <el-option label="标题" value="标题"></el-option>
            <el-option label="标签" value="标签"></el-option>
          </el-select>
          <el-input v-model="form.value" size="small" style="width: 200px;"></el-input><el-button size="small" @click="onSubmit"  type="success">搜索</el-button>

        </el-menu-item>

      </el-menu>
    </div>
</template>

<script>
  import {mapGetters, mapMutations, mapActions} from 'vuex';
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

        },
        onSubmit() {

          console.log(this.form)

          var param = this.loginForm
          this.$route.push("/")
          axios.post("/user/login",param).then((res)=>{

            if(res.data.status==="1"){

              this.$router.push({path:"/manage"})

            }
          })

        }
      }
    }
</script>

<style scoped>
  .head-image img{
    width: 50px;
  }

</style>
