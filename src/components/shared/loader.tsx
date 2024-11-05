'use client';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

export default function Loader() {
	const [showLoader, setShowLoader] = useState(true);

	useEffect(() => {
		// Hide the loader completely after 4 seconds
		const timer = setTimeout(() => {
			setShowLoader(false);
		}, 4000);

		return () => clearTimeout(timer);
	}, []);

	if (!showLoader) return null;

	return (
		<motion.div
			initial={{ x: 0 }}
			animate={{ x: '140vw' }}
			transition={{
				type: 'spring',
				stiffness: 20,
				damping: 70,
				duration: 4,
				delay: 0.5,
			}}
			className=" absolute inset-0 z-50 grid grid-cols-[20vw,100vw]"
			style={{ width: '140vw', height: '100vh' }}>
			<div className="bg-black h-full" style={{ width: '40vw' }} />
			<div className="bg-tertiary h-full" style={{ width: '100vw' }} />
		</motion.div>
	);
}
