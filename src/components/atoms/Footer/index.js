import { styled } from '@stitches/react';
import React from 'react';
import { useTodoContext } from '../../../hooks';

const Footer = () => {
  const { state: todos } = useTodoContext();

  const totalLeftTodos = todos?.filter((todo) => !todo.isCompleted).length || 0;

  return <FooterTodo>{totalLeftTodos} Task Left</FooterTodo>;
};

const FooterTodo = styled('div', {
  borderTop: '1px solid #87b6b8',
  display: 'flex',
  padding: '10px',
  position: 'absolute',
  bottom: '0',
  left: '0',
  right: '0',
  backgroundColor: '#87B6B8',
  fontSize: '1.3rem',
});

export default Footer;
