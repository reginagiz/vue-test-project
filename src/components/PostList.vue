<template>
<div v-if="posts.length>0">
  <h3>Список постов</h3>
  <transition-group name="posts-list" >
    <post-item  v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove',post)"/>
  </transition-group>
</div>
  <h2 v-else style="color: red">
    Список постов пуст
  </h2>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
export default {
  components:{
    PostItem
  },
  props:{
    posts:{
      type:Array,
      required:true
    }
  }
}
</script>

<style scoped>
.posts-list-item {
  display: inline-block;
  margin-right: 10px;
}
.posts-list-enter-active,
.posts-list-leave-active {
  transition: all 1s ease;
}
.posts-list-enter-from,
.posts-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
</style>