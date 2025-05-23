import React, { createContext, useState } from 'react';

export const TodosContext = createContext({});

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  return React.createElement(
    TodosContext.Provider,
    { value: { todos, setTodos } },
    children,
  );
};
