import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
	log: ['query'],
});

async function main() {
	await prisma.$connect();
	console.log('Populating data');
	const services = [
		{
			name: 'Media Production',
			slug: 'media-production',
			link: '/media-production',
		},
		{
			name: 'Strategic Communication',
			slug: 'strategic-communication',
			link: '/strategic-communication',
		},
		{
			name: 'Design and Branding',
			slug: 'design-and-branding',
			link: '/design-and-branding',
		},
		{ name: 'Advocacy', slug: 'advocacy', link: '/advocacy' },
		{
			name: 'Capacity Building',
			slug: 'capacity-building',
			link: '/capacity-building',
		},
		{
			name: 'Creative Studio/Hub',
			slug: 'creative-studio-hub',
			link: '/creative-studio-hub',
		},
	];
	const projects = [
		{
			name: 'The IWMI PhotoVoice Research Project',
			organization: 'International Water Management Institute (IWMI)',
			description:
				'At Dinovate Solutions, we are committed to showcasing the profound impact of the International Water Management Institute (IWMI) in addressing water security challenges faced by communities in Adamawa State, Nigeria. The IWMI project has played a pivotal role in highlighting the stark realities faced by these communities grappling with severe water scarcity due to socio-economic and environmental factors. This initiative has empowered community members to voice their experiences, fostering greater global awareness and advocacy. The research, conducted in four different communities in Adamawa State, Nigeria, sheds light on the challenges of accessing clean water and sanitation facilities amid displacement. Collaborating with Dinovate, IWMI facilitated workshops where community members used cameras and media tools to capture compelling images that depict both the challenges and resilience in their daily lives. This project empowered community members to become their own narrators, using cameras to document their water journeys and harsh water realities. The photos serve as poignant reminders of the ongoing struggle and the aspirations for a better future.',

			images: ['imwi1.jpeg', 'imwi2.jpeg', 'imwi3.jpeg'],
			category: 'Media Production',
			links: [],
			video: [],
			benefits: [],
		},
		{
			name: 'Phase II- IWMI Photovoice Project',
			organization: 'International Water Management Institute (IWMI)',
			description:
				"Building on the success of the Photovoice Research Project in Adamawa State, Dinovate Solutions elevated the IWMI Photovoice Project in its second phase by creating two impactful storytelling mediums: a three-episode podcast series and a visually compelling photo essay book. These initiatives amplified the voices of fragile and conflict-affected communities, bringing their stories to a broader audience. The podcast series, recorded at Dinovate’s state-of-the-art studio, featured members of the community and an IWMI representative. Through heartfelt conversations, the episodes highlighted personal experiences, challenges, and resilience while weaving in expert perspectives. Complementing this, the photo essay book showcased powerful images captured by community participants, enriched with concise narratives and case studies. Designed for advocacy, the book provided a visually engaging and accessible tool to inspire empathy, awareness, and action among stakeholders and policymakers. Both mediums served as platforms for storytelling and advocacy, reinforcing the project's mission to shed light on water system vulnerabilities in Adamawa State.",
			category: 'Media Production',
			images: ['iwmi4.jpeg', 'iwmi5.jpeg', 'iwmi6.jpeg'],
			links: [],
			video: [],
			benefits: [],
		},
		{
			name: 'Borderland Documentaries Series',
			organization: 'United Nations Development Programme (UNDP)',
			description:
				"Dinovate Solutions partnered with the UNDP to produce the Borderland Documentary Series, an 11-episode exploration of resilience and innovation in Africa's border communities set in multiple African countries. Each episode highlights unique stories of individuals and communities overcoming challenges through ingenuity, cooperation, and determination. The series aimed to raise awareness, inspire policy change, and promote development by showcasing real voices and authentic experiences. This series effectively supports UNDP’s mission of fostering sustainable development and resilience in Africa’s borderlands.",
			category: 'Media Production',
			video: [],
			links: [],
			benefits: [],
			images: ['project1.jpg', 'project2.jpg', 'project4.jpg'],
		},
		{
			name: 'Redesign and Graphical Illustration of the National Standing Order',
			organization: 'Banyan Global',
			description:
				'Elevating Community Health Practices with Dinovate Solutions. Community Health Practitioners (CHPs) play a critical role in rural healthcare, serving as the first point of contact for millions. To bolster their work, the Community Health Practitioners’ Registration Board of Nigeria, in partnership with Banyan Global and the USAID Health Workforce Management Activity, introduced the 2024 revised National Standing Orders. Dinovate Solutions was proud to enhance this essential guide by integrating visually engaging aids that simplify complex medical procedures and conditions. These illustrations not only improve understanding but also promote the practical application of life-saving protocols, ensuring CHPs can deliver high-quality care effectively.',
			benefits: [
				'Enhanced Understanding: Simplifies intricate medical concepts through visuals.',
				'Improved Retention: Combines text and images to strengthen learning.',
				'Practical Application: Provides step-by-step visuals for emergencies and routine care.',
				'Accessibility: Overcomes language barriers with visual content.',
				'Engagement: Encourages frequent use and active referencing.',
			],
			category: 'Strategic Communication',
			images: ['project9.jpg', 'project11.jpg'],
			links: [],
			video: [],
		},
		{
			name: 'Documentary of the Revised National Standing Order',
			organization: 'Banyan Global',
			description:
				'Following the success of the design phase, Dinovate Solutions documented the process that led to the revision and launch of the 2024 revised National Standing Orders, capturing this milestone in an engaging and impactful documentary. The film celebrated the collaborative efforts of Banyan Global, USAID, and the Community Health Practitioners’ Registration Board in revolutionizing healthcare delivery. Through interviews with stakeholders, real-life testimonies from CHPs, and comprehensive event coverage, the documentary showcased the guide’s potential to transform rural healthcare practices. This project highlights Dinovate’s ability to tell powerful stories that inspire change while amplifying the impact of critical healthcare initiatives.',

			category: 'Strategic Communication',
			video: [],
			links: [],
			images: [],
			benefits: [],
		},
	];

	// Loop through categories to create them and their subcategories
	for (const categoryData of services) {
		const { name, slug } = categoryData;
		const cat = await prisma.projectCategory.findFirst({
			where: { name: name },
		});
		if (cat) continue;
		await prisma.projectCategory.create({
			data: {
				name: name,
				slug: slug,
			},
		});
	}
	for (const project of projects) {
		const { name, organization, images, category, description, benefits } =
			project;
		const p = await prisma.project.findFirst({
			where: { name: name },
		});
		if (p) continue;
		await prisma.project.create({
			data: {
				name: name,
				organization,
				category: { connect: { name: category } },
				description,
				benefits,
				images: { createMany: { data: images.map((img) => ({ url: img })) } },
			},
		});
	}

	console.log(
		'Category and Subcategory with banner images seeded successfully!'
	);
}

async function Staff() {
	await prisma.$connect();

	const profiles = [
		{
			name: 'Temidayo Ibitoye',
			title: 'CEO and founder',
			image: 'dayo.jpeg',
			des: 'Temidayo Ibitoye is the CEO and founder of Dinovate Solutions. He leads the company in pioneering innovative communication strategies across Africa, empowering global development organizations to achieve sustainable impact. Renowned for his expertise in effective storytelling, visual communication, strategic branding, and knowledge management, Temidayo has spearheaded pivotal projects for major institutions including the United Nations, the European Union, USAID, the World Bank, and the Mastercard Foundation.',
			social: [
				{ icon: 'Facebook', link: 'https://www.facebook.com/dayo.ibitoye' },
				{ icon: 'Twitter', link: 'https://x.com/Dayoibitoye' },
				{
					icon: 'Linkedin',
					link: 'https://www.linkedin.com/in/temidayo-ibitoye/',
				},
				{ icon: 'Instagram', link: 'https://www.instagram.com/dayoibitoye/' },
			],
		},
		{
			name: 'Christine Akume-David',
			title: 'Communications Specialist',
			image: 'christine.jpeg',
			des: 'Christine is the communications Specialist at Dinovate. With an extensive background in communication, filmmaking and management, she brings a distinctive skill set that enchances the Dinovate team’s pivotal goals. Executing communication and innovative strategies, and overseeing external and internal communication.',
			social: [
				{ icon: 'Facebook', link: '#' },
				{ icon: 'Twitter', link: '#' },
				{ icon: 'Linkedin', link: '#' },
				{ icon: 'Instagram', link: '#' },
			],
		},
		{
			name: 'Farid Sulieman',
			title: 'Project Officer',
			image: 'farid.jpeg',
			des: 'Farid is the Project Officer at Dinovate, coordinating the smooth execution of projects from planning to delivery. With a proven track record in coordinating creative media initiatives, he has successfully contributed to projects across multiple sectors. Farid is committed to leveraging his expertise to drive meaningful social impact initiatives.',
			social: [
				{ icon: 'Facebook', link: '#' },
				{ icon: 'Twitter', link: '#' },
				{
					icon: 'Linkedin',
					link: 'https://www.linkedin.com/in/ferid-sulieman/',
				},
				{ icon: 'Instagram', link: '#' },
			],
		},
		{
			name: 'Miracle',
			title: 'Social Media Manager',
			image: 'miracle.jpeg',
			des: 'Miracle is a dynamic Social Media Manager and Content Creator at Dinovate. With extensive experience in social media management and content creation, she develops and implements engaging content strategies that drive brand visibility, boost engagement, and foster meaningful connections. Additionally, Princess brings expertise in campaign analysis, content calendar planning, and team collaboration.',
			social: [
				{ icon: 'Facebook', link: '#' },
				{ icon: 'Twitter', link: '#' },
				{ icon: 'Linkedin', link: '#' },
				{ icon: 'Instagram', link: '#' },
			],
		},
		{
			name: 'Grace Omale',
			title: 'Cinematographer & Editor',
			image: 'grace.jpeg',
			des: 'A skilled professional with expertise in cinematography, editing, and visual direction, Grace brings a refined touch to every project, producing visually compelling content that drives impactful storytelling at Dinovate.',
			social: [
				{ icon: 'Facebook', link: '#' },
				{ icon: 'Twitter', link: '#' },
				{ icon: 'Linkedin', link: '#' },
				{ icon: 'Instagram', link: '#' },
			],
		},
		{
			name: 'Emmanuella',
			title: 'Communications Assistant',
			image: 'emmanuella.jpeg',
			des: `Emmanuella is a detail-oriented Communications Assistant at Dinovate. She helps with curating and coordinating content for various channels. With a background in International Studies, Emmanuella brings a unique perspective to her work and supports internal communication efforts, developing valuable experience in communications. 

In addition to her communications role, Ella is also a skilled photographer with extensive experience in capturing high-quality images.`,
			social: [
				{ icon: 'Facebook', link: '#' },
				{ icon: 'Twitter', link: '#' },
				{ icon: 'Linkedin', link: '#' },
				{ icon: 'Instagram', link: '#' },
			],
		},
		{
			name: 'Gideon Moses',
			title: 'Graphic Designer',
			image: 'gideon.jpg',
			des: 'Gideon Moses Is the Graphic Designer at Dinovate Solutions, he is responsible for creating visually compelling designs for various projects, including project branding and high-priority documents. He brings a keen eye for detail and a flair for creativity to every project he undertakes. He actively seeks opportunities to experiment with new design techniques, ensuring that Dinovate Solutions remains at the forefront in visual communication',
			social: [
				{ icon: 'Facebook', link: '#' },
				{ icon: 'Twitter', link: '#' },
				{ icon: 'Linkedin', link: '#' },
				{ icon: 'Instagram', link: '#' },
			],
		},
		{
			name: 'Adetutu Lawson',
			title: 'Administrative Asst.',
			image: 'lawson.jpg',
			des: 'Dedicated and results-driven Administrative Assistant with a background in Business Administration and International Business Analysis, Adetutu provides exceptional team support. She supports record keeping, data entry, procurement, and other administrative functions, ensuring seamless efficiency and productivity.',
			social: [
				{ icon: 'Facebook', link: '#' },
				{ icon: 'Twitter', link: '#' },
				{ icon: 'Linkedin', link: '#' },
				{ icon: 'Instagram', link: '#' },
			],
		},
		{
			name: 'Bella',
			title: 'Administrative Receptionist',
			image: 'bella.jpeg',
			des: 'Bella serves as the first point of contact for visitors and callers, providing top-notch client service and support. As Administrative Receptionist, she expertly manages front desk functions, keeps track of bookings, performs data entry, and coordinates schedules to ensure seamless day-to-day activities and warm hospitality.',
			social: [
				{ icon: 'Facebook', link: '#' },
				{ icon: 'Twitter', link: '#' },
				{ icon: 'Linkedin', link: '#' },
				{ icon: 'Instagram', link: '#' },
			],
		},
		{
			name: 'Victor',
			title: 'Graphics Designer',
			image: 'victor.jpeg',
			des: 'Victor is a detail-oriented Graphics Designer who assists in creating engaging visual content for various projects. As he continues to develop his design skills, Victor brings a fresh perspective to his work, supporting our creative efforts and gaining valuable experience in graphic design.',
			social: [
				{ icon: 'Facebook', link: '#' },
				{ icon: 'Twitter', link: '#' },
				{ icon: 'Linkedin', link: '#' },
				{ icon: 'Instagram', link: '#' },
			],
		},
		{
			name: 'Favour',
			title: 'Social Media Assistant',
			image: 'favour.jpeg',
			des: 'Favour is an enthusiastic Social Media Assistant and Content Creator at Dinovate. He provides exceptional support in content creation and social media management. Favour is highly organized, efficient, and eager to continuously evolve as he gains valuable experience in social media management.',
			social: [
				{ icon: 'Facebook', link: '#' },
				{ icon: 'Twitter', link: '#' },
				{ icon: 'Linkedin', link: '#' },
				{ icon: 'Instagram', link: '#' },
			],
		},
	];

	for (const staff of profiles) {
		const { name, title, image, des, social } = staff;
		const p = await prisma.staff.findFirst({
			where: { fullName: name },
		});
		if (p) continue;
		await prisma.staff.create({
			data: {
				fullName: name,
				title,
				description: des,
				image: {
					create: {
						url: image,
					},
				},
			},
		});
	}
}

async function upload() {
	try {
		// await main();
		// await Staff();
	} catch (e) {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	} finally {
		await prisma.$disconnect();
	}
}

await upload();
