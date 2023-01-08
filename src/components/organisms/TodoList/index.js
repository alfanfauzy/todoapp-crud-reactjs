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

const TodoListComponents = () => {
  return (
    <WrapperTodoList>
      <TodoList>
        <TodoItem>
          <AtomButton
            type="text"
            icon={<IconComponent component={MinusCircleOutlined} />}
          />
          <LabelComponent text={'Learn Javascript'} disabled />
        </TodoItem>
        <TodoListAction>
          <AtomButton
            type="text"
            icon={<IconComponent component={CloseSquareOutlined} />}
          />
        </TodoListAction>
      </TodoList>
      <TodoList>
        <TodoItem>
          <AtomButton
            type="text"
            icon={<IconComponent component={MinusCircleOutlined} />}
          />
          <LabelComponent text={'Learn ReactJS'} disabled />
        </TodoItem>
        <TodoListAction>
          <AtomButton
            type="text"
            icon={<IconComponent component={CloseSquareOutlined} />}
          />
        </TodoListAction>
      </TodoList>
      <TodoList>
        <TodoItem>
          <AtomButton
            type="text"
            icon={<IconComponent component={CheckCircleTwoTone} />}
          />
          <LabelComponent text={'Learn Typescript'} />
        </TodoItem>
        <TodoListAction>
          <AtomButton
            type="text"
            icon={<IconComponent component={CloseSquareOutlined} />}
          />
        </TodoListAction>
      </TodoList>
      <TodoList>
        <TodoItem>
          <AtomButton
            type="text"
            icon={<IconComponent component={CheckCircleTwoTone} />}
          />
          <LabelComponent text={'Learn Tailwind'} />
        </TodoItem>
        <TodoListAction>
          <AtomButton
            type="text"
            icon={<IconComponent component={CloseSquareOutlined} />}
          />
        </TodoListAction>
      </TodoList>
    </WrapperTodoList>
  );
};

export default TodoListComponents;
