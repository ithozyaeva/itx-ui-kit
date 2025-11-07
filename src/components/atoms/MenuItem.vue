<script setup lang="ts">
  import { type Component, useAttrs } from 'vue';
  import { Typography } from '@/components';

  type MenuItemVariant = 'default' | 'active';
  type AsProp = keyof HTMLElementTagNameMap | Component;

  interface Props {
    as?: AsProp;
    variant?: MenuItemVariant;
  }

  withDefaults(defineProps<Props>(), {
    as: 'a',
    variant: 'default',
  });

  const attrs = useAttrs();
</script>

<template>
  <component :is="as" class="menu-item" :class="[variant]" v-bind="attrs">
    <Typography variant="body-m">
      <slot />
    </Typography>
  </component>
</template>

<style lang="scss" scoped>
  .menu-item {
    color: var(--color-light-grey);
    cursor: pointer;
    text-decoration: none;
    transition: var(--transition-default);
    display: inline-block;

    &.default {
      &:hover {
        color: var(--color-green-700);
      }

      &:focus {
        outline: none;
        color: var(--color-light-grey);
        border: 4px solid var(--color-white);
        border-radius: 8px;
      }

      &:active {
        color: var(--color-green-500);
      }
    }

    &.active {
      color: var(--color-green-700);
      text-decoration: underline;

      &:focus {
        outline: none;
        border: 4px solid var(--color-white);
        border-radius: 8px;
      }
    }
  }
</style>
