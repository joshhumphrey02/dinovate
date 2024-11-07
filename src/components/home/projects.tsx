'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import { Carousel, Card } from '@/components/ui/apple-cards-carousel';

export function Projects() {
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
	const cards = [...data, ...data, ...data].map((card, index) => (
		<Card key={card.src} card={card} index={index} />
	));

	return (
		<div className="w-full pl-4 sm:pl-[8rem] h-full py-20">
			<h2
				ref={addToRefs}
				className="  text-xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
				OUR WORK (what We Do)
			</h2>
			<Carousel items={cards} />
		</div>
	);
}

const DummyContent = () => {
	return (
		<>
			<div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
				<p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
					Dinovate helped bring stories of water insecurity to life through
					powerful visual storytelling, empowering affected communities to share
					their own narratives.
				</p>
			</div>
		</>
	);
};

const data = [
	{
		title: 'IWMI Photovoice Project',
		des: '',
		src: 'https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		content: <DummyContent />,
	},
];
