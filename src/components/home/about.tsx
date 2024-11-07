'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
		<div className="px-4 sm:px-20 py-4 space-y-8">
			<article ref={addToRefs} className="px-4 sm:px-[4rem]">
				<p className=" text-md sm:text-lg font-lato font-light">
					We don’t just tell stories – we craft narratives that make an impact.
				</p>
			</article>
			<article ref={addToRefs} className="flex flex-col items-left gap-5 mb-5">
				<h1 className="text-3xl px-4 sm:px-16 sm:text-[6rem] sm:leading-[8rem] uppercase font-oswald font-light cursor-pointer text-amber-500 leading-tight">
					IMPACT THROUGH <br /> Storytelling
				</h1>
			</article>

			<article
				ref={addToRefs}
				className="sm:ml-auto w-full sm:w-[65%] sm:pr-20 space-y-2 ">
				<p className=" text-xl sm:text-3xl font-lato font-light text-zinc-900">
					Dinovate Solutions was founded on the belief that powerful stories can
					ignite change. Since 2021, we’ve been driven by a simple mission: to
					amplify the voices that matter and inspire positive action through
					creative storytelling and strategic communication.
				</p>
			</article>
		</div>
	);
};

export default About;
