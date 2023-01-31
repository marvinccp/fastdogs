import React from "react";
import ReactDOM from "react-dom/client";

//components
import App from "./App";
import HotDogs from "./components/HotDogs";
import Burguers from "./components/Burguers";

//routing
import { 
    createBrowserRouter, 
    RouterProvider
} from 'react-router-dom'
import ErrorPage from "./components/ErrorPage";


    const router = createBrowserRouter([
      {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/HotDogs",
        element: <HotDogs />,
      },
      {
        path: "/Burguers",
        element: <Burguers />,
      },
    ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
