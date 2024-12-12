'use client';
import {
	ArrowUp,
	Clock,
	Facebook,
	Instagram,
	Linkedin,
	Locate,
	Mail,
	MapPin,
	Phone,
	Twitter,
	X,
} from 'lucide-react';
import { ReactNode } from 'react';
import Link from 'next/link';
import { animateScroll } from 'react-scroll';
import { cn } from '@/lib/utils';
import Line2 from '../Icons/line2';

interface Props {
	isDark?: boolean;
	className?: string;
}

export default function Footer(props: Props) {
	const { isDark } = props;
	const style = {
		backgroundImage: `url(${
			isDark ? '/svg/footer-yellow.webp' : '/svg/footer-wave.svg'
		})`,
	};
	const options = {
		duration: 2000,
		smooth: 'easeInOutQuad',
	};
	return (
		<footer className="space-y-8 relative py-12">
			<div className=" px-4 sm:px-[8rem] mx-auto space-y-8 max-w-[1350px]">
				<div className="grid sm:grid-cols-4 gap-6">
					{footer.map((item) => (
						<div key={item.title} className="flex flex-col gap-3">
							<div className="space-y-1">
								<h3 className="text-sm sm:text-lg font-oswald uppercase font-normal">
									{item.title}
								</h3>
								<span className=" ">
									<img
										src="/svg/line2.svg"
										alt=" lines"
										className="w-[100px] h-1 object-fit"
									/>
								</span>
							</div>
							<ul className="flex flex-col gap-1">
								{item.links.map((link) => (
									<li
										key={link.label}
										className="flex items-center text-sm font-lato gap-1">
										{link?.icon && (
											<span
												className={cn(
													'text-gray-500 hover:text-gray-800',
													isDark && 'text-white hover:text-tertiary/80'
												)}>
												{link.icon}
											</span>
										)}
										<Link
											href={link.href}
											className={cn(
												'text-gray-700 font-light hover:text-gray-800',
												isDark && 'text-white hover:text-tertiary/80'
											)}>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className=" flex flex-col justify-center items-center gap-6">
					<div className="flex gap-8 sm:gap-16">
						{socials.map((s) => (
							<Link
								key={s.label}
								href={s.href}
								target="_blank"
								rel="noopener noreferrer">
								<s.icon className="h-6 w-6 text-tertiary hover:text-tertiary/80" />
							</Link>
						))}
					</div>
					<div className="space-y-2 flex flex-col items-center">
						<p className="text-xs">
							© Copyright {new Date(Date.now()).getFullYear().toString()}{' '}
							Dinovate Solutions
						</p>
						<p className="text-xs">Tel: +234 8166357463</p>
						{/* <a
							href="http://meltechgrp.com"
							target="_blank"
							rel="noopener noreferrer">
							<p className="text-[9px]">Designed by MEL-Technologies</p>
						</a> */}
					</div>
				</div>
			</div>
			<div
				style={style}
				className=" absolute bottom-0 left-0  w-screen h-fit sm:h-[8rem] px-4 flex items-center justify-end bg-no-repeat bg-cover">
				<div
					onClick={() => animateScroll.scrollToTop(options)}
					className=" p-3 text-black sm:text-white flex flex-col items-center gap-1 w-fit h-fit">
					<span>
						<ArrowUp className={isDark ? 'text-black' : 'text-tertiary'} />
					</span>
					<span className=" text-xs">back to top</span>
				</div>
			</div>
		</footer>
	);
}

const footer: FooterTop = [
	{
		title: 'Start a conversation',
		links: [
			{
				label: 'Want to collaborate?',
				href: '#',
			},
		],
	},
	{
		title: 'NAVIGATION',
		links: [
			{
				label: 'About',
				href: '/about-us',
			},
			{
				label: 'Services',
				href: '/services',
			},
			{
				label: 'Projects',
				href: '/works',
			},
			{
				label: 'Contact',
				href: '?contact=true',
			},
		],
	},
	{
		title: 'SUB-BRANDS',
		links: [
			{
				label: 'Media Production',
				href: '/works?search=media-production',
			},
			{
				label: 'Strategic Communications',
				href: '/works?search=strategic-communication',
			},
			{
				label: 'Design & Branding',
				href: '/works?search=design-and-branding',
			},
			{
				label: 'Avocacy',
				href: '/works?search=advocacy',
			},
			{
				label: 'Capacity Building',
				href: '/works?search=capacity-building',
			},
			{
				label: 'Creative Space',
				href: '/works?search=creative-studio-hub',
			},
		],
	},
	{
		title: 'CONTACT INFO',
		links: [
			{
				label: 'House A2 Plot 37 Kado District, Abuja',
				href: '?contact=true',
				icon: <MapPin className={cn('w-4 h-4 text-gray-400')} />,
			},
			{
				label: '+234 8166357463',
				href: '?contact=true',
				icon: <Phone className={cn('w-4 h-4 text-gray-400')} />,
			},
			{
				label: 'info@dinovate.com',
				href: '?contact=true',
				icon: <Mail className={cn('w-4 h-4 text-gray-400')} />,
			},
			{
				label: '9am to 6pm',
				href: '?contact=true',
				icon: <Clock className={cn('w-4 h-4 text-gray-400')} />,
			},
		],
	},
];

const socials = [
	{
		label: 'Facebook',
		href: 'https://www.facebook.com/Dinovate/',
		icon: Facebook,
	},
	{
		label: 'Instagram',
		href: 'https://www.instagram.com/dinovatesolutions/',
		icon: Instagram,
	},
	{
		label: 'X',
		href: 'https://x.com/dinovate',
		icon: X,
	},
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/company/dinovate-solutions',
		icon: Linkedin,
	},
];

type FooterTop = {
	title: string;
	links: {
		label: string;
		href: string;
		icon?: ReactNode;
	}[];
}[];
