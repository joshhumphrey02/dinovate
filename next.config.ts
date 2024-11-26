import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'allqifpbgdkegredrspm.supabase.co',
				pathname: '**',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				pathname: '**',
			},
		],
	},
};

export default nextConfig;
