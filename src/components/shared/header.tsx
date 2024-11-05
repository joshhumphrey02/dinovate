import Image from 'next/image';
import LineIcon from '../Icons/line';
import Logo from '@/assets/logo-main.png';

const Header = () => {
	return (
		<div className="flex justify-between absolute top-0 left-0 right-0 z-20 items-center">
			<div className="w-full py-5 sm:py-10 flex items-center justify-between">
				<div className="flex items-center gap-1 sm:gap-6">
					<LineIcon className=" w-8 sm:w-[113px]" />
					<div className="space-y-1">
						<Image src={Logo} alt="logo" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
