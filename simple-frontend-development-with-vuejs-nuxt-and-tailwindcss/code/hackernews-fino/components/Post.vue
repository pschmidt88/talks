<template>
  <div class="p-4 border-b leading-6 border-gray-100 flex items-center">
    <div class="text-xl font-bold mr-4 w-1/12 text-center">
      {{ post.points }}
    </div>

    <div class="flex flex-col w-11/12">
      <span>
        <a :href="post.url" target="_blank">{{ post.title }}</a>
        <span>({{ post.url | host }})</span>
      </span>
      <span class="text-sm text-gray-600">
        <span>
          by user
          <span class="underline">{{ post.user }}</span>
        </span>

        <span> {{ post.time | timeAgo }} ago </span>
        <span class="border-l pl-1"> {{ post.comments_count }} comments </span>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    props: [
        'post'
    ],
    setup() {
    },
})
</script>

