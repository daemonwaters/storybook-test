import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

function TodoList() {
  const allTheTodos = useSelector((state) => state.myTodos);
  const { icon } = allTheTodos;
  

  const someIcon = (
    <span> well this is icon what did ya expect ? </span>
  )

  return (
    <div>
        {icon && someIcon}
      <ul>
        {allTheTodos.todos.map((todo) => {
          return <Todo title={todo.title} id={todo.id} />;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
