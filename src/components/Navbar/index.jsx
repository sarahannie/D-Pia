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
            <img src={Logo} className='object-contain h-8' alt='Logo' />
          </Link>
        </div>
        <div className='flex flex-col items-center w-full xl:py-2 gap-y-2 lg:flex-row'>

          <ul className='items-center hidden w-full gap-6 font-semibold text-blue-500 lg:flex'>

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
            <li className='relative'>
              <button onClick={onClick} className='flex items-center gap-2'>
                <span>What We do</span>
                <span>{isOpen ? <Icons.ArrowUp /> : <Icons.ArrowDown />}</span>
              </button>
              {isOpen && (
                <div
                  ref={ref}
                  className='absolute z-30 px-4 flex-wrap flex-row flex items-center justify-between bg-white border-2 rounded-md h-[14rem] w-[30rem] top-14'
                >
                  {
                    //the error lies here, when i click on an element it doesnt navigate it just closes
                    subPaths.map((data) => (
                      <div key={data.name} className='w-fit group'>
                        <div className='z-50 text-sm font-medium text-gray-700' onClick={(event) => event.stopPropagation()}>
                          <Link to={data.to} onClick={(event) => {
                            event.preventDefault()
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
              <Link to='/blog' onClick={() => handleNavigation('/blog')}>
                Blog
              </Link>
            </li>
            <li className='ml-auto'>
              <div >
                <a
                  className='p-3 font-semibold text-blue-500 rounded-md bg-blue-100/95'
                  href='#'
                >
                  Get In Touch
                </a>
              </div>
            </li>
          </ul>
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
                <Link to='/blog' onClick={() => handleNavigation('/blog')}>
                  Blog
                </Link>
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
        </div>
      </nav>
    </div>
  );
}
