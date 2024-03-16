import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import NoteDetailMobile from "./components/note Detail /NoteDetailMobile";
import store from "./app/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/noteDetail",
    element: <NoteDetailMobile />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
