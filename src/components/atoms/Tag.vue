<script setup lang="ts">
  import { type Component } from 'vue';

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
    <slot />
  </component>
</template>

<style lang="scss" scoped>
  .tag {
    padding: 8px 20px;
    border-radius: var(--default-border-radius);
    color: var(--green-700);
    transition: var(--default-transition);
    box-sizing: border-box;
    cursor: pointer;

    &.default {
      border: 1px solid var(--green-700);
      background-color: transparent;

      &:hover {
        border-color: var(--white);
        color: var(--white);
      }

      &:focus {
        outline: none;
        border: 4px solid var(--white);
      }

      &:active {
        border-color: var(--grey);
        color: var(--grey);
      }
    }

    &.active {
      background-color: var(--green-700);
      color: var(--green-black-700);
      border: 4px solid transparent;

      &:hover {
        background-color: var(--white);
      }

      &:focus {
        outline: none;
        border: 4px solid var(--white);
      }

      &:active {
        background-color: var(--grey);
        border-color: transparent;
      }
    }
  }
</style>
