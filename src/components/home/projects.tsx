'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import { Carousel, Card } from '@/components/ui/apple-cards-carousel';
import { ProjectsType } from '@/lib/actions/project-actions';

interface Props {
	data: ProjectsType;
}

export function Projects(props: Props) {
	const { data: projects } = props;
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
	const cards = projects.map((card, index) => (
		<Card
			key={card.id}
			card={{
				title: card.name,
				src: card.images[0]?.url,
				des: card.description,
				link: card.id,
			}}
			index={index}
		/>
	));

	return (
		<div className="w-full pl-4 sm:pl-[8rem] h-full py-10 md:py-20">
			<h2
				ref={addToRefs}
				className="  text-xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
				OUR WORK (what We Do)
			</h2>
			<Carousel items={cards} />
		</div>
	);
}
