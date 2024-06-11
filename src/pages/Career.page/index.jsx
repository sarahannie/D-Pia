import InclusiveCulture from '/inclusive-culture.png';
import Innovation from '/innovation.png';
import Impact from '/impact.png';
import OurCultureImage from '/culture.png';
export default function CareerPage() {
  return (
    <section>
      <section className='bg-[#001F6B] text-white py-20 xl:px-40 px-4 lg:px-20'>
        <div className='flex flex-col gap-8 text-left'>
          <h1 className='w-full text-3xl font-semibold xl:w-3/5 xl:text-5xl'>
            <>CAREER OPPORTUNITIES AT D-PIA INNOVATIONS</>
          </h1>
          <p className='w-full text-base text-gray-200 xl:w-1/2 lg:text-2xl'>
            Welcome to a world of opportunities at D-Pia Innovations, where we
            believe in fostering talent, encouraging innovation, and building a
            dynamic team that shapes the future of technology. Join us in our
            journey to drive inclusive ICT skill acquisition and technology
            adoption for education and business in Africa.
          </p>
          <div>
            <a
              href='mailto:test@gmail.com'
              className='w-32 h-8 p-3 font-semibold text-white bg-gray-600 rounded-sm shadow-md'
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className='py-14 text-[#13364b] px-4 lg:px-20 xl:px-40'>
          <div className='flex flex-col items-center justify-center gap-y-8'>
            <div>
              <h2 className='text-3xl font-bold'>Why Choose D-pia?</h2>
            </div>
            <div className='flex flex-wrap justify-center gap-6 item-center'>
              <div className='bg-white rounded-lg shadow-lg w-80'>
                <>
                  <img
                    src={InclusiveCulture}
                    alt='image portraying diverse culture'
                    className='rounded-t-lg object-fit'
                  />
                </>
                <div className='px-2 space-y-1'>
                  <p className='mt-2 text-2xl font-bold'>Inclusive Culture</p>
                  <p className='font-semibold text-gray-600'>
                    Embrace a diverse and inclusive work environment that values
                    creativity, collaboration, and continuous learning
                  </p>
                </div>
              </div>
              <div className='bg-white rounded-md shadow-lg w-80'>
                <>
                  <img
                    src={Innovation}
                    alt='image portraying innovation'
                    className='rounded-t-lg object-fit'
                  />
                </>
                <div className='px-3 py-1 pb-4 space-y-1'>
                  <p className='mt-2 text-2xl font-bold'>Innovation</p>
                  <p className='font-semibold text-gray-600'>
                    Be part of a team that thrives on innovation and
                    cutting-edge technology solutions.
                  </p>
                </div>
              </div>
              <div className='bg-white rounded-md shadow-lg w-80'>
                <>
                  <img
                    src={Impact}
                    alt='image portraying Impact'
                    className='rounded-t-lg object-fit'
                  />
                </>
                <div className='px-3 py-1 pb-4 space-y-1'>
                  <p className='mt-2 text-2xl font-bold'>Impact</p>
                  <p className='font-semibold text-gray-600'>
                    Contribute to our vision of driving positive change through
                    inclusive ICT skill acquisition and technology adoption
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#001F6B] text-white py-10 lg:py-20 '>
        <div className='flex flex-col h-full gap-8 px-4 md:px-8 xl:px-40 xl:flex-row'>
          <div className='flex flex-col justify-center h-full space-y-6 text-center lg:text-left xl:w-1/2'>
            <h3 className='text-3xl font-semibold xl:text-4xl'>Our Culture</h3>
            <p className='w-full text-md lg:text-xl'>
              We believe in the power of innovation to tackle the {`world's`}{' '}
              most significant challenges. When you join our team, you become a
              catalyst for change, a pioneer in the realm of possibility.
            </p>
            <div className='flex gap-4'>
              <button className='bg-white xl:w-36 font-semibold py-2 w-full text-xl rounded-md text-[#001F6B]'>
                Join Us
              </button>
              <button className='bg-[#C4320A] xl:w-36 font-semibold py-2 w-full text-xl rounded-md '>
                Our Vision
              </button>
            </div>
          </div>
          <div className='flex justify-center'>
            <img src={OurCultureImage} className='rounded-md' />
          </div>
        </div>
      </section>
      <section>
        <div className='px-4 py-20 md:px-40 '>
          <div>
            <div className='mb-5'>
              <h3 className='text-3xl font-bold text-gray-500'>Current Openings at D-pia</h3>
            </div>
            <div className='space-y-6'>
              <div>
                <p className='mb-2 text-xl font-bold text-gray-700'>Software Developer</p>
                <ul className='font-medium list-disc text-gray-800/90'>
                  <li className='ml-6'>
                    Expertise in web/mobile app development.
                  </li>
                  <li className='ml-6'>
                    Proficiency in programming languages such as Python, Java, or JavaScript.
                  </li>
                </ul>
                <p className='mt-2 ml-2 font-bold cursor-pointer text-gray-800/70'>
                  View Job details
                </p>
              </div>
              <div>
                <p className='mb-2 text-xl font-bold text-gray-700'>Network Engineer</p>
                <ul className='font-medium list-disc text-gray-800/90'>
                  <li className='ml-6'>
                    Experience in large-scale networking solutions.
                  </li>
                  <li className='ml-6'>
                    Strong understanding of network protocols and security.
                  </li>
                </ul>
                <p className='mt-2 ml-2 font-bold cursor-pointer text-gray-800/70'>
                  View Job details
                </p>
              </div>
              <div>
                <p className='mb-2 text-xl font-bold text-gray-700'>HR Specialist</p>
                <ul className='font-medium list-disc text-gray-800/90'>
                  <li className='ml-6'>
                    Skills in talent acquisition, employee relations, and HR management.
                  </li>
                  <li className='ml-6'>
                    Ability to contribute to a positive and inclusive workplace culture.
                  </li>
                </ul>
                <p className='mt-2 ml-2 font-bold cursor-pointer text-gray-800/70'>
                  View Job details
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='px-4 md:px-40 '>
          <div className='w-full xl:w-[50%] text-balance lg:text-left'>
            <h2 className='mb-4 text-2xl font-bold text-center text-gray-700 lg:text-3xl xl:text-left'>
              How to Apply
            </h2>
            <div className='flex flex-col text-base font-normal xl:text-lg xl:text-left gap-y-2 text-gray-800/90'>
              <p>
                If you&apos;re ready to be a part of our dynamic team, send your resume and a cover letter highlighting your skills and experiences to careers@dpia-innovations.com. Please include the position you are applying for in the subject line.
              </p>
              <p>
                At D-Pia Innovations, we believe in empowering our team to make a difference. Join us on this exciting journey, and let&apos;s shape the future together.
              </p>
              <p>
                Follow us on <a href='https://ng.linkedin.com/company/dpiainnovations' target='_blank' className='font-semibold underline'>LinkedIn</a> for the latest updates on career opportunities and company news
              </p>
              <p>
                D-Pia Innovations is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.
              </p>

            </div>
          </div>
        </div>
      </section>
    </section>
  );
}