import AboutHero from '@/components/about/hero';
import Partners from '@/components/about/partners';
import Profile from '@/components/about/profile';
import Footer from '@/components/shared/footer';

export default function AboutUs() {
	return (
		<div className="bg-[#181d22] text-white">
			<div className=" px-4 space-y-8 sm:space-y-16 py-8 sm:py-[8rem] sm:w-[70%] sm:mx-auto max-w-[1350px]">
				<AboutHero />
				<Partners />
				<Profile />
			</div>

			<Footer isDark={true} />
		</div>
	);
}
