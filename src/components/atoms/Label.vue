<script setup lang="ts">
  import { type Component } from 'vue';
  import { Typography } from '@/components';

  type AsProp = keyof HTMLElementTagNameMap | Component;

  interface Props {
    as?: AsProp;
  }

  withDefaults(defineProps<Props>(), {
    as: 'span',
  });
</script>

<template>
  <component :is="as" class="label-ui label">
    <Typography variant="label" as="label">
      <slot />
    </Typography>
  </component>
</template>

<style lang="scss" scoped>
  .label-ui {
    padding: 4px 12px;
    border-radius: var(--radius-button);
    color: var(--color-green-500);
    box-sizing: border-box;
    background-color: rgba(var(--color-green-500-rgb), 0.1);
  }
</style>
