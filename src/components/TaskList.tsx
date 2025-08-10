import { Link } from "react-router-dom";
import { Task } from "../types/task";

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: string) => void;
}

export default function TaskList({ tasks, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return <p>No tasks available</p>;
  }

  return (
    <div>
      {tasks.map(task => (
        <div key={task.id} className="task-card">
          <div className="task-title">{task.title}</div>
          <div className="task-due"><strong>Due:</strong> {task.dueDate}</div>
          <div className="task-actions">
            <Link to={`/task/${task.id}`}>View</Link>
            <Link to={`/edit/${task.id}`}>Edit</Link>
            <button className="secondary" onClick={() => onDelete(task.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
