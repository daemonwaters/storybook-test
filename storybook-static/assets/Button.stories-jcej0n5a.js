import{j as g}from"./jsx-runtime-CKrituN3.js";import{B as s}from"./Button-SAEvpXBo.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";const{useArgs:p}=__STORYBOOK_MODULE_PREVIEW_API__,f={title:"components/Button",component:s,tags:["autodocs"],argTypes:{variant:{options:{Add:"add",Check:"check"}}}},r={args:{title:"Add",size:20},render:n=>{const[{variant:m},t]=p();function a(){t({...n,variant:20}),console.log("hello")}return g.jsx(s,{...n,onClick:a})},parameters:{backgrounds:{default:"dark"}}},e={args:{...r.args,title:"Check"},render:n=>{const[{variant:m},t]=p();function a(){t({...n,variant:20}),console.log("hello")}return g.jsx(s,{...n,onClick:a})}};var o,c,d;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    title: "Add",
    size: 20
  },
  render: args => {
    const [{
      variant
    }, updateArgs] = useArgs();
    function handleClick() {
      updateArgs({
        ...args,
        variant: 20
      });
      console.log("hello");
    }
    return <Button {...args} onClick={handleClick} />;
  },
  parameters: {
    backgrounds: {
      //   grid: {
      //     disable: true,
      //   },
      default: 'dark'
    }
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var i,l,u;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...Add.args,
    title: "Check"
  },
  render: args => {
    const [{
      variant
    }, updateArgs] = useArgs();
    function handleClick() {
      updateArgs({
        ...args,
        variant: 20
      });
      console.log("hello");
    }
    return <Button {...args} onClick={handleClick} />;
  }
}`,...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const v=["Add","Check"];export{r as Add,e as Check,v as __namedExportsOrder,f as default};
