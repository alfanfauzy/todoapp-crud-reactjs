import React from 'react';

import { Input } from 'antd';

import { styled } from '@stitches/react';

const AtomInput = (props) => {
  const { placeholder, value, onChange } = props;

  return (
    <InputForm placeholder={placeholder} value={value} onChange={onChange} />
  );
};

const InputForm = styled(Input, {
  fontFamily: 'caveat, cursive',
  height: '50px',
  fontSize: '1.8rem',
});

export default AtomInput;
