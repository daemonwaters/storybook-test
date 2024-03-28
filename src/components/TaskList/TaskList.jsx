import React from "react";
import PropTypes from "prop-types";

import Task from "../Task/Task.jsx";
import { useDispatch, useSelector } from "react-redux";

export default function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => {
    const tasksInOrder = [
      ...state.taskbox.tasks.filter((t) => t.state === "TASK_PINNED"),
      ...state.taskbox.tasks.filter((t) => t.state !== "TASK_PINNED"),
    ];
    const filteredTasks = tasksInOrder.filter(
      (t) => t.state === "TASK_INBOX" || t.state === "TASK_PINNED"
    );
    return filteredTasks;
  });

  const { status } = useSelector((state) => state.taskbox);

  const pinTask = (value) => {
    // We're dispatching the Pinned event back to our store
    dispatch(updateTaskState({ id: value, newTaskState: "TASK_PINNED" }));
  };
  const archiveTask = (value) => {
    // We're dispatching the Archive event back to our store
    dispatch(updateTaskState({ id: value, newTaskState: "TASK_ARCHIVED" }));
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  if (status === "loading") {
    return (
      <div className="list-items" data-testid="loading" key={"loading"}>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }
  if (tasks.length === 0) {
    return (
      <div className="list-items" key={"empty"} data-testid="empty">
        <div className="wrapper-message">
          <span className="icon-check" />
          <p className="title-message">You have no tasks</p>
          <p className="subtitle-message">Sit back and relax</p>
        </div>
      </div>
    );
  }

  // const tasksInOrder = [
  //   ...tasks.filter((t) => t.state === "TASK_PINNED"),
  //   ...tasks.filter((t) => t.state !== "TASK_PINNED"),
  // ];
  return (
    <div className="list-items">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onPinTask={(task) => pinTask(task)}
          onArchiveTask={(task) => archiveTask(task)}
        />
      ))}
    </div>
  );
}

// TaskList.propTypes = {
//   loading: PropTypes.bool,
//   tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
//   onPinTask: PropTypes.func,
//   onArchiveTask: PropTypes.func,
// };

// TaskList.defaultProps = {
//   loading: false,
// };
