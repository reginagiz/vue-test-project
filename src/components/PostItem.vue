<template>
  <div class="flex items-center justify-between p-15 border-2 border-green mt-15" >
    <div>
      <div><strong>{{post.id}}</strong></div>
      <div><strong>Название поста:</strong>{{post.title}}</div>
      <div><strong>Описание поста:</strong>{{post.body}}</div>
    </div>
    <div class="flex" >
      <my-button @click="$router.push(`/posts/${post.id}`)" class="mr-10">Открыть</my-button>
      <my-button @click="$emit('remove',post)">Удалить</my-button>
    </div>
  </div>
</template>

<script>

export default {
  props:{
    post:{
      type:Object,
      required:true
    }
  }

}
</script>

<style scoped>
</style>