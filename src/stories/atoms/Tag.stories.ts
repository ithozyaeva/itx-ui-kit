import { Tag as TagComponent } from '@/components';

export default {
  title: 'Atoms/Tag',
  component: TagComponent,
  argTypes: {
    variant: { control: { type: 'select' }, options: ['active', 'default'] },
    as: { control: { type: 'text' } },
  },
  args: {
    as: 'button',
    variant: 'default',
  },
};

export const Tag = {
  render: (args: any) => ({
    components: { TagComponent },
    setup() {
      return { args };
    },
    template: '<TagComponent v-bind="args">Tag</TagComponent>',
  }),
};
