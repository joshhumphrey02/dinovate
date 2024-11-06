import LineIcon from '../Icons/line';

export default function AboutHero() {
	return (
		<div className=" grid sm:grid-cols-[42%,auto] gap-3">
			<div className="flex flex-col gap-4 sm:gap-8">
				<img
					src="https://shapehistory.wpenginepowered.com/wp-content/uploads/2020/07/200707_about-us_header.jpg"
					alt=""
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
