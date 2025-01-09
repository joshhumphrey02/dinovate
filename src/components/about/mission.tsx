import Image from '../shared/image';

export default function Mission() {
	return (
		<div>
			<div className="grid lg:grid-cols-2">
				<div className="p-4 lg:p-16 justify-center flex flex-col  space-y-6 ">
					<h1 className="text-2xl self-start border-bottom lg:text-4xl">
						Our Vision:
					</h1>
					<p className="text-base lg:text-lg font-medium leading-6 lg:leading-8">
						To be a leading centre of excellence in multimedia storytelling,
						driving impacful change and inspiring global communities.
					</p>
				</div>
				<div className="w-full h-[20rem] lg:h-[33rem]">
					<Image
						src={'office4.jpg'}
						className="w-full h-full object-cover bg-gray-800"
						alt={'dinovate banner'}
						bucketName="images"
					/>
				</div>
			</div>
		</div>
	);
}
