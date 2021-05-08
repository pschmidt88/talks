<template>
  <div class="bg-white md:w-4/6 w-full mx-auto mt-4 rounded">
    <post v-for="(item, index) in items" :key="index" :post="item" />
  </div>
</template>

<script lang="ts">
import { useFetch, useRoute, defineComponent, ref } from '@nuxtjs/composition-api'
import Post from '~/components/Item.vue'
import { fetchFeed } from '~/server/api/feeds'
import { Item } from '~/server/api/items'

export default defineComponent({
  components: { Post },
  setup() {
    const items = ref<Item[]>([])
    const route = useRoute()

    useFetch(async () => {
      const { feed } = route.value.params
      items.value = await fetchFeed(feed)
    })

    return { items }
  }
})
</script>
