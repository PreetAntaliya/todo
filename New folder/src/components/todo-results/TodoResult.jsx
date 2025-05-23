import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-results.scss';

export const TodoResults = () => {
  const { todos } = React.useContext(TodosContext);
  const completedCount = todos.filter((todo) => todo.checked).length;

  return (
    <div className="todo-results">
      <div className="alert alert-success text-center mb-0">
        ✅ Completed Tasks:&nbsp;
        <strong>{completedCount}</strong>
      </div>
    </div>
  );
};
