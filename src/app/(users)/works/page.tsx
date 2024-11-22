'use client';
import Footer from '@/components/shared/footer';
import { Badge } from '@/components/ui/badge';
import WorkCard from '@/components/works/workCard';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { useState } from 'react';

export default function Works() {
	const [active, setActive] = useState('All');
	return (
		<div>
			<div className=" flex flex-col pb-20 justify-center items-center gap-20 pt-24">
				<div className=" space-y-8">
					<h1 className=" text-4xl md:text-[7rem] md:leading-[9rem] font-normal font-oswald text-tertiary text-center">
						IGNITING CHANGE WITH <br /> STRATEGIC COMMUNICATIONS
					</h1>
					<div className="space-y-2 px-4 md:px-20">
						<p className="text-center ">
							They say actions speak louder than words, so let our work show you
							the impact we create.
						</p>
					</div>
				</div>
				<div className=" w-full md:w-1/2 px-4 mx-auto">
					<div className="flex flex-wrap justify-center gap-4 pt-20">
						{services.map((service, i) => (
							<Badge
								variant={'outline'}
								key={service.name}
								onClick={() => setActive(service.name)}
								className={cn(
									'text-center px-3 cursor-pointer py-1 border flex gap-1 border-black font-medium text-sm md:text-base',
									service.name === active && 'text-white bg-black px-2'
								)}>
								{service.name === active && (
									<span className=" bg-white p-px flex justify-center items-center rounded-full text-black">
										<Check strokeWidth={3} className="w-3 h-3" />
									</span>
								)}
								{service.name}
							</Badge>
						))}
					</div>
				</div>
				<div className=" gap-20 flex flex-col px-4 md:px-10 md:max-w-[1350px] mx-auto">
					{projects.map((p, i) => (
						<WorkCard index={i} key={p.name} data={p} />
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
}

const services = [
	{ name: 'All', link: '#' },
	{ name: 'Media Production', link: '/media-production' },
	{ name: 'Strategic Communication', link: '/strategic-communication' },
	{ name: 'Design and Branding', link: '/design-and-branding' },
	{ name: 'Advocacy', link: '/advocacy' },
	{ name: 'Capacity Building', link: '/capacity-building' },
	{ name: 'Creative Studio/Hub', link: '/creative-studio-hub' },
];

const projects = [
	{
		name: 'The IWMI PhotoVoice Research Project',
		organization: 'International Water Management Institute (IWMI)',
		description:
			'At Dinovate Solutions, we are committed to showcasing the profound impact of the International Water Management Institute (IWMI) in addressing water security challenges faced by communities in Adamawa State, Nigeria. The IWMI project has played a pivotal role in highlighting the stark realities faced by these communities grappling with severe water scarcity due to socio-economic and environmental factors. This initiative has empowered community members to voice their experiences, fostering greater global awareness and advocacy. The research, conducted in four different communities in Adamawa State, Nigeria, sheds light on the challenges of accessing clean water and sanitation facilities amid displacement. Collaborating with Dinovate, IWMI facilitated workshops where community members used cameras and media tools to capture compelling images that depict both the challenges and resilience in their daily lives. This project empowered community members to become their own narrators, using cameras to document their water journeys and harsh water realities. The photos serve as poignant reminders of the ongoing struggle and the aspirations for a better future.',
		media: {
			images: 'Add pictures from the project',
			links: ['Hyperlink-blog post & Videos'],
		},
	},
	{
		name: 'Phase II- IWMI Photovoice Project',
		organization: 'International Water Management Institute (IWMI)',
		description:
			"Building on the success of the Photovoice Research Project in Adamawa State, Dinovate Solutions elevated the IWMI Photovoice Project in its second phase by creating two impactful storytelling mediums: a three-episode podcast series and a visually compelling photo essay book. These initiatives amplified the voices of fragile and conflict-affected communities, bringing their stories to a broader audience. The podcast series, recorded at Dinovate’s state-of-the-art studio, featured members of the community and an IWMI representative. Through heartfelt conversations, the episodes highlighted personal experiences, challenges, and resilience while weaving in expert perspectives. Complementing this, the photo essay book showcased powerful images captured by community participants, enriched with concise narratives and case studies. Designed for advocacy, the book provided a visually engaging and accessible tool to inspire empathy, awareness, and action among stakeholders and policymakers. Both mediums served as platforms for storytelling and advocacy, reinforcing the project's mission to shed light on water system vulnerabilities in Adamawa State.",
		media: {
			images: 'Add images',
		},
	},
	{
		name: 'Borderland Documentaries Series',
		organization: 'United Nations Development Programme (UNDP)',
		description:
			"Dinovate Solutions partnered with the UNDP to produce the Borderland Documentary Series, an 11-episode exploration of resilience and innovation in Africa's border communities set in multiple African countries. Each episode highlights unique stories of individuals and communities overcoming challenges through ingenuity, cooperation, and determination. The series aimed to raise awareness, inspire policy change, and promote development by showcasing real voices and authentic experiences. This series effectively supports UNDP’s mission of fostering sustainable development and resilience in Africa’s borderlands.",
		media: {
			video: 'Upload 1 of the trailers here',
			images: 'Pictures',
		},
	},
	{
		name: 'Redesign and Graphical Illustration of the National Standing Order',
		organization: 'Banyan Global',
		description:
			'Elevating Community Health Practices with Dinovate Solutions. Community Health Practitioners (CHPs) play a critical role in rural healthcare, serving as the first point of contact for millions. To bolster their work, the Community Health Practitioners’ Registration Board of Nigeria, in partnership with Banyan Global and the USAID Health Workforce Management Activity, introduced the 2024 revised National Standing Orders. Dinovate Solutions was proud to enhance this essential guide by integrating visually engaging aids that simplify complex medical procedures and conditions. These illustrations not only improve understanding but also promote the practical application of life-saving protocols, ensuring CHPs can deliver high-quality care effectively.',
		keyBenefits: [
			'Enhanced Understanding: Simplifies intricate medical concepts through visuals.',
			'Improved Retention: Combines text and images to strengthen learning.',
			'Practical Application: Provides step-by-step visuals for emergencies and routine care.',
			'Accessibility: Overcomes language barriers with visual content.',
			'Engagement: Encourages frequent use and active referencing.',
		],
		media: {
			images: 'Add pictures of the Revised Standing Order',
		},
	},
	{
		name: 'Documentary of the Revised National Standing Order',
		organization: 'Banyan Global',
		description:
			'Following the success of the design phase, Dinovate Solutions documented the process that led to the revision and launch of the 2024 revised National Standing Orders, capturing this milestone in an engaging and impactful documentary. The film celebrated the collaborative efforts of Banyan Global, USAID, and the Community Health Practitioners’ Registration Board in revolutionizing healthcare delivery. Through interviews with stakeholders, real-life testimonies from CHPs, and comprehensive event coverage, the documentary showcased the guide’s potential to transform rural healthcare practices. This project highlights Dinovate’s ability to tell powerful stories that inspire change while amplifying the impact of critical healthcare initiatives.',
		media: {
			video: 'Upload a trailer to the documentary',
			links: ['Add link to watch the full documentary on YouTube'],
		},
	},
];
