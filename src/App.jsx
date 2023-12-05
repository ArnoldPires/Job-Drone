import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  HomeLayout, Landing, Register, Login, DashboardLayout, Error,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'Register',
        element: <Register />,
      },
      {
        path: 'Login',
        element: <Login />,
      },
      {
        path: 'Dashboard',
        element: <DashboardLayout />,
      },
    ]
  },
])

const App = () => {
  return <RouterProvider router={router} />;
}

export default App