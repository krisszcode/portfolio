'use client'
import React, { useEffect, useState } from 'react';
import EditTask from './EditTask';
import Task from './Task';

interface TaskType {
  id: number;
  text: string;
  completed: boolean;
}

const Todo: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const [newTaskText, setNewTaskText] = useState<string>('');
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  const handleAddTask = () => {
    if (newTaskText.trim()) {
      const newTask = { id: Math.random(), text: newTaskText, completed: false };
      setTasks(prevTasks => [...prevTasks, newTask]);
      setNewTaskText('');
    }
  };

  const handleSaveEdit = (id: number, newText: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
    setEditingId(null);
  };

  const handleKeyDown = (key: string) => {
    if(key === 'Enter') {
      handleAddTask()
    } 
  }

  return (
        <div className="min-h-screen bg-base-200 p-6">
          <input
            type="text"
            value={newTaskText}
            onChange={e => setNewTaskText(e.target.value)}
            onKeyDown={e => handleKeyDown(e.key)}
            placeholder="New task"
            className="mb-4 mr-2 p-2 border rounded"
          />
          <button onClick={handleAddTask} className="mb-4 text-sm text-white bg-blue-500 px-2 py-2 rounded">
            Add Task
          </button>
          {tasks.map(task => (
            editingId === task.id ? (
              <EditTask
                key={task.id}
                task={task}
                onSave={handleSaveEdit}
              />
            ) : (
              <Task
                key={task.id}
                task={task}
                onToggle={() => setTasks(prevTasks =>
                  prevTasks.map(t =>
                    t.id === task.id ? { ...t, completed: !t.completed } : t
                  )
                )}
                onDelete={() => setTasks(prevTasks =>
                  prevTasks.filter(t => t.id !== task.id)
                )}
                onEdit={() => setEditingId(task.id)}
              />
            )
          ))}
        </div>
  );
}

export default Todo;
