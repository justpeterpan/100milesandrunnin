<template>
  <main class="prose max-w-none">
    <ContentDoc />
  </main>
</template>

<style css>
.page-enter-from {
  opacity: 0%;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-in-out;
}

.page-leave-to {
  opacity: 0;
}
</style>
