import TeamImage from '/join-team.png';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogCard from '../../components/card/blog-card';

import data from '../../data';
export default function PortfolioPage() {
	const navigate = useNavigate()
	return (
		<section>
			<section className='text-[#001F6B] bg-[#F5FBFF] py-10 lg:py-20 md:px-20 xl:px-40 px-4'>
				<div className='flex flex-col gap-8 text-center xl:text-left'>
					<h1 className='w-full text-lg font-semibold xl:text-3xl xl:w-2/4 md:text-5xl'>
						Welcome to the D-Pia Innovations Portfolio Page, where we proudly present a glimpse into our transformative solutions:
					</h1>
					<p className='w-full text-base xl:w-1/2 md:text-lg'>
						Explore our portfolio, and envision a future where technology meets excellence, transforming the way you operate and excel in your industry.
					</p>
				</div>
			</section>
			<section className='my-12 lg:my-24'>
				<div className=''>
					<div className='flex items-center w-full bg-blue-500 lg:relative'>
						<div className='bg-[#001F6B] h-[65vh] w-1/2 bottom-0 hidden md:block'></div>
						<div className='right-0 w-full p-4 bg-blue-500 lg:relative lg:p-8 md:w-1/2 h-fit'>
							<div className='h-[10vh] absolute -top-1/4 right-0 hidden xl:block bg-amber-800/80 w-80'></div>
							<div className='text-white'>
								<h2 className='my-2 text-3xl font-bold lg:font-semibold lg:text-5xl'>
									DEPROCURE: Revolutionizing Procurement
								</h2>
								<p className='my-2 text-md lg:text-lg'>
									DeProcure stands as an end-to-end digital procurement suite meticulously designed to streamline and enhance the entire procurement process. From Vendor Pre-qualification/Onboarding to Vendor Payment Processing, DeProcure ensures a seamless journey. It boasts robust features, including Vendor Document Management, Vendor Performance Management, Staff Requisition Management, Order Fulfillment, Tendering and Bidding, Procurement Committee Meeting Management, and more. DeProcure is your comprehensive solution for efficient and effective procurement operations.
								</p>
								<div>
									<button className='bg-[#C4320A] w-60 mx-auto xl:w-36 font-semibold py-3 text-xl xl:mx-0 rounded-md ' >
										Explore
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='flex items-center w-full bg-blue-500 lg:relative'>
						<div className='right-0 w-full p-4 bg-blue-500 lg:relative lg:p-8 md:w-1/2 h-fit'>
							<div className='text-white'>
								<h2 className='w-3/4 my-3 text-3xl font-bold lg:font-semibold lg:text-5xl'>
									LMS: Elevating Learning Experiences
								</h2>
								<p className='my-2 text-md lg:text-lg'>
									A learning organization is a thriving organization. With our Learning Management System (LMS), we empower you to deploy e-learning courses tailored to your organization&apos;s unique needs. Whether you&apos;re looking to make in-house content accessible as a paid e-learning course or seeking to deploy personalized e-learning portals, our LMS is your gateway to fostering continuous learning within your organization.
								</p>
								<div>
									<button className='bg-[#C4320A] w-60 mx-auto xl:w-36 font-semibold py-3 text-xl xl:mx-0 rounded-md '>
										Explore
									</button>
								</div>
							</div>
						</div>
						<div className='bg-[#001F6B] h-[70vh] w-1/2 bottom-0 hidden md:block'></div>
					</div>
					<div className='flex items-center w-full bg-blue-500 lg:relative'>
						<div className='bg-[#001F6B] h-[65vh] w-1/2 bottom-0 hidden md:block'></div>
						<div className='right-0 w-full p-4 bg-blue-500 lg:relative lg:p-8 md:w-1/2 h-fit'>
							<div className='h-[10vh] absolute -top-1/4 right-0 hidden xl:block bg-amber-800/80 w-80'></div>
							<div className='text-white'>
								<h2 className='my-2 text-3xl font-bold lg:font-semibold lg:text-5xl'>
									PRACT+ ENTERPRISE: Boosting Organizational Productivity
								</h2>
								<p className='my-4 text-md lg:text-lg'>
									Productivity is the heartbeat of organizational success, and Pract+ Enterprise is the pulse that keeps it strong. This innovative solution enables managers to effortlessly track tasks assigned to their teams and monitor team members&apos; productivity. Tasks seamlessly link to company goals, making goal alignment a breeze. Recognizing and rewarding employees, along with facilitating peer reviews, is simplified through our intuitive point system. Pract+ Enterprise is your ally in achieving and surpassing organizational productivity goals.
								</p>
								<div>
									<button className='bg-[#C4320A] w-60 mx-auto xl:w-36 font-semibold py-3 text-xl xl:mx-0 rounded-md '>
										Explore
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='flex flex-col items-center justify-center pt-8 lg:pt-16 px-4 xl:px-40 mb-8 text-[#0B4A6F]'>
				<div className='flex flex-col items-center w-full text-sm text-center'>
					<p className='text-sm font-bold text-orange-600'>
						Our blog
					</p>
					<h3 className='my-2 text-3xl font-bold md:text-4xl'>
						Latest blog posts
					</h3>
					<p className='xl:text-lg xl:w-4/6 md:text-xl'>
						we&apos;re about stories, insights, and ever-evolving world of technology.
					</p>
				</div>
				<div className='flex flex-wrap justify-center w-full gap-4 mt-8 xl:gap-16'>
					{data.map((item, idx) => (
						<Fragment key={idx}>
							<BlogCard idx={idx} item={item} />
						</Fragment>
					))}
				</div>
				<div>
					<button className='bg-[#fc5629] w-60 mx-auto mt-12 text-white xl:w-36 font-semibold py-3 text-xl xl:mx-0 rounded-md' onClick={() => navigate('/blog')}>
						view all blogs
					</button>
				</div>
			</section>
			<section className='bg-gray-800 h-[70vh] flex items-center lg:mt-28'>
				<div className='flex flex-wrap items-center justify-center w-full px-4 space-y-8 xl:justify-between xl:px-40 xl:flex-row'>
					<div className='flex flex-col space-y-4 text-white xl:w-1/2 xl:block'>
						<h2 className='text-3xl font-bold text-center xl:text-4xl xl:text-left'>
							Join hands with D-Pia Technology Solutions
						</h2>
						<p className='w-3/4 mx-auto text-lg text-center xl:text-xl xl:text-left'>
							A transformative digital journey that aligns with your business
							goals
						</p>
						<button className='px-4 py-2 mt-4 font-semibold w-full xl:w-32 bg-[#C4320A] text-white rounded-md'>
							Contact us
						</button>
					</div>
					<div className='hidden xl:block'>
						<img src={TeamImage} alt='team image' className='xl:w-[32em] ' />
					</div>
				</div>
			</section>
		</section>
	)
}
