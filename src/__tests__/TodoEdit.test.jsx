import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoEdit } from '../components/todo-edit';

describe('TodoEdit Component', () => {
  const onSave = jest.fn();
  const onCancel = jest.fn();
  const task = { id: 1, label: 'Old Task' };

  it('renders input with existing task label', () => {
    render(<TodoEdit task={task} onSave={onSave} onCancel={onCancel} />);
    expect(screen.getByDisplayValue(/Old Task/i)).toBeInTheDocument();
  });

  it('calls onCancel when Cancel button is clicked', () => {
    render(<TodoEdit task={task} onSave={onSave} onCancel={onCancel} />);
    fireEvent.click(screen.getByText(/cancel/i));
    expect(onCancel).toHaveBeenCalled();
  });

  it('calls onSave with updated text', () => {
    render(<TodoEdit task={task} onSave={onSave} onCancel={onCancel} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Updated Task' } });
    fireEvent.click(screen.getByText(/save/i));
    expect(onSave).toHaveBeenCalledWith(task.id, 'Updated Task');
  });
});
