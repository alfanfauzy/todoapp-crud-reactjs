import React from 'react';
import { Button } from 'antd';

/**
 * @param {{
 * type: 'primary' | 'text'
 * icon: React.ReactNode
 * }} props
 * @returns
 */
const AtomButton = (props) => {
  const { type, icon } = props;

  return <Button type={type} icon={icon} />;
};

export default AtomButton;
