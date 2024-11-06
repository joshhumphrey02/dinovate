// components/Sidebar.js
'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Link from 'next/link';
import MenuIcon from '../Icons/menu';
import CloseIcon from '../Icons/close';
import Image from 'next/image';
import Logo from '@/assets/logo-color.png';

export default function Sidebar() {
	const [isOpen, setIsOpen] = useState(false);
	const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

	const toggleSidebar = () => setIsOpen(!isOpen);

	// GSAP animation for text links
	useEffect(() => {
		if (isOpen) {
			gsap.fromTo(
				linksRef.current,
				{ x: 50, opacity: 0 },
				{
					x: 0,
					opacity: 1,
					stagger: 0.2,
					delay: 0.4,
					duration: 0.8,
					ease: 'power2.out',
				}
			);
		} else {
			gsap.to(linksRef.current, { x: 50, opacity: 0, duration: 0.3 });
		}
	}, [isOpen]);

	return (
		<>
			{/* Toggle button */}
			<button
				onClick={toggleSidebar}
				className="fixed top-4 sm:top-8 right-8 z-50 ">
				{!isOpen ? <MenuIcon /> : <CloseIcon />}
			</button>
			<motion.div
				initial={{ x: '100%' }}
				animate={{ x: isOpen ? 0 : '100%' }}
				transition={{
					type: 'spring',
					stiffness: 100,
					damping: 30,
					duration: 0.3,
				}}
				className={`fixed top-0 right-0 h-full w-full bg-gray-900 text-white p-8 z-40 shadow-lg`}>
				<div className="flex flex-col items-center h-full justify-center space-y-12">
					<div className="grid sm:grid-cols-2 h-[80%] gap-16 items-center">
						<div className="hidden sm:flex justify-end">
							<Link
								onClick={toggleSidebar}
								href={'/'}
								className=" w-[400px] h-[200px] ">
								<Image
									src={Logo}
									width={300}
									height={200}
									className=" object-cover w-full h-full "
									alt="Logo"
								/>
							</Link>
						</div>

						{/* Menu Links */}
						<nav className="flex flex-col items-center sm:items-start space-y-4 sm:space-y-3 xl:space-y-4 font-oswald text-3xl sm:text-3xl font-light text-tertiary">
							{data.map((text, index) => (
								<Link
									key={text.title}
									href={`/${text.title.toLowerCase().replace(' ', '-')}`}
									onClick={toggleSidebar}
									className="group "
									ref={(el) => {
										linksRef.current[index] = el;
									}}>
									<span className="group-hover:hidden transition-all">
										{text.title}
									</span>
									<span className="hidden text-white font-floodstd capitalize group-hover:flex transition-all">
										{text.caption}
									</span>
								</Link>
							))}
						</nav>
					</div>
					{/* Social Links */}
					<div className="flex gap-4 sm:gap-8 flex-1 items-center text-sm">
						{['Twitter', 'Instagram', 'LinkedIn', 'Facebook'].map(
							(text, index) => (
								<Link
									key={text}
									className="hover:text-tertiary transition-colors"
									href={`https://${text.toLowerCase()}.com`}
									onClick={toggleSidebar}
									ref={(el) => {
										linksRef.current[index + 5] = el;
									}}>
									{text}
								</Link>
							)
						)}
					</div>
				</div>
			</motion.div>
		</>
	);
}

const data = [
	{ title: 'PROJECTS', caption: "Impact we've driven" },
	{ title: 'SERVICES', caption: 'What we do' },
	{ title: 'THE HUB', caption: 'Interesting content' },
	{ title: 'ABOUT US', caption: 'Under the hood' },
	{ title: 'CONTACT', caption: 'Ready to talk' },
];
