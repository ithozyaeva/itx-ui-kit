import { Label as LabelComponent } from '@/components';

export default {
  title: 'Atoms/Label',
  component: LabelComponent,
  argTypes: {
    as: { control: { type: 'text' } },
  },
  args: {
    as: 'span',
  },
};

export const Label = {
  render: (args: any) => ({
    components: { LabelComponent },
    setup() {
      return { args };
    },
    template: '<LabelComponent v-bind="args">Label</LabelComponent>',
  }),
};

