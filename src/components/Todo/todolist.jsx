import React, { Component } from 'react';
import initialTodos from '../Todo/todos.json';
import TodoListItem from './todolistiem';

class TodoList extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    return (
      <>
            <TodoListItem
                todos={todos}
                onDeleteTodo={this.deleteTodo}
            />;
      </>
    );
  }
}

export default TodoList;
