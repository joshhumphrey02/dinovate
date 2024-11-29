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
import HtmlText from '@/components/shared/html-text';

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
					<div className={'w-screen h-[50vh] md:h-[80vh] bg-gray-200'}>
						{data.images.length && (
							<Image
								src={data.images[0]?.url}
								bucketName="images"
								alt={data.name}
								className=" h-full w-full md:object-center"
							/>
						)}
					</div>
					<div className=" md:w-[70%] mx-auto px-4 py-6 md:py-20 flex flex-col gap-8">
						<div className=" md:pb-10">
							<h1 className="text-4xl md:text-7xl text-tertiary md:w-[60%] xl:w-[70%] md:leading-[5rem] font-oswald font-bold">
								{data.name}
							</h1>
						</div>
						<div className=" grid md:grid-cols-[45%,auto] gap-6 md:gap-0 ">
							<div className=" row-start-2 md:row-start-1">
								<p className=" flex gap-2 items-start">
									<span className=" text-base text-black/80">Partner:</span>{' '}
									<span className=" text-black font-bold text-sm">
										{data.organization}
									</span>
								</p>
								<p className=" flex gap-2 items-center">
									<span className=" text-base text-black/80">Sector:</span>{' '}
									<span className=" text-black font-bold text-sm">
										{data.category.name}
									</span>
								</p>
							</div>
							<div className=" space-y-10">
								<HtmlText
									text={data.description}
									color="white"
									className="text-base md:text-lg  font-normal md:leading-[2rem] font-lato"
								/>
							</div>
						</div>
						<div className=" py-10">
							{data.videos.length > 0 && (
								<div className=" w-full h-[20rem] md:w-[90%] md:h-[40rem] mx-auto ">
									<iframe
										src={data.videos[0].url}
										title={data.name + 'YouTube video'}
										className="w-full h-full"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen></iframe>
								</div>
							)}
						</div>
						<div className=" flex gap-6 overflow-auto max-w-sm md:max-w-full">
							{data.images.length &&
								data.images.reverse().map((img) => {
									return (
										<div
											key={uniqueId()}
											className="w-[300px] h-[300px] shrink-0 rounded-xl overflow-hidden md:w-[20rem] md:h-[20rem]">
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
									className=" w-32 md:w-40 h-32 md:h-40 rounded-full bg-blue-700 hover:bg-tertiary transition-all duration-700 p-4 text-white flex flex-col justify-center items-center gap-2">
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
							<div className="flex flex-wrap justify-center gap-6 md:gap-8">
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
