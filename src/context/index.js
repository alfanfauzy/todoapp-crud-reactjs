import React, { createContext, useEffect, useReducer } from 'react';
import { getTodos } from '../services';
import { TodoReducer } from './action';

export const ProviderTodoApp = createContext(null);

export const TodoAppContext = ({ children }) => {
  const initialState = [];

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const initialValue = {
    state,
    dispatch,
  };

  const handleGetTodoAll = () => {
    try {
      getTodos().then((response) =>
        dispatch({ type: 'GET_TODOS', data: { response } })
      );
    } catch (error) {}
  };

  useEffect(() => {
    handleGetTodoAll();
  }, []);

  return (
    <ProviderTodoApp.Provider value={initialValue}>
      {children}
    </ProviderTodoApp.Provider>
  );
};
