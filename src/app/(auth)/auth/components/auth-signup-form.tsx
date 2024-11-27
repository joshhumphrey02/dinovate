'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
	AuthSignupFormInput,
	AuthSignupFormSchema,
} from '@/lib/validators/auth';
import { signup } from '@/lib/actions/auth';
import { Loader } from 'lucide-react';
import { toast } from 'sonner';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function AuthSignupForm({
	className,
	...props
}: UserAuthFormProps) {
	const form = useForm<AuthSignupFormInput>({
		resolver: zodResolver(AuthSignupFormSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			password: '',
		},
	});
	const [loading, setLoading] = React.useState(false);
	const [state, dispatch, isPending] = React.useActionState(signup, undefined);

	async function handleSubmit(data: AuthSignupFormInput) {
		setLoading(true);
		React.startTransition(() => {
			dispatch(data);
		});
	}
	React.useEffect(() => {
		if (state?.formError) {
			toast.error(state?.formError || 'An error occurred');
		}
		setLoading(false);
	}, [state?.formError, state?.fieldError]);
	return (
		<>
			<Link
				href="/auth/login"
				className={cn(
					buttonVariants({ variant: 'ghost' }),
					'absolute right-4 top-4 md:right-8 md:top-8'
				)}>
				Login
			</Link>
			<div className={cn('grid gap-6 px-4', className)} {...props}>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(handleSubmit)}>
						<div className="grid gap-4">
							<div className="grid grid-cols-2 gap-4">
								<FormField
									control={form.control}
									name="firstName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>First name</FormLabel>
											<FormControl>
												<Input placeholder="Your first name" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="lastName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Last name</FormLabel>
											<FormControl>
												<Input placeholder="Your last name" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												type="email"
												placeholder="Your email address"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="phone"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Phone Number</FormLabel>
										<FormControl>
											<Input placeholder="Your phone number" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input
												type="password"
												placeholder="Password (min 8 characters)"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<Button disabled={loading} className="mt-4" type="submit">
								{loading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
								Continue
							</Button>
						</div>
					</form>
				</Form>
			</div>
		</>
	);
}
