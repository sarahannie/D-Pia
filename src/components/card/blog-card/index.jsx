/* eslint-disable react/prop-types */
import Icons from "../../Icons"
import { Link, useNavigate } from "react-router-dom"
export default function BlogCard({ item }) {

	const navigate = useNavigate();
	return (
		<div
			className='p-2 rounded-md hover:shadow h-fit group'
		>
			<Link to="/blogs" onClick={() => navigate('/blogs')}>
				<img src={item.image} className='shadow-sm w-72 xl:w-[22em]' />
				<div className='w-72 xl:w-[22em] mt-4'>
					<h2 className='my-2 text-sm font-bold text-orange-600'>
						{item.title}
					</h2>
					<div className='flex items-center w-full gap-2 justify-evenly '>
						<div>
							<h3 className='text-xl font-semibold text-gray-900 '>

								{item.heading}
							</h3>
						</div>
						<div>
							<Icons.ArrowUpRight
								className='font-extrabold text-black duration-500 size-4 group-hover:translate-x-1 group-hover:-translate-y-2' />
						</div>
					</div>
					<p className='mt-1 font-medium text-gray-500 text-md line-clamp-3'>
						{item.body}
					</p>
					<div className='flex items-center gap-4 mt-6'>
						<div>
							<img
								src={item.author.image}
								alt={`author - ${item.author.name}'s profile`}
								className='object-cover rounded-full size-8 xl:size-12'
							/>
						</div>
						<div className='flex flex-col'>
							<span className='font-bold max-sm:text-base'>
								{item.author.name}
							</span>
							<span className='font-semibold text-gray-500 max-sm:text-base'>
								{item.author.date}
							</span>
						</div>
					</div>
				</div>
			</Link>
		</div>
	)
}
