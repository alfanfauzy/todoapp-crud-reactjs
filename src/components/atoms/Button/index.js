import React from 'react';
import { Button } from 'antd';
import { styled } from '@stitches/react';

/**
 * @param {{
 * type: 'primary' | 'text' | 'link'
 * icon: React.ReactNode
 * variant: string
 * onClick: () => {}
 * }} props
 * @returns
 */
const AtomButton = (props) => {
  const { type, icon, onClick } = props;

  return (
    <StyledButton type={type} icon={icon} onClick={onClick} variant={type} />
  );
};

const StyledButton = styled(Button, {
  variants: {
    variant: {
      link: {
        backgroundColor: '#ffe5cc',
        color: 'black',
      },
    },
  },
});

export default AtomButton;
