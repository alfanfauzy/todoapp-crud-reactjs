import React, { createContext, useReducer } from 'react';
import { TodoReducer } from './action';

export const ProviderTodoApp = createContext(null);

export const TodoAppContext = ({ children }) => {
  const initialState = [];

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const initialValue = {
    state,
    dispatch,
  };

  return (
    <ProviderTodoApp.Provider value={initialValue}>
      {children}
    </ProviderTodoApp.Provider>
  );
};
