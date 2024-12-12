import LineIcon from '../Icons/line';
import Image from '../shared/image';

export default function AboutHero() {
	return (
		<div className=" grid sm:grid-cols-[45%,auto] gap-3">
			<div className="flex h-[30rem] lg:h-[40rem] 2xl:h-[45rem] flex-col gap-4 sm:gap-8">
				<Image
					src={'office2.jpg'}
					bucketName="images"
					alt={'office'}
					className=""
				/>
				<LineIcon />
				<div>
					<p className=" leading-8">
						Dinovate Solutions was founded on the belief that powerful stories
						can ignite change. Since 2021, we’ve been driven by a simple
						mission: to amplify the voices that matter and inspire positive
						action through creative storytelling and strategic communication.
					</p>
				</div>
			</div>
			<div className="h-full flex items-center">
				<h1 className=" text-tertiary text-2xl sm:text-6xl sm:leading-[1.1] font-oswald font-bold">
					PASSIONATE, TALENTED, DRIVEN PEOPLE WHO LIVE & BREATHE SOCIAL IMPACT
				</h1>
			</div>
		</div>
	);
}
