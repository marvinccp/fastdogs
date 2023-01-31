import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Burguers from "./components/Burguers";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import HotDogs from "./components/HotDogs";


export const router = createBrowserRouter([
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
      {
        path: "/Contact",
        element: <Contact />,
      },
    ])