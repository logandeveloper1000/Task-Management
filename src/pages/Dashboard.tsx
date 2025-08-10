import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Dashboard() {
  const ctx = useContext(TaskContext);
  const { logout } = useAuth0();
  if (!ctx) return null;
  const { tasks, deleteTask } = ctx;

  return (
    <div className="container">
      <h1>Task Dashboard</h1>
      <div style={{ margin: "1rem 0" }}>
        <Link to="/create">
          <button>+ Create Task</button>
        </Link>
      </div>

      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map(task => (
          <div key={task.id} className="task-card">
            <div className="task-title">{task.title}</div>
            <div className="task-due">
              <strong>Due:</strong> {task.dueDate}
            </div>
            <div
              className="task-actions"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <Link to={`/task/${task.id}`}>View</Link>
                <Link to={`/edit/${task.id}`}>Edit</Link>
              </div>
              <button
                className="secondary"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}

      {/* Logout Button at the bottom */}
      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <button
          className="secondary"
          onClick={() =>
            logout({
              logoutParams: {
                returnTo: window.location.origin, // redirect after logout
              },
            })
          }
        >
          Logout
        </button>
      </div>
    </div>
  );
}
