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
  const { type, icon, onClick } = props;

  return <Button type={type} icon={icon} onClick={onClick} />;
};

export default AtomButton;
