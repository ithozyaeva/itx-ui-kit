<script setup lang="ts">
  import { Button, Label, Typography } from '@/components';
  import { nextTick, onMounted, ref } from 'vue';

  interface Props {
    avatar: string;
    name: string;
    position: string;
    labels?: string[];
    description?: string;
    link?: string;
  }
  const props = withDefaults(defineProps<Props>(), {
    company: '',
    labels: () => [],
    description: '',
    link: '#',
  });

  const containerRef = ref<HTMLElement | null>(null);
  const displayedLabels = ref<string[]>([]);
  const showEllipsis = ref(false);

  onMounted(async () => {
    if (!containerRef.value || props.labels.length === 0) return;

    displayedLabels.value = [...props.labels];
    showEllipsis.value = false;

    await nextTick();

    const firstLabel = containerRef.value.querySelector('.label') as HTMLElement;
    if (!firstLabel) return;
    const labelHeight = firstLabel.offsetHeight;

    const maxHeight = 2 * labelHeight + 8;

    let currentHeight = containerRef.value.offsetHeight;

    while (currentHeight > maxHeight && displayedLabels.value.length > 1) {
      displayedLabels.value.pop();
      showEllipsis.value = true;
      await nextTick();
      currentHeight = containerRef.value.offsetHeight;
    }
  });
</script>

<template>
  <div class="mentor-card">
    <div>
      <div class="top-section">
        <div class="avatar">
          <img :src="avatar" alt="Mentor avatar" fetchpriority="high" />
        </div>
        <div>
          <Typography variant="h4" class="name">{{ name }}</Typography>
          <Typography variant="title" class="position">{{ position }}</Typography>
        </div>
      </div>
      <div class="bottom-section">
        <div ref="containerRef" class="labels">
          <Label v-for="label in displayedLabels" :key="label">{{ label }}</Label>
          <Label v-if="showEllipsis">...</Label>
        </div>
        <Typography variant="body-xs" class="description">{{ description }}</Typography>
      </div>
    </div>
    <Button as="a" :href="link" variant="stroke" class="button">Подробнее</Button>
  </div>
</template>

<style lang="scss" scoped>
  .mentor-card {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--color-green-black-600);
    border-radius: var(--radius-card);
    padding: 20px 23px 25px 23px;
    gap: 25px;
    max-width: 440px;
    width: 100%;

    .top-section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 20px;
      margin-bottom: 20px;

      .avatar {
        width: 106px;
        height: 106px;
        flex-shrink: 0;
        border-radius: var(--radius-circle);
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .name {
        color: var(--color-green-700);
        margin-bottom: 4px;
      }

      .position {
        color: var(--color-white);
      }
    }

    .bottom-section {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .labels {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px 5px;
        max-width: 100%;
      }

      .description {
        text-align: center;
        color: var(--color-grey);
        overflow-wrap: break-word;
        word-break: break-word;
        white-space: normal;
      }
    }

    .button {
      width: 100%;
      min-height: 50px;
    }
  }
</style>
