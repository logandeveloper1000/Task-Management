import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login-page">
      <h1>Welcome to Task Manager</h1>
      <p>Please log in to continue</p>
      <button onClick={() => loginWithRedirect()}>Log In</button>
    </div>
  );
}
