import { styled } from '@stitches/react';

const WrapperTodoList = styled('div', {
  minHeight: '92px',
  height: '100%',
  marginBottom: '35px',
  textAlign: 'center',
});

const TodoList = styled('div', {
  borderBottom: '1px solid #87b6b8',
  padding: '20px',
  fontSize: '2rem',
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
});

const TodoItem = styled('span', {
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
});

const TodoListAction = styled('div', {});

export { WrapperTodoList, TodoList, TodoItem, TodoListAction };
