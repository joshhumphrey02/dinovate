'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
} from '@/components/ui/sheet';
import { useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

interface FormProps {
	open: boolean;
	formKey: string;
	formValue: string;
	children: React.ReactNode;
	className?: string;
	close?: boolean;
}

export function useFormToggle() {
	const router = useRouter();
	const params = useSearchParams();

	return function (key: string, value: string) {
		const searchParams = new URLSearchParams(params);
		if (searchParams.get(key) === value) {
			searchParams.delete(key);
		} else {
			searchParams.set(key, value);
		}

		router.push(`?${searchParams.toString()}`, {
			scroll: false,
		});
	};
}

export function FormWrapper(props: FormProps) {
	const { open, children, className, formKey, formValue } = props;
	const handleClose = useFormToggle();

	return (
		<Sheet
			open={open}
			onOpenChange={() => {
				handleClose(formKey, formValue);
			}}>
			<SheetContent
				className={cn(
					'px-4 space-y-4 w-full sm:min-w-[45vw] overflow-y-scroll min-h-screen',
					className
				)}>
				{children}
			</SheetContent>
		</Sheet>
	);
}
