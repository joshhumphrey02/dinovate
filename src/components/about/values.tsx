'use client';
import { getImageUrl } from '@/hooks/use-image-handler';

export default function Values() {
	const style = {
		backgroundImage: `url(${getImageUrl('project3.jpg', 'images')})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		borderImage:
			'linear-gradient(to right, rgba(0,0,0,.3), rgba(0,0,0,.5)) fill 1',
	};
	const content = `To masterfully tell stories that inform, educate, and inspire
						positive behavioral change.`;
	return (
		<div className="py-12 flex w-full  flex-col-reverse lg:flex-row space-y-8">
			<div
				style={style}
				className="py-16 w-full h-[20rem] bg-center lg:h-[40rem] px-4 flex items-end lg:justify-start ">
				<div className="p-8 md:py-12 rounded-xl lg:p-9 hidden lg:flex flex-col text-white space-y-4 lg:backdrop-blur-md lg:w-1/2 lg:bg-black/30">
					<h1 className="text-2xl self-start border-bottom lg:text-4xl">
						Mission Statement:
					</h1>
					<p className="text-base md:text-lg ">{content}</p>
				</div>
			</div>
			<div className="p-8 lg:p-9 flex lg:hidden flex-col  space-y-6 ">
				<h1 className="text-2xl self-start border-bottom lg:text-4xl">
					Mission Statement:
				</h1>
				<p className="text-sm ">{content}</p>
			</div>
		</div>
	);
}
