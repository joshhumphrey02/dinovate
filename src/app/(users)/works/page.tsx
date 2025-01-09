import Footer from '@/components/shared/footer';
import RequestForm from '@/components/shared/request-form';
import { getProCats, getVideos } from '@/lib/actions';
import { getProjects } from '@/lib/actions/project-actions';
import empty from '@/assets/8961448_3973477.svg';
import Img from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectsCards from '@/components/works/projects';
import DocumentCard from '@/components/works/document';
import DesignCard from '@/components/works/design';

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
			<div className=" flex flex-col gap-20 sm:py-[8rem] sm:w-[70%] sm:mx-auto max-w-[1350px]">
				<Tabs defaultValue="projects" className="w-full">
					<TabsList className="grid bg-gray-300 text-black w-full h-24 grid-cols-4">
						<TabsTrigger
							className=" h-full data-[state=active]:bg-tertiary data-[state=active]:text-white text-lg border-r border-gray-500 md:text-xl font-bold flex items-center gap-2 "
							value="projects">
							<img
								src="/icons/project.png"
								alt="projects"
								className="w-12 h-12 object-cover"
							/>
							Projects
						</TabsTrigger>
						<TabsTrigger
							className=" h-full data-[state=active]:bg-tertiary data-[state=active]:text-white text-lg border-r border-gray-500 md:text-xl font-bold flex items-center gap-2 "
							value="documentaries">
							<img
								src="/icons/paper.png"
								alt="projects"
								className="w-12 h-12 object-cover"
							/>
							Documentaries
						</TabsTrigger>
						<TabsTrigger
							className=" h-full data-[state=active]:bg-tertiary data-[state=active]:text-white text-lg border-r border-gray-500 md:text-xl font-bold flex items-center gap-2 "
							value="designs">
							<img
								src="/icons/curve.png"
								alt="projects"
								className="w-12 h-12 object-cover"
							/>
							Designs
						</TabsTrigger>
						<TabsTrigger
							className=" h-full data-[state=active]:bg-tertiary data-[state=active]:text-white text-lg md:text-xl font-bold flex items-center gap-2 "
							value="photography">
							<img
								src="/icons/photography.png"
								alt="projects"
								className="w-12 h-12 object-cover"
							/>
							Photography
						</TabsTrigger>
					</TabsList>
					<TabsContent className=" px-2" value="projects">
						<ProjectsCards data={projects} search={search} cats={cats} />
					</TabsContent>
					<TabsContent className=" px-2" value="documentaries">
						<div className=" grid md:grid-cols-3 gap-4 pt-4">
							{videos.length ? (
								videos.map((p, i) => (
									<DocumentCard index={i} key={p.url} data={p} />
								))
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
					</TabsContent>
					<TabsContent className=" px-2" value="designs">
						<div className=" grid md:grid-cols-3 gap-4 pt-4">
							{designs.length ? (
								designs.map((p, i) => (
									<DesignCard index={i} key={p.title} data={p} />
								))
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
					</TabsContent>
					<TabsContent className=" px-2" value="photography">
						<div className=" grid md:grid-cols-3 gap-4 pt-4">
							<div className=" w-full col-span-4 flex flex-col gap-3 items-center justify-center pt-10 md:pt-20">
								<Img
									src={empty}
									alt="Empty"
									className="  h-40 md:w-80 md:h-80 object-cover"
								/>
								<p className=" text-xl font-medium">No data found!</p>
							</div>
						</div>
					</TabsContent>
				</Tabs>
			</div>
			<RequestForm open={!!contact} />
			<Footer />
		</div>
	);
}

const designs = [
	{
		title: 'WaterAid: From Briefs to Action - Design that Drives Impact',
		des: `Our collaboration with WaterAid underscores the power of
									strategic communication and design in achieving impactful
									change. Providing a range of design and printing services to
									support WaterAid's mission.
									We have crafted compelling project briefs that clearly
									outlined objectives and strategies for enhancing water and
									sanitation access in Abuja. Our policy documents presented
									robust cases for action, backed by evidence and expert
									insights.
									Our partnership with WaterAid exemplifies the synergy between
									strategic communication and design. Together, we contribute to
									achieving Sustainable Development Goal 6: Clean Water and
									Sanitation for All. Through effective design, we raise
									awareness on critical water security issues, mobilize support,
									and advocate for a future where clean water is accessible to
									everyone`,
		images: [
			{
				id: '34567',
				url: 'water1.png',
			},
			{
				id: '3456227',
				url: 'water2.png',
			},
			{
				id: '7894563',
				url: 'water3.png',
			},
		],
	},
	{
		title: 'ABC Annual Report',
		des: `The African Borderlands Centre (ABC) supports communities and
                  fosters development in borderland regions across Africa. Their
                  annual report aimed to effectively communicate successes and
                  future plans. In creating this engaging design, we developed a
                  clean and modern design with infographics and visuals for
                  clarity. We ensured a polished and professional final product.`,
		images: [
			{
				id: '34567',
				url: 'undp1.png',
			},
			{
				id: '3456227',
				url: 'undp2.png',
			},
			{
				id: '7894563',
				url: 'undp3.png',
			},
		],
	},
	{
		title: 'PIND Annual Report',
		des: `PIND needed a design that captured their achievements and commitment to positive change. Through
                  creative Design, we created an engaging design highlighting PIND’s key projects and impact stories. Our top-tier printing
                  techniques also ensured a vibrant, professional finish.`,
		images: [
			{
				id: '34567',
				url: 'pind1.png',
			},
			{
				id: '3456227',
				url: 'pind2.png',
			},
			{
				id: '7894563',
				url: 'pind3.png',
			},
		],
	},
];
