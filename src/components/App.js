import React from "react";

import Todo from "./Todo";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    title: String,
    todos: [
      {
        id: 1,
        title: "Clean the Room",
        completed: false
      },

      {
        id: 2,
        title: "Play Cricket",
        completed: false
      },
      {
        id: 3,
        title: "Meditate",
        completed: false
      }
    ]
  };
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();


    var newtodo = {
      id: this.state.todos.length + 1,
      title: this.state.title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newtodo],title:"" });

  
  }

  delete = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  render() {
    var style = {
      textAlign: "center"
    };

    return (
      <div style={style}>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            className="form-control"
          />{" "}
          <button className="btn btn-primary"> Submit </button>
        </form>
        <h1> Todo App</h1>
        <Todo todos={this.state.todos} delete={this.delete} />
      </div>
    );
  }
}

export default App;
