'use client';
import React from 'react';

const About = () => {
	return (
		<div className="px-4 sm:px-20 py-4 space-y-8">
			<article className="flex flex-col items-left gap-5 mb-5">
				<h1 className="text-3xl sm:text-7xl font-oswald font-light cursor-pointer text-amber-500 leading-tight">
					Born from a Passion for <br /> Storytelling and Social Impact
				</h1>
			</article>

			<article className="mx-auto w-full sm:w-1/2 space-y-2 ">
				<p className=" text-xl sm:text-3xl font-lato font-light text-zinc-900">
					Dinovate Solutions was founded on the belief that powerful stories can
					ignite change. Since 2021, we’ve been driven by a simple mission: to
					amplify the voices that matter and inspire positive action through
					creative storytelling and strategic communication.
				</p>
				<p className=" text-md sm:text-lg font-lato font-light">
					We don’t just tell stories – we craft narratives that make an impact.
				</p>
			</article>
		</div>
	);
};

export default About;
