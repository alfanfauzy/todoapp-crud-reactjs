import { styled } from '@stitches/react';
import React from 'react';
import { LabelComponent } from '../Label';

/**
 *
 * @param {{
 * text: string
 * }} props
 * @returns
 */
const EmptyStateComponent = (props) => {
  const { text } = props;
  return (
    <WrapperEmptyState>
      <LabelComponent text={text} />
    </WrapperEmptyState>
  );
};

const WrapperEmptyState = styled('span', {
  textAlign: 'center',
  padding: '22px',
  display: 'block',
});

export default EmptyStateComponent;
