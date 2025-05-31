import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
import About from './pages/About/About';
import Posts from './pages/Posts/Posts';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import Layout from './layout/Layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/posts',
        element: <Posts />
      },
      {
        path: '*',
        element: <Error />
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
