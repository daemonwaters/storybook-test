import{j as t}from"./jsx-runtime-CKrituN3.js";import"./index-CBqU2yxZ.js";import{a as j,P as y,c as k,b as M}from"./redux-toolkit.modern-Cy1StSdx.js";import{T as w,D as d}from"./Todo.stories-D1sF682y.js";import"./_commonjsHelpers-BosuxZz1.js";function f(){const o=j(s=>s.myTodos),{icon:e}=o,r=t.jsx("span",{children:" well this is icon what did ya expect ? "});return t.jsxs("div",{children:[e&&r,t.jsx("ul",{children:o.todos.map(s=>t.jsx(w,{title:s.title,id:s.id}))})]})}f.__docgenInfo={description:"",methods:[],displayName:"TodoList"};const S={status:"idle",error:null,todos:[{...d.args,id:1},{...d.args,id:2},{...d.args,id:3},{...d.args,id:4}],icon:!1},x=({todoList:o,children:e})=>t.jsx(y,{store:k({reducer:{myTodos:M({name:"todos",initialState:o,reducers:{updateTodo:(r,s)=>{const{id:h,newTodo:L}=s.payload,a=r.todos.findIndex(g=>g.id===h);a>=0&&(r.todos[a]=L)}}}).reducer}}),children:e}),P={title:"todolist",component:f,tags:["autodocs"]},c={decorators:[o=>t.jsxs(x,{todoList:S,children:[" ",o()," "]})]},n={decorators:[o=>{const e={...S,icon:!0};return t.jsxs(x,{todoList:e,children:[" ",o()," "]})}]};var i,l,u;c.parameters={...c.parameters,docs:{...(i=c.parameters)==null?void 0:i.docs,source:{originalSource:`{
  decorators: [story => <MockStore todoList={MockState}> {story()} </MockStore>]
}`,...(u=(l=c.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,p,T;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  decorators: [story => {
    const newTodoList = {
      ...MockState,
      icon: true
    };
    return <MockStore todoList={newTodoList}> {story()} </MockStore>;
  }]
}`,...(T=(p=n.parameters)==null?void 0:p.docs)==null?void 0:T.source}}};const W=["Default","WithIcon"];export{c as Default,n as WithIcon,W as __namedExportsOrder,P as default};
