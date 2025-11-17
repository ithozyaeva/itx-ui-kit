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
    | 'button-text'
    | 'name-text'
    | 'date';

  type AsProp = keyof HTMLElementTagNameMap | Component;

  interface Props {
    as?: AsProp;
    variant?: TypographyVariant;
    typographyType?: 'main' | 'text';
  }

  withDefaults(defineProps<Props>(), {
    as: 'p',
    variant: 'body-l',
    typographyType: 'main',
  });
</script>

<template>
  <component :is="as" :class="[variant]" :data-typography="typographyType">
    <slot />
  </component>
</template>
