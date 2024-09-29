import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Router/Router.jsx';
// import About from './components/About.jsx';
// import Register from './components/Register.jsx';
// import ErrorPage from './pages/ErrorPage.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
