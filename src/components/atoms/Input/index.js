import React from 'react';
import { Input } from 'antd';
import { styled } from '@stitches/react';

/**
 *
 * @param {{
 * placeholder: string,
 * value: string,
 * onChange: () => {}
 * }} props
 * @returns
 */
const AtomInput = (props) => {
  const { placeholder, value, onChange, onSubmit } = props;

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && onChange) {
      onChange(event);
      onSubmit();
    }
  };

  return (
    <InputForm
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={(event) => handleKeyDown(event)}
    />
  );
};

const InputForm = styled(Input, {
  fontFamily: 'caveat, cursive',
  height: '50px',
  fontSize: '1.8rem',
});

export default AtomInput;
