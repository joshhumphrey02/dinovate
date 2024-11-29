import { cn } from '@/lib/utils';

interface HtmlTextProps extends Partial<HTMLDivElement> {
	text: string;
	color?: string;
}

export default function HtmlText(props: HtmlTextProps) {
	return (
		<div
			color={props.color}
			dangerouslySetInnerHTML={{ __html: props.text }}
			className={cn(props.className)}></div>
	);
}
