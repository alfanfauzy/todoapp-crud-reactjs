import React, { useState } from 'react';

import AtomInput from '../../atoms/Input';
import { PlusOutlined } from '@ant-design/icons';

import { WrapperTodoForm } from './todoListForm.style';
import AtomButton from '../../atoms/Button';
import IconComponent from '../../atoms/Icon';
import { useTodoContext } from '../../../hooks';

const TodoListForm = () => {
  const { dispatch } = useTodoContext();

  const [valueTask, setValueTask] = useState();

  const handleSubmit = () => {
    dispatch({
      type: 'ADD_TODO',
      data: { value: valueTask, isCompleted: false },
    });
    setValueTask('');
  };

  return (
    <WrapperTodoForm>
      <AtomInput
        placeholder="Add new task here"
        value={valueTask}
        onChange={(event) => setValueTask(event.target.value)}
        onSubmit={() => handleSubmit()}
      />
      <AtomButton
        type="text"
        icon={<IconComponent component={PlusOutlined} />}
        onClick={() => handleSubmit()}
      />
    </WrapperTodoForm>
  );
};

export default TodoListForm;
