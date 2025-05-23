import React from 'react';
import AtomButton from '../../atoms/Button';
import {
  MinusCircleOutlined,
  CheckCircleTwoTone,
  CloseSquareOutlined,
} from '@ant-design/icons';
import {
  WrapperTodoList,
  TodoList,
  TodoItem,
  TodoListAction,
} from './todoList.style';
import IconComponent from '../../atoms/Icon';
import { LabelComponent } from '../../atoms/Label';
import { useTodoContext } from '../../../hooks';
import EmptyStateComponent from '../../atoms/EmptyState';
import { deleteTodo, updateTodo } from '../../../services';
import { toast } from 'react-toastify';

const TodoListComponents = () => {
  const { state: todos, dispatch } = useTodoContext();

  const EmptyState = () => {
    return (
      todos?.length === 0 && (
        <EmptyStateComponent text={`You don't have any task`} />
      )
    );
  };

  const handleEditTodo = (todo) => {
    const payload = { ...todo, isCompleted: !todo.isCompleted };

    try {
      updateTodo(payload).then((response) => {
        if (response.status === 200) {
          /** Run Dispatch EDIT TODO */
          dispatch({
            type: 'EDIT_TODO',
            data: response.data,
          });

          toast.success('Successfull Edit Status Todo');
        }
      });
    } catch (error) {
      toast.error(error);
    }
  };

  const handleRemoveTodo = (todo) => {
    try {
      deleteTodo(todo).then((response) => {
        if (response.status === 200) {
          // Run Dispatch DELETE TODO
          dispatch({
            type: 'DELETE_TODO',
            data: { ...todo },
          });

          toast.success('Successfull Remove Todo');
        }
      });
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <WrapperTodoList>
      <EmptyState />
      {todos &&
        todos.map((todo, index) => (
          <TodoList key={index} onClick={() => handleEditTodo(todo)}>
            <TodoItem>
              <AtomButton
                type="text"
                icon={
                  <IconComponent
                    component={
                      todo.isCompleted
                        ? CheckCircleTwoTone
                        : MinusCircleOutlined
                    }
                  />
                }
              />
              <LabelComponent text={todo.value} disabled={todo.isCompleted} />
            </TodoItem>
            <TodoListAction>
              <AtomButton
                type="text"
                icon={<IconComponent component={CloseSquareOutlined} />}
                onClick={() => handleRemoveTodo(todo)}
              />
            </TodoListAction>
          </TodoList>
        ))}
    </WrapperTodoList>
  );
};

export default TodoListComponents;
