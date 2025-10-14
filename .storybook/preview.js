/** @type { import('@storybook/vue3-vite').Preview } */
import '@/styles/index.ts'

const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    },

    // Установка темной темы по умолчанию
    themes: {
      default: 'dark',
    },

    // Расширение окна Storybook
    viewport: {
      viewports: {
        defaultViewport: 'responsive',
        responsive: {
          name: 'Responsive',
          styles: {
            width: '100%',
            height: '100%',
          },
        },
      },
    },
  },
};

export default preview;