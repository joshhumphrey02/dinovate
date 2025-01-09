import { Videos } from '@/lib/actions';

interface DocumentCardProps {
	data: Videos[0];
	index: number;
}

export default function DocumentCard(props: DocumentCardProps) {
	const { url, createdAt } = props.data;

	return (
		<div className=" h-full ">
			<div className="relative w-full h-48 md:h-80 overflow-hidden">
				<iframe
					width="400"
					height="320"
					src={url}
					className="absolute left-0 top-0 w-full h-full"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen></iframe>
			</div>
		</div>
	);
}
