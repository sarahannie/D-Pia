import Genesis from '/genesis.png';
export default function About() {
  return (
    <section>
      <section className='bg-[#F5FBFF] text-[#0B4A6F] py-20  px-40'>
        <div className='flex flex-col gap-8 text-left'>
          <h1 className='w-3/5 text-5xl font-semibold'>
            Leading the Technological Revolution in Africa:
          </h1>
          <p className='w-[50%] text-lg '>
            At D-Pia Innovations, our journey is rooted in a commitment to
            ushering in a new era of technological advancement across Africa.
            Founded with a vision to drive innovation and empower businesses, we
            are at the forefront of shaping the digital landscape on the
            continent.
          </p>
        </div>
      </section>
      <section className='my-10 '>
        <div className='flex flex-wrap justify-between px-40  h-[80vh] text-[#0B4A6F] py-8'>
          <div>
            <img
              alt='persona layout image'
              src={Genesis}
              className='rounded-md h-fit'
            />
          </div>
          <div className='w-2/5 '>
            <h2 className='mb-8 text-5xl font-semibold'>The Genesis</h2>
            <div className='flex flex-col text-lg font-semibold gap-y-2'>
              <p>
                D-Pia Innovations Limited began as a full fledged information
                technology company but more recently has evolved into a
                management consulting practice. We are set up to provide
                technology driven solution to businesses.
              </p>
              <p>
                We provide shared workspace services, business process
                automation, as well as affordable software development training
                for the middle and lower class. We also drive operational
                excellence initiatives for optimal positioning of organizations
              </p>
              <p>
                The company started out in 2016 with the purpose to become one
                of the top drivers of inclusive ICT skill acquisition and
                technology adoption for education and business in Africa.
              </p>
              <button className='bg-[#C4320A] w-32 font-medium py-2 text-lg rounded-md mt-3 text-white'>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[#001F6B] h-[60vh] '></section>
    </section>
  );
}
