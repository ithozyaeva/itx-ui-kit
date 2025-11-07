import { MenuItem as MenuItemComponent } from '@/components';
import { ref } from 'vue';

export default {
  title: 'Atoms/MenuItem',
  component: MenuItemComponent,
  argTypes: {
    variant: { control: { type: 'select' }, options: ['active', 'default'] },
    as: { control: { type: 'text' } },
  },
  args: {
    as: 'a',
    variant: 'default',
  },
};

export const MenuItem = {
  render: (args: any) => ({
    components: { MenuItemComponent },
    setup() {
      const active = ref(false);

      const toggleActive = () => {
        active.value = !active.value;
      };

      return { args, active, toggleActive };
    },
    template: `<MenuItemComponent as="a" v-bind="args" href="#foo" :variant="active ? 'active' : 'default'" @click="toggleActive">Foo Item</MenuItemComponent>
      <p id="foo" style="margin-top: 30px; height: 100dvh; width: 30dvw; background-color: rgba(var(--color-green-500-rgb), 0.3)" >foo content</p>
      `,
  }),
};
