import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-form.scss';

export const TodoForm = () => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const [task, setTask] = React.useState('');

  const handleAddTodo = () => {
      if (task.trim() === '') {
        return;
      }

    const newTodoList = {
      id: Date.now(),
      label: task.trim(),
      completed: false,
    };

    setTodos([...todos, newTodoList]);
    setTask('');
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="mb-4 todo-form">
      <div className="input-group">
        <input
          className="form-control search-input"
          placeholder="Enter new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyUp={handleKeyUp}
        />
        <button className="btn btn-primary" type="button" onClick={handleAddTodo}>
          Add task
        </button>
      </div>
    </div>
  );
};
