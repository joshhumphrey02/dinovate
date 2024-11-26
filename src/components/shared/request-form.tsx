'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
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
import { MessageFormInput, MessageFormSchema } from '@/lib/validators/auth';
import { toast } from 'sonner';
import { ArrowLeft, Loader } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { FormWrapper, useFormToggle } from '@/components/shared/form-wrapper';
import { saveRequest } from '@/lib/actions/request-actions';
import { SheetDescription, SheetHeader, SheetTitle } from '../ui/sheet';
import { Textarea } from '../ui/text-area';

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement> & {
	open: boolean;
};

export default function RequestForm({
	className,
	open,
	...props
}: UserAuthFormProps) {
	const form = useForm<MessageFormInput>({
		resolver: zodResolver(MessageFormSchema),
		defaultValues: {
			fullName: '',
			email: '',
			phone: '',
			town: '',
			message: '',
		},
	});
	const router = useFormToggle();
	const [loading, setLoading] = React.useState(false);
	const [state, dispatch] = React.useActionState(saveRequest, undefined);

	async function handleSubmit(data: MessageFormInput) {
		setLoading(true);
		dispatch(data);
	}
	React.useEffect(() => {
		if (state?.formError) {
			toast.error(state.formError);
		}
		if (state?.data) {
			toast.success('Message sent successfully!');
			form.reset();
			setLoading(false);
			router('contact', 'true');
		}
		setLoading(false);
	}, [state?.formError, state?.fieldError, state?.data]);
	return (
		<>
			<FormWrapper
				open={open}
				className=" px-8 sm:px-20 "
				formKey={'contact'}
				formValue="true">
				<SheetHeader className="xl:px-10">
					<SheetTitle className=" text-tertiary text-lg">
						We Partner, We Don’t Just Serve
					</SheetTitle>
					<SheetDescription>
						Leave your details and we’ll get in touch with you.
					</SheetDescription>
				</SheetHeader>
				<div
					className={cn('grid relative gap-6 max-w-lg mx-auto py-6', className)}
					{...props}>
					<div
						onClick={() => router('contact', 'true')}
						className=" hidden sm:flex items-center justify-center p-6 bg-tertiary rounded-full z-[10000] fixed top-[45%] right-[52%] ">
						<ArrowLeft strokeWidth={1} className="w-10 h-10" />
					</div>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(handleSubmit)}>
							<div className="grid gap-4">
								<FormField
									control={form.control}
									name="fullName"
									render={({ field }) => (
										<FormItem>
											<FormLabel className=" text-sm">
												Fullname<sup className="text-red-500">*</sup>
											</FormLabel>
											<FormControl>
												<Input
													className=" border-transparent px-0 h-8 rounded-none border-b border-b-black focus-visible:ring-0 focus-visible:ring-offset-0"
													placeholder="Your fullname"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel className=" text-sm">
												Email<sup className="text-red-500">*</sup>
											</FormLabel>
											<FormControl>
												<Input
													className=" border-transparent px-0 h-8 rounded-none border-b border-b-black focus-visible:ring-0 focus-visible:ring-offset-0"
													type="text"
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
											<FormLabel className=" text-sm">
												Phone Number<sup className="text-red-500">*</sup>
											</FormLabel>
											<FormControl>
												<Input
													className=" border-transparent px-0 h-8 rounded-none border-b border-b-black focus-visible:ring-0 focus-visible:ring-offset-0"
													placeholder="Your phone number"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="town"
									render={({ field }) => (
										<FormItem>
											<FormLabel className=" text-sm">Address</FormLabel>
											<FormControl>
												<Input
													className=" border-transparent px-0 h-8 rounded-none border-b border-b-black focus-visible:ring-0 focus-visible:ring-offset-0"
													type="text"
													placeholder="Please enter your Address"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="message"
									render={({ field }) => (
										<FormItem>
											<FormLabel className=" text-sm">
												Message<sup className="text-red-500">*</sup>
											</FormLabel>
											<FormControl>
												<Textarea
													className="  px-0 rounded-none border border-black focus-visible:ring-0 focus-visible:ring-offset-0"
													placeholder="Please enter your message"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="allowMarketing"
									render={() => (
										<FormItem>
											<FormControl>
												<div className="flex items-center gap-2">
													<Checkbox
														id="check"
														checked={form.getValues('allowMarketing')}
														onClick={() => {
															form.setValue(
																'allowMarketing',
																!form.getValues('allowMarketing')
															);
														}}
														className=" checked:bg-blue-600"
													/>
													<label
														htmlFor="check"
														className="text-sm font-normal">
														Do you want to receive our marketing and promotional
														information?
													</label>
												</div>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<Button
									disabled={loading}
									className="mt-4 bg-blue-700 text-white hover:border transition-colors duration-700 hover:border-blue-600 hover:text-black hover:bg-transparent"
									type="submit">
									{loading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
									Continue
								</Button>
							</div>
						</form>
					</Form>
				</div>
			</FormWrapper>
		</>
	);
}
