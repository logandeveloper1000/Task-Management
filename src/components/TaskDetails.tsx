import { Task } from "../types/task";

interface TaskDetailsProps {
  task: Task;
}

export default function TaskDetails({ task }: TaskDetailsProps) {
  return (
    <div className="task-card">
      <div className="task-title">{task.title}</div>
      <p>{task.description || "No description provided"}</p>
      <p className="task-due"><strong>Due Date:</strong> {task.dueDate}</p>
      <p><strong>Status:</strong> {task.completed ? "Completed" : "Pending"}</p>
    </div>
  );
}
