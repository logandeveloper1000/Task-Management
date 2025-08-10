import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App"; // ✅ Import App
import { TaskProvider } from "./context/TaskContext"; // ✅ Import TaskProvider
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN!}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID!}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <TaskProvider>
        <App />
      </TaskProvider>
    </Auth0Provider>
  </React.StrictMode>
);
