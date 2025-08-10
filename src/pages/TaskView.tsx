import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskDetails from "../components/TaskDetails";

export default function TaskView() {
  const { id } = useParams<{ id: string }>();
  const ctx = useContext(TaskContext);

  if (!ctx) return <div className="container">Loading...</div>;
  const { tasks } = ctx;

  const task = tasks.find(t => t.id === id);
  if (!task) return <div className="container">Task not found</div>;

  return (
    <div className="container">
      <TaskDetails task={task} />
      <div className="task-actions" style={{ marginTop: "1rem" }}>
        <Link to={`/edit/${task.id}`}>Edit</Link>
        <Link to="/">Back to Dashboard</Link>
      </div>
    </div>
  );
}
