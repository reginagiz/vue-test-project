<template>
  <div class="h-70 bg-gray drop-shadow-lg flex justify-between py-10 px-40 items-center">
    <h1 @click="$router.push('/')" class="font-bold ">Vue 3</h1>
    <div>
      <my-button @click="$router.push('/posts')" class="mr-10">Посты</my-button>
      <my-button @click="$router.push('/about')" >О сайте</my-button>
    </div>
  </div>
</template>

<script>

import router from "@/router/router";

export default {
  methods: {
    router() {
      return router
    }
  }

}
</script>

<style  scoped>
</style>