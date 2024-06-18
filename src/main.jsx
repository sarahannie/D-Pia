import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About.page';
import Home from './pages/Home.page';
import NotFound from './pages/NotFound.page';
import App from './App';
import PageLayout from './pages/What-We-Do/layout';
import CodeAcademy from './pages/What-We-Do/pages/CodeAcademy';
import InnovationHub from './pages/What-We-Do/pages/InnovationHub';
import ManagementConsulting from './pages/What-We-Do/pages/Management-Consulting';
import TechnologySolutions from './pages/What-We-Do/pages/TechnologySolutions';
import CareerPage from './pages/Career.page';
import PortfolioPage from './pages/Portfolio.page';
import Blogpage from './pages/Blogs.page';

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
            path: 'code-academy',
            element: <CodeAcademy />,
          },
          {
            path: 'innovation-hub',
            element: <InnovationHub />,
          },
          {
            path: 'management-consulting',
            element: <ManagementConsulting />,
          },
          {
            path: 'technology-solutions',
            element: <TechnologySolutions />,
          },
        ],
      },
      {
        path: '/career',
        element: <CareerPage />,
      },
      {
        path: '/portfolio',
        element: <PortfolioPage />
      },
      {
        path: '/blog',
        element: <Blogpage />
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  </React.StrictMode>
);
