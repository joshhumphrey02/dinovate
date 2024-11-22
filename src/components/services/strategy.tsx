export default function ServiceStrategy() {
	return (
		<div className=" flex gap-2">
			<div className="hidden md:flex w-80 h-fit">
				<img src="/images/strategy.webp" alt="" />
			</div>
			<div className="space-y-4">
				<h1 className=" text-3xl md:text-5xl font-medium text-tertiary font-oswald">
					Strategic Communication
				</h1>
				<p>
					Our strategic approach to communications and marketing ensures that
					your message not only reaches your audience but drives them to act.
				</p>
				<div className=" pt-8 space-y-8">
					<div className="flex flex-col gap-2">
						<h4 className="text-xl md:text-2xl font-normal font-oswald">
							Strategic Communications
						</h4>
						<p className=" md:w-[80%]">
							Crafting and executing communications strategies that amplify your
							organization’s goals.
						</p>
					</div>
					<div className="flex flex-col gap-2">
						<h4 className="text-xl md:text-2xl font-normal font-oswald">
							Advocacy Campaigns
						</h4>
						<p className=" md:w-[80%]">
							Designing campaigns that influence policy, engage communities, and
							advocate for change.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
