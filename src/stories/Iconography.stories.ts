import { defineComponent, h } from 'vue';
import * as Icons from '@/assets/icons';

export default {
  title: 'Iconography',
};

export const Iconography = () => {
  const iconEntries = Object.entries(Icons);

  return defineComponent({
    setup() {
      return () =>
        h(
          'div',
          {
            style: {
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, 100px)',
              gap: '20px',
              justifyItems: 'center',
            },
          },
          iconEntries.map(([name, Icon]) =>
            h('div', { style: { textAlign: 'center' } }, [
              h(Icon, { style: { maxWidth: '40px', maxHeight: '40px' } }),
              h('div', name),
            ]),
          ),
        );
    },
  });
};
