<template>
  <div class="m-10 md:m-20 mt-24">
    <TheHero title="alles und nichts ueber alles und nichts." />
    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: "bg-primary",
  },
});
</script>
