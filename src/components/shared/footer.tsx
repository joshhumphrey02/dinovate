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

export default function Footer() {
	const style = {
		backgroundImage: 'url(/svg/footer-wave.svg)',
	};
	const options = {
		duration: 2000,
		smooth: 'easeInOutQuad',
	};
	return (
		<footer className="space-y-8 relative pb-10">
			<div className=" px-4 sm:px-16 mx-auto space-y-8 max-w-[1350px]">
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
					{footer.map((item) => (
						<div key={item.title} className="flex flex-col gap-3">
							<div className="space-y-1">
								<h3 className="text-sm font-semibold text-gray-700">
									{item.title}
								</h3>
								<LineIcon className="h-2" />
							</div>
							<ul className="flex flex-col gap-1">
								{item.links.map((link) => (
									<li
										key={link.label}
										className="flex items-center text-sm font-lato gap-1">
										{link?.icon && <span>{link.icon}</span>}
										<Link
											href={link.href}
											className="text-gray-500 hover:text-gray-800">
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
						<p>
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
						<ArrowUp className=" text-tertiary" />
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
				icon: <MapPin className="w-4 h-4 text-gray-500" />,
			},
			{
				label: '+234 8166357463',
				href: '#',
				icon: <Phone className="w-4 h-4 text-gray-500" />,
			},
			{
				label: 'info@dinovate.com',
				href: '#',
				icon: <Mail className="w-4 h-4 text-gray-500" />,
			},
			{
				label: '9am to 6pm',
				href: '#',
				icon: <Clock className="w-4 h-4 text-gray-500" />,
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
