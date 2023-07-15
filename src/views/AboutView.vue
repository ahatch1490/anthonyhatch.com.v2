<template>
      <div class="container border-2 mt-5 ">
        <h1>This is an about page</h1>
          <WorkHistory></WorkHistory>
      </div>
    <Footer></Footer>

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script  setup lang="ts">
import WorkHistory from "@/components/WorkHistory.vue";
</script>
