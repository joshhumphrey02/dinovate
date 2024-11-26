import Footer from '@/components/shared/footer';
import RequestForm from '@/components/shared/request-form';

interface Props {
	searchParams: Promise<{
		contact?: string;
	}>;
}

export default async function TheHub(props: Props) {
	const { contact } = await props.searchParams;
	return (
		<div className=" pt-10 md:pt-20">
			<div className="text-center">
				<h1>Welcome to the Hub</h1>
				<p>This is the hub for all dinovate-related resources and tools.</p>
			</div>
			<Footer />
			<RequestForm open={!!contact} />
		</div>
	);
}
