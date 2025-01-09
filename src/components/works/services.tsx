'use client';
import { Check } from 'lucide-react';
import { Badge } from '../ui/badge';
import React from 'react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

interface Props {
	active: string;
	cats: {
		name: string;
		slug: string;
	}[];
}

export default function WorkServices({ active, cats }: Props) {
	const router = useRouter();
	return (
		<div className=" w-full md:w-[70%] px-4 mx-auto">
			<div className="flex flex-wrap justify-center gap-4 pt-20">
				<Badge
					variant={'outline'}
					onClick={() => router.replace(`/works?search=all`)}
					className={cn(
						'text-center px-3 cursor-pointer py-1 border flex gap-1 border-black font-medium text-sm md:text-base',
						'all' === active && 'text-white bg-black px-2'
					)}>
					{'all' === active && (
						<span className=" bg-white p-px flex justify-center items-center rounded-full text-black">
							<Check strokeWidth={3} className="w-3 h-3" />
						</span>
					)}
					All
				</Badge>
				{cats.map((service, i) => (
					<Badge
						variant={'outline'}
						key={service.name}
						onClick={() => router.replace(`/works?search=${service.slug}`)}
						className={cn(
							'text-center px-3 cursor-pointer py-1 border flex gap-1 border-black font-medium text-sm md:text-base',
							service.slug === active && 'text-white bg-black px-2'
						)}>
						{service.slug === active && (
							<span className=" bg-white p-px flex justify-center items-center rounded-full text-black">
								<Check strokeWidth={3} className="w-3 h-3" />
							</span>
						)}
						{service.name}
					</Badge>
				))}
			</div>
		</div>
	);
}
