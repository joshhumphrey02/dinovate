'use client';
import { useRouter } from 'next/navigation';
import CircleIcon from '../Icons/circle';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
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
				{ opacity: 0, y: 20 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					stagger: 0.6 * index,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: card,
						start: 'top 90%',
						end: 'bottom 20%',
						toggleActions: 'play none none reset',
					},
				}
			);
		});
	}, []);
	const router = useRouter();
	return (
		<div
			ref={addToRefs}
			className="flex justify-center sm:py-10 select-none px-4 sm:px-16">
			<div
				onClick={() =>
					router.push('?contact=true', {
						scroll: false,
					})
				}
				className=" relative cursor-pointer w-full sm:w-1/2">
				<h2 className=" select-none absolute top-[40%] left-[16%] text-2xl sm:text-5xl font-floodstd ">
					Send us a brief
				</h2>
				<div className="w-full h-full">
					<CircleIcon className=" w-full " />
				</div>
			</div>
		</div>
	);
}
