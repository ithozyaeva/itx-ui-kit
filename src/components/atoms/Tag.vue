<script setup lang="ts">
  import { type Component } from 'vue';
  import { Typography } from '@/components';

  type TagVariant = 'active' | 'default';

  type AsProp = keyof HTMLElementTagNameMap | Component;

  interface Props {
    as?: AsProp;
    variant?: TagVariant;
  }

  withDefaults(defineProps<Props>(), {
    as: 'button',
    variant: 'default',
  });
</script>

<template>
  <component :is="as" class="tag" :class="[variant]">
    <Typography variant="body-l">
      <slot />
    </Typography>
  </component>
</template>

<style lang="scss" scoped>
  .tag {
    padding: 8px 20px;
    border-radius: var(--radius-default);
    color: var(--color-green-700);
    transition: var(--transition-default);
    box-sizing: border-box;
    cursor: pointer;

    &.default {
      border: 1px solid var(--color-green-700);
      background-color: transparent;

      &:hover {
        border-color: var(--color-white);
        color: var(--color-white);
      }

      &:focus {
        outline: none;
        border: 4px solid var(--color-white);
      }

      &:active {
        border-color: var(--color-grey);
        color: var(--color-grey);
      }
    }

    &.active {
      background-color: var(--color-green-700);
      color: var(--color-green-black-700);
      border: 4px solid transparent;

      &:hover {
        background-color: var(--color-white);
      }

      &:focus {
        outline: none;
        border: 4px solid var(--color-white);
      }

      &:active {
        background-color: var(--color-grey);
        border-color: transparent;
      }
    }
  }
</style>
