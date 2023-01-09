import { GithubOutlined } from '@ant-design/icons';
import { styled } from '@stitches/react';
import React from 'react';
import { useTodoContext } from '../../../hooks';
import AtomButton from '../Button';
import { LabelComponent } from '../Label';

const Footer = () => {
  const { state: todos } = useTodoContext();

  const totalLeftTodos = todos?.filter((todo) => !todo.isCompleted).length || 0;

  return (
    <FooterTodo>
      <LabelComponent text={`${totalLeftTodos} Task Left`} />{' '}
      <AtomButton
        type="link"
        icon={<GithubOutlined />}
        variant="link"
        onClick={() => {
          window.open(
            'https://github.com/alfanfauzy/todoapp-crud-reactjs',
            '_blank'
          );
        }}
      />
    </FooterTodo>
  );
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
  justifyContent: 'space-between',
  alignItems: 'center',
});

export default Footer;
