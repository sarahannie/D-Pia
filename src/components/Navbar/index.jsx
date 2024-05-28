import useClickOutside from '../../hooks/useClickOutside';
import { useRef, useState, useCallback } from 'react';
import Logo from '/logo.svg';
import Icons from '../Icons';
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate();
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const onClick = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  useClickOutside(ref, onClick);

  return (
    <nav className='fixed top-0 z-10 w-full px-20 py-3 bg-white shadow-md'>
      <div className='flex items-center w-full py-2'>
        <ul className='flex items-center gap-6 font-semibold text-blue-500'>
          <li className='mr-6'>
            <Link to='/' onClick={() => navigate('/')}>
              <img src={Logo} className='object-contain h-8' alt='Logo' />
            </Link>
          </li>
          <li>
            <Link to='/' onClick={() => navigate('/')}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/who-we-are' onClick={() => navigate('/who-we-are')}>
              Who we are
            </Link>
          </li>
          <li className='relative'>
            <button onClick={onClick} className='flex items-center gap-2'>
              <span>What We do</span>
              <span>{isOpen ? <Icons.ArrowUp /> : <Icons.ArrowDown />}</span>
            </button>
            {!!isOpen && (
              <div
                ref={ref}
                className='absolute flex items-center justify-center bg-white border-2 rounded-md h-52 w-96 top-12'
              >
                open
              </div>
            )}
          </li>
          <li>
            <Link to='/career' onClick={() => navigate('/career')}>
              Career
            </Link>
          </li>
          <li>
            <Link to='/portfolio' onClick={() => navigate('/portfolio')}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to='/blogs' onClick={() => navigate('/blogs')}>
              Blog
            </Link>
          </li>
        </ul>
        <div className='ml-auto'>
          <a
            className='p-3 font-semibold text-blue-500 rounded-md bg-blue-100/95'
            href='#'
          >
            Get In Touch
          </a>
        </div>
      </div>
    </nav>
  );
}
