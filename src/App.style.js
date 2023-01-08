import { styled } from '@stitches/react';

const Wrapper = styled('div', {
  padding: '1rem',
  margin: '0 auto',
  maxWidth: '750px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});

const Title = styled('h1', {
  fontSize: '4rem',
  color: '#fcbf6d',
  fontFamily: '`Moon Dance`, cursive',
});

const WrapperTodo = styled('div', {
  border: '1px solid #87b6b8',
  height: '100%',
  width: '100%',
  borderRadius: '8px',
  boxShadow: '5px 17px 25px 0 rgb(0 0 0 / 40%)',
  position: 'relative',
});

export { Wrapper, Title, WrapperTodo };
