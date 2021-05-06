<template>
  <div class="bg-gray-100 h-screen">
    <header class="bg-yellow-300">
      <nav role="navigation" class="flex py-4 px-8 md:w-4/6 w-full mx-auto leading-6">
        <nuxt-link to="/" exact class="mr-4">
          <fino-logo class="w-8 mr-6" />
        </nuxt-link>

        <nuxt-link class="md:mr-6 mr-4" 
          v-for="link in headerLinks" 
          :key="link.label" 
          :to="link.link">
          {{ link.label }}
        </nuxt-link>

      </nav>
    </header>

    <main>
      <Nuxt role="main"/>
    </main>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

import FinoLogo from '~/components/FinoLogo.vue'

export default defineComponent({
  components: { FinoLogo },
  setup() {
    const headerLinks = [
      { link: "/news", label: "News" },
      { link: "/newest", label: "Newest" },
      { link: "/ask", label: "Ask" },
      { link: "/show", label: "Show" },
      { link: "/jobs", label: "Jobs" },
    ]

    return { headerLinks }
  },
})
</script>

