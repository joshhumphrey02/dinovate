'use client';
import { cn } from '@/lib/utils';
import Image from '../shared/image';
import { Button } from '../ui/button';
import HtmlText from '../shared/html-text';
import Autoplay from 'embla-carousel-autoplay';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';

interface DesignCardProps {
	data: {
		title: string;
		des: string;
		images: {
			id: string;
			url: string;
		}[];
	};
	index: number;
}

export default function DesignCard(props: DesignCardProps) {
	const { title, des, images } = props.data;

	return (
		<div className=" h-full ">
			<div className={cn('grid gap-4 h-full')}>
				<div className={cn('w-full h-48 md:h-72 bg-gray-200')}>
					{images.length && (
						<Image
							src={images[0]?.url}
							bucketName="images"
							alt={title}
							className=" h-full w-full"
						/>
					)}
				</div>
				<div className={cn('space-y-2 flex-1 flex flex-col justify-start')}>
					<h1 className=" text-sm md:text-base font-bold">{title}</h1>
					<HtmlText text={des} className=" line-clamp-3 text-xs" />
					<div className="pt-1 flex items-center">
						<DesignDetails data={props.data} />
					</div>
				</div>
			</div>
		</div>
	);
}

interface DesignDetailsProps {
	data: {
		title: string;
		des: string;
		images: {
			id: string;
			url: string;
		}[];
	};
}

export function DesignDetails(props: DesignDetailsProps) {
	const { title, des, images } = props.data;
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant={'outline'}
					className=" bg-tertiary hover:bg-tertiary/80 text-white font-bold">
					View Project
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-screen-xl">
				<DialogHeader>
					<DialogTitle></DialogTitle>
				</DialogHeader>
				<div className="grid md:grid-cols-[60%,auto] gap-4 py-4">
					<div>
						<Carousel
							plugins={[
								Autoplay({
									delay: 2000,
								}),
							]}
							className="w-full">
							<CarouselContent>
								{Array.from({ length: images.length }).map((_, index) => (
									<CarouselItem key={index}>
										<div className="p-1 h-[30rem] md:h-[40rem]">
											<Image
												src={images[index]?.url}
												bucketName="images"
												alt={title}
												className=" h-full w-full object-cover"
											/>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious className=" left-10 h-12 w-12" />
							<CarouselNext className=" right-10 h-12 w-12" />
						</Carousel>
					</div>

					<div className={cn('space-y-2 flex-1 flex flex-col justify-start')}>
						<h1 className=" text-xl md:text-2xl font-bold">{title}</h1>
						<HtmlText text={des} className=" text-sm" />
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
