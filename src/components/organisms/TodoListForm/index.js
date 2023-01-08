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

  return (
    <WrapperTodoForm>
      <AtomInput
        placeholder="Add new task here"
        value={valueTask}
        onChange={(event) => setValueTask(event.target.value)}
      />
      <AtomButton
        type="text"
        icon={<IconComponent component={PlusOutlined} />}
        onClick={() =>
          dispatch({
            type: 'ADD_TODO',
            data: { value: valueTask, isCompleted: false },
          })
        }
      />
    </WrapperTodoForm>
  );
};

export default TodoListForm;
