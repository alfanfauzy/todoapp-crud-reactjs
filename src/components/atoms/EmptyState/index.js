import React from 'react';
import { LabelComponent } from '../Label';
import { WrapperEmptyState } from './emptystate.style';

const EmptyStateComponent = (props) => {
  const { text } = props;
  return (
    <WrapperEmptyState>
      <LabelComponent text={text} />
    </WrapperEmptyState>
  );
};

export default EmptyStateComponent;
