import Footer from '@/components/shared/footer';
import RequestForm from '@/components/shared/request-form';
import WorkServices from '@/components/works/services';
import WorkCard from '@/components/works/workCard';
import { getProCats, getVideos } from '@/lib/actions';
import { getProjects } from '@/lib/actions/project-actions';
import empty from '@/assets/8961448_3973477.svg';
import Img from 'next/image';
import Line2 from '@/components/Icons/line2';
import Image from '@/components/shared/image';
import LineIcon from '@/components/Icons/line';

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
		take: 10,
		skip: 0,
		orderBy: {
			createdAt: 'asc',
		},
		search: search,
	});
	const videos = await getVideos();
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
					{projects.length ? (
						projects.map((p, i) => <WorkCard index={i} key={p.name} data={p} />)
					) : (
						<div className=" flex flex-col gap-3 items-center justify-center pt-10 md:pt-20">
							<Img
								src={empty}
								alt="Empty"
								className=" w-full h-40 md:w-80 md:h-80 object-cover"
							/>
							<p className=" text-xl font-medium">No project found!</p>
						</div>
					)}
				</div>
				<div className="px-4 md:px-10 md:max-w-[1350px] py-10 mx-auto grid gap-10">
					<div>
						<h2 className="text-2xl pb-4 md:text-[4rem] font-normal font-oswald ">
							Documentaries
						</h2>
						<div className=" relative py-3">
							<LineIcon />
						</div>
					</div>
					<div className="flex flex-wrap gap-4 relative">
						{videos.map((videoItem) => (
							<div key={videoItem.url} className="grid gap-1">
								<div className="relative w-[400px] h-[225px] overflow-hidden">
									<iframe
										width="400"
										height="225"
										src={videoItem.url}
										className="absolute left-0 top-0 w-full h-full"
										title="YouTube video player"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen></iframe>
								</div>
							</div>
						))}
					</div>
					<div className=" flex flex-col gap-6">
						<div className="flex flex-col gap-1">
							<h2 className="text-2xl md:text-[4rem] pb-6 font-normal font-oswald ">
								Designs
							</h2>
							<div className=" relative py-3">
								<LineIcon />
							</div>
						</div>
						<div>
							<p>
								At Dinovate Solutions, we believe that exceptional design and
								quality printing are essential for effective communication.
							</p>
						</div>
						<div className="grid md:grid-cols-2 gap-6">
							<div className=" w-full h-[20rem] md:h-[30rem] ">
								<Image src={'project1.jpg'} bucketName="images" alt="banner" />
							</div>
							<div className=" space-y-6">
								<h3 className="text-xl md:text-2xl text-tertiary ">
									PIND Annual Report
								</h3>
								<p>
									The Partnership Initiatives in the Niger Delta (PIND) promotes
									peace and sustainable development in the Niger Delta region.
									For their annual report, PIND needed a design that captured
									their achievements and commitment to positive change. Through
									creative Design, we created an engaging design highlighting
									PIND’s key projects and impact stories. Our top-tier printing
									techniques also ensured a vibrant, professional finish.
								</p>
							</div>
						</div>
						<div className="grid md:grid-cols-2 gap-6">
							<div className=" space-y-6">
								<h3 className="text-xl md:text-2xl text-tertiary ">
									ABC Annual Report
								</h3>
								<p>
									The African Borderlands Centre (ABC) supports communities and
									fosters development in borderland regions across Africa. Their
									annual report aimed to effectively communicate successes and
									future plans. In creating this engaging design, we developed a
									clean and modern design with infographics and visuals for
									clarity. We ensured a polished and professional final product.
								</p>
							</div>
							<div className=" w-full h-[20rem] md:h-[30rem] ">
								<Image src={'project4.jpg'} bucketName="images" alt="banner" />
							</div>
						</div>
						<div className="grid md:grid-cols-2 gap-6">
							<div className=" w-full h-[20rem] md:h-[30rem] ">
								<Image src={'project3.jpg'} bucketName="images" alt="banner" />
							</div>
							<div className=" space-y-6">
								<h3 className="text-xl md:text-2xl text-tertiary ">
									WaterAid: From Briefs to Action - Design that Drives Impact
								</h3>
								<p>
									Our collaboration with WaterAid underscores the power of
									strategic communication and design in achieving impactful
									change. Providing a range of design and printing services to
									support WaterAid's mission.
								</p>
								<p>
									We have crafted compelling project briefs that clearly
									outlined objectives and strategies for enhancing water and
									sanitation access in Abuja. Our policy documents presented
									robust cases for action, backed by evidence and expert
									insights.
								</p>
								<p>
									Our partnership with WaterAid exemplifies the synergy between
									strategic communication and design. Together, we contribute to
									achieving Sustainable Development Goal 6: Clean Water and
									Sanitation for All. Through effective design, we raise
									awareness on critical water security issues, mobilize support,
									and advocate for a future where clean water is accessible to
									everyone
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<RequestForm open={!!contact} />
			<Footer />
		</div>
	);
}
