import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { logout } from '@/lib/actions/auth';
import { cn } from '@/lib/utils';
import { LogOutIcon } from 'lucide-react';
import { toast } from 'sonner';
interface Props {
	className?: string;
}

export default function Logout({ className }: Props) {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button
					variant={'ghost'}
					type="submit"
					size={'sm'}
					className={cn(
						'px-2 py-2 h-11 border-none hover:bg-gray-100 text-gray-500  flex justify-start border  rounded-lg',
						className
					)}>
					<LogOutIcon className="h-4 w-4 mr-2 text-gray-500" />
					Logout
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>
						This action will log you out from your account.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter className="flex flex-row gap-2 mt-3 flex-nowrap">
					<AlertDialogCancel className="w-full mt-0">Cancel</AlertDialogCancel>
					<form
						action={async () => {
							const res = await logout();
							if (res?.error) {
								toast.error(res.error);
							}
						}}
						className="w-full">
						<AlertDialogAction type="submit" className="w-full">
							Continue
						</AlertDialogAction>
					</form>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
