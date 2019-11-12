import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      taskName: ""
    };
  }

  handleChange = e => {
    this.setState({
      taskName: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.taskName);
    this.setState({
      taskName: ""
    });
  };

  render() {
    return (
      <form className="real-form" onSubmit={this.handleSubmit}>
        <input
          className="todo-form"
          value={this.state.taskName}
          type="text"
          name="task"
          onChange={this.handleChange}
        />

        <button className="add-btn" type="submit">
          Add Task
        </button>
      </form>
    );
  }
}

export default TodoForm;
