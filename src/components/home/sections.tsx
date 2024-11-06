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
		<div className="pb-20 grid gap-[8rem] ">
			<div className="flex flex-col gap-10 sm:gap-20">
				<div className="grid sm:grid-cols-[30%,auto,17%]  gap-8">
					<div className=" hidden sm:flex justify-end pt-4">
						<LineIcon fill="#000" />
					</div>
					<div className="px-4 space-y-4">
						<h1 className="text-xl sm:text-2xl text-gray-600 font-normal">
							IGNITING CHANGE WITH{' '}
							<span className=" font-floodstd text-tertiary text-2xl sm:text-3xl px-px">
								STRATEGIC
							</span>{' '}
							COMMUNICATIONS
						</h1>
						<p className="text-md font-light leading-relaxed mb-5">
							They say actions speak louder than words, so let our work show you
							<span className=" font-normal px-1">the impact we create.</span>
							Over the years, we’ve had the privilege of working with
							<span className="px-1 font-normal">
								leading organizations
							</span>{' '}
							and activists on{' '}
							<span className=" font-normal px-1">
								projects that drive real change.
							</span>
							Here are a few examples of our impact:
						</p>
					</div>
				</div>
				<div className=" grid grid-cols-2 sm:w-[80%] sm:mx-auto sm:grid-cols-3 gap-6 sm:gap-20 px-4 sm:px-20">
					{data.map((item) => (
						<Link ref={addToRefs} href={item.link} key={item.title}>
							<div className="space-y-6 flex flex-col h-full">
								<h4 className=" text-tertiary flex-1 flex items-end font-normal text-xl sm:text-[2.1rem] font-oswald text-center leading-[1]">
									{item.title}
								</h4>
								<ArrowIcon className="w-[4rem] sm:w-[10rem]" />
							</div>
						</Link>
					))}
				</div>
			</div>
			<div className=" space-y-16 pb-10">
				<div className="grid sm:grid-cols-[30%,auto,17%]  gap-8">
					<div className=" hidden sm:flex pt-4 justify-end">
						<LineIcon fill="#000" />
					</div>
					<div className="px-4">
						<p className="text-md leading-8 font-light mb-5">
							We don’t see clients;{' '}
							<span className="font-normal px-1">we see partners.</span> Every
							project, whether it’s producing a documentary, developing a
							campaign,{' '}
							<span className=" font-normal px-1">
								building your digital presence, or influencing human behavior
								for good, is collaboration.
							</span>{' '}
							We push ourselves and our partners to think bigger, plan better,
							and{' '}
							<span className="font-normal px-1">execute with precision.</span>
							Together, we strive to create lasting change, one story at a time.
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
		title: 'ADVOCACY',
		link: '#',
	},
	{
		title: 'CAPACITY BUILDING',
		link: '#',
	},
	{
		title: 'CREATIVE SPACES',
		link: '#',
	},
];

const partners = [
	'UNDP.png',
	'PIND.png',
	'IWMI.png',
	'WATER AID.png',
	'mastercard.png',
	'WHO.png',
];
