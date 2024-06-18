import TeamImage from '/join-team.png';

export default function TechnologySolutions() {
  return (
    <section>
      <section className='text-[#001F6B] bg-[#F5FBFF] py-10 lg:py-20 md:px-20 xl:px-40 px-4'>
        <div className='flex flex-col gap-8 text-center xl:text-left'>
          <h1 className='w-full text-3xl font-semibold xl:w-3/5 md:text-5xl'>
            <span className='block w-full'>TECHNOLOGY </span>
            <span> SOLUTIONS: </span>
            <span>Ignite Your Digital Revolution</span>
          </h1>
          <p className='w-full text-base xl:w-1/2 md:text-lg'>
            Welcome to D-Pia Technology Solutions, where we redefine digital
            excellence within our Strategic Business Unit (SBU). Unleash the
            power of two pioneering services that can revolutionize your
            business
          </p>
        </div>
      </section>
      <section className='my-12 lg:my-24'>
        <div className=''>
          <div className='flex items-center w-full bg-blue-500 lg:relative h-[65vh]'>
            <div className='bg-[#001F6B] h-full w-1/2 bottom-0 hidden md:block'></div>
            <div className='right-0 w-full h-full p-4 bg-blue-500 lg:relative lg:p-8 md:w-1/2'>
              <div className='h-[10vh] absolute -top-12 right-0 hidden xl:block bg-amber-800/80 w-80'></div>
              <div className='text-white'>
                <h2 className='my-2 text-3xl font-bold lg:font-semibold lg:text-5xl'>
                  Process Automation
                </h2>
                <p className='my-2 text-md lg:text-lg'>
                  Embark on a journey of digital transformation with our
                  expertise in process automation. We understand the challenges
                  businesses face in staff management, record-keeping, and
                  process complexity. Manual processes often result in
                  frustration, errors, and customer dissatisfaction. By
                  automating routine tasks, we pave the way for:
                </p>
                <ul className='ml-6 text-sm list-disc lg:text-md'>
                  <li>Improved accuracy</li>
                  <li>Enhanced efficiency and effectiveness</li>
                  <li>Reduced costs</li>
                  <li>Time-saving solutions</li>
                  <li>Enhanced compliance</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='flex items-center w-full bg-blue-500 lg:relative h-[65vh]'>
            <div className='right-0 w-full h-full p-4 bg-blue-500 lg:relative lg:p-8 md:w-1/2'>
              <div className='h-[10vh] lg:absolute lg:-bottom-12 left-0 hidden xl:block bg-amber-800/80 w-80'></div>
              <div className='text-white'>
                <h2 className='w-3/4 my-3 text-3xl font-bold lg:font-semibold lg:text-5xl'>
                  Mobile/ Web App Development
                </h2>
                <p className='my-2 text-md lg:text-lg'>
                  Let us transform your visionary ideas into digital reality and
                  propel your business into the digital spotlight. Whether you
                  seek to enhance your brand&apos;s online presence or bring a
                  groundbreaking digital product to life, D-Pia Technology
                  Solutions is your trusted partner. Our proficiency in
                  Web/Mobile app development guarantees
                </p>
                <ul className='ml-6 text-sm list-disc md:text-md'>
                  <li>Innovation-driven solutions</li>
                  <li>Seamless user experiences</li>
                  <li>Responsive and user-friendly applications</li>
                </ul>
              </div>
            </div>
            <div className='bg-[#001F6B] h-full w-1/2 bottom-0 hidden md:block'></div>
          </div>
        </div>
      </section>
      <section className='lg:mt-28'>
        <div className='flex flex-col flex-wrap items-center justify-between px-4 space-y-10 md:px-20 xl:px-40 xl:flex-row'>
          <div className='text-[#0B4A6F] flex flex-col xl:block space-y-4'>
            <h2 className='text-3xl font-bold text-center xl:text-4xl xl:text-left'>
              Join hands with D-Pia Technology Solutions
            </h2>
            <p className='text-lg text-center xl:text-xl xl:text-left'>
              A transformative digital journey that aligns with your business
              goals
            </p>
            <button className='px-4 py-2 mt-4 font-semibold w-full xl:w-32 bg-[#C4320A] text-white rounded-md'>
              Contact us
            </button>
          </div>
          <div>
            <img src={TeamImage} alt='team image' className='hidden w-96 xl:block' />
          </div>
        </div>
      </section>
    </section>
  );
}
