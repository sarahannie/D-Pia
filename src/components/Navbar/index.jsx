import useClickOutside from '../../hooks/useClickOutside';
import { useRef, useState, useCallback } from 'react';
import Logo from '/logo.svg';
import Icons from '../Icons/Icons';

export default function NavBar() {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const onClick = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  useClickOutside(ref, onClick);
  return (
    <nav className='fixed top-0 z-10 w-full px-20 py-1 bg-white shadow-md'>
      <div className='flex items-center w-full py-2'>
        <ul className='flex items-center gap-6 font-semibold text-blue-500'>
          <li className='mr-12'>
            <a href='/'>
              <img src={Logo} className='object-contain size-8' />
            </a>
          </li>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/who-we-are'>Who we are</a>
          </li>
          <li className='relative'>
            <button onClick={onClick} className='flex items-center gap-2'>
              <span>What We do</span>
              <span>{isOpen ? <Icons.ArrowUp /> : <Icons.ArrowDown />}</span>
            </button>

            {!!isOpen && (
              <div
                ref={ref}
                className='absolute flex items-center justify-center -translate-x-40 bg-white border-2 rounded-md h-52 w-96 top-12'
              >
                open
              </div>
            )}
          </li>
          <li>
            <a href='/career'>Career</a>
          </li>
          <li>
            <a href='/portfolio'>Portfolio</a>
          </li>
          <li>
            <a href='/blog'>Blog</a>
          </li>
        </ul>
        <div className='ml-auto'>
          <a className='p-3 font-semibold text-blue-500 rounded-md  bg-blue-100/95'>
            Get In Touch
          </a>
        </div>
      </div>
    </nav>
  );
}
