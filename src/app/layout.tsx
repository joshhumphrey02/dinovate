import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Roboto, Oswald, Lato } from 'next/font/google';
import './globals.css';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});
const floodstd = localFont({
	src: './fonts/FloodStd.woff',
	variable: '--font-floodstd',
	weight: '400',
});

const roboto = Roboto({
	weight: ['300', '400', '500', '700', '900'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto',
});
const oswald = Oswald({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-oswald',
});
const lato = Lato({
	weight: ['100', '300', '400', '700', '900'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-lato',
});

export const metadata: Metadata = {
	title: 'Dinovate',
	description: 'Dinovate home page',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${lato.variable} ${oswald.variable} ${floodstd.variable} ${geistMono.variable} ${roboto.variable} antialiased bg-[#f0f0f0] font-lato mx-auto`}>
				{children}
			</body>
		</html>
	);
}
