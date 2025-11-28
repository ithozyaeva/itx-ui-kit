<script setup lang="ts">
  import { computed, onMounted, onUnmounted, ref, toRef } from 'vue';
  import { useFloating, offset, flip, shift, autoUpdate } from '@floating-ui/vue';
  import type { Placement } from '@floating-ui/vue';

  interface Props {
    placement?: Placement;
    offset?: number;
  }

  const props = withDefaults(defineProps<Props>(), {
    placement: 'bottom',
    offset: 8,
  });

  const isOpen = ref(false);
  const triggerRef = ref<HTMLElement | null>(null);
  const popoverRef = ref<HTMLElement | null>(null);

  const placement = toRef(props, 'placement');
  const offsetValue = toRef(props, 'offset');

  const middleware = computed(() => [offset(offsetValue.value), flip(), shift({ padding: 5 })]);

  const { floatingStyles } = useFloating(triggerRef, popoverRef, {
    placement,
    strategy: 'fixed',
    middleware,
    whileElementsMounted: autoUpdate,
  });

  function toggle() {
    isOpen.value = !isOpen.value;
  }

  function onClickOutside(event: MouseEvent) {
    if (
      popoverRef.value &&
      triggerRef.value &&
      !popoverRef.value.contains(event.target as Node) &&
      !triggerRef.value.contains(event.target as Node)
    ) {
      isOpen.value = false;
    }
  }

  function onEsc(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      isOpen.value = false;
    }
  }

  onMounted(() => {
    document.addEventListener('click', onClickOutside);
    document.addEventListener('keydown', onEsc);
  });

  onUnmounted(() => {
    document.removeEventListener('click', onClickOutside);
    document.removeEventListener('keydown', onEsc);
  });
</script>

<template>
  <div class="popover-container">
    <div ref="triggerRef" class="trigger" @click="toggle">
      <slot name="trigger" />
    </div>

    <Transition name="popover">
      <div v-if="isOpen" ref="popoverRef" class="popover" :style="floatingStyles">
        <slot name="content" />
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
  .popover-container {
    display: inline-block;
  }

  .trigger {
    cursor: pointer;
  }

  .popover {
    background: var(--color-green-black-500);
    border: 1px solid var(--color-green-black-400);
    border-radius: var(--radius-card);
    padding: 16px;
    z-index: var(--z-index-popover);
  }

  .popover-enter-active,
  .popover-leave-active {
    transition: opacity var(--transition-popover);
  }

  .popover-enter-from,
  .popover-leave-to {
    opacity: 0;
  }
</style>
