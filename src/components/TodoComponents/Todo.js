import React from "react";

const Todo = props => {
  const handleClick = e => {
    props.toggleFinished(props.task.id);
  };

  return (
    <div
      onClick={handleClick}
      className={`task${props.task.finished ? "finished" : ""}`}
    >
      <p>{props.task.taskName}</p>
    </div>
  );
};

export default Todo;
