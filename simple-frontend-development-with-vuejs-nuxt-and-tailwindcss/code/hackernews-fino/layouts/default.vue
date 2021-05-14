<template>
  <div class="bg-gray-100 min-h-screen">
    <header class="bg-yellow-300">
      <nav class="flex md:w-4/6 w-full py-4 px-8 mx-auto leading-8">
        <nuxt-link to="/">
          <Logo class="h-8 w-8 mr-6" />
        </nuxt-link>

        <nuxt-link
          v-for="link in headerLinks"
          :key="link.label"
          :to="link.url"
          class="mr-6"
        >
          {{ link.label }}
        </nuxt-link>
      </nav>
    </header>

    <div>
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      headerLinks: [
        { label: 'New', url: '/topstories' },
        { label: 'Newest', url: '/newstories' },
        { label: 'Ask', url: '/askstories' },
        { label: 'Show', url: '/showstories' },
        { label: 'Job', url: '/jobstories' },
      ],
    }
  },
})
</script>

