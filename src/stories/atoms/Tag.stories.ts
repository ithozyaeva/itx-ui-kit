import { Tag as TagComponent } from '@/components';

export default {
  title: 'Atoms/Tag',
  component: TagComponent,
  argTypes: {
    variant: { control: { type: 'select' }, options: ['active', 'default'] },
    as: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
  },
  args: {
    as: 'button',
    variant: 'default',
    disabled: false,
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
