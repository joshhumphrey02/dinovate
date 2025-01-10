'use client';
import { ProjectsType } from '@/lib/actions/project-actions';
import { cn } from '@/lib/utils';
import Image from '../shared/image';
import { Button } from '../ui/button';
import HtmlText from '../shared/html-text';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';

interface WprkCardProps {
	data: ProjectsType[0];
	index: number;
}

export default function WorkCard(props: WprkCardProps) {
	const { name, organization, description, images, id } = props.data;

	return (
		<div className=" h-full ">
			<div className={cn('grid gap-4 h-full')}>
				<div className={cn('w-full h-48 md:h-72 bg-gray-200')}>
					{images.length && (
						<Image
							src={images[0]?.url}
							bucketName="images"
							alt={name}
							className=" h-full w-full"
						/>
					)}
				</div>
				<div className={cn('space-y-2 flex-1 flex flex-col justify-start')}>
					<h1 className=" text-sm md:text-base font-bold">{name.trim()}</h1>
					<p className=" text-sm font-bold text-gray-500">{organization}</p>
					<HtmlText text={description} className=" line-clamp-3 text-xs" />
					<div className="pt-1 flex items-center">
						<WorkDetails data={props.data} />
					</div>
				</div>
			</div>
		</div>
	);
}

interface WorkDetailsProps {
	data: ProjectsType[0];
}

export function WorkDetails(props: WorkDetailsProps) {
	const { name, organization, category, description, images } = props.data;
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant={'outline'}
					className=" bg-tertiary hover:bg-tertiary/80 text-white font-bold">
					View Project
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-screen-xl p-0 py-0 gap-0">
				<DialogTitle className=" p-0"></DialogTitle>
				<div className="grid md:grid-cols-[55%,auto] h-[70dvh] md:h-[70vh] gap-4">
					<div className=" w-full h-full">
						<Carousel
							plugins={[
								Autoplay({
									delay: 2000,
								}),
							]}
							className="w-full h-full">
							<CarouselContent className=" p-0">
								{Array.from({ length: images.length }).map((_, index) => (
									<CarouselItem key={index}>
										<div className=" h-[70dvh] md:h-[70vh]">
											<Image
												src={images[index]?.url}
												bucketName="images"
												alt={name}
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

					<div
						className={cn('gap-4 flex-1 p-4 py-8 flex flex-col overflow-auto')}>
						<h1 className=" text-xl md:text-2xl font-extrabold text-black">
							{name}
						</h1>
						<div>
							<h3 className=" text-lg font-extrabold text-black">Client</h3>
							<p className=" text-base  text-gray-500">{organization}</p>
						</div>
						<div>
							<h3 className=" text-lg font-extrabold text-black">Category</h3>
							<p className=" text-base  text-gray-500">{category.name}</p>
						</div>
						<div>
							<h3 className=" text-lg font-extrabold text-black">
								Description
							</h3>
							<HtmlText text={description} className=" text-sm" />
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
