import Logo2 from '/logo-2.png';
export default function Footer() {
  return (
    <footer className='flex flex-col items-center justify-center px-40 gap-y-6'>
      <div className='flex flex-col items-center justify-center gap-y-6'>
        <div>
          <img src={Logo2} alt='dpia innovations logo' />
        </div>
        <nav>
          <ul className='flex items-center gap-6 font-bold text-gray-500'>
            <li>
              <a href='/who-we-are'>About us</a>
            </li>
            <li>
              <a href='#'>Services</a>
            </li>
            <li>
              <a href='#'>Contact us</a>
            </li>
            <li>
              <a href='/career'>Career</a>
            </li>
            <li>
              <a href='/blog'>Blog</a>
            </li>
            <li>
              <a href='/portfolio'>Portfolio</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className='w-full h-[0.5px] border-2 rounded-md' />
      <div className='flex w-full mt-8 font-semibold'>
        <div>
          © {new Date().getFullYear()} D-Pia Innovations Limited. All rights
          reserved.
        </div>
        <div className='flex ml-auto gap-x-8'>
          <span>Terms</span>
          <span>Privacy</span>
          <span>Cookies</span>
        </div>
      </div>
    </footer>
  );
}
