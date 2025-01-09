import { ProjectsType } from '@/lib/actions/project-actions';
import { cn } from '@/lib/utils';
import Image from '../shared/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import HtmlText from '../shared/html-text';

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
						<Link href={`/works/${id}`}>
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
