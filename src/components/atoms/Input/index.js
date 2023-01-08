import React from 'react';

import { Input } from 'antd';

import { styled } from '@stitches/react';

const AtomInput = () => {
  return <InputForm placeholder="Add new task here . . " />;
};

const InputForm = styled(Input, {
  fontFamily: 'caveat, cursive',
  height: '50px',
  fontSize: '1.8rem',
});

export default AtomInput;
