'use client';
import { cn } from '@/lib/utils';
import Logo from '@/assets/main-logo.png';
import { getSectionRoutes } from '@/components/constants';
import LinkItem from './link-item';
import Link from 'next/link';
import Logout from '@/components/shared/logout';
import Image from 'next/image';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {
	setOpen?: (state: boolean) => void;
	email: string;
	firstName: string | null;
	lastName: string | null;
}
export function MainNav(props: MainNavProps) {
	const { setOpen, email, className, firstName, lastName } = props;
	const routeHomeSection = getSectionRoutes('home');
	const routeSettingsSection = getSectionRoutes('settings');
	return (
		<aside
			className={cn(
				'border-none md:border-r w-full pb-4 sm:pb-1 relative bg-white',
				className
			)}>
			<div className="flex h-full w-[220px] md:w-[250px] space-y-0 sm:space-y-8 max-h-screen top-0 relative min-h-[92vh] sm:min-h-screen md:fixed flex-col gap-2">
				<div className="flex h-14 items-center px-2 my-2 mb-4 sm:my-8 sm:px-6">
					<Link
						href="/admin/dashboard"
						onClick={() => {
							setOpen && setOpen(false);
						}}
						className="flex items-center gap-2 font-semibold">
						<Image
							src={Logo}
							alt="Agcoms"
							style={{ width: 'auto', height: 55 }}
							className=" object-cover "
						/>
					</Link>
				</div>
				<div className="flex-1 h-full">
					<nav className="grid grid-rows-2 h-full items-start px-1 text-sm font-medium sm:px-4">
						<div className="space-y-2 flex-col flex  h-full border-b border-border ">
							<h4 className="text-xs text-gray-500 font-medium">MAIN MENU</h4>
							<div className="flex flex-col gap-px">
								{routeHomeSection.map((route, index) => (
									<LinkItem setOpen={setOpen} href={route.path} key={index}>
										<route.icon className="h-5 w-5 mr-2 text-gray-500" />
										<span className="text-gray-600 text-sm">{route.name}</span>
									</LinkItem>
								))}
							</div>
						</div>
						<div className="space-y-2 flex flex-col h-full pt-4 sm:pt-10">
							<h4 className="text-xs text-gray-500 font-medium">PREFEENCES</h4>
							<div className="flex flex-col gap-y-px">
								{routeSettingsSection.map((route, index) => (
									<LinkItem setOpen={setOpen} href={route.path} key={index}>
										<route.icon className="h-5 w-5 mr-2 text-gray-500" />
										<span className="text-gray-600 text-sm">{route.name}</span>
									</LinkItem>
								))}
								<Logout />
							</div>
						</div>
					</nav>
				</div>
				<div className=" p-1 sm:px-4 pb-6">
					<div className="flex gap-2 bg-[#f7f9f4] px-2 py-3 rounded-md items-center">
						<Avatar>
							<AvatarFallback>
								{firstName?.charAt(0) || ''}
								{lastName?.charAt(0) || ''}
							</AvatarFallback>
						</Avatar>
						<div className="flex flex-col gap-1">
							<span className="text-sm font-bold text-gray-900">
								{firstName || ''} {lastName || ''}
							</span>
							<span className="text-xs line-clamp-1 text-gray-500">Admin</span>
						</div>
					</div>
				</div>
			</div>
		</aside>
	);
}
