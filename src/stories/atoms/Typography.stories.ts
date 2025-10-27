import { Typography as TypographyComponent } from '@/components';

export default {
  components: { TypographyComponent },
  title: 'Atoms/Typography',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'price',
        'body-xl',
        'body-l',
        'body-m',
        'body-x',
        'body-xs',
        'title',
        'label',
        'button-text',
      ],
    },
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'p', 'span', 'label', 'div', 'title'],
    },
    text: { control: { type: 'text' } },
  },
  args: {
    as: 'p',
    variant: 'body-l',
    text: 'The quick brown fox jumps over the lazy dog.',
  },
};

export const Typography = {
  render: (args: any) => ({
    components: { TypographyComponent },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; color: var(--color-light-grey); border: 2px solid var(--color-green-black-400); background-color: var(--color-green-black-500); padding: 20px;" >
        <TypographyComponent variant="h1" as="h1" >Heading H1 — Unbounded 48px</TypographyComponent>
        <TypographyComponent variant="h2" as="h2" >Heading H2 — Unbounded 36px</TypographyComponent>
        <TypographyComponent variant="h3" as="h3">Heading H3 — Unbounded 24px</TypographyComponent>
        <TypographyComponent variant="h4" as="h4" >Heading H4 — Unbounded 20px</TypographyComponent>
        <TypographyComponent variant="price" as="p">Price — Unbounded 28px</TypographyComponent>
        <TypographyComponent variant="body-xl" as="p">Body XL — Inter 24px</TypographyComponent>
        <TypographyComponent variant="body-l" as="p">Body L — Inter 20px</TypographyComponent>
        <TypographyComponent variant="body-m" as="p">Body M — Inter 18px</TypographyComponent>
        <TypographyComponent variant="body-s" as="p">Body S — Inter 16px</TypographyComponent>
        <TypographyComponent variant="body-xs" as="p">Body Xs — Inter 14px</TypographyComponent>
        <TypographyComponent variant="title" as="p">Title — Unbounded 14px</TypographyComponent>
        <TypographyComponent variant="label" as="p">Label — Inter 14px</TypographyComponent>
        <TypographyComponent variant="button-text" as="span">Button Text — Unbounded 18px</TypographyComponent>
      </div>
      <hr style="margin-block: 30px"/>
      <div style="color: var(--color-light-grey); border: 2px solid var(--color-green-black-400); background-color: var(--color-green-black-500); padding: 26px; position: relative">
        <span style="position: absolute; top: -2px; left: 5px; color: var(--color-green-500)">Output:</span>
        <TypographyComponent v-bind="args"  >{{args.text}}</TypographyComponent>
      </div>
  `,
  }),
};
