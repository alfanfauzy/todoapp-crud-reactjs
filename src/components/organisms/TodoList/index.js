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

const TodoListComponents = () => {
  const { state: todos, dispatch } = useTodoContext();

  const EmptyState = () => {
    return (
      todos.length === 0 && (
        <EmptyStateComponent text={`You don't have any task`} />
      )
    );
  };

  return (
    <WrapperTodoList>
      <EmptyState />
      {todos &&
        todos.map((todo, index) => (
          <TodoList key={index}>
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
                onClick={() =>
                  dispatch({
                    type: 'EDIT_TODO',
                    data: { ...todo, isCompleted: !todo.isCompleted },
                  })
                }
              />
              <LabelComponent text={todo.value} disabled={todo.isCompleted} />
            </TodoItem>
            <TodoListAction>
              <AtomButton
                type="text"
                icon={<IconComponent component={CloseSquareOutlined} />}
                onClick={() =>
                  dispatch({
                    type: 'DELETE_TODO',
                    data: { ...todo },
                  })
                }
              />
            </TodoListAction>
          </TodoList>
        ))}
    </WrapperTodoList>
  );
};

export default TodoListComponents;
