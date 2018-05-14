import React from "react";
import "../css/app.css";

export default class TodoItem extends React.Component {
  render() {
    return (
      <li
        onClick={e => this.props.onItemToggle(e, this.props.id)}
        className={this.props.status === "open" ? "openTodo" : "closeTodo"}
      >
        {this.props.title}
      </li>
    );
  }
}
