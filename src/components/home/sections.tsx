'use client';
import React, { useEffect, useRef } from 'react';
import ArrowIcon from '../Icons/arrow';
import LineIcon from '../Icons/line';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Sections = () => {
	const cardsRef = useRef<HTMLDivElement[]>([]);

	const addToRefs = (el: any) => {
		if (el && !cardsRef.current.includes(el)) {
			cardsRef.current.push(el);
		}
	};
	useEffect(() => {
		gsap.fromTo(
			cardsRef.current,
			{ opacity: 0, y: 60 },
			{
				opacity: 1,
				y: 0,
				duration: 1.5,
				stagger: 0.4,
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
	return (
		<div className="pb-20 grid gap-16 ">
			<div className="space-y-16">
				<div className="grid sm:grid-cols-[30%,auto,17%]  gap-8">
					<div className=" hidden sm:flex justify-end">
						<LineIcon />
					</div>
					<div className="px-4">
						<h1 className="text-xl sm:text-3xl mb-7">
							IGNITING CHANGE WITH STRATEGIC COMMUNICATIONS
						</h1>
						<p className="text-md leading-relaxed mb-5">
							They say actions speak louder than words, so let our work show you
							the impact we create. Over the years, we’ve had the privilege of
							working with leading organizations and activists on projects that
							drive real change. Here are a few examples of our impact:
						</p>
					</div>
				</div>
				<div className=" grid grid-cols-2 sm:w-[80%] sm:mx-auto sm:grid-cols-3 gap-6 px-4 sm:px-20">
					{data.map((item) => (
						<Link ref={addToRefs} href={item.link} key={item.title}>
							<div className="">
								<h4 className=" text-tertiary text-xl sm:text-3xl">
									{item.title}
								</h4>
								<ArrowIcon className="w-[4rem] sm:w-[10rem]" />
							</div>
						</Link>
					))}
				</div>
			</div>
			<div className=" space-y-10">
				<div className="grid sm:grid-cols-[30%,auto,17%]  gap-8">
					<div className=" hidden sm:flex pt-4 justify-end">
						<LineIcon />
					</div>
					<div className="px-4">
						<p className="text-md leading-relaxed mb-5">
							We don’t see clients; we see partners. Every project, whether it’s
							producing a documentary, developing a campaign, building your
							digital presence, or influencing human behavior for good, is
							collaboration. We push ourselves and our partners to think bigger,
							plan better, and execute with precision. Together, we strive to
							create lasting change, one story at a time.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-[70%] mx-auto">
					{partners.map((item) => (
						<div key={item}>
							<img
								src={`/partners/${item}`}
								alt={item}
								className="w-[100px] sm:w-[200px] bg-transparent object-cover mx-auto"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sections;

const data = [
	{
		title: 'ALL',
		link: '#',
	},
	{
		title: 'MEDIA PRODUCTION',
		link: '#',
	},
	{
		title: 'STRATEGIC COMMUNICATION',
		link: '#',
	},
	{
		title: 'DESIGN AND BRANDING',
		link: '#',
	},
	{
		title: 'ADVOCACY CAPACITY BUILDING',
		link: '#',
	},
	{
		title: 'CREATIVE SPACES',
		link: '#',
	},
];

const partners = [
	'undp_logo.webp',
	'pind.jpg',
	'WaterAid.png',
	'who_logo.webp',
	'iwmi.jpeg',
	'mastercard.jpg',
];
