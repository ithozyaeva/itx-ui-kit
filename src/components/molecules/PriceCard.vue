<script setup lang="ts">
  import { Button, Typography } from '@/components';

  interface Props {
    name: string;
    price: number | string;
    oldPrice?: number | string;
    features: string[];
    link: string;
    variant: 'default' | 'highlighted';
  }
  withDefaults(defineProps<Props>(), {
    variant: 'default',
  });
</script>

<template>
  <div class="price-card" :class="variant">
    <div class="content">
      <div class="header">
        <Typography variant="h3" class="name">{{ name }}</Typography>
        <div class="price-container">
          <div class="prices">
            <Typography variant="price" class="price">{{ price }}₽</Typography>
            <Typography v-if="oldPrice" variant="body-m" class="old-price">
              {{ oldPrice }}₽
            </Typography>
          </div>
          <Typography variant="label" class="period">в месяц</Typography>
        </div>
      </div>
      <ul class="features-container">
        <li v-for="(feature, index) in features" :key="index" class="feature">
          <Typography variant="body-s">{{ feature }}</Typography>
        </li>
      </ul>
    </div>
    <Button
      :variant="variant === 'highlighted' ? 'dark-filled' : 'filled'"
      as="a"
      :href="link"
      target="_blank"
    >
      Подписаться
    </Button>
  </div>
</template>

<style lang="scss" scoped>
  .price-card {
    box-sizing: border-box;
    padding: 28px 24px 24px;
    border-radius: var(--radius-card);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 26px;
    min-width: 325px;
    min-height: 360px;

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 24px;

      .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;

        .price-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          .prices {
            display: flex;
            gap: 6px;
            align-items: center;
            .old-price {
              text-decoration: line-through;
            }
          }
        }
      }

      .features-container {
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: center;
      }
    }

    &.default {
      background-color: var(--color-green-black-600);
      .name {
        color: var(--color-green-700);
      }
      .price {
        color: var(--color-white);
      }
      .old-price {
        color: var(--color-grey);
      }
      .period {
        color: var(--color-grey);
      }
      .feature {
        color: var(--color-white);
      }
    }
    &.highlighted {
      background-color: var(--color-green-700);
      .name {
        color: var(--color-green-black-700);
      }
      .price {
        color: var(--color-green-black-700);
      }
      .old-price {
        color: var(--color-green-500);
      }
      .period {
        color: var(--color-green-500);
      }
      .feature {
        color: var(--color-green-black-700);
      }
    }
  }
</style>
