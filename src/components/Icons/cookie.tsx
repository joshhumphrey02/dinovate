import * as React from 'react';
type SVGProps = React.SVGProps<SVGSVGElement>;

const CookieIcon: React.FC<SVGProps> = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={589.738}
		height={656.593}
		{...props}>
		<defs>
			<filter
				id="a"
				x={0}
				y={0}
				width={589.738}
				height={656.593}
				filterUnits="userSpaceOnUse">
				<feOffset dx={-4} dy={1} />
				<feGaussianBlur stdDeviation={2.5} result="blur" />
				<feFlood floodOpacity={0.392} />
				<feComposite operator="in" in2="blur" />
				<feComposite in="SourceGraphic" />
			</filter>
		</defs>
		<g filter="url(#a)">
			<path
				data-name="cookie-bg"
				d="M580.318 343.803S611.431 32.887 531 14.567 453.936 1.39 248.162 113.476s-169.834 52.781-216.1 230.327 0 304.288 0 304.288l548.256-1.345z"
				fill="#181d22"
			/>
		</g>
	</svg>
);
export default CookieIcon;
