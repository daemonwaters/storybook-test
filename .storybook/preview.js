import { initialize , mswLoader } from 'msw-storybook-addon'

initialize()

import "../src/index.css";
/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions : {argTypesRegex: "^on[A-Z].*"},
    //new
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [],
  loaders :[mswLoader]
  //new
};

export default preview;
