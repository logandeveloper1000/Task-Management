import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <nav>
      <Link to="/">Task Manager</Link>
      <div className="nav-actions">
        {isAuthenticated && user && (
          <span className="nav-user">Hi, {user.name}</span>
        )}
        {isAuthenticated ? (
          <>
            <Link to="/create">Create Task</Link>
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Logout
            </button>
          </>
        ) : (
          <button onClick={() => loginWithRedirect()}>Login</button>
        )}
      </div>
    </nav>
  );
}
