// @ts-check
import * as NextImage from 'next/image';
import '../styles/globals.css';

const OriginalNextImage = NextImage.default;

// eslint-disable-next-line no-import-assign
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
