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
            },
          },
          iconEntries.map(([name, Icon]) =>
            h('div', { style: { textAlign: 'center' } }, [
              h(Icon, { style: { width: '40px', height: '40px' } }),
              h('div', name),
            ]),
          ),
        );
    },
  });
};
