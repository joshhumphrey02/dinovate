import LineIcon from '@/components/Icons/line';
import Line2 from '@/components/Icons/line2';
import ServiceMedia from '@/components/services/media';
import ServiceHero from '@/components/services/service-hero';
import ServiceSpace from '@/components/services/space';
import ServiceStrategy from '@/components/services/strategy';
import Footer from '@/components/shared/footer';
import { uniqueId } from '@/lib/utils';
import { Twitter, Mail } from 'lucide-react';

export default function Services() {
	return (
		<div>
			<div className=" px-4 space-y-8 max-w-sm overflow-hidden sm:space-y-20 py-20 sm:py-[8rem] md:w-[70%] md:mx-auto md:max-w-[1350px]">
				<ServiceHero />
				<div className="grid pt-10 gap-12">
					<ServiceMedia />
					<ServiceStrategy />
					<ServiceSpace />
					<div className=" md:px-10 space-y-6 pt-10">
						<div className="flex gap-4 items-center">
							<span className="hidden md:flex">
								<Line2 color="#000" />
							</span>
							<p className=" text-xl md:text-3xl">
								Let's start a{' '}
								<span className=" font-floodstd text-tertiary">
									conversation.
								</span>
							</p>
						</div>
						<div className="grid sm:grid-cols-3 relative gap-4">
							{profilesData.map((t, i) => (
								<div key={uniqueId()} className=" relative">
									<div className=" relative basis-[31%]">
										<div className="flex flex-col gap-1">
											<div>
												<img
													src={t.image}
													alt={t.name}
													className=" w-full object-cover h-[21rem] sm:h-[19rem] xl:h-[24rem]"
												/>
											</div>
											<h4 className="text-base md:text-xl">{t.name}</h4>
											<p className="text-xs text-tertiary">{t.title}</p>
											<div className=" flex gap-2 items-center">
												<span>
													<Mail className="w-4 h-4 " />
												</span>
												<span>
													<Twitter className="w-4 h-4 " />
												</span>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export const profilesData = [
	{
		name: 'Temidayo Ibitoye',
		title: 'CEO and founder',
		image: '/profiles/ceo-Dayo.jpg',
		social: [{ icon: Twitter, link: 'https://x.com/Dayoibitoye' }],
	},
	{
		name: 'Oluseyi Abdulmalik',
		title: 'Lead, Strategic Communications',
		image: '/profiles/Oluseyi-Abdulmalik.jpg',
		social: [{ icon: Twitter, link: '#' }],
	},
	{
		name: 'Farid Suleiman',
		title: 'Project Officer',
		image: '/profiles/Fareed-Suleiman.jpeg',
		social: [{ icon: Twitter, link: '#' }],
	},
];
