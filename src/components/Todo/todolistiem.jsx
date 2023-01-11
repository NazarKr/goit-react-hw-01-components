import React from 'react';
import {
  TodoListUl,
  TodoListLi,
  TodoListP,
  TodoListButton,
} from './todolist.styled';

const TodoListItem = ({ todos, onDeleteTodo }) => (
  <TodoListUl>
    {todos.map(({ id, text }) => (
      <TodoListLi key={id}>
        <TodoListP>{text}</TodoListP>
        <TodoListButton onClick={() => onDeleteTodo(id)}>Видалити</TodoListButton>
      </TodoListLi>
    ))}
  </TodoListUl>
);

export default TodoListItem;
