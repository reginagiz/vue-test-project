<template>
  <input :value="modelValue" @input="updateInput" type="text" class="border-2 border-green px-15 py-10 mb-15 w-full"/>
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
</style>
