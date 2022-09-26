<template>
  <Transition name="post">
    <div v-if="!pending && data && show" class="text-white max-w-4xl">
      <h2 class="my-0 text-4xl font-light">{{ data.title }}</h2>
      <div v-if="data.date" class="font-thin font-mono">{{ data.date }}</div>
      <div class="text-xl">
        <slot />
      </div>
      <NuxtLink to="/">
        <Icon
          name="ph:arrow-left-thin"
          class="hover:-translate-x-1 duration-300 transition ease-in-out text-white"
        />
      </NuxtLink>
    </div>
  </Transition>
</template>

<script setup>
const { path } = useRoute();
const { data, pending } = await useAsyncData(`post-${path}`, () =>
  queryContent(`${path}`).findOne()
);

const show = ref(false);
onMounted(() => {
  show.value = !show.value;
});
</script>

<style lang="css">
.post-enter-active,
.post-leave-active {
  transition: all 0.8s ease;
}
.post-enter-from,
.post-leave-to {
  opacity: 0;
  transform: translateY(40px);
}
</style>
