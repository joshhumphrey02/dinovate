import { Card } from '@/components/ui/card';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { ProjectsType } from '@/lib/actions/project-actions';
import Image from '@/components/shared/image';
import { format } from 'date-fns';

interface Props {
	data: ProjectsType;
}

function Stats(props: Props) {
	const { data } = props;
	return (
		<Card className="w-full space-y-4 h-full px-3 py-4">
			<div className="flex h-auto justify-between items-center">
				<h2 className="text-sm text-gray-500">Recent projects</h2>
				<DotsHorizontalIcon className="h-6 w-6 font-bold text-gray-300" />
			</div>
			<div className="flex-1 grid gap-2">
				{data.map((b) => (
					<Card
						key={b.id}
						className=" bg-transparent p-2 h-28 w-full bg-white grid grid-cols-[55%,auto] gap-4">
						<div className="gap-1.5 flex flex-col">
							<h3 className="text-sm">{b.name}</h3>
							<span className="text-sm text-gray-500">{b.category.name}</span>
							<time className="text-xs text-gray-500 ">
								{format(new Date(b.createdAt), 'MMM d, yyyy')}
							</time>
						</div>
						<div className="w-full h-full bg-gray-200 rounded-xl">
							{b.images.length && (
								<Image
									src={b.images[0].url}
									className="rounded-md"
									alt={b.name}
									bucketName="images"
								/>
							)}
						</div>
					</Card>
				))}
			</div>
		</Card>
	);
}

export default Stats;
