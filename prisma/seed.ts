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
			image: 'ceo-Dayo.jpg',
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
			name: 'Oluseyi Abdulmalik',
			title: 'Lead, Strategic Communications',
			image: 'Oluseyi-Abdulmalik.jpg',
			des: "Oluseyi Abdulmalik leads Strategic Communications at Dinovate Solutions. She brings over 15 years of experience in media and strategic communications across diverse sectors, enhancing the company's strategic initiatives and global communications efforts.",
			social: [
				{ icon: 'Facebook', link: '#' },
				{ icon: 'Twitter', link: '#' },
				{ icon: 'Linkedin', link: '#' },
				{ icon: 'Instagram', link: '#' },
			],
		},
		{
			name: 'Farid Suleiman',
			title: 'Project Officer',
			image: 'Fareed-Suleiman.jpeg',
			des: 'Farid Suleiman spearheads projects as the Project Manager at Dinovate Solutions, guiding them from conception to delivery. With a proven track record in managing creative media projects, he has successfully led projects across multiple sectors. Farid Is dedicated to utilizing his expertise to drive meaningful social impact initiatives.',
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
			name: 'Azeez Badmus',
			title: 'Lead Cinematographer',
			image: 'Azeez-Badmus.jpeg',
			des: 'Azeez Badmus is the lead cinematographer and video editor at Dinovate Solutions. He specializes in creating captivating visual content through his expertise in animation, video editing, videography, and motion graphics. Prior to joining Dinovate, Azeez has worked with renowned brands such as Binance, Mixagrip Woods (Ghana), Power Plug, and Kunle Afolayan Production, showcasing his versatile skill set and creative vision.',
			social: [
				{ icon: 'Facebook', link: '#' },
				{ icon: 'Twitter', link: '#' },
				{ icon: 'Linkedin', link: '#' },
				{ icon: 'Instagram', link: '#' },
			],
		},
		{
			name: 'Blaise Chisom Akwuobi',
			title: 'Video Editor',
			image: 'Chisom-1.png',
			des: 'Blaise Chisom Akwuobi is a video editor and cinematographer at Dinovate Solutions. As a versatile cinematographer and 3D enthusiast. he is known for crafting compelling narratives. He has a keen eye for detail, transforming raw footage into captivating stories and pushing the boundaries of visual storytelling. He has created impactful content for brands like Monster Energy, Martell, CBN, and the Nigerian Navy.',
			social: [
				{ icon: 'Facebook', link: '#' },
				{ icon: 'Twitter', link: '#' },
				{ icon: 'Linkedin', link: '#' },
				{ icon: 'Instagram', link: '#' },
			],
		},
		{
			name: 'Adetutu Lawson',
			title: 'Business Development Officer',
			image: 'Adetutu-.jpeg',
			des: 'Adetutu is the business Development Manager at Dinovate Solutions. She has a background in business administration and also an international business analysis degree. At Dinovate, she has been involved with managing various projects, creating solutions to problems and also planning for the future.',
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
			name: 'Dolapo Bamidele',
			title: 'Social Media Manager',
			image: 'Dolapo.jpg',
			des: "Dolapo Bamidele, Dinovate Solutions' Social Media Manager, leverages her community management and brand voice expertise to create a compelling online presence. Her SEO knowledge and platform expertise yield engaging content that boosts our brand growth.",
			social: [
				{ icon: 'Facebook', link: '#' },
				{ icon: 'Twitter', link: '#' },
				{ icon: 'Linkedin', link: '#' },
				{ icon: 'Instagram', link: '#' },
			],
		},
		{
			name: 'Christine Akume-David',
			title: 'Communication Specialist',
			image: 'Christine-Akume-.jpeg',
			des: 'Christine Akume-David is the communication Specialist at Dinovate Solutions, With almost a decade of diverse communication and leadership experience, she brings a distinctive skill set to the Dinovate team. Drawing from her background in media, filmmaking, and entrepreneurship. She excels in shaping compelling stories and informative content, leveraging her expertise in creative writing, copywriting, and business writing to ensure clarity and impact.',
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
		await main();
		await Staff();
	} catch (e) {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	} finally {
		await prisma.$disconnect();
	}
}

await upload();
