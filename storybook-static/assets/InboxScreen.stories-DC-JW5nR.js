import{j as a}from"./jsx-runtime-CKrituN3.js";import{r as T}from"./index-CBqU2yxZ.js";import{d as j,b as y,c as S,u as v,a as b,P as E}from"./redux-toolkit.modern-Cy1StSdx.js";import{T as I,M as B}from"./TaskList.stories-DymkPjb1.js";import{w as N,b as _,c as L,d}from"./index-lGsrZDLH.js";import{r as q}from"./index-CgOh7wkU.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Task.stories-BFszuSiu.js";import"./index-D3ylJrlI.js";const R={tasks:[],status:"idle",error:null},c=j("todos/fetchTodos",async()=>(await(await fetch("https://jsonplaceholder.typicode.com/todos?userId=1")).json()).map(r=>({id:`${r.id}`,title:`${r.title}`,state:r.completed?"TASK_ARCHIVED":"TASK_INBOX"}))),w=y({name:"taskbox",initialState:R,reducers:{updateTaskState:(s,{payload:e})=>{const{id:t,newTaskState:r}=e,i=s.tasks.findIndex(k=>k.id===t);i>=0&&(s.tasks[i].state=r)}},extraReducers:s=>{s.addCase(c.pending,e=>{e.status="loading",e.error=null,e.tasks=[]}).addCase(c.fulfilled,(e,t)=>{e.status="succeeded",e.error=null,e.tasks=t.payload}).addCase(c.rejected,e=>{e.status="failed",e.error="Something went wrong",e.tasks=[]})}});w.actions;const A=S({reducer:{taskbox:w.reducer}}),C=A;function f(){const s=v(),{error:e}=b(t=>t.taskbox);return T.useEffect(()=>{s(c())},[]),e?a.jsx("div",{className:"page lists-show",children:a.jsxs("div",{className:"wrapper-message",children:[a.jsx("span",{className:"icon-face-sad"}),a.jsx("p",{className:"title-message",children:"Oh no!"}),a.jsx("p",{className:"subtitle-message",children:"Something went wrong"})]})}):a.jsxs("div",{className:"page lists-show",children:[a.jsx("nav",{children:a.jsx("h1",{className:"title-page",children:"Taskbox"})}),a.jsx(I,{})]})}f.__docgenInfo={description:"",methods:[],displayName:"InboxScreen"};var g=q();const X={component:f,title:"InboxScreen",decorators:[s=>a.jsx(E,{store:C,children:s()})],tags:["autodocs"]},o={parameters:{msw:{handlers:[g.rest.get("https://jsonplaceholder.typicode.com/todos?userId=1",(s,e,t)=>e(t.json(B.tasks)))]}},play:async({canvasElement:s})=>{const e=N(s);await _(await e.findByTestId("loading")),await L(async()=>{await d.click(e.getByLabelText("pinTask-1")),await d.click(e.getByLabelText("pinTask-3"))})}},n={parameters:{msw:{handlers:[g.rest.get("https://jsonplaceholder.typicode.com/todos?userId=1",(s,e,t)=>e(t.status(403)))]}}};var l,p,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [rest.get("https://jsonplaceholder.typicode.com/todos?userId=1", (req, res, contex) => {
        return res(contex.json(MockedState.tasks));
      })]
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitForElementToBeRemoved(await canvas.findByTestId('loading'));
    await waitFor(async () => {
      await fireEvent.click(canvas.getByLabelText('pinTask-1'));
      await fireEvent.click(canvas.getByLabelText('pinTask-3'));
    });
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,h,x;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [rest.get("https://jsonplaceholder.typicode.com/todos?userId=1", (req, res, context) => {
        return res(context.status(403));
      })]
    }
  }
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const z=["Default","Error"];export{o as Default,n as Error,z as __namedExportsOrder,X as default};
