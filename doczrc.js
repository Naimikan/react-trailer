export default {
  title: 'react-trailer',
  description: 'A video player component for React applications.',
  dest: '/docs',
  src: 'site-partials',
  menu: ['Getting Started', 'Components', 'Theming', 'Examples'],
  files: '**/*.mdx',
  port: 4509,
  themeConfig: {
    showDarkModeSwitch: false,
  },
  // https://github.com/pedronauck/docz/issues/777#issuecomment-489947783
  filterComponents: files => files.filter(filepath => /w*.(js|jsx|ts|tsx)$/.test(filepath)),
};
