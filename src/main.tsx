import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//
import "./shared/styles/index.css";
import { routes } from "./shared/routes";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<RouterProvider router={createBrowserRouter(routes)} />);