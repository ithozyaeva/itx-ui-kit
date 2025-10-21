<script setup lang="ts">
  import { type Component } from 'vue';

  type TypographyVariant =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'price'
    | 'body-xl'
    | 'body-l'
    | 'body-m'
    | 'body-s'
    | 'body-xs'
    | 'title'
    | 'label'
    | 'button-text';

  type AsProp = keyof HTMLElementTagNameMap | Component;

  interface Props {
    as?: AsProp;
    variant?: TypographyVariant;
  }

  withDefaults(defineProps<Props>(), {
    as: 'p',
    variant: 'body-l',
  });
</script>

<template>
  <component :is="as" :class="[variant]">
    <slot />
  </component>
</template>
