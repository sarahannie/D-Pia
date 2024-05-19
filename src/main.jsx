import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About.page';
import Home from './pages/Home.page';
import NotFound from './pages/NotFound.page';
// import NavBar from './components/Navbar';
import App from './App';
import PageLayout from './pages/What-We-Do/layout';
import CodeAcademy from './pages/What-We-Do/pages/code-academy';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        index: true,
        element: <Home />,
      },
      {
        path: '/who-we-are',
        element: <About />,
      },
      {
        path: '/what-we-do',
        element: <PageLayout />,
        children: [
          {
            index: true,
            path: '/what-we-do/code-academy',
            element: <CodeAcademy />,
          },
        ],
      },
    ],
  },

  {
    path: '*',
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  </React.StrictMode>
);
