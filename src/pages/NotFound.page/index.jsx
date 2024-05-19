import { useLocation } from 'react-router-dom';
export default function Index() {
  const location = useLocation();
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='flex flex-col gap-3 text-4xl font-bold'>
        <span className='text-2xl text-center text-gray-800'>
          path - {`${location.pathname.split('/')[1]}`}
        </span>
        <h1 className='flex flex-col'> Not Found Return</h1>
        <a
          href='/'
          className='text-center text-blue-500 transition duration-300 ease-in hover:underline hover:underline-offset-2'
        >
          Home
        </a>
      </div>
    </div>
  );
}
