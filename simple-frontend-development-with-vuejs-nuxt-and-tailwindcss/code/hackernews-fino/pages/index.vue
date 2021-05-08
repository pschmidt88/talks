<template>
  <div class="bg-white md:w-4/6 w-full mx-auto mt-4 rounded">
    <post v-for="(item, index) in items" :key="index" :post="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import Post from '~/components/Post.vue'
import { fetchFeed } from '~/server/api/feeds'
import { Item } from '~/server/api/items'

export default defineComponent({
  components: { Post },
  async asyncData() {
    const items: Item[] = await fetchFeed("topstories")
    return { items }
  }
})
</script>
