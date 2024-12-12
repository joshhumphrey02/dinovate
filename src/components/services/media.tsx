import Link from 'next/link';
import Image from '../shared/image';
import BorderFlow from '../shared/border-flow';

export default function ServiceMedia() {
	return (
		<div className=" flex gap-2">
			<div className="hidden md:flex w-80 h-fit">
				<img src="/images/brand.webp" alt="" />
			</div>
			<div className="space-y-4">
				<h1 className=" text-3xl md:text-5xl font-medium text-tertiary font-oswald">
					Media Production{' '}
				</h1>
				<p>
					We bring stories to life through dynamic, impactful visual and audio
					content that sparks change. Our media production services include:
				</p>
				<div className=" pt-8 space-y-8">
					<div className="flex flex-col gap-2">
						<Link href={'/works'}>
							<BorderFlow name="Documentaries and Short Films" />
						</Link>
						<p className=" md:w-[80%]">
							Powerful storytelling through documentaries that highlight social
							impact and drive change.
						</p>
						<div>
							<div className="grid md:grid-cols-2 gap-6">
								<div className=" w-full max-w-sm overflow-hidden h-48 md:h-80">
									<Image
										src={'project6.jpg'}
										bucketName="images"
										alt={'documentries'}
									/>
								</div>
								<div className=" w-full max-w-sm overflow-hidden h-48 md:h-80">
									<Image
										src={'project8.jpg'}
										bucketName="images"
										alt={'documentries'}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<BorderFlow name="Photography" />
						<p className=" md:w-[80%]">
							Capturing moments that tell a story, whether it’s for advocacy
							campaigns, documentaries or brand narratives.
						</p>
						<div className="space-y-4">
							<div className=" flex flex-col gap-2">
								<h2 className="  text-base md:text-xl font-oswald">
									Documentary Photography
								</h2>
								<div className="grid md:grid-cols-3 gap-6">
									<div className=" w-full max-w-sm overflow-hidden h-48 md:h-80">
										<Image
											src={'office6.jpg'}
											bucketName="images"
											alt={'documentries'}
										/>
									</div>
									<div className=" w-full max-w-sm overflow-hidden h-48 md:h-80">
										<Image
											src={'project5.jpg'}
											bucketName="images"
											alt={'documentries'}
										/>
									</div>
									<div className=" w-full max-w-sm overflow-hidden h-48 md:h-80">
										<Image
											src={'imwi1.jpeg'}
											bucketName="images"
											alt={'documentries'}
										/>
									</div>
								</div>
							</div>
							<div className=" flex flex-col gap-2">
								<h2 className="  text-base md:text-xl font-oswald">
									Studio Photography
								</h2>
								<div className="grid md:grid-cols-3 gap-6">
									<div className=" w-full max-w-sm overflow-hidden h-48 md:h-80">
										<Image
											src={'studio4.jpg'}
											bucketName="images"
											alt={'documentries'}
										/>
									</div>
									<div className=" w-full max-w-sm overflow-hidden h-48 md:h-80">
										<Image
											src={'studio5.jpg'}
											bucketName="images"
											alt={'documentries'}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<h4 className="text-xl md:text-2xl font-normal font-oswald">
							Podcast Production
						</h4>
						<p className=" md:w-[80%]">
							Creating engaging podcasts that give a voice to your cause,
							facilitating meaningful conversations.
						</p>
						<div>
							<div className="grid md:grid-cols-3 gap-4">
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
								<div className=" w-full max-w-sm overflow-hidden h-48 md:h-80">
									<Image
										src={'project3.jpg'}
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
