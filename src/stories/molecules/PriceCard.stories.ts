import { PriceCard as PriceCardComponent } from '@/components';

export default {
  title: 'Molecules/PriceCard',
  component: PriceCardComponent,
  argTypes: {
    variant: { control: { type: 'select' }, options: ['default', 'highlighted'] },
    name: { control: { type: 'text' } },
    price: { control: { type: 'number' } },
    oldPrice: { control: { type: 'number' } },
    features: { control: { type: 'array' } },
    link: { control: { type: 'text' } },
  },
  args: {
    variant: 'default',
    name: 'Новичок',
    price: 1000,
    oldPrice: 2000,
    features: ['Доступ в 20 чатов сообщества', 'Участие в мероприятиях', 'Оффлайн-встречи'],
    link: 'https://boosty.to/jointime',
  },
};

export const PriceCard = {
  render: (args: any) => ({
    components: { PriceCardComponent },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; gap:12px">
        <PriceCardComponent v-bind="args" />
        <PriceCardComponent v-bind="args" variant="highlighted" />
      </div>
    `,
  }),
};
