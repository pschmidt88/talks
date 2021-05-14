<template>

</template>
<script lang="ts">
import { useRouter, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const router = useRouter()
    router.replace('topstories')
  }
})
</script>
