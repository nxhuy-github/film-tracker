<template>
  <panel title="Description">
    <textarea
      readonly
      v-model="description"
    >
    </textarea>
  </panel>
</template>

<script>

export default {
  props: [
    'description'
  ]
}
</script>

<style scoped>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 200px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
</style>
