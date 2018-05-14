import React from "react";

export default class AddTodo extends React.Component {
  handleAdd = e => {
    e.preventDefault();
    console.log("Adding a todo item");
    this.props.onAdd(e, this.input.value);
    this.input.value = "";
  };

  render() {
    return (
      <div>
        <form name="addTodo" onSubmit={this.handleAdd}>
          <input
            type="text"
            ref={node => (this.input = node)}
            name="todoTitle"
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}
