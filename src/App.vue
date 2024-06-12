<script>
import NavBar from '@/components/NavBar.vue'

export default {
  data() {
    return {
      
    }
  },
  components: {
    NavBar
  }
}

</script>

<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
</template>
