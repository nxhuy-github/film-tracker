<template>
  <panel title="Starring">
    <textarea
      readonly
      v-model="starring"
    >
    </textarea>
  </panel>
</template>

<script>

export default {
  props: [
    'starring'
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
