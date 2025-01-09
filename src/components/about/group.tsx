'use client';
import { useEffect, useRef } from 'react';
import Image from '../shared/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Group() {
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
	return (
		<div className="grid md:grid-cols-3 gap-6 pb-20">
			<div
				ref={addToRefs}
				className=" w-full max-w-sm   overflow-hidden rounded-2xl h-40 md:h-96">
				<Image
					src={'group1.jpg'}
					bucketName="images"
					alt={'Feature Images'}
					scale={true}
				/>
			</div>
			<div
				ref={addToRefs}
				className=" w-full  max-w-sm overflow-hidden rounded-2xl h-40 md:h-96">
				<Image
					src={'group2.jpg'}
					bucketName="images"
					alt={'Feature Images'}
					scale={true}
				/>
			</div>
			<div
				ref={addToRefs}
				className=" w-full max-w-sm overflow-hidden rounded-2xl h-40 md:h-96">
				<Image
					src={'group3.jpg'}
					bucketName="images"
					alt={'Feature Images'}
					scale={true}
				/>
			</div>
			<div
				ref={addToRefs}
				className=" w-full max-w-sm overflow-hidden rounded-2xl h-40 md:h-96">
				<Image
					src={'group4.jpg'}
					bucketName="images"
					alt={'Feature Images'}
					scale={true}
				/>
			</div>
			<div
				ref={addToRefs}
				className=" w-full  max-w-sm overflow-hidden rounded-2xl h-40 md:h-96">
				<Image
					src={'group5.jpg'}
					bucketName="images"
					alt={'Feature Images'}
					scale={true}
				/>
			</div>
			<div
				ref={addToRefs}
				className=" w-full max-w-sm overflow-hidden rounded-2xl h-40 md:h-96">
				<Image
					src={'group6.jpg'}
					bucketName="images"
					alt={'Feature Images'}
					scale={true}
				/>
			</div>
		</div>
	);
}
