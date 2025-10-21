<script setup lang="ts">
  import { Typography } from '@/components';
  import { PlusIcon, CloseIcon } from '@/assets/icons';
  import { ref } from 'vue';

  interface Props {
    title: string;
    content?: string;
    defaultOpen?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    defaultOpen: false,
  });

  const isOpen = ref(props.defaultOpen);

  const toggle = () => {
    isOpen.value = !isOpen.value;
  };
</script>

<template>
  <div class="accordion" :class="{ open: isOpen }" @click="toggle">
    <div class="accordion-header">
      <Typography variant="h4" as="h4" class="accordion-title">
        {{ title }}
      </Typography>

      <div class="accordion-icon">
        <PlusIcon v-if="!isOpen" />
        <CloseIcon v-else />
      </div>
    </div>
    <transition name="accordion">
      <div v-show="isOpen" class="accordion-content">
        <Typography variant="body-l">
          <slot>{{ content }}</slot>
        </Typography>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
  .accordion {
    box-sizing: border-box;
    padding: 16px 24px;
    background-color: var(--color-green-black-600);
    border-radius: var(--radius-accordion);
    cursor: pointer;
    transition: var(--transition-default);

    &:hover {
      background-color: var(--color-green-black-500);
      .accordion-icon {
        background-color: var(--color-green-black-400);
      }
    }

    .accordion-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      overflow-wrap: break-word;
      word-break: break-word;
      white-space: normal;
      .accordion-title {
        color: var(--color-green-700);
        transition: color 0.2s ease;
      }
      .accordion-icon {
        flex-shrink: 0;
        transition: color 0.2s ease;
        width: 40px;
        height: 40px;
        border-radius: var(--radius-circle);
        .svg {
          width: 100%;
          height: 100%;
        }
      }
    }
    .accordion-content {
      color: var(--color-light-grey);
    }
  }

  .accordion-enter-active,
  .accordion-leave-active {
    transition: all 0.25s ease;
  }
  .accordion-enter-from,
  .accordion-leave-to {
    opacity: 0;
    max-height: 0;
  }
  .accordion-enter-to,
  .accordion-leave-from {
    opacity: 1;
    max-height: 500px;
  }
</style>
