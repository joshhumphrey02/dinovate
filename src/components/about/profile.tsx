'use client';
import {
	ArrowLeft,
	Facebook,
	Instagram,
	Linkedin,
	Mail,
	Twitter,
} from 'lucide-react';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '../ui/sheet';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { useEffect, useRef } from 'react';
import { uniqueId } from 'lodash';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Profile() {
	const cardsRef = useRef<HTMLDivElement[]>([]);

	const addToRefs = (el: any) => {
		if (el && !cardsRef.current.includes(el)) {
			cardsRef.current.push(el);
		}
	};
	useEffect(() => {
		gsap.fromTo(
			cardsRef.current,
			{ opacity: 0, y: 40 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				stagger: 0.2,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: cardsRef.current,
					start: 'top 80%',
					end: 'bottom 20%',
					toggleActions: 'play none none reset',
				},
			}
		);
	}, []);
	const mergedArray = Array.from({
		length: Math.max(text.length, profilesData.length),
	})
		.flatMap((_, i) => [text[i], profilesData[i]])
		.filter(Boolean);
	return (
		<div>
			<div className="grid sm:grid-cols-3 relative gap-4">
				{mergedArray.map((t, i) => (
					<div key={uniqueId()} ref={addToRefs} className=" relative">
						{typeof t === 'string' ? (
							<div className="h-full flex items-center justify-center">
								<h1 className="text-4xl select-none uppercase w-full md:basis-[31%] font-oswald font-medium sm:text-5xl text-blue-600">
									{t}
								</h1>
							</div>
						) : (
							<div className="relative">
								<Sheet>
									<div className=" relative basis-[31%]">
										<div className="flex flex-col gap-1">
											<div>
												<img
													src={t.image}
													alt={t.name}
													className=" w-full object-cover h-[21rem] sm:h-[19rem] xl:h-[24rem]"
												/>
											</div>
											<h4>{t.name}</h4>
											<p className="text-xs text-tertiary">{t.title}</p>
											<div className=" flex gap-2 items-center">
												<span>
													<Mail className="w-4 h-4" />
												</span>
												<span>
													<Linkedin className="w-4 h-4" />
												</span>
												<SheetTrigger className=" uppercase w-fit text-pink-700 font-bold">
													Bio
												</SheetTrigger>
											</div>
										</div>
									</div>
									<SheetContent
										side={'left'}
										className={cn(
											'px-4 space-y-2 w-full sm:min-w-[45vw] overflow-y-scroll min-h-screen'
										)}>
										<SheetHeader>
											<SheetTitle className="">
												<div className=" w-full flex justify-center sm:w-[60%] sm:mx-auto sm:justify-start">
													<img
														src={t.image}
														alt={t.name}
														className="w-full max-w-[18rem] object-cover h-[21rem] sm:h-[19rem]"
													/>
												</div>
											</SheetTitle>
										</SheetHeader>
										<div
											className={cn(
												'grid relative gap-2 w-full sm:w-[60%] flex-col  mx-auto py-6 sm:py-0'
											)}>
											<SheetClose className=" hidden sm:flex">
												<Button variant={'link'}>
													<div className="flex items-center justify-center p-6 bg-tertiary rounded-full z-[10000] fixed top-[45%] right-[52%] ">
														<ArrowLeft strokeWidth={1} className="w-10 h-10" />
													</div>
												</Button>
											</SheetClose>
											<h4 className="text-xl sm:text-2xl text-tertiary">
												{t.name}
											</h4>
											<h5>{t.title}</h5>
											<p>{t.des}</p>
										</div>
									</SheetContent>
								</Sheet>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

const profilesData = [
	{
		name: 'Temidayo Ibitoye',
		title: 'CEO and founder',
		image: '/profiles/ceo-Dayo.jpg',
		des: 'Temidayo Ibitoye is the CEO and founder of Dinovate Solutions. He leads the company in pioneering innovative communication strategies across Africa, empowering global development organizations to achieve sustainable impact. Renowned for his expertise in effective storytelling, visual communication, strategic branding, and knowledge management, Temidayo has spearheaded pivotal projects for major institutions including the United Nations, the European Union, USAID, the World Bank, and the Mastercard Foundation.',
		social: [
			{ icon: Facebook, link: 'https://www.facebook.com/dayo.ibitoye' },
			{ icon: Twitter, link: 'https://x.com/Dayoibitoye' },
			{ icon: Linkedin, link: 'https://www.linkedin.com/in/temidayo-ibitoye/' },
			{ icon: Instagram, link: 'https://www.instagram.com/dayoibitoye/' },
		],
	},
	{
		name: 'Oluseyi Abdulmalik',
		title: 'Lead, Strategic Communications',
		image: '/profiles/Oluseyi-Abdulmalik.jpg',
		des: "Oluseyi Abdulmalik leads Strategic Communications at Dinovate Solutions. She brings over 15 years of experience in media and strategic communications across diverse sectors, enhancing the company's strategic initiatives and global communications efforts.",
		social: [
			{ icon: Facebook, link: '#' },
			{ icon: Twitter, link: '#' },
			{ icon: Linkedin, link: '#' },
			{ icon: Instagram, link: '#' },
		],
	},
	{
		name: 'Farid Suleiman',
		title: 'Project Officer',
		image: '/profiles/Fareed-Suleiman.jpeg',
		des: 'Farid Suleiman spearheads projects as the Project Manager at Dinovate Solutions, guiding them from conception to delivery. With a proven track record in managing creative media projects, he has successfully led projects across multiple sectors. Farid Is dedicated to utilizing his expertise to drive meaningful social impact initiatives.',
		social: [
			{ icon: Facebook, link: '#' },
			{ icon: Twitter, link: '#' },
			{ icon: Linkedin, link: 'https://www.linkedin.com/in/ferid-sulieman/' },
			{ icon: Instagram, link: '#' },
		],
	},
	{
		name: 'Azeez Badmus',
		title: 'Lead Cinematographer',
		image: '/profiles/Azeez-Badmus.jpeg',
		des: 'Azeez Badmus is the lead cinematographer and video editor at Dinovate Solutions. He specializes in creating captivating visual content through his expertise in animation, video editing, videography, and motion graphics. Prior to joining Dinovate, Azeez has worked with renowned brands such as Binance, Mixagrip Woods (Ghana), Power Plug, and Kunle Afolayan Production, showcasing his versatile skill set and creative vision.',
		social: [
			{ icon: Facebook, link: '#' },
			{ icon: Twitter, link: '#' },
			{ icon: Linkedin, link: '#' },
			{ icon: Instagram, link: '#' },
		],
	},
	{
		name: 'Blaise Chisom Akwuobi',
		title: 'Video Editor',
		image: '/profiles/Chisom-1.png',
		des: 'Blaise Chisom Akwuobi is a video editor and cinematographer at Dinovate Solutions. As a versatile cinematographer and 3D enthusiast. he is known for crafting compelling narratives. He has a keen eye for detail, transforming raw footage into captivating stories and pushing the boundaries of visual storytelling. He has created impactful content for brands like Monster Energy, Martell, CBN, and the Nigerian Navy.',
		social: [
			{ icon: Facebook, link: '#' },
			{ icon: Twitter, link: '#' },
			{ icon: Linkedin, link: '#' },
			{ icon: Instagram, link: '#' },
		],
	},
	{
		name: 'Adetutu Lawson',
		title: 'Business Development Officer',
		image: '/profiles/Adetutu-.jpeg',
		des: 'Adetutu is the business Development Manager at Dinovate Solutions. She has a background in business administration and also an international business analysis degree. At Dinovate, she has been involved with managing various projects, creating solutions to problems and also planning for the future.',
		social: [
			{ icon: Facebook, link: '#' },
			{ icon: Twitter, link: '#' },
			{ icon: Linkedin, link: '#' },
			{ icon: Instagram, link: '#' },
		],
	},
	{
		name: 'Gideon Moses',
		title: 'Graphic Designer',
		image: '/profiles/gideon.jpg',
		des: 'Gideon Moses Is the Graphic Designer at Dinovate Solutions, he is responsible for creating visually compelling designs for various projects, including project branding and high-priority documents. He brings a keen eye for detail and a flair for creativity to every project he undertakes. He actively seeks opportunities to experiment with new design techniques, ensuring that Dinovate Solutions remains at the forefront in visual communication',
		social: [
			{ icon: Facebook, link: '#' },
			{ icon: Twitter, link: '#' },
			{ icon: Linkedin, link: '#' },
			{ icon: Instagram, link: '#' },
		],
	},
	{
		name: 'Dolapo Bamidele',
		title: 'Social Media Manager',
		image: '/profiles/Dolapo.jpg',
		des: "Dolapo Bamidele, Dinovate Solutions' Social Media Manager, leverages her community management and brand voice expertise to create a compelling online presence. Her SEO knowledge and platform expertise yield engaging content that boosts our brand growth.",
		social: [
			{ icon: Facebook, link: '#' },
			{ icon: Twitter, link: '#' },
			{ icon: Linkedin, link: '#' },
			{ icon: Instagram, link: '#' },
		],
	},
	{
		name: 'Christine Akume-David',
		title: 'Communication Specialist',
		image: '/profiles/Christine-Akume-.jpeg',
		des: 'Christine Akume-David is the communication Specialist at Dinovate Solutions, With almost a decade of diverse communication and leadership experience, she brings a distinctive skill set to the Dinovate team. Drawing from her background in media, filmmaking, and entrepreneurship. She excels in shaping compelling stories and informative content, leveraging her expertise in creative writing, copywriting, and business writing to ensure clarity and impact.',
		social: [
			{ icon: Facebook, link: '#' },
			{ icon: Twitter, link: '#' },
			{ icon: Linkedin, link: '#' },
			{ icon: Instagram, link: '#' },
		],
	},
];

const text = [
	'We are...',
	'Unified by purpose',
	'Visionary creators',
	'strategic dreamers',
	'Storytellers with a cause',
	'impact Innovators',
	'Creative problem solvers',
];
