import { useLocation, Outlet } from 'react-router-dom';
import Home from './pages/Home.page';

import NavBar from './components/Navbar';

export default function App() {
  const location = useLocation();
  return (
    <div>
      <NavBar />
      <main className='mt-14'>
        {location.pathname === '/' ? <Home /> : <Outlet />}
      </main>
    </div>
  );
}
