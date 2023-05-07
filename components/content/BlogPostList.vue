<template>
  <Transition name="list">
    <div v-if="show" class="grid gap-3 grid-cols-postList">
      <ContentList v-slot="{ list: postList }" path="/posts">
        <BlogPostListCard
          v-for="post of sortedDescendingPostListByFilename(postList)"
          :title="post.title"
          :key="post.title"
          :post="post"
        />
      </ContentList>
    </div>
  </Transition>
</template>

<script setup lang="ts">
type listItem = {
  _file: string
  _path: string
  title: string
  date: string
  path: string
  excerpt: string
  tags: string[]
}
const show = ref(false)
// sort post list desc by filename
function sortedDescendingPostListByFilename(list: any): listItem[] {
  return list.sort((a: any, b: any) => b._file.localeCompare(a._file))
}
onMounted(() => {
  show.value = !show.value
})
</script>

<style lang="css">
.list-enter-active,
.list-leave-active {
  transition: all 0.8s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(40px);
}
</style>
