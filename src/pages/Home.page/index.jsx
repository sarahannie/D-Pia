import HeroBackGround from '/hero-background-image.png';
import HeroImage from '/dpia-hero.svg';
import Persona1 from '/persona1.png';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import SummaryImage from '/summary.png';
import Autoplay from 'embla-carousel-autoplay';
import WorkSpaceImage from '/workspace.png';
import OurCultureImage from '/culture.png';
import data from '../../data';

useEmblaCarousel.globalOptions = { loop: true };

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 5000 }),
  ]);
  const [isPlaying, setIsPlaying] = useState(false);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const toggleAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
    playOrStop();
  }, [emblaApi]);

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    setIsPlaying(autoplay.isPlaying());
    emblaApi
      .on('autoplay:play', () => setIsPlaying(true))
      .on('autoplay:stop', () => setIsPlaying(false))
      .on('reInit', () => setIsPlaying(autoplay.isPlaying()));
  }, [emblaApi]);
  return (
    <div>
      <section className=''>
        <section className='relative h-screen'>
          <div className='absolute w-full -z-30'>
            <img
              src={HeroBackGround}
              className='w-full h-screen bg-no-repeat '
            />
          </div>
          <div className='flex flex-col items-center justify-center gap-2 px-6 pt-20 md:px-40'>
            <div className='flex flex-col items-center md:flex-row'>
              <div className='md:w-4/5'>
                <div className='flex flex-col gap-4 text-center text-white md:text-left'>
                  <h1 className='text-4xl font-bold md:text-5xl lg:text-7xl'>
                    <p>Unlocking Potential Through Technology</p>
                  </h1>
                  <p className='mt-2 text-2xl text-gray-200 md:text-3xl'>
                    Transforming {"Africa's"} Future: Inclusive ICT Skill
                    Acquisition and Technology Adoption
                  </p>
                  <button className='bg-[#C4320A] md:w-36 font-semibold py-3 text-xl rounded-md'>
                    Get In Touch
                  </button>
                </div>
              </div>
              <div className='hidden md:block md:w-2/5'>
                <img src={HeroImage} alt='hero image' />
              </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-6 mt-4'>
              <div className='text-2xl font-semibold text-center text-white md:text-3xl'>
                Our Partners:
              </div>
              <div className='flex flex-wrap gap-6 mt-4'>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <div key={idx}>
                    <div className='h-12 bg-gray-400 rounded-md md:h-16 lg:h-20 md:w-40 lg:w-52 w-36'></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='flex flex-wrap justify-between px-6 md:px-40 mt-16 text-[#0B4A6F]'>
            <div className='w-full md:w-2/5'>
              <h2 className='mb-4 text-2xl font-bold text-center md:text-3xl md:text-left'>
                Who We Are
              </h2>
              <div className='flex flex-col text-lg gap-y-2'>
                <p>
                  D-Pia Innovations Limited began as a full fledged information
                  technology company but more recently has evolved into a
                  management consulting practice. We are set up to provide
                  technology driven solution to businesses.
                </p>
                <p>
                  We provide shared workspace services, business process
                  automation, as well as affordable software development
                  training for the middle and lower class. We also drive
                  operational excellence initiatives for optimal positioning of
                  organizations
                </p>
                <p>
                  Our vision is to become one of the top drivers of inclusive
                  ICT skill acquisition and technology adoption for education
                  and business in Africa. D-Pia Innovations is one of the 1000
                  scalable businesses selected for funding out of 93000 from 55
                  African countries by the Tony Elumelu Entrepreneurship
                  Programme in 2017.
                </p>
                <p>
                  The company started out in 2016 with the purpose to become one
                  of the top drivers of inclusive ICT skill acquisition and
                  technology adoption for education and business in Africa.
                </p>
                <button className='bg-[#C4320A] md:w-32  font-medium py-2 text-lg rounded-md mt-3 text-white'>
                  Learn More
                </button>
              </div>
            </div>
            <div className='w-full mt-8 md:w-2/5 md:mt-0'>
              <img
                alt='Persona layout image'
                src={Persona1}
                className='rounded-md h-fit'
              />
            </div>
          </div>
        </section>
        <section className='flex flex-col items-center justify-center mt-32 px-6 md:px-40 mb-8 text-[#0B4A6F]'>
          <div className='flex flex-col items-center w-full mb-8 text-sm text-center'>
            <p className='text-sm font-bold text-orange-600'>
              Training • Technology • Innovation
            </p>
            <h3 className='my-4 text-3xl font-semibold md:text-4xl'>
              What we do
            </h3>
            <p className='text-lg md:w-4/6 md:text-xl'>
              We train. We enable technology integration. We empower innovation.
              We are dedicated to delivering peace-of-mind to our clients
              through our unwavering commitment to excellent outcomes.
            </p>
          </div>
          <div>
            <section className='embla '>
              <div className='embla__viewport' ref={emblaRef}>
                <div className='embla__container h-fit '>
                  <div className='p-4 rounded-lg embla__slide md:p-8'>
                    <div className='flex flex-col items-center gap-8 md:flex-row'>
                      <div className='w-full md:w-1/2'>
                        <img src={SummaryImage} alt='summary image' />
                      </div>
                      <div className='w-full md:w-1/2'>
                        <h3 className='mb-4 text-3xl font-semibold md:text-4xl'>
                          D-Pia Coding Academy
                        </h3>
                        <p className='my-4 text-lg md:text-xl'>
                          The training function of D-Pia Innovations provides
                          ICT training to individuals and employees of clients’
                          organizations.
                        </p>
                        <ul className='list-disc'>
                          <li className='ml-6 text-lg md:text-xl'>Code2Ace</li>
                          <li className='ml-6 text-lg md:text-xl'>Code2Earn</li>
                        </ul>
                        <button className='px-4 py-2 mt-8 font-semibold bg-gray-200 border-2 rounded-md'>
                          Read more
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='p-4 rounded-lg embla__slide md:p-8'>
                    <div className='flex flex-col items-center gap-8 md:flex-row'>
                      <div className='w-full md:w-1/2'>
                        <img
                          src={WorkSpaceImage}
                          alt='summary image'
                          className='h-fit'
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
                            Choose from Premium, Standard, conference room,
                            private office, or virtual office packages.
                          </li>
                          <li className='ml-6 text-lg md:text-xl'>
                            Experience accessibility, affordability, and an
                            unparalleled shared workspace atmosphere.
                          </li>
                        </ul>
                        <button className='px-4 py-2 mt-8 font-semibold bg-gray-200 border-2 rounded-md'>
                          Read more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex '>
                <div className='flex items-center gap-3 embla__controls'>
                  <div className='flex gap-4 embla__buttons'>
                    <button
                      onClick={scrollPrev}
                      className='grid rounded-full size-12 place-content-center embla__button embla__button--prev hover:bg-gray-200 '
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-6 embla__button__svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M15.75 19.5 8.25 12l7.5-7.5'
                        />
                      </svg>
                    </button>
                    <button
                      onClick={scrollNext}
                      className='grid rounded-full embla__button embla__button--next size-12 place-content-center hover:bg-gray-200'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-6 embla__button__svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='m8.25 4.5 7.5 7.5-7.5 7.5'
                        />
                      </svg>
                    </button>
                  </div>
                  <div>
                    <button
                      className='grid rounded-full embla__play size-12 place-content-center hover:bg-gray-200'
                      onClick={toggleAutoplay}
                      type='button'
                    >
                      {isPlaying ? (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='w-6 h-6'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z'
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='w-6 h-6'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        <section className='bg-[#001F6B] text-white py-20'>
          <div className='flex flex-col h-full gap-8 px-4 md:px-40 md:flex-row'>
            <div className='flex flex-col h-full space-y-4 md:w-2/5 '>
              <h3 className='text-5xl font-semibold md:text-4xl'>
                Our Culture
              </h3>
              <p className='w-full text-lg md:text-xl'>
                We believe in the power of innovation to tackle the {`world's`}{' '}
                most significant challenges. When you join our team, you become
                a catalyst for change, a pioneer in the realm of possibility.
              </p>
              <button className='bg-white w-36 font-semibold py-3 text-xl rounded-md text-[#001F6B]'>
                Join Us
              </button>
            </div>
            <div>
              <img src={OurCultureImage} className='rounded-md' />
            </div>
          </div>
        </section>
        <section className='flex flex-col  items-center justify-center mt-12 md:px-40 px-4 mb-8 w-full text-[#0B4A6F] h-fit'>
          <div className='flex flex-col items-center justify-between w-full md:flex-row'>
            <div className='flex flex-col w-full border-2 md:w-fit'>
              <h3 className='font-bold text-orange-600 md:text-sm text-md'>
                Our blog
              </h3>
              <p className='text-3xl font-semibold text-gray-800'>
                Latest blog posts
              </p>
              <p className='text-2xl'>
                {`we're`} about stories, insights, and the ever-evolving world
                of technology.
              </p>
            </div>
            <div className='w-full border-2 md:ml-auto md:w-fit'>
              <button className='p-3 text-gray-700 border border-gray-400 rounded-md'>
                View All
              </button>
            </div>
          </div>
          <div className='flex flex-col gap-16 mt-12 md:flex-row'>
            {data.map((item, idx) => (
              <div key={idx} className='p-4 rounded-md hover:shadow h-fit'>
                <>
                  <img src={item.image} className='w-80' />
                  <div className='mx-2 mt-4 w-72'>
                    <h2 className='my-2 text-sm font-bold text-orange-600'>
                      {item.title}
                    </h2>
                    <h3 className='text-xl font-semibold text-gray-900 line-clamp-2'>
                      {item.heading}
                    </h3>
                    <p className='mt-1 font-medium text-gray-700 text-md line-clamp-3'>
                      {item.body}
                    </p>
                    <div className='flex items-center gap-4 mt-6'>
                      <div>
                        <img
                          src={item.author.image}
                          alt={`author - ${item.author.name}'s profile`}
                          className='object-cover rounded-full size-12'
                        />
                      </div>
                      <div className='flex flex-col'>
                        <span className='font-bold'>{item.author.name}</span>
                        <span className='font-semibold text-gray-500'>
                          {item.author.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
