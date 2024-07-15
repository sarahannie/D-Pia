import useClickOutside from '../../hooks/useClickOutside';
import { useRef, useState } from 'react';
import Logo from '/logo.svg';
import Icons from '../Icons';
import { Link, useNavigate } from 'react-router-dom';
import { subPaths } from '../../data';
import { X, Menu } from 'lucide-react';

export default function NavBar() {
  const navigate = useNavigate();
  const ref = useRef(null);
  const breakPointRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => setIsOpen((prev) => !prev);
  useClickOutside(ref, () => setIsOpen(false));
  useClickOutside(breakPointRef, () => setIsMenuOpen(false));
  const handleNavigation = (path) => {
    navigate(path)
    setIsOpen(false)
    setIsMenuOpen(false)
  }
  const handleNavigations = (url) => {
    window.location.href = url;
  };



  return (
    <div>
      <nav className='fixed top-0 z-10 items-center w-full gap-4 px-4 py-1 bg-white shadow-md lg:flex md:px-20 xl:px-40'>
        <div className='flex flex-row-reverse items-center justify-between my-4'>
          <button onClick={() => setIsMenuOpen(prev => !prev)} className='border-2 rounded-md lg:hidden'>
            {
              isMenuOpen ?
                <X className='text-gray-500 rounded-md size-8' /> : <Menu className='text-gray-500 rounded-md size-8 ' />
            }
          </button>
          <Link to='/' onClick={() => handleNavigation('/')}>
            <img src={Logo} className='object-contain h-12 lg:hidden' alt='Logo' />
          </Link>
        </div>
        <div className='hidden lg:flex lg:w-full lg:items-center lg:justify-between'>
          <Link to='/' onClick={() => handleNavigation('/')}>
            <img src={Logo} className='object-contain h-12' alt='Logo' />
          </Link>
          <ul className='flex items-center gap-6 font-semibold text-blue-500'>
            <li>
              <Link to='/who-we-are' onClick={() => handleNavigation('/who-we-are')}>
                Who we are
              </Link>
            </li>
            <li className='relative'>
              <button onClick={onClick} className='flex items-center gap-2'>
                <span>What We do</span>
                <span>{isOpen ? <Icons.ArrowUp /> : <Icons.ArrowDown />}</span>
              </button>
              {isOpen && (
                <div
                  ref={ref}
                  className='absolute z-30 flex flex-wrap items-center justify-between px-4 py-2 bg-white border-2 rounded-md top-14 w-[30rem] h-[14rem]'
                >
                  {subPaths.map((data) => (
                    <div key={data.name} className='w-fit group'>
                      <div className='z-50 text-sm font-medium text-gray-700' onClick={(event) => event.stopPropagation()}>
                        <Link
                          to={data.to}
                          onClick={(event) => {
                            event.preventDefault();
                            handleNavigation(data.to);
                          }}
                          className='font-bold text-blue-600'
                        >
                          <>
                            {data.name}
                          </>
                          <p className='font-semibold text-gray-500 lg:w-52'>{data.description}</p>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </li>
            <li>
              <Link to='/career' onClick={() => handleNavigation('/career')}>
                Career
              </Link>
            </li>
            <li>
              <Link to='/portfolio' onClick={() => handleNavigation('/portfolio')}>
                Portfolio
              </Link>
            </li>
            <li>
              <a
                href='https://dpiainnovations.com/blog/'
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigations('https://dpiainnovations.com/blog/');
                }}
              >
                Blog
              </a>
            </li>
          </ul>
          <div>
            <a className='p-3 font-semibold text-blue-500 rounded-md bg-blue-100/95' href='#'>
              Get In Touch
            </a>
          </div>
        </div>
          <div className='block w-full lg:hidden small'>

            <ul className={`flex-col items-center w-full gap-4 py-6 font-semibold h-full
               justify-center text-xl text-blue-500 ${isMenuOpen ? 'flex' : 'hidden h-0 '}`} ref={breakPointRef}>
              <li>
                <Link to='/' onClick={() => handleNavigation('/')}>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/who-we-are' onClick={() => handleNavigation('/who-we-are')}>
                  Who we are
                </Link>
              </li>
              <li className=''>
                <button onClick={onClick} onDoubleClick={onClick} className='flex items-center gap-2'>
                  <span>What We do</span>
                  <span>{isOpen ? <Icons.ArrowUp /> : <Icons.ArrowDown />}</span>
                </button>
              </li>
              <>
                {!!isOpen && (
                  <div
                    ref={ref}
                    className=' px-4 py-4 gap-y-2 flex-wrap flex-row flex items-center justify-between bg-white border-2 rounded-md lg:h-[14rem] h-fit lg:w-[32em] top-12'
                  >
                    {
                      subPaths.map((data) => (
                        <div key={data.name} className='w-fit group'>
                          <div className='text-sm font-medium text-gray-700' onClick={() => console.log(data.to)}>
                            <Link to={data.to} onClick={() => {
                              handleNavigation(data.to)

                            }} className='font-bold text-blue-600'>
                              <>
                                {data.name}
                              </>
                              <p className='font-semibold text-gray-500 lg:w-52'>
                                {data.description}
                              </p>
                            </Link>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                )}
              </>
              <li>
                <Link to='/career' onClick={() => handleNavigation('/career')}>
                  Career
                </Link>
              </li>
              <li>
                <Link to='/portfolio' onClick={() => handleNavigation('/portfolio')}>
                  Portfolio
                </Link>
              </li>
              <li>
              <a href='https://dpiainnovations.com/blog/' onClick={(e) => {
          e.preventDefault();
          handleNavigations('https://dpiainnovations.com/blog/');
        }}>
                Blog
              </a>
              </li>
              <li className='w-full p-3 font-semibold text-center text-blue-500 rounded-md bg-blue-100/95'>
                < >
                  <a
                    className='w-full '
                    href='#'
                  >
                    Get In Touch
                  </a>
                </>
              </li>
            </ul>
          </div>
       
      </nav>
    </div>
  );
}
