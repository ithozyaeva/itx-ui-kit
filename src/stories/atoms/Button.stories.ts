import { Button as ButtonComponent } from '@/components';

export default {
  title: 'Atoms/Button',
  component: ButtonComponent,
  argTypes: {
    variant: { control: { type: 'select' }, options: ['filled', 'stroke', 'dark-filled'] },
    as: { control: { type: 'text' } },
  },
  args: {
    as: 'button',
    variant: 'filled',
    disabled: false,
  },
};

// Базовая стори для документации
export const Button = {
  render: (args: any) => ({
    components: { ButtonComponent },
    setup() {
      return { args };
    },
    template: '<ButtonComponent v-bind="args">Button</ButtonComponent>',
  }),
};

