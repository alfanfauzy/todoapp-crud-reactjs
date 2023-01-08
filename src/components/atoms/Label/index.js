import React from 'react';
import { LabelSpan } from './label.style';

/**
 *
 * @param {{
 * text: string
 * }} props
 * @returns
 */
export const LabelComponent = (props) => {
  const { text, disabled } = props;
  return <LabelSpan disabled={disabled}>{text}</LabelSpan>;
};
