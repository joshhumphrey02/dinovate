import { ProjectsType } from '@/lib/actions/project-actions';
import Img from 'next/image';
import empty from '@/assets/8961448_3973477.svg';
import WorkCard from '@/components/works/workCard';
import WorkServices from './services';
import { Cats } from '@/lib/actions';

interface Props {
	data: ProjectsType;
	search?: string;
	cats: Cats;
}

export default function ProjectsCards({ data, cats, search }: Props) {
	return (
		<div className="  pt-2 w-full flex flex-col gap-12">
			<WorkServices active={search || 'all'} cats={cats} />
			<div className=" grid md:grid-cols-4 gap-4">
				{data.length ? (
					data.map((p, i) => <WorkCard index={i} key={p.name} data={p} />)
				) : (
					<div className=" w-full col-span-4 flex flex-col gap-3 items-center justify-center pt-10 md:pt-20">
						<Img
							src={empty}
							alt="Empty"
							className="  h-40 md:w-80 md:h-80 object-cover"
						/>
						<p className=" text-xl font-medium">No data found!</p>
					</div>
				)}
			</div>
		</div>
	);
}
