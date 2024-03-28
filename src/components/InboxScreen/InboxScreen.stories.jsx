import InboxScreen from "./InboxScreen";
import store from "../../lib/store";
import { Provider } from "react-redux";
import { fireEvent , waitFor , within , waitForElementToBeRemoved  } from '@storybook/test'

import { rest } from "msw";
import { MockedState } from "../TaskList/TaskList.stories";

// export default {
//   component: InboxScreen,
//   title: "InboxScreen",
//   decorators: [(story) => <Provider store={store}> {story()} </Provider>],
//   tags: ["autodocs"],
// };

export default {
  component: InboxScreen,
  title: "InboxScreen",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {
  parameters: {
    msw: {
      handlers: [
        rest.get(
          "https://jsonplaceholder.typicode.com/todos?userId=1",
          (req, res, contex) => {
            return res(contex.json(MockedState.tasks));
          }
        ),
      ],
    },
  },

  play : async ({canvasElement}) =>{
    const canvas = within(canvasElement)
    await waitForElementToBeRemoved(await canvas.findByTestId('loading'));

    await waitFor( async ()=>{
      await fireEvent.click(canvas.getByLabelText('pinTask-1'));
      await fireEvent.click(canvas.getByLabelText('pinTask-3'));
    })
  }

};
export const Error = {
  parameters: {
    msw: {
      handlers: [
        rest.get(
          "https://jsonplaceholder.typicode.com/todos?userId=1",
          (req, res, context) => {
            return res(context.status(403));
          }
        ),
      ],
    },
  },
};

// export const Default = {
//   parameters: {
//     msw: {
//       handlers: [
//         rest.get(
//           "https://jsonplaceholder.typicode.com/todos?userId=1",
//           (req, res, ctx) => {
//             return res(ctx.json(MockedState.tasks));
//           }
//         ),
//       ],
//     },
//   },
// };
// export const Error = {
//   parameters: {
//     msw: {
//       handlers: [
//         rest.get(
//           "https://jsonplaceholder.typicode.com/todos?userId=1",
//           (req, res, ctx) => {
//             return res(ctx.status(403));
//           }
//         ),
//       ],
//     },
//   },
// };
