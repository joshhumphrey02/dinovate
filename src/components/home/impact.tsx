'use client';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import ArrowIcon from '../Icons/arrow';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Impact = () => {
	const cardsRef = useRef<HTMLDivElement[]>([]);

	const addToRefs = (el: any) => {
		if (el && !cardsRef.current.includes(el)) {
			cardsRef.current.push(el);
		}
	};

	useEffect(() => {
		cardsRef.current.forEach((card, index) => {
			gsap.fromTo(
				card,
				{ opacity: 0, y: 80 },
				{
					opacity: 1,
					y: 0,
					duration: 2,
					stagger: 0.6 * index,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: card,
						start: 'top 80%',
						end: 'bottom 20%',
						toggleActions: 'play none none reset',
					},
				}
			);
		});
	}, []);

	return (
		<div className="grid sm:grid-cols-3 sm:justify-center gap-20 px-4 sm:px-16 py-10">
			{data.map((i) => (
				<div
					key={i.title}
					ref={addToRefs}
					className="bg-transparent border-none">
					<Card className=" border-0 bg-transparent shadow-sm">
						<CardContent className="px-0 py-0">
							<Image
								width={500}
								height={500}
								alt={i.title}
								src={i.image}
								className="mb-4"
							/>
							<h2 className="text-3xl text-center font-bold text-amber-500 mb-4">
								<Link href={'#'} className="flex flex-col gap-y-3">
									{i.title}
									<ArrowIcon />
								</Link>
							</h2>
							<p className="text-center line-clamp-4 text-md leading-relaxed">
								{i.des}
							</p>
						</CardContent>
					</Card>
				</div>
			))}
		</div>
	);
};

export default Impact;

const data = [
	{
		title: 'Creative Problem-Solvers with a Purpose',
		des: `Our team is made up of passionate creatives and strategic thinkers who believe in using our talents for good. We collaborate with organizations, and communities to uncover the stories that need to be told. At Dinovate, every project is a partnership. We bring our expertise in communications, while you bring your deep knowledge of your cause. Together, we achieve outcomes that make a difference.
`,
		image: '/images/strategy.webp',
	},
	{
		title: 'Storytelling That Moves People',
		des: `We know that stories shape the world. That’s why we help organizations and communities tell their stories in a way that resonates, inspires, and drives action. Changing the world starts with finding the right story—and telling it well.`,
		image: '/images/campaign.webp',
	},
	{
		title: 'Outcomes over Outputs',
		des: `We believe in driving change, not just creating noise. Our approach is outcome-driven. Whether through multimedia campaigns, documentaries, advocacy, branding, or capacity building, we focus on results that matter to you and your audience. Our tools and tactics are adaptable and evolve with each project to achieve maximum impact.`,
		image: '/images/brand.webp',
	},
];
