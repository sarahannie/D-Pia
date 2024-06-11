import useClickOutside from '../../hooks/useClickOutside';
import { useRef, useState } from 'react';
import Logo from '/logo.svg';
import Icons from '../Icons';
import { Link, useNavigate } from 'react-router-dom';
import { subPaths } from '../../data';

export default function NavBar() {
  const navigate = useNavigate();
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => setIsOpen((prev) => !prev);
  useClickOutside(ref, onClick);

  return (
    <div>
      <nav className='fixed top-0 z-10 w-full px-20 py-1 bg-white shadow-md'>
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
              <button onClick={onClick} onDoubleClick={onClick} className='flex items-center gap-2'>
                <span>What We do</span>
                <span>{isOpen ? <Icons.ArrowUp /> : <Icons.ArrowDown />}</span>
              </button>
              {!!isOpen && (
                <div
                  ref={ref}
                  className='absolute px-4 flex-wrap flex-row flex items-center justify-between bg-white border-2 rounded-md h-[14rem] w-[32em] top-12'
                >
                  {
                    subPaths.map((data) => (
                      <div key={data.name} className=' group'>
                        <div className='text-sm font-medium text-gray-700'>
                          <Link to={data.to} onClick={() => {
                            navigate(data.to)
                            setIsOpen(false)
                          }} className=''>
                            <p className='font-bold text-gray-900 group-hover:text-blue-600'>
                              {data.name}
                            </p>
                            <p className='font-semibold text-gray-500 w-52'>
                              {data.description}
                            </p>
                          </Link>
                        </div>
                      </div>
                    ))
                  }
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
              <Link to='/blog' onClick={() => navigate('/blog')}>
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
    </div>
  );
}
