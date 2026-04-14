<template>
  <div>
    <h1>{{ secret }}</h1>
  </div>
</template>

<script setup>
const secret = await $fetch('/api/secret').then(response => response.secret);
</script>