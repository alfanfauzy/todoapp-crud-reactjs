import React from 'react';

import AtomInput from '../../atoms/Input';
import { PlusOutlined } from '@ant-design/icons';

import { WrapperTodoForm } from './todoListForm.style';
import AtomButton from '../../atoms/Button';
import IconComponent from '../../atoms/Icon';

const TodoListForm = () => {
  return (
    <WrapperTodoForm>
      <AtomInput />
      <AtomButton
        type="text"
        icon={<IconComponent component={PlusOutlined} />}
      />
    </WrapperTodoForm>
  );
};

export default TodoListForm;
