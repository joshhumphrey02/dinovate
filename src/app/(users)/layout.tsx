import Header from '@/components/shared/header';
import Loader from '@/components/shared/loader';
import Prompt from '@/components/shared/prompt';
import Sidebar from '@/components/shared/sidebar';
import 'react-medium-image-zoom/dist/styles.css';

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
