<script setup lang="ts">
  import { type Component } from 'vue';

  type AsProp = keyof HTMLElementTagNameMap | Component;

  interface Props {
    as?: AsProp;
  }

  withDefaults(defineProps<Props>(), {
    as: 'span',
  });
</script>

<template>
  <component :is="as" class="label">
    <slot />
  </component>
</template>

<style lang="scss" scoped>
  .label {
    padding: 4px 12px;
    border-radius: var(--button-border-radius);
    color: var(--green-500);
    box-sizing: border-box;
    background-color: rgba(var(--green-500-rgb), 0.1);
  }
</style>
