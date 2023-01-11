import React from 'react';
import { TodoListUl, TodoListLi, TodoListP } from './todolist.styled';

const TodoListItem = ({ todos, onDeleteTodo }) => (
  <TodoListUl>
    {todos.map(({ id, text }) => (
      <TodoListLi key={id}>
        <TodoListP>{text}</TodoListP>
        <button onClick={() => onDeleteTodo(id)}>Видалити</button>
      </TodoListLi>
    ))}
  </TodoListUl>
);

export default TodoListItem;
