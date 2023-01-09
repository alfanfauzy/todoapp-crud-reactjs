import { styled } from '@stitches/react';
import React from 'react';

/**
 *
 * @param {{
 * text: string
 * disabled: boolean
 * }} props
 * @returns
 */
export const LabelComponent = (props) => {
  const { text, disabled } = props;
  return <LabelSpan disabled={disabled}>{text}</LabelSpan>;
};

const LabelSpan = styled('span', {
  fontSize: '1.8rem',
  variants: {
    disabled: {
      true: {
        color: '#c7c1c1',
        textDecoration: 'line-through',
      },
    },
  },
});
