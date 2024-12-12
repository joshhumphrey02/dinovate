import { cn } from '@/lib/utils';

interface Props {
	name: string;
	className?: string;
}

export default function BorderFlow(props: Props) {
	const { name, className } = props;
	return (
		<div className="text-sm sm:text-base self-start w-fit relative group font-medium">
			<div
				className={cn(
					'absolute -bottom-2 rounded left-0 h-1.5 w-0 bg-tertiary transition-all delay-75 duration-1000 ease-out group-hover:w-full group-hover:translate-x-0'
				)}></div>
			<div className="relative z-10 font-oswald flex items-center gap-2 leading-12 text-xl md:text-2xl font-normal">
				{name}
			</div>
		</div>
	);
}
