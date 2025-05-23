import * as React from 'react';
import { Checkbox } from '../checkbox';
import { TodosContext } from '../../todo-context';
import { TodoEdit } from '../todo-edit';
import './todo-list.scss';

export const TodoList = () => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const [filter, setFilter] = React.useState('all');
  const [currentPage, setCurrentPage] = React.useState(1);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [editingTask, setEditingTask] = React.useState(null); // bonus feature

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCheck = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const filteredTodos = todos
  .filter((todo) => {
    if (filter === 'completed') {
      return todo.checked;
    }
    if (filter === 'incomplete') {
      return !todo.checked;
    }
    return true;
  })
.filter((todo) => todo.label.toLowerCase().includes(searchTerm.toLowerCase()));

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredTodos.length / itemsPerPage);

  const paginatedTodos = filteredTodos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  // bonus feature
  const handleEditSave = (id, newLabel) => {
    const updatedTodos = todos.map((todo) => (
      todo.id === id ? { ...todo, label: newLabel } : todo
    ));
    setTodos(updatedTodos);
    setEditingTask(null);
  };

  const handleEditCancel = () => {
    setEditingTask(null);
  };

  return (
    <div className=" mb-4 todo-list">
      <input
        type="text"
        className="form-control mb-3 search-input"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="btn-group mb-2 mx-auto w-100">
        <button
          type="button"
          className={`btn btn-outline-primary ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          type="button"
          className={`btn btn-outline-success ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
        <button
          type="button"
          className={`btn btn-outline-warning ${filter === 'incomplete' ? 'active' : ''}`}
          onClick={() => setFilter('incomplete')}
        >
          Incomplete
        </button>
      </div>
      <div className="card">
        <div className="card-header bg-primary text-white">Things to do:</div>
        <ul className="list-group list-group-flush">
          {filteredTodos.length ? (
            <div className="tod-list-content">
              {paginatedTodos.map((todoItem) => (
                <li className="list-group-item d-flex justify-content-between align-items-center" key={todoItem.id}>
                  {editingTask?.id === todoItem.id ? (
                    <TodoEdit
                      task={editingTask}
                      onSave={handleEditSave}
                      onCancel={handleEditCancel}
                    />
                  ) : (
                    <Checkbox
                      label={todoItem.label}
                      checked={todoItem.checked ?? false}
                      onClick={() => toggleCheck(todoItem.id)}
                      onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
                      onDelete={() => handleDelete(todoItem.id)}
                      onEdit={() => setEditingTask(todoItem)}
                    />
                  )}
                </li>
              ))}
              <nav className="my-3">
                <ul className="pagination justify-content-center">
                  {[...Array(totalPages)].map((_, index) => {
                    const pageNumber = index + 1;
                    return (
                      <li key={`page-${pageNumber}`} className={`page-item ${pageNumber === currentPage ? 'active' : ''}`}>
                        <button type="button" className="page-link" onClick={() => setCurrentPage(pageNumber)}>
                          {pageNumber}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          ) : (
            <div className="no-todos">Looks like you&apos;re up for a challenge!</div>
          )}
        </ul>
      </div>
    </div>
  );
};
