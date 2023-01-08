import { styled } from '@stitches/react';

const WrapperTodoList = styled('div', {
  height: '100%',
  marginBottom: '35px',
});

const TodoList = styled('div', {
  borderBottom: '1px solid #87b6b8',
  padding: '20px',
  fontSize: '2rem',
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const TodoItem = styled('span', {
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
});

const TodoListAction = styled('div', {});

export { WrapperTodoList, TodoList, TodoItem, TodoListAction };
