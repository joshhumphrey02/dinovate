import { cn } from '@/lib/utils';
import Image from '../shared/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import HtmlText from '../shared/html-text';

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
						<Link href={`/works/${title}`}>
							<Button
								variant={'outline'}
								className=" bg-tertiary text-white font-bold">
								View Project
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
