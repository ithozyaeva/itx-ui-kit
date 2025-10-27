<script setup lang="ts">
  import { type Component } from 'vue';

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
    <slot />
  </component>
</template>

<style lang="scss" scoped>
  .button {
    padding: 11px 26px;
    border-radius: var(--button-border-radius);
    color: var(--green-black-700);
    transition: var(--default-transition);
    border: 4px solid transparent;
    box-sizing: border-box;
    cursor: pointer;

    &.filled {
      background-color: var(--green-700);

      &:not(.disabled) {
        &:hover {
          background-color: var(--white);
        }

        &:focus {
          outline: none;
          border-color: var(--white);
        }

        &:active {
          background-color: var(--grey);
          border-color: transparent;
        }
      }

      &.disabled {
        background-color: var(--green-black-400);
        color: var(--green-black-600);
        cursor: not-allowed;
      }
    }

    &.stroke {
      background-color: transparent;
      border: 2px solid var(--green-700);
      color: var(--green-700);

      &:not(.disabled) {
        &:hover {
          border-color: var(--white);
          color: var(--white);
        }

        &:focus {
          border-width: 4px;
          border-color: var(--white);
        }

        &:active {
          border-color: var(--grey);
          color: var(--white);
          border-color: var(--green-700);
        }
      }

      &.disabled {
        border-color: var(--green-black-400);
        color: var(--green-black-400);
        cursor: not-allowed;
      }
    }

    &.dark-filled {
      background-color: var(--green-black-700);
      color: var(--green-700);

      &:not(.disabled) {
        &:hover {
          background-color: var(--green-black-400);
        }

        &:focus {
          outline: none;
          border-color: var(--white);
        }

        &:active {
          background-color: var(--green-black-500);
          border-color: transparent;
        }
      }

      &.disabled {
        background-color: var(--green-black-600);
        color: var(--green-black-400);
        cursor: not-allowed;
      }
    }
  }
</style>
