import { values } from '../../data';
import Genesis from '/genesis.png';
import FadedImage from '/logo-faded.png';
import HR from '/faith_sunday.png';

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
      <section className='mt-10 '>
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
      <section className='bg-[#001F6B] h-fit py-20 flex flex-col text-white px-40 space-y-16'>
        <div className='flex items-center justify-between w-full space-x-8'>
          <div className='flex flex-col w-1/2 space-y-4'>
            <div>
              <h2 className='text-5xl'>Our Mission</h2>
            </div>
            <div className='flex flex-col p-2 text-xl font-semibold gap-y-2'>
              <p>
                We are more than just a company; we are on a mission to
                revolutionize how technology transforms lives. Our mandate is to
                provide technology-driven solutions that enhance productivity,
                drive economic growth, and contribute to the diversification of
                African economies. Our mission sits on a tripod
              </p>
              <>
                <ul className='mt-5 ml-8 space-y-2 font-normal list-disc'>
                  <li>
                    To improve the efficiency of business processes through
                    automation.
                  </li>
                  <li>
                    To drive inclusive ICT skill acquisition for poverty
                    reduction within the middle and lower class.
                  </li>
                  <li>
                    To drive a culture of innovation, continuous learning and
                    collaboration.
                  </li>
                </ul>
              </>
            </div>
          </div>
          <div className='right-0 w-1/2 opacity-70'>
            <img
              src={FadedImage}
              alt='dpia logo faded'
              className='object-cover h-full w-[85%]'
            />
          </div>
        </div>
        <div className='flex items-center justify-between w-full space-x-8'>
          <div className='w-1/2'>
            <img src={FadedImage} alt='dpia logo faded' className='w-[70%] ' />
          </div>
          <div className='flex flex-col w-1/2 pt-20 space-y-4 '>
            <div>
              <h2 className='text-5xl'>Our Vision</h2>
            </div>
            <div className='flex flex-col p-2 text-xl font-semibold gap-y-2'>
              <p>
                To become one of the top drivers of inclusive ICT skill
                acquisition and technology adoption for education and business
                in Africa
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='mt-20 px-36'>
          <div className='flex flex-row gap-8'>
            {values.map((item) => {
              const { Icon } = item;
              return (
                <div
                  key={item.heading}
                  className='h-[18em] w-[20em] shadow-md flex flex-col justify-between px-6 py-4 bg-[#F5FBFF] text-[#0B4A6F]'
                >
                  <div className='flex items-center justify-center rounded-full shadow-sm bg-gray-300/50 size-12'>
                    <Icon className='' />
                  </div>
                  <div className='space-y-4'>
                    <h2 className='text-3xl font-semibold'>{item.heading}</h2>
                    <p className='text-md'>{item.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className='bg-[#001F6B] h-fit py-20 text-white px-40 mt-16'>
        <div className='flex flex-col items-center'>
          <div className='text-center w-3/5 space-y-3'>
            <h2 className='text-5xl font-semibold'>
              Meet the visionary minds steering D-Pia towards a future defined
              by innovation and excellence.
            </h2>
            <p className='font-normal text-2xl text-white/90'>
              Explore the profiles of our visionary leaders who are instrumental
              in steering D-Pia towards new heights in the ever-evolving
              landscape of technology and business
            </p>
          </div>
          <div></div>
        </div>
      </section>
      <section className='bg-[#F5FBFF] text-[#0B4A6F] py-20  px-40'>
        <div className='flex justify-between items-center'>
          <div className='w-[21em]'>
            <p className='text-[#C4320A] font-bold text-sm mb-4'>
              The Heartbeat of D-Pia
            </p>
            <h3 className='font-semibold text-6xl'>Our People</h3>
            <p className='mt-4 text-sm font-normal'>
              At D-Pia Innovations, our strength lies in our people — a
              community of dedicated individuals who share a common passion for
              technology, innovation, and making a positive impact. Our diverse
              team brings together unique perspectives, skills, and experiences,
              creating a vibrant and collaborative environment.
            </p>
          </div>
          <div className='relative ml-0'>
            <img
              src={HR}
              className='w-[21em] rounded-md h-96 object-contain ml-0'
            />
            <div className='w-96 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-2 border-gray-100 absolute -translate-y-3/4 -translate-x-1/2 h-36 p-2 space-y-2 flex flex-col font-semibold'>
              <span>
                &quot;The supportive culture here motivates me to push
                boundaries and explore new possibilities in the ever-evolving
                tech landscape.&quot;
              </span>
              <span className='text-[#e26542] font-bold text-md'>
                - Faith Sunday, HR
              </span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
