import React from 'react';
import { useTodoContext } from '../../../hooks';
import { FooterTodo } from './footer.style';

const Footer = () => {
  const { state: todos } = useTodoContext();

  const totalLeftTodos = todos?.filter((todo) => !todo.isCompleted).length || 0;

  return <FooterTodo>{totalLeftTodos} Task Left</FooterTodo>;
};

export default Footer;
