export default {
  title: 'react-trailer',
  description: 'A video player component for React applications.',
  dest: '/docs',
  src: 'src',
  menu: ['Getting Started', 'Theming', 'API'],
  files: '**/*.mdx',
  port: 4509,
  // https://github.com/pedronauck/docz/issues/777#issuecomment-489947783
  filterComponents: files => files.filter(filepath => /w*.(js|jsx|ts|tsx)$/.test(filepath)),
};
