
import AuthorImage from '/hr-author.png'
import Card1 from '/card-image-1.png'
import Card2 from '/card-image-2.png'
import Card3 from '/card-image-3.png'
import { Compass, Shield, Trophy, Lightbulb } from 'lucide-react'
import stanbic_ibtc from '/Stanbic-ibtc-logo.png'
import threemtt_logo from '/3mtt-logo.png'
import anchor_logo from '/anchor-logo.png'
import first_technical_logo from '/first-technical-logo.png'
import sea_guard_marine_logo from '/sea-guard-marine-logo.png'


const data = [{
	image: Card1,
	title: 'Skill Acquisition',
	heading: "Nigeria's audacious goal of becoming a net export of tech talents",
	body: "This kind of initiative is not the first for a developing nation. In the early 1990s, India's tech sector was relatively underdeveloped, but twenty years ago, India made a concerted effort to position itself as a hub of technology professionals for global markets",
	author: {
		name: 'Faith Sunday',
		date: '7 May 2024',
		image: AuthorImage
	}
}, {
	image: Card2,
	title: 'Technology Trend',
	heading: 'Responsive use of Technology in AI era',
	body: 'In a world powered by Artificial Intelligence, the choices we make about technology have never been more critical.',
	author: {
		name: 'Faith Sunday',
		date: '7 May 2024',
		image: AuthorImage
	}
}, {
	image: Card3,
	title: 'Productivity',
	heading: 'How to increase your productivity with technology',
	body: "In today's fast-paced world, where time is of the essence, the desire to get more things done within a shorter time is more vital than ever.",
	author: {
		name: 'Faith Sunday',
		date: '7 May 2024',
		image: AuthorImage
	}
}]
export default data;

export const extendedData = [
	{
		image: Card2,
		title: 'Skill Acquisition',
		heading: "Nigeria's audacious goal of becoming a net export of tech talents",
		body: "This kind of initiative is not the first for a developing nation. In the early 1990s, India's tech sector was relatively underdeveloped, but twenty years ago, India made a concerted effort to position itself as a hub of technology professionals for global markets",
		author: {
			name: 'Faith Sunday',
			date: '7 May 2024',
			image: AuthorImage
		}
	},
	{
		image: Card3,
		title: 'Technology Trend',
		heading: 'Responsive use of Technology in AI era',
		body: 'In a world powered by Artificial Intelligence, the choices we make about technology have never been more critical.',
		author: {
			name: 'Faith Sunday',
			date: '7 May 2024',
			image: AuthorImage
		}
	},
	{
		image: Card1,
		title: 'Productivity',
		heading: 'How to increase your productivity with technology',
		body: "In today's fast-paced world, where time is of the essence, the desire to get more things done within a shorter time is more vital than ever.",
		author: {
			name: 'Faith Sunday',
			date: '7 May 2024',
			image: AuthorImage
		}
	},
	{
		image: Card2,
		title: 'New Topic 1',
		heading: 'The Impact of Blockchain on Financial Transactions',
		body: "Exploring how blockchain technology is reshaping financial transactions by enhancing security, reducing fraud, and streamlining cross-border payments.",
		author: {
			name: 'Faith Sunday',
			date: '8 May 2024',
			image: AuthorImage
		}
	},
	{
		image: Card3,
		title: 'New Topic 2',
		heading: 'Emerging Trends in Sustainable Energy',
		body: "Discussing the latest advancements in renewable energy sources and technologies aimed at achieving a sustainable and eco-friendly energy future.",
		author: {
			name: 'Faith Sunday',
			date: '9 May 2024',
			image: AuthorImage
		}
	},
	{
		image: Card1,
		title: 'New Topic 3',
		heading: 'Revolutionizing Healthcare through AI',
		body: "Investigating how artificial intelligence is transforming healthcare delivery, from personalized medicine to predictive analytics for disease management.",
		author: {
			name: 'Faith Sunday',
			date: '10 May 2024',
			image: AuthorImage
		}
	},
	{
		image: Card2,
		title: 'New Topic 4',
		heading: 'The Evolution of Cybersecurity Threats',
		body: "Analyzing the changing landscape of cybersecurity threats and the importance of adaptive security measures in the face of evolving cyberattacks.",
		author: {
			name: 'Faith Sunday',
			date: '11 May 2024',
			image: AuthorImage
		}
	},
	{
		image: Card2,
		title: 'New Topic 5',
		heading: 'Navigating the Metaverse: Opportunities and Challenges',
		body: "An exploration of the metaverse, its potential to redefine social interactions and commerce, and the ethical considerations surrounding its development.",
		author: {
			name: 'Faith Sunday',
			date: '12 May 2024',
			image: AuthorImage
		}
	},
	{
		image: Card1,
		title: 'New Topic 6',
		heading: 'Climate Change Adaptation Strategies',
		body: "Examining various strategies for adapting to climate change, including infrastructure resilience, community preparedness, and policy interventions.",
		author: {
			name: 'Faith Sunday',
			date: '13 May 2024',
			image: AuthorImage
		}
	}
];

export const subPaths = [{
	name: "Code Academy",
	to: "/what-we-do/code-academy",
	description: "Closing tech skill gaps through ICT training for all ages"
}, {
	name: "Innovation Hub",
	to: "/what-we-do/innovation-hub",
	description: "Where startups thrive with diverse workspace options and innovation support"
}, {
	name: "Management Consulting",
	to: "/what-we-do/management-consulting",
	description: "Essential services tailored to elevate your organizational efficiency and performance."
}, {
	name: "Technology Solutions",
	to: "/what-we-do/technology-solutions",
	description: "Empowering digital evolution with cutting-edge tech solutions for innovation and efficiency"
}
]

export const values = [
	{
		Icon: Compass,
		heading: "Proactivity",
		body: "Anticipating needs and taking initiative to create positive outcomes",
	},
	{
		Icon: Shield,
		heading: "Integrity",
		body: "Upholding honesty, transparency, and ethical behavior in all endeavors"
	},
	{
		Icon: Trophy,
		heading: "Excellence",
		body: "Striving for the highest standards of quality and continuous improvement"
	},
	{
		Icon: Lightbulb,
		heading: "Innovation",
		body: "Fostering a culture of creativity and embracing forward-thinking solutions"
	}
]

export const partners = [
	{
		name: '3mtt',
		image: threemtt_logo
	}, {
		name: 'anchor',
		image: anchor_logo
	},
	{
		name: 'first technical',
		image: first_technical_logo
	}, {
		name: 'sea guard marine',
		image: sea_guard_marine_logo
	}, {
		name: 'stanbic ibtc',
		image: stanbic_ibtc
	}
]