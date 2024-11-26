'use client';
import { getImageUrl } from '@/hooks/use-image-handler';

export default function Banner() {
	const url = getImageUrl('banner-video.mp4', 'images');
	const style = {
		borderImage:
			'linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0,.5)) fill 1',
	};
	return (
		<div>
			<div
				style={style}
				className="w-full relative h-[20rem] sm:h-[40rem] xl:h-[50rem]">
				<video
					className=" w-full h-full object-cover"
					autoPlay={true}
					loop
					muted
					playsInline>
					<source src={url} type="video/mp4" />
				</video>
			</div>
		</div>
	);
}
