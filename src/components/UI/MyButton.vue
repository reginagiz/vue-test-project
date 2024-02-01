<template>
  <button class="px-15 py-2.5 bg-none border-2 border-green">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name:'my-button'
}
</script>

<style scoped>
.btn{
  padding: 10px 15px;
  background: none;
  border: 1px solid teal;
}

</style>