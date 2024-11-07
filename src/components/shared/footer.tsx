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
} from 'lucide-react';
import { ReactNode } from 'react';
import LineIcon from '../Icons/line';
import Link from 'next/link';
import { animateScroll } from 'react-scroll';
import { cn } from '@/lib/utils';

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
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
					{footer.map((item) => (
						<div key={item.title} className="flex flex-col gap-3">
							<div className="space-y-1">
								<h3 className="text-sm font-semibold">{item.title}</h3>
								<LineIcon fill={isDark ? '#ffab00' : '#000'} className="h-2" />
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
												'text-gray-500 hover:text-gray-800',
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
					<div className="space-y-1 flex flex-col items-center">
						<p className="text-xs">
							© Copyright {new Date(Date.now()).getFullYear().toString()}{' '}
							Dinovate Solutions
						</p>
						<p className="text-xs">Tel: +234 8166357463</p>
						<a
							href="http://meltechgrp.com"
							target="_blank"
							rel="noopener noreferrer">
							<p className="text-[9px]">Designed by Mel-Technologies</p>
						</a>
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
				href: '#',
			},
			{
				label: 'Services',
				href: '#',
			},
			{
				label: 'Projects',
				href: '#',
			},
			{
				label: 'Contact',
				href: '#',
			},
		],
	},
	{
		title: 'SUB-BRANDS',
		links: [
			{
				label: 'Media Production',
				href: '#',
			},
			{
				label: 'Strategic Communications',
				href: '#',
			},
			{
				label: 'Design & Branding',
				href: '#',
			},
			{
				label: 'Avocacy Capacity Building',
				href: '#',
			},
			{
				label: 'Creative Space',
				href: '#',
			},
		],
	},
	{
		title: 'CONTACT INFO',
		links: [
			{
				label: 'House A2 Plot 37 Kado District, Abuja',
				href: '#',
				icon: <MapPin className={cn('w-4 h-4 text-gray-400')} />,
			},
			{
				label: '+234 8166357463',
				href: '#',
				icon: <Phone className={cn('w-4 h-4 text-gray-400')} />,
			},
			{
				label: 'info@dinovate.com',
				href: '#',
				icon: <Mail className={cn('w-4 h-4 text-gray-400')} />,
			},
			{
				label: '9am to 6pm',
				href: '#',
				icon: <Clock className={cn('w-4 h-4 text-gray-400')} />,
			},
		],
	},
];

const socials = [
	{
		label: 'Facebook',
		href: '#',
		icon: Facebook,
	},
	{
		label: 'Instagram',
		href: '#',
		icon: Instagram,
	},
	{
		label: 'Twitter',
		href: '#',
		icon: Twitter,
	},
	{
		label: 'LinkedIn',
		href: '#',
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
