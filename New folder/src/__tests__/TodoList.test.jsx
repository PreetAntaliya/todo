import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoList } from '../components/todo-list';
import { TodosContext } from '../todo-context';

const renderWithContext = (todos, setTodos = jest.fn()) => {
  render(
    <TodosContext.Provider value={{ todos, setTodos }}>
      <TodoList />
    </TodosContext.Provider>
  );
};

describe('TodoList Component', () => {
  it('renders no todos message when list is empty', () => {
    renderWithContext([]);
    expect(screen.getByText(/Looks like you're up for a challenge!/i)).toBeInTheDocument();
  });

  it('renders todos and handles filter switching', () => {
    const mockTodos = [
      { id: 1, label: 'Task 1', checked: false },
      { id: 2, label: 'Task 2', checked: true },
    ];
    renderWithContext(mockTodos);

    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Completed/i));
    expect(screen.queryByText('Task 1')).not.toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Incomplete/i));
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.queryByText('Task 2')).not.toBeInTheDocument();
  });

  it('filters todos based on search input', () => {
    const mockTodos = [{ id: 1, label: 'Buy milk', checked: false }];
    renderWithContext(mockTodos);

    const input = screen.getByPlaceholderText(/search tasks/i);
    fireEvent.change(input, { target: { value: 'milk' } });

    expect(screen.getByText('Buy milk')).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'bread' } });
    expect(screen.queryByText('Buy milk')).not.toBeInTheDocument();
  });
});
