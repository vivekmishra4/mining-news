import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import Codes from "./pages/Codes";
import News from "./pages/News";
import Channels from "./pages/Channels";
import Tokens from "./pages/Tokens";
import Expand from "./pages/Expand";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorBoundary from "./pages/ErrorBoundary";
import Approve from "./pages/Approve";
import Add from "./pages/Add";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "codes", element: <Codes /> },
      { path: "news", element: <News /> },
      { path: "channels", element: <Channels /> },
      { path: "tokens", element: <Tokens /> },
      { path:"tokens/:id",element:<Expand/>},
      {path:"approve/:id",element:<Approve/>},
      {path:"add/:id",element:<Add/>}
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);
