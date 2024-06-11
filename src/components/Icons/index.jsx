const ArrowDown = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={2.5}
    stroke='currentColor'
    className='w-4 h-4'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='m19.5 8.25-7.5 7.5-7.5-7.5'
    />
  </svg>
);

const ArrowUp = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={2.5}
    stroke='currentColor'
    className='w-4 h-4 '
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='m4.5 15.75 7.5-7.5 7.5 7.5'
    />
  </svg>
);
const ArrowUpRight = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'

    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25'
    />
  </svg>
);

const MapPin = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='size-6'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
    />
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
    />
  </svg>
);

const Icons = {
  MapPin,
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
};

export default Icons;
