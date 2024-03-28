import{j as s}from"./jsx-runtime-CKrituN3.js";import"./index-CBqU2yxZ.js";import{T as E,D as i}from"./Task.stories-BFszuSiu.js";import{u as A,a as T,P as L,c as K,b as w}from"./redux-toolkit.modern-Cy1StSdx.js";function v(){const t=A(),o=T(e=>[...e.taskbox.tasks.filter(n=>n.state==="TASK_PINNED"),...e.taskbox.tasks.filter(n=>n.state!=="TASK_PINNED")].filter(n=>n.state==="TASK_INBOX"||n.state==="TASK_PINNED")),{status:m}=T(e=>e.taskbox),x=e=>{t(updateTaskState({id:e,newTaskState:"TASK_PINNED"}))},S=e=>{t(updateTaskState({id:e,newTaskState:"TASK_ARCHIVED"}))},a=s.jsxs("div",{className:"loading-item",children:[s.jsx("span",{className:"glow-checkbox"}),s.jsxs("span",{className:"glow-text",children:[s.jsx("span",{children:"Loading"})," ",s.jsx("span",{children:"cool"})," ",s.jsx("span",{children:"state"})]})]});return m==="loading"?s.jsxs("div",{className:"list-items","data-testid":"loading",children:[a,a,a,a,a,a]},"loading"):o.length===0?s.jsx("div",{className:"list-items","data-testid":"empty",children:s.jsxs("div",{className:"wrapper-message",children:[s.jsx("span",{className:"icon-check"}),s.jsx("p",{className:"title-message",children:"You have no tasks"}),s.jsx("p",{className:"subtitle-message",children:"Sit back and relax"})]})},"empty"):s.jsx("div",{className:"list-items",children:o.map(e=>s.jsx(E,{task:e,onPinTask:r=>x(r),onArchiveTask:r=>S(r)},e.id))})}v.__docgenInfo={description:"",methods:[],displayName:"TaskList"};const c={tasks:[{...i.args.task,id:"1",title:"Task 1"},{...i.args.task,id:"2",title:"Task 2"},{...i.args.task,id:"3",title:"Task 3"},{...i.args.task,id:"4",title:"Task 4"},{...i.args.task,id:"5",title:"Task 5"},{...i.args.task,id:"6",title:"Task 6"}],status:"idle",error:null},u=({taskboxState:t,children:o})=>s.jsx(L,{store:K({reducer:{taskbox:w({name:"taskbox",initialState:t,reducers:{updateTaskState:(m,x)=>{const{id:S,newTaskState:a}=x.payload,e=m.tasks.findIndex(r=>r.id===S);e>=0&&(m.tasks[e].state=a)}}}).reducer}}),children:o}),O={component:v,title:"TaskList",decorators:[t=>s.jsx("div",{style:{padding:"3rem"},children:t()})],tags:["autodocs"],excludeStories:/.*MockedState$/},d={decorators:[t=>s.jsx(u,{taskboxState:c,children:t()})]},k={decorators:[t=>{const o=[...c.tasks.slice(0,5),{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}];return s.jsx(u,{taskboxState:{...c,tasks:o},children:t()})}]},l={decorators:[t=>s.jsx(u,{taskboxState:{...c,status:"loading"},children:t()})]},p={decorators:[t=>s.jsx(u,{taskboxState:{...c,tasks:[]},children:t()})]};var g,h,j;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  decorators: [story => <Mockstore taskboxState={MockedState}>{story()}</Mockstore>]
}`,...(j=(h=d.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var N,f,b;k.parameters={...k.parameters,docs:{...(N=k.parameters)==null?void 0:N.docs,source:{originalSource:`{
  decorators: [story => {
    const pinnedtasks = [...MockedState.tasks.slice(0, 5), {
      id: '6',
      title: 'Task 6 (pinned)',
      state: 'TASK_PINNED'
    }];
    return <Mockstore taskboxState={{
      ...MockedState,
      tasks: pinnedtasks
    }}>
          {story()}
        </Mockstore>;
  }]
}`,...(b=(f=k.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var M,_,y;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  decorators: [story => <Mockstore taskboxState={{
    ...MockedState,
    status: 'loading'
  }}>
        {story()}
      </Mockstore>]
}`,...(y=(_=l.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var D,I,P;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  decorators: [story => <Mockstore taskboxState={{
    ...MockedState,
    tasks: []
  }}>
        {story()}
      </Mockstore>]
}`,...(P=(I=p.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};const R=["MockedState","Default","WithPinnedTasks","Loading","Empty"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:d,Empty:p,Loading:l,MockedState:c,WithPinnedTasks:k,__namedExportsOrder:R,default:O},Symbol.toStringTag,{value:"Module"}));export{c as M,v as T,H as a};
