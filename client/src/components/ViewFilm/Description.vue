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
import Panel from '@/components/Panel'

export default {
  props: [
    'description'
  ],
  components: {
    Panel
  }
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
