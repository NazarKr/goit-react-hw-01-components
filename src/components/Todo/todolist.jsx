import React, { Component } from 'react';
import Box from '../profile/Box';
import initialTodos from '../Todo/todos.json';
import TodoListItem from './todolistiem';
import { TodoListDiv, TodoListTotalP } from './todolist.styled';


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
        <Box
            bg="backGround"
            ml="2"
            mr="2"
            width="100%"
            display="flex"
        >
        <TodoListDiv>
          <TodoListTotalP>Загальна кількість: {totalTodo} </TodoListTotalP>
          <TodoListTotalP>Виконані кількість: {completeTodo} </TodoListTotalP>
          <TodoListItem todos={todos} onDeleteTodo={this.deleteTodo} />
        </TodoListDiv>
      </Box>
    );
  }
}

export default TodoList;
