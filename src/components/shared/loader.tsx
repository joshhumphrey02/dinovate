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
				stiffness: 50,
				damping: 40,
				duration: 2,
				delay: 0.5,
			}}
			className=" fixed inset-0 bg-tertiary z-50 "
			style={{ width: '140vw', height: '100vh' }}></motion.div>
	);
}
