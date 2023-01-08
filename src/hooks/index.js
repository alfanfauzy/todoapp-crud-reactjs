import { useContext } from 'react';
import { ProviderTodoApp } from '../context';

export const useTodoContext = () => {
  return useContext(ProviderTodoApp);
};
