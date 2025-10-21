import { Accordion as AccordionComponent } from '@/components';

export default {
  title: 'Molecules/Accordion',
  component: AccordionComponent,
  argTypes: {
    title: { control: { type: 'text' } },
    content: { control: { type: 'text' } },
    defaultOpen: { control: { type: 'boolean' } },
  },
  args: {
    title: 'Как присоединиться к сообществу?',
    content:
      'Регулярно постим вакансии и рекомендуем рефералов в свои компании. Даём советы по резюме и прохождению собеседований. Регулярно постим вакансии и рекомендуем рефералов в свои компании.',
  },
};

export const Accordion = {
  render: (args: any) => ({
    components: { AccordionComponent },
    setup() {
      return { args };
    },
    template: `<AccordionComponent v-bind="args" class="width: 670px" style="width: 670px;"/>`,
  }),
};
