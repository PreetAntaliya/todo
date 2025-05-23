import * as React from 'react';
import './checkbox.scss';

export const Checkbox = ({
 onClick,
 checked,
 onDelete,
 onEdit,
 label,
 onKeyUp,
}) => {
  const checkboxId = `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <div className="checkbox d-flex align-items-center justify-content-between w-100">
      <div
        tabIndex="0"
        role="checkbox"
        aria-checked
        className="form-check m-0 w-100 checkbox-content"
      >
        <input
          id={checkboxId}
          className="form-check-input me-2"
          type="checkbox"
          checked={checked}
          onChange={onClick}
          onKeyUp={onKeyUp}
          tabIndex="-1"
        />
        <label
          htmlFor={checkboxId}
          className={`form-check-label w-100 ${checked ? 'text-decoration-line-through text-success' : ''}`}
        >
          {label}
        </label>
      </div>
      <button type="button" className="btn btn-danger me-2" onClick={onDelete}>
        Delete
      </button>
      <button type="button" className="btn btn-primary " onClick={onEdit}>
        Edit
      </button>
    </div>
  );
};
