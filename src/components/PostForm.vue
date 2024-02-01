<template>
  <form @submit.prevent>
    <h4 style="margin-bottom: 15px">Создание поста</h4>
    <my-input v-model="post.title" type="text" placeholder="Название"/>
    <my-input v-model="post.body" type="text" placeholder="Описание"/>
    <my-button class="btn" @click="createPost" style="align-self: flex-end; margin-top: 15px">Создать пост</my-button>
  </form>
</template>

<script>

export default {
  data(){
    return{
      post:{
        title:'',
        body:''
      }
    }
  },
  methods:{
    createPost() {
      this.post.id = Date.now()
      this.$emit('create',this.post)
      this.post = {
        title:"",
        body:"",
      }
    },
  }

}
</script>

<style  scoped>
form{
  display: flex;
  flex-direction: column;
}
</style>