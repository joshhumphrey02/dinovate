import Image from 'next/image';
import LineIcon from '../Icons/line';
import Logo from '@/assets/main-logo.png';
import Link from 'next/link';

const Header = () => {
	return (
		<div className="flex justify-between absolute top-0 left-0 right-0 z-20 items-center">
			<div className="w-full py-5 md:py-10 flex items-center justify-between">
				<Link href={'/'} className="flex items-center gap-1 md:gap-4">
					<LineIcon className=" w-8 md:w-[80px]" />
					<div className="space-y-1">
						<Image
							src={Logo}
							className="w-20 md:w-32 h-9 md:h-12 xl:w-40 xl:h-16"
							alt="logo"
						/>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Header;
