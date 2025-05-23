import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoForm } from '../components/todo-form';
import { TodosContext } from '../todo-context';

describe('TodoForm Component', () => {
  it('adds a new task on button click', () => {
    const setTodos = jest.fn();
    const todos = [];

    render(
      <TodosContext.Provider value={{ todos, setTodos }}>
        <TodoForm />
      </TodosContext.Provider>
    );

    const input = screen.getByPlaceholderText(/enter new task/i);
    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(screen.getByText(/add task/i));

    expect(setTodos).toHaveBeenCalledWith([
      expect.objectContaining({ label: 'New Task', completed: false }),
    ]);
  });

  it('does not add task if input is empty', () => {
    const setTodos = jest.fn();
    render(
      <TodosContext.Provider value={{ todos: [], setTodos }}>
        <TodoForm />
      </TodosContext.Provider>
    );

    fireEvent.click(screen.getByText(/add task/i));
    expect(setTodos).not.toHaveBeenCalled();
  });
});
