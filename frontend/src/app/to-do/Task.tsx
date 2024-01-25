import React from 'react';

interface TaskProps {
  task: {
    id: number;
    text: string;
    completed: boolean;
  };
  onToggle: () => void;
  onDelete: () => void;
  onEdit: () => void;
}

const Task = ({ task, onToggle, onDelete, onEdit } : TaskProps) => {
  return (
    <div className="flex justify-between items-center p-4 rounded-lg shadow mb-4">
      <span className={task.completed ? 'line-through text-gray-500' : ''}>{task.text}</span>
      <div>
        <button onClick={onToggle} className="mr-4 text-sm text-white bg-blue-500 px-2 py-1 rounded">
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={onDelete} className="mr-4 text-sm text-white bg-red-500 px-2 py-1 rounded">
          Delete
        </button>
        <button onClick={onEdit} className="text-sm text-white bg-yellow-500 px-2 py-1 rounded">
          Edit
        </button>
      </div>
    </div>
  );
}

export default Task;
