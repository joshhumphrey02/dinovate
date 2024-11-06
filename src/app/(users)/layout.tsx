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
			<Header />
			<Sidebar />
			{children}
			<Prompt />
		</div>
	);
}
