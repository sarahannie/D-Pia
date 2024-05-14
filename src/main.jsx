import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About.page';
import Home from './pages/Home.page';
import NavBar from './components/Navbar';
import Footer from './components/Footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/who-we-are',
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <main className='mt-14'>
      <RouterProvider router={router} />
    </main>
    <Footer />
  </React.StrictMode>
);
