import React, { useState } from 'react';


interface EditTaskProps {
  task: {
    id: number;
    text: string;
    completed: boolean;
  };
  onSave: (id: number, newText: string) => void;
}

const EditTask: React.FC<EditTaskProps> = ({ task, onSave }) => {
  const [text, setText] = useState<string>(task.text);

  const handleSave = () => {
    onSave(task.id, text);
  };

  const handleKeyDown = (key) => {
    if(key === 'Enter') {
      handleSave()
    } 
  }

  return (
    <div className="flex justify-between items-center p-4 rounded-lg shadow mb-4">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={e => handleKeyDown(e.key)}
        className="border rounded p-2"
      />
      <button onClick={handleSave} className="text-sm text-white bg-green-500 px-2 py-1 rounded">
        Save
      </button>
    </div>
  );
}

export default EditTask;
