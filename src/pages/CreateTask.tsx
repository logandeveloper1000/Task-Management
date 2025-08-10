import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

export default function CreateTask() {
  const ctx = useContext(TaskContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  if (!ctx) {
    return <div className="container">Loading...</div>;
  }

  const { addTask } = ctx;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !dueDate) return alert("Title and due date are required");
    addTask({ title, description, dueDate, completed: false });
    navigate("/");
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>Create Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <input
          type="date"
          value={dueDate}
          onChange={e => setDueDate(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>

      {/* Back to Dashboard button */}
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <button
          type="button"
          className="secondary"
          onClick={() => navigate("/")}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}
