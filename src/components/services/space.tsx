import feature1 from '@/assets/uploads/feature2.jpg';
import feature3 from '@/assets/uploads/feature3.jpg';
import Image from '../shared/image';

export default function ServiceSpace() {
	return (
		<div className=" grid md:grid-cols-[24%,auto] gap-2">
			<div className="hidden md:flex  h-fit">
				<img src="/images/campaign.webp" className="w-full" alt="" />
			</div>
			<div className="space-y-4">
				<h1 className=" text-3xl md:text-5xl font-medium text-tertiary font-oswald">
					Creative Space for Your Vision
				</h1>
				<p>
					Our state-of-the-art creative spaces are available for booking, ideal
					for productions, workshops, and creative projects such as films, short
					videos, and more. Tailored to foster creativity and collaboration,
					it's the perfect environment to bring your vision to life!
				</p>
				<div className=" pt-8 space-y-8">
					<div className="flex flex-col gap-2">
						<h4 className="text-xl md:text-2xl font-normal font-oswald">
							Studios
						</h4>
						<p className=" md:w-[80%]">
							fully equipped studios for photography, videography, and podcast
							recording.
						</p>
						<div>
							<div className="grid md:grid-cols-3 gap-6">
								<div className=" w-full max-w-sm overflow-hidden h-48 md:h-80">
									<Image
										src={'office9.jpg'}
										bucketName="images"
										alt={'documentries'}
									/>
								</div>
								<div className=" w-full max-w-sm overflow-hidden h-48 md:h-80">
									<Image
										src={'office7.jpg'}
										bucketName="images"
										alt={'documentries'}
									/>
								</div>
								<div className=" w-full max-w-sm overflow-hidden h-48 md:h-80">
									<Image
										src={'office8.jpg'}
										bucketName="images"
										alt={'documentries'}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<h4 className="text-xl md:text-2xl font-normal font-oswald">
							Training Rooms
						</h4>
						<p className=" md:w-[80%]">
							Modern, adaptable spaces for hosting workshops, training, and
							meetings.
						</p>
						<div>
							<div className="grid md:grid-cols-3 gap-6">
								<div className=" w-full max-w-sm overflow-hidden h-48 md:h-80">
									<Image
										src={'office10.jpg'}
										bucketName="images"
										alt={'documentries'}
									/>
								</div>
								<div className=" w-full max-w-sm overflow-hidden h-48 md:h-80">
									<Image
										src={'office11.jpg'}
										bucketName="images"
										alt={'documentries'}
									/>
								</div>
								<div className=" w-full max-w-sm overflow-hidden h-48 md:h-80">
									<Image
										src={'office5.jpg'}
										bucketName="images"
										alt={'documentries'}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<h4 className="text-xl md:text-2xl font-normal font-oswald">
							A Versatile Workspace for Growing Businesses and Established
							Organizations
						</h4>
						<p className=" md:w-[80%]">
							Whether you're a startup or a well-established company, our
							fully-equipped workspace offers everything you need. Enjoy 24/7
							electricity, high-speed WiFi, and a conducive environment, all in
							one convenient package!
						</p>
						<div>
							<div className="grid md:grid-cols-2 gap-6">
								<div className=" w-full max-w-sm overflow-hidden h-48 md:h-80">
									<Image
										src={'office4.jpg'}
										bucketName="images"
										alt={'documentries'}
									/>
								</div>
								<div className=" w-full max-w-sm overflow-hidden h-48 md:h-80">
									<Image
										src={'office12.jpg'}
										bucketName="images"
										alt={'documentries'}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<h4 className="text-xl md:text-2xl font-normal font-oswald">
							Outdoor Lounge
						</h4>
						<p className=" md:w-[80%]">
							Our outdoor lounge offers a versatile, refreshing space perfect
							for private meetings, small events, and open-air work sessions.
							Designed for both productivity and relaxation, it’s an ideal
							setting to connect, brainstorm, or celebrate with your team in an
							inspiring environment. Whether hosting an intimate gathering or
							simply taking work outdoors, our lounge brings comfort and
							creativity together.
						</p>
						<div>
							<div className="grid md:grid-cols-2 gap-6">
								<div className=" w-full max-w-sm overflow-hidden h-48 md:h-80">
									<Image
										src={'office2.jpg'}
										bucketName="images"
										alt={'documentries'}
									/>
								</div>
								<div className=" w-full max-w-sm overflow-hidden h-48 md:h-80">
									<Image
										src={'office3.jpg'}
										bucketName="images"
										alt={'documentries'}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
