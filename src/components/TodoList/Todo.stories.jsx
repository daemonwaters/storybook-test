import Todo from "./Todo";

// const WithWrapper = (story) => (
//   <div style={{ background: "#333", color: "#fff", padding: "2rem" }}>
//     {story()}
//   </div>
// );

const MockedComponent = ({ children }) => (
  <div style={{ background: "#666", color: "#fff", padding: "2rem" }}>
    {children}
  </div>
);

export default {
  name: "Todo",
  component: Todo,
  decorators : [(story)=> <MockedComponent> {story()} </MockedComponent>]
};

export const Default = {
  args: {
    title: "Todo",
    id: 1,
  }
};

export const Number2 = {
  args: {
    ...Default.args,
    id: 2,
  },
};

export const Number3 = {
  args: {
    ...Default.args,
    id: 3,
  },
};
