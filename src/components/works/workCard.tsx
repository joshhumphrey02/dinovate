import { ProjectsType } from '@/lib/actions/project-actions';
import { cn } from '@/lib/utils';
import Image from '../shared/image';
import Link from 'next/link';
import { Button } from '../ui/button';

interface WprkCardProps {
	data: ProjectsType[0];
	index: number;
}

export default function WorkCard(props: WprkCardProps) {
	const { name, organization, description, images, id } = props.data;
	const index = props.index;

	return (
		<div>
			<div className={cn('grid group md:grid-cols-[45%,auto] gap-4')}>
				<div className={cn('w-full h-60 md:h-96 bg-gray-200')}>
					{images.length && (
						<Image
							src={images[0]?.url}
							bucketName="images"
							alt={name}
							className=" h-full w-full"
						/>
					)}
				</div>
				<div
					className={cn(
						'space-y-2 group-hover:pb-10 transition-all duration-700 h-full flex flex-col justify-end',
						index % 2 === 1 && ' md:col-start-1 md:row-start-1'
					)}>
					<h1 className=" text-lg md:text-xl font-bold">{name}</h1>
					<p className=" text-lg md:text-xl font-bold">{organization}</p>
					<p className="pt-4 line-clamp-2 md:w-1/2">{description}</p>
					<div className="pt-5">
						<Link href={`/works/${id}`}>
							<Button>View Project</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
