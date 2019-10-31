import React from "react";
import Todo from "./Todo";
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {
  return (
    <div className="list-cont">
      {props.tasks.map(task => (
        <Todo key={task.id} task={task} toggleFinished={props.toggleFinished} />
      ))}
      <button className="clear-btn" onClick={props.clearFinished}>
        Clear Tasks
      </button>
    </div>
  );
};

export default TodoList;
