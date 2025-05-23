import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox } from '../components/checkbox';

describe('Checkbox Component', () => {
  const props = {
    onClick: jest.fn(),
    checked: false,
    onDelete: jest.fn(),
    onEdit: jest.fn(),
    label: 'Test Task',
    onKeyUp: jest.fn(),
  };

  it('renders with label', () => {
    render(<Checkbox {...props} />);
    expect(screen.getByLabelText(/Test Task/i)).toBeInTheDocument();
  });

  it('fires onClick when checkbox is clicked', () => {
    render(<Checkbox {...props} />);
    fireEvent.click(screen.getByLabelText(/Test Task/i));
    expect(props.onClick).toHaveBeenCalled();
  });

  it('fires onDelete when delete button is clicked', () => {
    render(<Checkbox {...props} />);
    fireEvent.click(screen.getByText(/delete/i));
    expect(props.onDelete).toHaveBeenCalled();
  });

  it('fires onEdit when edit button is clicked', () => {
    render(<Checkbox {...props} />);
    fireEvent.click(screen.getByText(/edit/i));
    expect(props.onEdit).toHaveBeenCalled();
  });
});
