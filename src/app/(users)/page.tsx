import Banner from '@/components/home/Banner';
import About from '@/components/home/about';
import Contact from '@/components/home/contact';
import Impact from '@/components/home/impact';
import { Projects } from '@/components/home/projects';
import Sections from '@/components/home/sections';
import RequestForm from '@/components/shared/request-form';

interface Props {
	searchParams: Promise<{
		contact?: string;
	}>;
}

export default async function Home(props: Props) {
	const { contact } = await props.searchParams;
	return (
		<div>
			<Banner />
			<div className="max-w-[1350px] mx-auto">
				<About />
				<Impact />
				<Contact />
				<Projects />
				<Sections />
			</div>
			<RequestForm open={!!contact} />
		</div>
	);
}
