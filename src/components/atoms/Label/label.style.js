import { styled } from '@stitches/react';

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

export { LabelSpan };
