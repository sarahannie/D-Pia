import { useLocation, Outlet } from 'react-router-dom';
import Home from './pages/Home.page';

import NavBar from './components/Navbar';

import Footer from './components/Footer';

export default function App() {
  const location = useLocation();
  return (
    <div>
      <NavBar />
      <main className='mt-14'>
        {location.pathname === '/' ? <Home /> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
}
