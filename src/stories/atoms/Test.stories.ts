import Tag from '@/components/atoms/Tag.vue';

export default {
  title: 'Atoms/Tag/TestAttrs',
  component: Tag,
};

export const WithAttrs = () => ({
  components: { Tag },
  template: `
    <div>
      <Tag disabled aria-label="Test tag" type="button">Test Tag</Tag>
    </div>
  `,
});
