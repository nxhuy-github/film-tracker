<template>
  <panel title="Youtube Trailer Video">
    <youtube
    :video-id="youtubeId"
    :player-width="500"
    :player-height="330"
    >

    </youtube>
  </panel>
</template>

<script>

export default {
  props: [
    'youtubeId'
  ]
}
</script>

<style scoped>
</style>
