import React, { Component } from 'react';
import Box from '../profile/Box';
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

    const totalTodo = todos.length;
    const completeTodo = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    return (
      <>
            <Box
                bg="backGround"
                ml="2"
                mr="2"
                width="100%"
                display="flex"
            >
          <div>
            <p>Загальна кількість: {totalTodo} </p>
            <p>Виконані кількість: {completeTodo} </p>
            
          </div>
          <TodoListItem todos={todos} onDeleteTodo={this.deleteTodo} />
        </Box>
      </>
    );
  }
}

export default TodoList;
