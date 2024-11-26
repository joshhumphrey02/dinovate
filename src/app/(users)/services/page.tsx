import Contact from '@/components/home/contact';
import Line2 from '@/components/Icons/line2';
import ServiceMedia from '@/components/services/media';
import ServiceHero from '@/components/services/service-hero';
import ServiceSpace from '@/components/services/space';
import ServiceStrategy from '@/components/services/strategy';
import Footer from '@/components/shared/footer';
import Image from '@/components/shared/image';
import RequestForm from '@/components/shared/request-form';
import { getProfileData } from '@/lib/actions';
import { uniqueId } from '@/lib/utils';
import { Twitter, Mail } from 'lucide-react';
import Link from 'next/link';

interface Props {
	searchParams: Promise<{
		contact?: string;
	}>;
}

export default async function Services(props: Props) {
	const { contact } = await props.searchParams;
	const profiles = await getProfileData();
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
							{profiles.slice(0, 3).map((t, i) => (
								<div key={uniqueId()} className=" relative">
									<div className=" relative basis-[31%]">
										<div className="flex flex-col gap-1">
											<div className="w-full h-[21rem] sm:h-[19rem] xl:h-[24rem]">
												{t.image && (
													<Image
														src={t.image.url}
														bucketName="images"
														alt={t.fullName}
														scale={true}
													/>
												)}
											</div>
											<h4 className="text-base md:text-xl">{t.fullName}</h4>
											<p className="text-xs text-tertiary">{t.title}</p>
											<div className=" flex gap-2 items-center">
												<Link href={'#'}>
													<Mail className="w-4 h-4 " />
												</Link>
												<Link href={'#'}>
													<Twitter className="w-4 h-4 " />
												</Link>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
						<Contact />
					</div>
				</div>
			</div>
			<RequestForm open={!!contact} />
			<Footer />
		</div>
	);
}
