<template>
  <span class="x-cmt"><slot /></span>
</template>

<script setup lang="ts">
// Custom comment element styled like C comments /* ... */
</script>

<style scoped>
.x-cmt {
  opacity: 0.7;
  font-size: 0.8em;
  padding: 0.2em;
}
</style>
