import * as React from 'react';
import './todo-edit.scss';

export const TodoEdit = ({ task, onSave, onCancel }) => {
  const [editedLabel, setEditedLabel] = React.useState(task.label);

  const handleSave = () => {
    if (editedLabel.trim()) {
      onSave(task.id, editedLabel.trim());
    }
  };

  return (
    <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content bg-dark text-light">
          <div className="modal-header">
            <h5 className="modal-title">Edit Task</h5>
            <button type="button" className="btn-close btn-close-white" onClick={onCancel}></button>
          </div>
          <div className="modal-body">
            <input
              className="form-control"
              value={editedLabel}
              onChange={(e) => setEditedLabel(e.target.value)}
              // autoFocus
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
            <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};
