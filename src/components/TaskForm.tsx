import { useState } from "react";
import { Task } from "../types/task";

interface TaskFormProps {
  initialTask?: Task;
  onSave: (taskData: Omit<Task, "id">) => void;
}

export default function TaskForm({ initialTask, onSave }: TaskFormProps) {
  const [title, setTitle] = useState(initialTask?.title || "");
  const [description, setDescription] = useState(initialTask?.description || "");
  const [dueDate, setDueDate] = useState(initialTask?.dueDate || "");
  const [completed, setCompleted] = useState(initialTask?.completed || false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !dueDate) {
      alert("Title and due date are required");
      return;
    }
    onSave({ title, description, dueDate, completed });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
        <label className="inline-field">
        <input
            type="checkbox"
            checked={completed}
            onChange={e => setCompleted(e.target.checked)}
        />
        Completed
        </label>
      <button type="submit">Save</button>
    </form>
  );
}
