import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import Loader from '@/components/shared/loader';
import Prompt from '@/components/shared/prompt';
import Sidebar from '@/components/shared/sidebar';

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<Loader />
			<div className="">
				<Header />
				<Sidebar />
				{children}
			</div>
			<Footer />
			<Prompt />
		</div>
	);
}
