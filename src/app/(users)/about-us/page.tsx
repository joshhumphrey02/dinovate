import Group from '@/components/about/group';
import AboutHero from '@/components/about/hero';
import Mission from '@/components/about/mission';
import Partners from '@/components/about/partners';
import Profile from '@/components/about/profile';
import Values from '@/components/about/values';
import Footer from '@/components/shared/footer';
import RequestForm from '@/components/shared/request-form';
import { getProfileData } from '@/lib/actions';

interface Props {
	searchParams: Promise<{
		contact?: string;
	}>;
}

export default async function AboutUs(props: Props) {
	const { contact } = await props.searchParams;
	const profiles = await getProfileData();
	return (
		<div className="bg-[#181d22] text-white">
			<div className=" px-4 space-y-8 sm:space-y-16 py-8 sm:py-[8rem] sm:w-[70%] sm:mx-auto max-w-[1350px]">
				<AboutHero />
				<Partners />
				<Group />
				<Profile data={profiles} />
				<Mission />
				<Values />
			</div>

			<Footer isDark={true} />
			<RequestForm open={!!contact} />
		</div>
	);
}
