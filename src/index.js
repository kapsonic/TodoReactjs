import React from "react";
import { render } from "react-dom";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  constructor(props) {
    console.log("dafasdfadfasdfa");
    super(props);
    this.state = {
      todoList: [
        {
          title: "Buy vegies",
          status: "open"
        },
        {
          title: "Go to PTM",
          status: "open"
        },
        {
          title: "Get some cash from ATM",
          status: "closed"
        }
      ]
    };
  }

  handleAddItem = (e, title) => {
    console.log("Adding a todo item with title = ", title);
    this.setState({
      todoList: [...this.state.todoList, { title: title, status: "open" }]
    });
  };

  handleItemClick = (e, key) => {
    console.log(key);
    let todo = this.state.todoList[key];
    todo.status = todo.status == "closed" ? "open" : "closed";

    this.state.todoList.splice(key, 1, todo);
    this.setState({ todoList: this.state.todoList });
  };

  render() {
    return (
      <div>
        <AddTodo onAdd={this.handleAddItem} />
        <TodoList
          onItemToggle={this.handleItemClick}
          todoList={this.state.todoList}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
