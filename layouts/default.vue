<script setup lang="ts">
import { css } from "@mekari/pixel3";
</script>

<template>
  <main :class="css({ p: '6', maxW: '800px', mx: 'auto' })">
    <slot />
  </main>
</template>
