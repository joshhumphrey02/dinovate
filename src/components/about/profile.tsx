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
import { ProfileData } from '@/lib/actions';
import Image from '../shared/image';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

interface Props {
	data: ProfileData;
}

export default function Profile({ data }: Props) {
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
		length: Math.max(text.length, data.length),
	})
		.flatMap((_, i) => [text[i], data[i]])
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
											<div className="w-full h-[21rem] bg-gray-200 mx-auto sm:h-[19rem] xl:h-[24rem]">
												{t.image && (
													<Image
														src={t.image.url}
														bucketName="images"
														alt={t.fullName}
														scale={true}
													/>
												)}
											</div>
											<h4>{t.fullName}</h4>
											<p className="text-xs text-tertiary">{t.title}</p>
											<div className=" flex gap-2 items-center">
												<Link href={'#'}>
													<Mail className="w-4 h-4" />
												</Link>
												<Link href={'#'}>
													<Linkedin className="w-4 h-4" />
												</Link>
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
													<div className="w-full max-w-[18rem] bg-gray-200  h-[21rem] sm:h-[19rem]">
														{t.image && (
															<Image
																src={t.image.url}
																bucketName="images"
																alt={t.fullName}
															/>
														)}
													</div>
												</div>
											</SheetTitle>
										</SheetHeader>
										<div
											className={cn(
												'grid relative gap-2 w-full sm:w-[60%] flex-col  mx-auto py-6 sm:py-0'
											)}>
											<SheetClose className=" hidden sm:flex">
												<div className="flex items-center justify-center p-6 bg-tertiary rounded-full z-[10000] fixed top-[45%] right-[52%] ">
													<ArrowLeft strokeWidth={1} className="w-10 h-10" />
												</div>
											</SheetClose>
											<h4 className="text-xl sm:text-2xl text-tertiary">
												{t.fullName}
											</h4>
											<h5>{t.title}</h5>
											<p>{t.description}</p>
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

const text = [
	'We are...',
	'Unified by purpose',
	'Visionary creators',
	'strategic dreamers',
	'Storytellers with a cause',
	'impact Innovators',
	'Creative problem solvers',
];
