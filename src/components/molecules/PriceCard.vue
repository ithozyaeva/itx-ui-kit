<script setup lang="ts">
  import { Button, Typography } from '@/components';
  import { computed } from 'vue';

  interface Props {
    name: string;
    price: number | string;
    oldPrice?: number | string;
    features: string[];
    link: string;
    variant: 'default' | 'highlighted';
  }

  const props = withDefaults(defineProps<Props>(), {
    variant: 'default',
  });

  const discount = computed(() => {
    if (!props.oldPrice) return null;

    const oldPrice = +props.oldPrice;
    const price = +props.price;

    if (oldPrice <= 0 || price >= oldPrice) return null;

    return Math.round(((oldPrice - price) * 100) / oldPrice);
  });
</script>

<template>
  <div class="price-card" :class="variant">
    <div class="content">
      <div class="header">
        <Typography variant="h3" as="h3" class="name">{{ name }}</Typography>
        <div class="price-container">
          <Typography v-if="discount" as="p" variant="title" class="discount">
            −{{ discount }}%
          </Typography>
        </div>
      </div>
      <ul class="features-container">
        <li v-for="(feature, index) in features" :key="index" class="feature">
          <Typography variant="body-s">{{ feature }}</Typography>
        </li>
      </ul>
    </div>
    <div class="footer">
      <div class="price-container">
        <div class="prices">
          <Typography v-if="oldPrice" variant="price" class="old-price">{{ oldPrice }}₽</Typography>
          <Typography variant="price" class="price">{{ price }}₽</Typography>
        </div>
        <Typography variant="label" class="period">в месяц</Typography>
      </div>
      <Button
        :variant="variant === 'highlighted' ? 'dark-filled' : 'filled'"
        as="a"
        :href="link"
        target="_blank"
        class="button"
      >
        Подписаться
      </Button>
    </div>
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
    gap: 32px;
    min-width: 300px;
    min-height: 360px;

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 24px;

      .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 4px;
      }

      .features-container {
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: start;
        list-style: disc outside;
        padding-left: 20px;
        text-align: start;
        max-width: 400px;
      }
    }

    .price-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      .prices {
        display: flex;
        gap: 6px;
        align-items: center;
        margin: 12px 0 8px;
        .old-price {
          text-decoration: line-through;
        }
      }
      .discount {
        border: 1px solid;
        border-radius: var(--radius-default);
        padding: 4px 8px;
      }
    }

    .footer {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;

      .button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
      }
    }

    &.default {
      background-color: var(--color-green-black-500);
      .name {
        color: var(--color-green-700);
      }
      .discount {
        color: var(--color-white);
        border-color: var(--color-white);
      }
      .price {
        color: var(--color-white);
      }
      .old-price {
        color: var(--color-white);
        opacity: 10%;
      }
      .period {
        color: var(--color-white);
        opacity: 40%;
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
      .discount {
        color: var(--color-green-black-700);
        border-color: var(--color-green-black-700);
      }
      .price {
        color: var(--color-green-black-700);
      }
      .old-price {
        color: var(--color-green-black-700);
        opacity: 30%;
      }
      .period {
        color: var(--color-green-black-700);
        opacity: 40%;
      }
      .feature {
        color: var(--color-green-black-700);
      }
    }
  }
</style>
