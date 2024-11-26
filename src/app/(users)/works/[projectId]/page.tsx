import Footer from '@/components/shared/footer';
import Image from '@/components/shared/image';
import RequestForm from '@/components/shared/request-form';
import { getProjectData } from '@/lib/actions/project-actions';
import empty from '@/assets/8961448_3973477.svg';
import Img from 'next/image';

interface Props {
	params: Promise<{
		projectId: string;
	}>;
	searchParams: Promise<{
		contact?: string;
	}>;
}

export default async function Project(props: Props) {
	const { contact } = await props.searchParams;
	const { projectId } = await props.params;
	const data = await getProjectData(projectId);
	return (
		<div className="">
			{!data ? (
				<div className=" flex h-[60vh] items-center justify-center pt-10 md:pt-20">
					<Img
						src={empty}
						alt="Empty"
						className=" w-full h-40 md:w-80 md:h-80 object-cover"
					/>
				</div>
			) : (
				<div className=" flex flex-col gap-8">
					<div className={'w-full h-60 md:h-96 bg-gray-200'}>
						{data.images.length && (
							<Image
								src={data.images[0]?.url}
								bucketName="images"
								alt={data.name}
								className=" h-full w-full"
							/>
						)}
					</div>
				</div>
			)}
			<RequestForm open={!!contact} />
			<Footer />
		</div>
	);
}
