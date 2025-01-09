'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

// Error boundaries must be Client Components

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	console.log(error);
	const router = useRouter();
	return (
		<div className="space-y-4 min-h-[60vh] flex flex-col gap-6 items-center justify-center">
			<h2 className="text-xl sm:text-2xl">Something went wrong!</h2>
			<div className=" flex gap-6">
				<Button onClick={() => reset()}>Try again</Button>
				<Button className=" bg-tertiary" onClick={() => router.push('/')}>
					Home
				</Button>
			</div>
		</div>
	);
}
