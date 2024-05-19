import Logo2 from '/logo-2.png';
export default function Footer() {
  return (
    <footer className='flex flex-col items-center justify-center mt-20 mb-8 md:px-40 gap-y-12'>
      <div className='flex flex-col items-center justify-center gap-y-12'>
        <div>
          <img src={Logo2} alt='dpia innovations logo' />
        </div>
        <nav>
          <ul className='flex flex-wrap items-center gap-6 px-4 font-bold text-gray-500'>
            <li>
              <a href='/who-we-are'>About us</a>
            </li>
            <li>
              <a href='/what-we-do'>Services</a>
            </li>
            <li>
              <a href='/contact-us'>Contact us</a>
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
      <div className='flex flex-col w-full px-4 mt-12 space-y-4 font-semibold md:space-y-0'>
        <div>
          © {new Date().getFullYear()} D-Pia Innovations Limited. All rights
          reserved.
        </div>
        <div className='flex md:ml-auto gap-x-8'>
          <span>Terms</span>
          <span>Privacy</span>
          <span>Cookies</span>
        </div>
      </div>
    </footer>
  );
}
