import { createBrowserRouter } from "react-router-dom";
import App from '../App.jsx';
import About from '../pages/About.jsx';
import Register from '../pages/Register.jsx';
import ErrorPage from '../pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
