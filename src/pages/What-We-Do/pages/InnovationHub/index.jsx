import WorkSpaceImage from '/workspace.png';
import Award from '../../../../assets/award-Icon.svg';
import Icons from '../../../../components/Icons';

export default function InnovationHub() {
  return (
    <section>
      <section className='bg-[#001F6B] text-white py-20 md:px-40 px-4'>
        <div className='flex flex-col gap-8 text-left'>
          <h1 className='w-full text-3xl font-semibold lg:w-3/5 md:text-5xl'>
            <span className='block w-full'>INNOVATION HUB:</span>
            <span>Fosterng Creativity</span>
            <span>Collaboration</span>
          </h1>
          <p className='w-full text-base lg:w-1/2 md:text-lg'>
            D-Pia Innovation Hub is your destination for Shared Workspace
            services and Innovative ideas development. Catering to startups, we
            offer a variety of workspace packages—Premium, Standard, conference
            room, private office, and virtual office. Say goodbye to the
            ordinary work routine and embrace productivity in an environment
            designed for collaboration and innovation.
          </p>
        </div>
      </section>
      <section className='bg-[#F5FBFF] text-[#0B4A6F] py-20 md:px-40'>
        <div className='p-4 rounded-lg h-96 md:p-0'>
          <div className='flex flex-col items-center gap-8 md:flex-row'>
            <div className='w-full md:w-1/2'>
              <img
                src={WorkSpaceImage}
                alt='summary image'
                className='rounded-md h-fit'
              />
            </div>
            <div className='w-full md:w-1/2'>
              <h3 className='my-4 text-3xl font-semibold md:text-4xl'>
                Shared Workspace Services
              </h3>

              <ul className='list-disc'>
                <li className='ml-6 text-lg md:text-xl'>
                  Tailored for remote workers, entrepreneurs, and tech
                  enthusiasts.
                </li>
                <li className='ml-6 text-lg md:text-xl'>
                  Choose from Premium, Standard, conference room, private
                  office, or virtual office packages.
                </li>
                <li className='ml-6 text-lg md:text-xl'>
                  Experience accessibility, affordability, and an unparalleled
                  shared workspace atmosphere.
                </li>
              </ul>
              <div className='mt-4'>
                <div className='flex items-center gap-2'>
                  <span>
                    <Icons.MapPin />
                  </span>
                  <span className='text-lg font-bold'>
                    518, Ikorodu Road, Beside Polaris bank, Ketu, Lagos,
                    Nigeria.
                  </span>
                </div>
                <button className='px-4 py-2 mt-4 font-semibold bg-[#C4320A] text-white rounded-md'>
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='px-4 py-20 md:px-40 text-[#0B4A6F] bg-gray-50/80'>
        <div className='flex flex-col gap-8 text-left'>
          <h1 className='w-full text-3xl font-semibold lg:w-3/5 md:text-5xl'>
            <span className='block w-full'>
              Why Choose D-Pia Coding Academy?
            </span>
          </h1>
          <div>
            <ul className='w-3/5 space-y-4'>
              <li className='flex items-center gap-4 text-xl font-semibold'>
                <span>
                  <img src={Award} alt='award icon' className='size-8' />
                </span>
                <span>
                  Hands-On Experience: Practical, real-world projects provide a
                  solid foundation.
                </span>
              </li>
              <li className='flex items-center gap-4 text-xl font-semibold'>
                <span>
                  <img src={Award} alt='award icon' className='size-8' />
                </span>
                <span>
                  Collaborative Learning: Teamwork and idea-sharing foster an
                  environment of creativity and camaraderie.
                </span>
              </li>
              <li className='flex items-center gap-4 text-xl font-semibold'>
                <span>
                  <img src={Award} alt='award icon' className='size-8' />
                </span>
                <span>
                  Expert Mentors: Our talented mentors ensure a supportive and
                  enjoyable learning journey.
                </span>
              </li>
              <li className='flex items-center gap-4 text-xl font-semibold'>
                <span>
                  <img src={Award} alt='award icon' className='size-8' />
                </span>
                <span>
                  Internship Opportunities: Code2Earn participants have the
                  chance to gain valuable industry experience.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className='bg-[#001F6B] text-white py-20 flex flex-col gap-y-4 items-center justify-between px-16 w-full rounded-3xl mt-28'>
          <div>
            <p className='mt-4 text-4xl font-semibold'>
              At D-Pia Innovation Hub, we believe in providing the perfect
              environment for your success. Join us in creating a community
              where diverse minds collaborate, innovate, and turn ideas into
              reality.
            </p>
          </div>
          <div>
            <button className='bg-[#C4320A] md:w-32  font-medium py-2 text-lg rounded-md mt-3 text-white'>
              Enroll
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
