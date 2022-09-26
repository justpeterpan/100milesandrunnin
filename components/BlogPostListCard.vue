<template>
  <NuxtLink v-if="post.title" :to="post._path" class="no-underline">
    <div
      class="h-80 bg-primary border-white border px-4 cursor-pointer flex flex-col justify-between w-full group text-white hover:drop-shadow-box duration-300 transition ease-in-out"
    >
      <div class="mt-4">
        <div class="font-thin font-mono" v-if="post.date">{{ post.date }}</div>
        <h2 class="mt-0 text-4xl font-light group-hover:underline">
          {{ post.title }}
        </h2>
      </div>
      <div class="justify-self-end place-self-end mb-2">
        <Icon
          name="ph:arrow-right-thin"
          class="group-hover:translate-x-1 duration-300 transition ease-in-out"
        />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  post: { title: string; date?: string; _path: string };
}>();
</script>
