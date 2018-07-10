<template>
  <div style="height: 300px">
    <el-form ref="addForm" :model="addForm" :rules="addForm" label-width="80px">
      <el-form-item  prop="title">
      <el-input v-model="addForm.title"  placeholder="文章标题"></el-input>
    <el-tag
      :key="tag"
      v-for="tag in addForm.dynamicTags"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)">
      {{tag}}
    </el-tag>
    <el-input
      class="input-new-tag"
      v-if="addForm.inputVisible"
      v-model="addForm.inputValue"
      ref="saveTagInput"
      size="small"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    >
    </el-input>

    <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>

    <quill-editor class="fill"
    :options="addForm.editorOption"
    ref="QuillEditor"
    @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
    @change="onEditorChange($event)"
    @ready="onEditorReady($event)"
    >
    </quill-editor>
    </el-form-item>
      <el-form-item style="margin-top:100px;">
    <el-button type="primary" plain @click="onSubmit">发布文章</el-button>
    <el-button type="primary" plain>存为草稿</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
  import axios from 'axios'
    export default {
      data() {
        return {
          addForm:{
            title:'',
            inputVisible: false,
            dynamicTags: [],
            inputValue: '',
            editorOption:{},
            content:''
          },
          rules: {
            title: [
              {required: true, message: '请输入标题名称', trigger: 'blur'}
            ]
          }
        }
      },
      computed: {
        editor() {
          return this.$refs.QuillEditor.quill
        }
      },
      methods:{
        onEditorChange({editor, html, text}) {
          this.addForm.content=html;
          console.log(html)
        },
        onEditorFocus(e) {

          console.log(e)

        },
        onEditorReady(e) {
          console.log(e)

        },
        onEditorBlur(e) {
          console.log(e)

        },
        handleClose(tag) {
          this.addForm.dynamicTags.splice(this.addForm.dynamicTags.indexOf(tag), 1);
        },

        showInput() {
          this.addForm.inputVisible = true;
          this.$nextTick(()=> {
            this.$refs.saveTagInput.$refs.input.focus();
          });
        },

        handleInputConfirm() {
          let inputValue = this.addForm.inputValue;
          if (inputValue) {
            if(this.addForm.dynamicTags.indexOf(inputValue)==-1){
              this.addForm.dynamicTags.push(inputValue);
            }else {
              this.$message('标签不能重复！');

            }

          }
          this.addForm.inputVisible = false;
          this.addForm.inputValue = '';
        },
        onSubmit(){
          console.log(this.addForm)

          var param = {
            title :this.addForm.title,
            tag :this.addForm.dynamicTags,
            content:this.addForm.content.replace(/<\/?[^>]*>/g,'')
          }
          axios.post("/article/add",param).then((res)=>{

            if(res.data.status==="1"){
              this.$message('发布成功！');

            }
          })


        }
      }
    }
</script>

<style scoped>
  .fill{
    height:300px;
  }
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }

</style>
