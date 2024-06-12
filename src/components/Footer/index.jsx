import Logo2 from '/logo-2.png';
import { Link, useNavigate } from 'react-router-dom';
export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className='flex flex-col items-center justify-center mt-20 mb-8 md:px-40 '>
      <div className='flex flex-col items-center justify-center mb-20 gap-y-4'>
        <div>
          <img src={Logo2} alt='dpia innovations logo' />
        </div>
        <nav className=''>
          <ul className='flex flex-wrap items-center justify-center gap-6 px-4 font-bold text-gray-500'>
            <li>
              <Link to='/who-we-are' onClick={() => navigate('/who-we-are')}>
                About us
              </Link>
            </li>
            <li>
              <Link to='/what-we-do' onClick={() => navigate('/what-we-do')}>
                Services
              </Link>
            </li>
            <li>
              <Link to='/contact-us' onClick={() => navigate('/contact-us')}>
                Contact us
              </Link>
            </li>
            <li>
              <Link to='/career' onClick={() => navigate('/career')}>
                Career
              </Link>
            </li>
            <li>
              <Link to='/blogs' onClick={() => navigate('/blog')}>
                Blog
              </Link>
            </li>
            <li>
              <Link to='/portfolio' onClick={() => navigate('/portfolio')}>
                Portfolio
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='w-full h-[0.4px] border rounded-md' />
      <div className='flex flex-col items-center justify-center w-full px-4 mt-8 space-y-4 font-semibold md:flex-row md:space-y-0'>
        <div>
          © {new Date().getFullYear()} D-Pia Innovations Limited. All rights
          reserved.
        </div>
        <div className='flex items-center md:ml-auto gap-x-8'>
          <span>Terms</span>
          <span>Privacy</span>
          <span>Cookies</span>
        </div>
      </div>
    </footer>
  );
}
