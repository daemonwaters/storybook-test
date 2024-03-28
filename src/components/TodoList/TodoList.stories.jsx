import TodoList from "./TodoList";
import * as TodoStories from './Todo.stories';
import { Provider } from "react-redux";
import { configureStore , createSlice } from "@reduxjs/toolkit";
// const WithWrapper = (story) => (
//   <div style={{ background: "#333", color: "#fff", padding: "2rem" }}>
//     {story()}
//   </div>
// );


const MockState = {
    status : 'idle',
    error : null , 
    todos : [
        {...TodoStories.Default.args , id : 1},
        {...TodoStories.Default.args , id : 2},
        {...TodoStories.Default.args , id : 3},
        {...TodoStories.Default.args , id : 4}
    ] ,
    icon : false
}


const MockStore = ({todoList, children})=>(
    <Provider 
    store={
        configureStore({
            reducer : {
                myTodos : createSlice({
                    name : 'todos',
                    initialState : todoList,
                    reducers : {
                        updateTodo : (state , action)=> {
                            const { id , newTodo } = action.payload
                            const wantedTodo = state.todos.findIndex(todo => todo.id === id)
                            if( wantedTodo >= 0){
                                state.todos[wantedTodo] = newTodo
                            }
                        }
                    }
                }).reducer
            }
        })
    }>
        {children}
    </Provider>
)



export default {
    title : "todolist",
    component : TodoList ,
    tags: ["autodocs"] 
}


export const Default = {
    decorators : [
        (story) => <MockStore todoList={MockState}> {story()} </MockStore>
    ]
}


export const WithIcon = {
    decorators : [
        (story)=> {
            const newTodoList = {...MockState , icon : true}
            return <MockStore todoList={newTodoList}> {story()} </MockStore>
        }
    ]
}


