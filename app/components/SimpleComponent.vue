<template>
    <h1>This is the Simple Component</h1>
    <p>{{ test }}</p>
</template>

<script setup>

import { useAppStore } from "../stores/app";

const appStore = useAppStore();

const { test } = appStore;
</script>