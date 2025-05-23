import React, { useState } from 'react';

import AtomInput from '../../atoms/Input';
import { PlusOutlined } from '@ant-design/icons';

import { WrapperTodoForm } from './todoListForm.style';
import AtomButton from '../../atoms/Button';
import IconComponent from '../../atoms/Icon';
import { useTodoContext } from '../../../hooks';
import { addTodo } from '../../../services';
import { createUniqueId } from '../../../utils';
import { toast } from 'react-toastify';

const TodoListForm = () => {
  const { dispatch } = useTodoContext();

  const [valueTask, setValueTask] = useState('');

  const handleSubmit = () => {
    if(valueTask.length <5) {
      toast.error('Input type must have more than 5 character');
      return;
    }
    
    
    
    const payload = {
      id: createUniqueId(),
      value: valueTask,
      isCompleted: false,
    };

    try {
      addTodo(payload).then((response) => {
        if (response.status === 201) {
          /** Run Dispatch ADD TODO */
          dispatch({
            type: 'ADD_TODO',
            data: response.data,
          });

          /** Clear Input */
          setValueTask('');

          toast.success('Successfull add new todo');
        }
      });
    } catch (error) {
      toast.error(error);
    }
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
