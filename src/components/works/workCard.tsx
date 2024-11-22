import { cn } from '@/lib/utils';

interface WprkCardProps {
	data: {
		name: string;
		organization: string;
		description: string;
		media: {
			images?: String;
			links?: String[];
			video?: String;
		};
	};
	index: number;
}

export default function WorkCard(props: WprkCardProps) {
	const { name, organization, description, media } = props.data;
	const index = props.index;

	return (
		<div>
			<div className={cn('grid group md:grid-cols-[45%,auto] gap-4')}>
				<div className={cn('w-full h-60 md:h-96 bg-gray-200')}></div>
				<div
					className={cn(
						'space-y-2 group-hover:pb-10 transition-all duration-700 h-full flex flex-col justify-end',
						index % 2 === 1 && ' md:col-start-1 md:row-start-1'
					)}>
					<h1 className=" text-lg md:text-xl font-bold">{name}</h1>
					<p className=" text-lg md:text-xl font-bold">{organization}</p>
					<p className="pt-4 line-clamp-2 md:w-1/2">{description}</p>
				</div>
			</div>
		</div>
	);
}
