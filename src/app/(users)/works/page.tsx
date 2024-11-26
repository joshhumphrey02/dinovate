import Footer from '@/components/shared/footer';
import RequestForm from '@/components/shared/request-form';
import WorkServices from '@/components/works/services';
import WorkCard from '@/components/works/workCard';
import { getProCats } from '@/lib/actions';
import { getProjects } from '@/lib/actions/project-actions';
import empty from '@/assets/8961448_3973477.svg';
import Image from 'next/image';

interface Props {
	searchParams: Promise<{
		search?: string;
		contact?: string;
	}>;
}

export default async function Works(props: Props) {
	const { search, contact } = await props.searchParams;
	const cats = await getProCats();
	const projects = await getProjects({
		take: 15,
		skip: 0,
		orderBy: {
			createdAt: 'asc',
		},
		search: search,
	});
	return (
		<div>
			<div className=" flex flex-col pb-20 justify-center items-center gap-20 pt-24">
				<div className=" space-y-8">
					<h1 className=" text-4xl md:text-[7rem] md:leading-[9rem] font-normal font-oswald text-tertiary text-center">
						IGNITING CHANGE WITH <br /> STRATEGIC COMMUNICATIONS
					</h1>
					<div className="space-y-2 px-4 md:px-20">
						<p className="text-center ">
							They say actions speak louder than words, so let our work show you
							the impact we create.
						</p>
					</div>
				</div>
				<WorkServices active={search || 'all'} cats={cats} />
				<div className=" gap-20 flex flex-col px-4 md:px-10 md:max-w-[1350px] mx-auto">
					{projects.map((p, i) => (
						<WorkCard index={i} key={p.name} data={p} />
					))}
				</div>
				{projects.length === 0 && (
					<div className=" flex justify-center pt-10 md:pt-20">
						<Image
							src={empty}
							alt="Empty"
							className=" w-full h-40 md:w-80 md:h-80 object-cover"
						/>
					</div>
				)}
			</div>
			<RequestForm open={!!contact} />
			<Footer />
		</div>
	);
}
