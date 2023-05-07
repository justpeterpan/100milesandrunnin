<template>
  <iframe
    title="Spotify Playlist"
    style="border-radius: 4px; margin-top: 40px; margin-bottom: 40px"
    :src="playlistUrl"
    width="375"
    height="380"
    allowfullscreen="false"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  playlistId: string
}>()
const playlistUrl = computed(() => {
  return `https://open.spotify.com/embed/playlist/${props.playlistId}?utm_source=generator&theme=0`
})
</script>
