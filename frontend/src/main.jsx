import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import "./index.css";

import Root from "./routes/root";
import Index, { loader as indexLoader } from "./routes/index";
import Article, { loader as articleLoader } from "./routes/article";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage article />,
        children: [
          {
            index: true,
            element: <Index />,
            loader: indexLoader,
          },
          {
            element: <Article />,
            path: "articles/:articleId",
            loader: articleLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
