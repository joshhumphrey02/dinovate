'use client';
import { cn } from '@/lib/utils';
import MilkIcon from '../Icons/milk';
import { Button } from '../ui/button';
import CloseIcon from '../Icons/close';
import useStore from '@/lib/stores';

export default function Prompt() {
	const { prompt, setPrompt } = useStore();
	const toggleSidebar = () => setPrompt(true);
	const style = {
		backgroundImage: `url(/svg/cookie.svg)`,
		backgroundRepeat: 'no-repeat',
	};
	return (
		<div
			className={cn(
				'fixed z-40 -bottom-4 -right-4 w-full h-full flex justify-end items-end',
				prompt && 'hidden'
			)}>
			<div className=" text-white relative px-8 w-[20rem] sm:w-[30rem] flex flex-col justify-end items-center gap-4 h-[27rem] sm:h-[40rem]">
				<div
					style={style}
					className=" absolute -rotate-[12deg] -bottom-10 -z-30 -left-10 w-[120%] h-full bg-cover"></div>
				<span onClick={toggleSidebar} className=" absolute top-16 right-16">
					<CloseIcon className="w-4 h-4" />
				</span>
				<MilkIcon className="h-[100px] sm:h-[194px] " />
				<div className="flex flex-col items-center pb-8 gap-5">
					<p className="text-center text-xs sm:text-sm w-[80%]">
						Our site uses cookies, to make your experience on this site even
						better. We hope you think that is sweet. Can you confirm that
						please?
					</p>
					<div className="flex flex-col items-center">
						<Button
							onClick={toggleSidebar}
							variant={'outline'}
							className=" bg-tertiary border-none rounded-2xl w-40 sm:w-56">
							Sweet
						</Button>
						<Button
							variant={'link'}
							onClick={toggleSidebar}
							className="text-white underline font-normal">
							Nah, I’m on a diet.
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
