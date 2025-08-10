import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskForm from "../components/TaskForm";

export default function EditTask() {
  const { id } = useParams<{ id: string }>();
  const ctx = useContext(TaskContext);
  const navigate = useNavigate();

  if (!ctx) return <div className="container">Loading...</div>;
  const { tasks, editTask } = ctx;

  const taskToEdit = tasks.find(t => t.id === id);
  if (!taskToEdit) return <div className="container">Task not found</div>;

  const handleSave = (taskData: Omit<typeof taskToEdit, "id">) => {
    editTask({ ...taskToEdit, ...taskData });
    navigate("/");
  };

  return (
    <div className="container">
      <h1>Edit Task</h1>
      <TaskForm initialTask={taskToEdit} onSave={handleSave} />
    </div>
  );
}
