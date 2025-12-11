<script setup lang="ts">
  import { type Component } from 'vue';
  import { Typography } from '@/components';

  type TagVariant = 'active' | 'default';

  type AsProp = keyof HTMLElementTagNameMap | Component;

  interface Props {
    as?: AsProp;
    variant?: TagVariant;
    disabled?: boolean;
  }

  withDefaults(defineProps<Props>(), {
    as: 'button',
    variant: 'default',
    disabled: false,
  });
</script>

<template>
  <component
    :is="as"
    class="tag"
    :class="[variant, { disabled: disabled }]"
    :disabled="disabled"
    :aria-disabled="disabled"
  >
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
    outline: 4px solid transparent;
    border: none;

    &.default {
      outline: 1px solid var(--color-green-700);
      background-color: transparent;

      &:hover:not(.disabled) {
        outline-color: var(--color-white);
        color: var(--color-white);
      }

      &:focus:not(.disabled) {
        outline: 4px solid var(--color-white);
      }

      &:active:not(.disabled) {
        outline-color: var(--color-grey);
        color: var(--color-grey);
      }
    }

    &.active {
      background-color: var(--color-green-700);
      color: var(--color-green-black-700);
      outline: none;

      &:hover:not(.disabled) {
        background-color: var(--color-white);
      }

      &:focus:not(.disabled) {
        outline: 4px solid var(--color-white);
      }

      &:active:not(.disabled) {
        background-color: var(--color-grey);
        border-color: transparent;
      }
    }

    &.disabled {
      opacity: 0.5;
      cursor: not-allowed;

      &.default {
        outline-color: var(--color-green-700);
        color: var(--color-green-700);
      }

      &.active {
        background-color: var(--color-green-700);
        color: var(--color-green-black-700);
      }
    }
  }
</style>
