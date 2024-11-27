import Footer from '@/components/shared/footer';
import Image from '@/components/shared/image';
import RequestForm from '@/components/shared/request-form';
import { getProjectData } from '@/lib/actions/project-actions';
import empty from '@/assets/8961448_3973477.svg';
import Img from 'next/image';
import { uniqueId } from '@/lib/utils';
import { getProfileData } from '@/lib/actions';
import Line2 from '@/components/Icons/line2';
import Link from 'next/link';
import { Mail } from 'lucide-react';

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
	const data = (await getProjectData(projectId)) || null;
	const profiles = await getProfileData();
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
					<div className={'w-full h-[80vh] md:h-[70vh] bg-gray-200'}>
						{data.images.length && (
							<Image
								src={data.images[0]?.url}
								bucketName="images"
								alt={data.name}
								className=" h-full w-full"
							/>
						)}
					</div>
					<div className=" md:w-[70%] mx-auto py-10 md:py-20 flex flex-col gap-8">
						<div className=" space-y-10">
							<h1 className="text-5xl md:text-7xl text-tertiary md:w-[60%] md:leading-[5rem] font-oswald font-bold">
								{data.name}
							</h1>
							<p className="text-base md:text-lg md:w-1/2 font-normal md:leading-[2rem] font-lato">
								{data.description}
							</p>
						</div>
						<div className=" grid md:grid-cols-2 gap-4">
							{data.images.length &&
								data.images.map((img) => {
									return (
										<div
											key={uniqueId()}
											className="w-full h-[350px] md:h-[30rem]">
											<Image
												src={img.url}
												bucketName="images"
												alt={data.name}
												className=" object-cover"
											/>
										</div>
									);
								})}
						</div>
						<div className=" md:px-10 space-y-12 pt-10 md:pt-20">
							<div className="flex gap-4 md:gap-16 items-center">
								<p className=" text-3xl md:text-6xl font-medium uppercase font-oswald">
									Get in Touch with us
								</p>
								<Link
									href={'?contact=true'}
									scroll={false}
									className=" w-40 h-40 rounded-full bg-blue-700 hover:bg-tertiary transition-all duration-700 p-4 text-white flex flex-col justify-center items-center gap-2">
									<Mail />
									<p className=" text-sm text-center">
										Click here to message us
									</p>
								</Link>
							</div>
							<div>
								<p className=" pt-10 pb-5 text-center">
									Ask our project team a question. Click their face and send
									them a message.
								</p>
							</div>
							<div className="flex flex-wrap justify-center gap-8">
								{profiles.map((t, i) => (
									<Link key={uniqueId()} href={'?contact=true'} scroll={false}>
										<div className=" w-32 h-32 border-2 border-tertiary group relative overflow-hidden rounded-full ">
											{t.image && (
												<Image
													src={t.image.url}
													bucketName="images"
													alt={t.fullName}
												/>
											)}
											<div className="group-hover:opacity-100 z-20 top-0 left-0 bg-tertiary text-sm font-oswald absolute transition-all duration-1000 flex justify-center items-center opacity-0 group-hover:underline w-full h-full rounded-full">
												Message me
											</div>
										</div>
										<div>
											<h4 className=" pt-5 text-center">{t.fullName}</h4>
										</div>
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			)}
			<RequestForm open={!!contact} />
			<Footer />
		</div>
	);
}
