'use client';
import { useRouter } from 'next/navigation';
import CircleIcon from '../Icons/circle';

export default function Contact() {
	const router = useRouter();
	return (
		<div className="flex justify-center sm:py-10 select-none px-4 sm:px-16">
			<div
				onClick={() =>
					router.push('?contact=true', {
						scroll: false,
					})
				}
				className=" relative cursor-pointer w-full sm:w-1/2">
				<h2 className=" select-none absolute top-[40%] left-[20%] text-2xl sm:text-5xl font-floodstd ">
					Send us a brief
				</h2>
				<div className="w-full h-full">
					<CircleIcon className=" w-full " />
				</div>
			</div>
		</div>
	);
}
