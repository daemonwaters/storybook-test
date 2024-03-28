import{j as e}from"./jsx-runtime-CKrituN3.js";import"./index-CBqU2yxZ.js";import{P as t}from"./index-D3ylJrlI.js";function i({task:{id:s,title:o,state:c},onArchiveTask:f,onPinTask:_}){return e.jsxs("div",{className:"list-item",children:[e.jsxs("label",{htmlFor:"checked","aria-label":`archiveTask-${s}`,className:"checkbox",children:[e.jsx("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${s}`,checked:c==="TASK_ARCHIVED"}),e.jsx("span",{className:"checkbox-custom",onClick:()=>f(s)})]}),e.jsx("label",{htmlFor:"title","aria-label":o,className:"title",children:e.jsx("input",{type:"text",value:o,readOnly:!0,name:"title",placeholder:"Input title"})}),c!=="TASK_ARCHIVED"&&e.jsx("button",{className:"pin-button",onClick:()=>_(s),id:`pinTask-${s}`,"aria-label":`pinTask-${s}`,children:e.jsx("span",{className:"icon-star"})},`pinTask-${s}`)]})}i.propTypes={task:t.shape({id:t.string.isRequired,title:t.string.isRequired,state:t.string.isRequired}),onArchiveTask:t.func,onPinTask:t.func};i.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{description:"",type:{name:"shape",value:{id:{name:"string",required:!0},title:{name:"string",required:!0},state:{name:"string",required:!0}}},required:!1},onArchiveTask:{description:"",type:{name:"func"},required:!1},onPinTask:{description:"",type:{name:"func"},required:!1}}};const x={title:"Task",component:i,tags:["autodocs"]},a={args:{task:{id:1,title:"Test Task",state:"TASK_INBOX"}}},r={args:{task:{...a.args.task,state:"TASK_PINNED"}}},n={args:{task:{...a.args.task,state:"TASK_ARCHIVED"}}};var l,p,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    task: {
      id: 1,
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,m,k;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...(k=(m=r.parameters)==null?void 0:m.docs)==null?void 0:k.source}}};var T,g,h;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const A=["Default","Pinned","Archived"],j=Object.freeze(Object.defineProperty({__proto__:null,Archived:n,Default:a,Pinned:r,__namedExportsOrder:A,default:x},Symbol.toStringTag,{value:"Module"}));export{a as D,i as T,j as a};
