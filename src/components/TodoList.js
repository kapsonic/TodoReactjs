import React from "react";

import TodoItem from "./TodoItem";

export default class TodoList extends React.Component {
  renderTodos(todoList) {
    return todoList.map((todoItem, index) => (
      <TodoItem
        onItemToggle={this.props.onItemToggle}
        key={index}
        id={index}
        title={todoItem.title}
        status={todoItem.status}
      />
    ));
  }

  render() {
    return <ul>{this.renderTodos(this.props.todoList)}</ul>;
  }
}
