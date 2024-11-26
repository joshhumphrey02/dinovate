import Image from '../shared/image';

export default function Partners() {
	return (
		<div className="grid sm:grid-cols-[45%,auto] py-6 sm:py-12 gap-4">
			<div className="space-y-4 sm:space-y-8">
				<h1 className="text-2xl sm:text-6xl text-tertiary">
					We Partner, We Don’t Just Serve
				</h1>
				<p className=" leading-7">
					We don’t see clients; we see partners. Every project, whether it’s
					producing a documentary, developing a campaign, building your digital
					presence, or influencing human behavior for good, is collaboration. We
					push ourselves and our partners to think bigger, plan better, and
					execute with precision. Together, we strive to create lasting change,
					one story at a time.
				</p>
			</div>
			<div className=" flex w-full mx-auto xl:w-[30rem] sm:h-[30rem] items-center justify-center">
				<Image src={'office10.jpg'} bucketName="images" alt={'office'} />
			</div>
		</div>
	);
}
