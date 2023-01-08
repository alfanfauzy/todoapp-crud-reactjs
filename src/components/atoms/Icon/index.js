import React from 'react';
import Icon from '@ant-design/icons';

const IconComponent = (props) => {
  const { component } = props;
  return <Icon component={component} style={{ fontSize: '1.5rem' }} />;
};

export default IconComponent;
