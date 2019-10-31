import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

import "./Todo.css";

const data = [
  {
    taskName: "Clean Room",
    id: 312,
    finished: false
  },
  {
    taskName: "Walk Dog",
    id: 321,
    finished: false
  },
  {
    taskName: "Go to Gym",
    id: 123,
    finished: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Todos: data
    };
  }

  toggleFinished = taskId => {
    console.log("hello");
    this.setState({
      Todos: this.state.Todos.map(task => {
        if (task.id === taskId) {
          return {
            ...task,
            finished: !task.finished
          };
        }
        return task;
      })
    });
  };

  addTodo = task => {
    this.setState({
      Todos: [
        ...this.state.Todos,
        {
          taskName: task,
          id: Date.now(),
          completed: false
        }
      ]
    });
  };

  clearFinished = e => {
    this.setState({
      Todos: this.state.Todos.filter(task => {
        return !task.finished;
      })
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="todo-cont">
        <h2 style={{ marginBottom: "5%", fontSize: "35px" }}>To-Do List</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          tasks={this.state.Todos}
          toggleFinished={this.toggleFinished}
          clearFinished={this.clearFinished}
        />
        {console.log(this.state.Todos)}
      </div>
    );
  }
}

export default App;
