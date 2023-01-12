import React from 'react';
import {
  TodoListUl,
  TodoListLi,
  TodoListP,
  TodoListButton,
} from './todolist.styled';

const TodoListItem = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <TodoListUl>
    {todos.map(({ id, text, completed }) => (
      <TodoListLi
        key={id}

        // className
      >
        <input
          type="checkbox"
          // className="TodoList__checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <TodoListP>{text}</TodoListP>
        <TodoListButton
          type="button"
          onClick={() => onDeleteTodo(id)}
        >
          Видалити
        </TodoListButton>
      </TodoListLi>
    ))}
  </TodoListUl>
);

export default TodoListItem;
