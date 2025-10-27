<script setup lang="ts">
  import { type Component } from 'vue';
  import Typography from '@/components/atoms/Typography.vue';

  type ButtonVariant = 'filled' | 'stroke' | 'dark-filled';

  type AsProp = keyof HTMLElementTagNameMap | Component;

  interface Props {
    as?: AsProp;
    variant?: ButtonVariant;
    disabled?: boolean;
  }

  withDefaults(defineProps<Props>(), {
    as: 'button',
    variant: 'filled',
    disabled: false,
  });
</script>

<template>
  <component :is="as" :disabled="disabled" class="button" :class="[variant, { disabled }]">
    <Typography variant="button-text">
      <slot />
    </Typography>
  </component>
</template>

<style lang="scss" scoped>
  .button {
    padding: 11px 26px;
    border-radius: var(--radius-button);
    color: var(--color-green-black-700);
    transition: var(--transition-default);
    border: 4px solid transparent;
    box-sizing: border-box;
    cursor: pointer;
    text-align: center;
    align-content: center;

    &.filled {
      background-color: var(--color-green-700);

      &:not(.disabled) {
        &:hover {
          background-color: var(--color-white);
        }

        &:focus {
          outline: none;
          border-color: var(--color-white);
        }

        &:active {
          background-color: var(--color-grey);
          border-color: transparent;
        }
      }

      &.disabled {
        background-color: var(--color-green-black-400);
        color: var(--color-green-black-600);
        cursor: not-allowed;
      }
    }

    &.stroke {
      background-color: transparent;
      border: 2px solid var(--color-green-700);
      color: var(--color-green-700);

      &:not(.disabled) {
        &:hover {
          border-color: var(--color-white);
          color: var(--color-white);
        }

        &:focus {
          border-width: 4px;
          border-color: var(--color-white);
        }

        &:active {
          border-color: var(--color-grey);
          color: var(--color-grey);
        }
      }

      &.disabled {
        border-color: var(--color-green-black-400);
        color: var(--color-green-black-400);
        cursor: not-allowed;
      }
    }

    &.dark-filled {
      background-color: var(--color-green-black-700);
      color: var(--color-green-700);

      &:not(.disabled) {
        &:hover {
          background-color: var(--color-green-black-400);
        }

        &:focus {
          outline: none;
          border-color: var(--color-white);
        }

        &:active {
          background-color: var(--color-green-black-500);
          border-color: transparent;
        }
      }

      &.disabled {
        background-color: var(--color-green-black-600);
        color: var(--color-green-black-400);
        cursor: not-allowed;
      }
    }
  }
</style>
