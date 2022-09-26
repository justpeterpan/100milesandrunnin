<template>
  <Transition name="headline">
    <h1
      v-if="show"
      class="font-grotesk font-medium text-5xl max-w-[20ch] mb-10 text-white"
    >
      <NuxtLink to="/">
        {{ title }}
      </NuxtLink>
    </h1>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();

const show = ref(false);
onBeforeUnmount(() => {
  show.value = !show.value;
});
onMounted(() => {
  show.value = !show.value;
});
</script>

<style lang="css">
.headline-enter-active,
.headline-leave-active {
  transition: all 0.8s ease;
}
.headline-enter-from,
.headline-leave-to {
  opacity: 0;
  transform: translateY(-40px);
}
</style>
