<script setup lang="ts">
  import { Tag } from '@/components';

  type TagName = string;

  interface Props {
    tags?: TagName[];
    modelValue?: TagName | TagName[];
    multiple?: boolean;
  }

  const emit = defineEmits<{
    (_event: 'update:modelValue', _value: TagName | TagName[]): void;
  }>();

  const props = withDefaults(defineProps<Props>(), {
    tags: () => ['Tag', 'Tag 1', 'Tag 2', 'Tag 3', 'Tag 4'],
    modelValue: undefined,
    multiple: false,
  });

  const handleClick = (tag: TagName) => {
    if (props.multiple) {
      const selected = Array.isArray(props.modelValue) ? [...props.modelValue] : [];
      const index = selected.indexOf(tag);
      if (index > -1) selected.splice(index, 1);
      else selected.push(tag);
      emit('update:modelValue', selected);
    } else {
      emit('update:modelValue', tag);
    }
  };

  const isActive = (tag: TagName) => {
    if (props.multiple && Array.isArray(props.modelValue)) {
      return props.modelValue.includes(tag);
    }
    return props.modelValue === tag;
  };
</script>

<template>
  <div class="tags-group">
    <Tag
      v-for="tag in props.tags"
      :key="tag"
      :variant="isActive(tag) ? 'active' : 'default'"
      @click="handleClick(tag)"
    >
      {{ tag }}
    </Tag>
  </div>
  <Tag aria></Tag>
  <Button></Button>
</template>

<style lang="scss" scoped>
  .tags-group {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
</style>
