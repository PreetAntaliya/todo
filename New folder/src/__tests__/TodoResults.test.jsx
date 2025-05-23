import React from 'react';
import { render, screen } from '@testing-library/react';
import { TodoResults } from '../components/todo-results';
import { TodosContext } from '../todo-context';

describe('TodoResults Component', () => {
  it('displays number of completed tasks', () => {
    const todos = [
      { id: 1, label: 'Task 1', checked: true },
      { id: 2, label: 'Task 2', checked: false },
      { id: 3, label: 'Task 3', checked: true },
    ];

    render(
      <TodosContext.Provider value={{ todos }}>
        <TodoResults />
      </TodosContext.Provider>
    );

    expect(screen.getByText(/Completed Tasks:/)).toHaveTextContent('2');
  });
});
