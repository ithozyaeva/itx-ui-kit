import { Popover as PopoverComponent, Typography, Button } from '@/components';

export default {
  title: 'Molecules/Popover',
  component: { PopoverComponent, Typography, Button },
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
        'right',
        'right-start',
        'right-end',
      ],
    },
    offset: {
      control: 'number',
    },
  },
  args: {
    placement: 'right',
    offset: 12,
  },
};

export const Popover = {
  render: (args: any) => ({
    components: {
      PopoverComponent,
      Button,
      Typography,
    },
    setup() {
      return { args };
    },
    template: `
    <div style = 'display: flex; justify-content: center; align-items: center; height: 100vh;'>
      <PopoverComponent v-bind="args">
        <template #trigger>
          <Button>Reference button</Button>
        </template>
        <template #content>

          <ul style="display: flex; flex-direction: column; gap: 12px; list-style: outside; margin-left: 20px">
            <li>
              <Typography variant="body-m" >Select #1</Typography>
            </li>

            <li >
              <Typography variant="body-m">Select #2</Typography>
            </li>
          </ul>
        </template>
      </PopoverComponent>
    </div>
    `,
  }),
};
