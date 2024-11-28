'use client';

import React, {
	useActionState,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { Button } from '@/components/ui/button';
import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Progress } from '@/components/ui/progress';
import { ProductFormInput, ProductFormSchema } from '@/lib/validators/auth';
import { Input } from '@/components/ui/input';
import { useAlertToggle } from '@/components/shared/alert-wrapper';
import { toast } from 'sonner';
import {
	AlertDialogFooter,
	AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Loader, Trash, Plus } from 'lucide-react';
import dynamic from 'next/dynamic';
import ProductCategorySelect from '@/components/shared/select-product-category';
import ImageUploader from '@/components/shared/image-uploader';
import { createProduct, ProjectType } from '@/lib/actions/project-actions';
const TextEditor = dynamic(() => import('@/components/shared/text-editor'), {
	ssr: true,
});

const BasicSchema = ProductFormSchema.pick({
	description: true,
	price: true,
	name: true,
	category: true,
	organization: true,
});

const VideoSchema = ProductFormSchema.pick({
	videos: true,
});

const ImgsSchema = ProductFormSchema.pick({
	images: true,
});

const NewProduct = (props: { project?: ProjectType }) => {
	const { project } = props;
	const [step, setStep] = React.useState(1);
	const [loading, setLoading] = React.useState(false);
	const form = useForm<ProductFormInput>({
		resolver: zodResolver(ProductFormSchema),
		defaultValues: {
			id: project?.id,
			name: project?.name || '',
			description: project?.description || '',
			category: project?.category?.name || '',
			images: project?.images || [],
			videos: project?.videos || [],
			organization: project?.organization || 'Dinovate',
		},
	});
	function handleNext() {
		if (step === 1) {
			let parsed = BasicSchema.safeParse(form.getValues());
			if (!parsed.success) return;
			form.trigger([
				'name',
				'category',
				'price',
				'description',
				'organization',
			]);
		}
		if (step === 2) {
			let parsed = VideoSchema.safeParse(form.getValues());
			if (!parsed.success) return form.trigger(['videos']);
		}
		// if (step === 3) {
		// 	let parsed = SpecsSchema.safeParse(form.getValues());
		// 	if (!parsed.success) return form.trigger(['specs']);
		// }
		if (step === 3) {
			let parsed = ImgsSchema.safeParse(form.getValues());
			if (!parsed.success) return form.trigger(['images']);
		}
		form.clearErrors();
		setStep((prev) => prev + 1);
	}
	const progress = useMemo(() => {
		return step * 33;
	}, [step]);
	const dismissAlert = useAlertToggle();
	const [state, dispatch] = useActionState(createProduct, undefined);

	async function handleSubmit(data: ProductFormInput) {
		setLoading(true);
		React.startTransition(() => {
			dispatch(data);
		});
	}
	form.watch();
	useEffect(() => {
		if (state?.fieldError) {
			setLoading(false);
			Object.entries(state.fieldError).forEach(([key, value]) => {
				form.setError(key as any, {
					type: 'manual',
					message: value,
				});
			});
		}
		if (state?.formError) {
			setLoading(false);
			toast.error(state.formError);
		}
		if (state?.data) {
			setLoading(false);
			toast.success(
				project?.id
					? 'Project updated successfully'
					: 'Project created successfully'
			);
			form.reset();
			return project
				? dismissAlert('edit', 'true')
				: dismissAlert('projectId', 'new');
		}
	}, [state?.formError, state?.fieldError, state?.data]);
	return (
		<div className="grid">
			<Progress
				value={progress}
				className=" w-full h-2 bg-gray-100 p-0"
				indicatorClassName="bg-blue-500 duration-1000"
			/>
			<div className="px-4 py-5">
				<div className="space-y-4">
					<h2 className="space-x-3">
						<span className="text-xl font-medium">
							{project?.id ? 'Update project' : 'Add New project'}
						</span>
					</h2>
				</div>
				<AlertDialogTitle></AlertDialogTitle>
				<div className="my-4">
					<Form {...form}>
						<form onSubmit={form.handleSubmit(handleSubmit)}>
							<div className="grid gap-4">
								{step === 1 && <Basic form={form} />}
								{step === 2 && <Videos form={form} />}
								{/* {step === 3 && <Specifications form={form} />} */}
								{step >= 3 && <Images form={form} />}

								<Controls
									loading={loading}
									handleNext={handleNext}
									project={project}
									dismissAlert={dismissAlert}
									step={step}
									setStep={() => setStep((prev) => prev - 1)}
								/>
							</div>
						</form>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default NewProduct;

interface ControlProps {
	step: number;
	setStep: () => void;
	loading: boolean;
	dismissAlert: any;
	project?: any;
	handleNext: any;
}

function Controls(props: ControlProps) {
	const { step, setStep, loading, handleNext, dismissAlert, project } = props;
	return (
		<AlertDialogFooter className="w-full flex flex-row gap-3 mt-3 ">
			<Button
				disabled={loading}
				onClick={(e) => {
					e.preventDefault();
					if (step > 1) return setStep();
					step == 1 && project
						? dismissAlert('edit', 'true')
						: dismissAlert('projectId', 'new');
				}}
				className="flex-1"
				variant={'outline'}
				type="button">
				{step == 1 ? 'Cancel' : 'Prev'}
			</Button>
			<Button
				disabled={loading}
				onClick={handleNext}
				className=" flex-1"
				type={step > 3 ? 'submit' : 'button'}>
				{loading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
				{step > 2 ? (project?.id ? 'Update' : 'Save') : 'Next'}
			</Button>
		</AlertDialogFooter>
	);
}

interface FormProps {
	form: any;
}

function Basic({ form }: FormProps) {
	return (
		<div className="grid gap-4">
			<FormField
				control={form.control}
				name="id"
				render={({ field }) => (
					<FormItem hidden>
						<FormControl>
							<Input type="text" placeholder="id" {...field} />
						</FormControl>
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name="name"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Project name</FormLabel>
						<FormControl>
							<Input type="text" placeholder="Product name" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<div className="grid sm:grid-cols-2 gap-4">
				<FormField
					control={form.control}
					name="category"
					render={() => (
						<FormItem>
							<FormLabel>Category</FormLabel>
							<FormControl>
								<ProductCategorySelect
									name={form.getValues('category')}
									onValueChange={(name) => {
										form.setValue('category', name);
									}}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>

			<FormField
				control={form.control}
				name="description"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Product description</FormLabel>
						<FormControl>
							<TextEditor
								placeholder="Product description"
								value={form.getValues('description')}
								onChange={(value) => form.setValue('description', value)}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		</div>
	);
}

function Videos({ form }: FormProps) {
	const InputRef = useRef<HTMLInputElement>(null);
	const [video, setVideo] = React.useState('');
	const [videos, setVideos] = React.useState<{ url: string }[]>([]);
	const { errors } = form.formState;
	const handleAddVideo = () => {
		if (video.trim()) {
			const newVideo = { url: video.trim() };
			const newVideos = [...videos, newVideo];
			setVideos(newVideos); // Add video to the list
			form.setValue('videos', newVideos); // Update form state
			setVideo(''); // Clear input
		}
	};

	const handleRemoveVideo = (url: string) => {
		const updatedVideos = videos.filter((v) => v.url !== url);
		setVideos(updatedVideos); // Update state
		form.setValue('videos', updatedVideos); // Update form state
	};
	useEffect(() => {
		console.log(form.getValues('videos'));
		form.getValues('videos') && setVideos(form.getValues('videos'));
	}, [form.getValues('videos')]);
	return (
		<div className="grid gap-4">
			<div className="flex justify-between">
				<div className="space-y-1">
					<h3 className="text-sm sm:text-base font-medium">
						Project video links
					</h3>
					<p className="text-xs font-medium">Optional</p>
				</div>
			</div>
			<div className="grid gap-4">
				<div className="flex gap-3">
					<Input
						ref={InputRef}
						type="text"
						placeholder="Video link"
						value={video}
						onChange={(e) => setVideo(e.target.value)}
						name="video-link"
					/>
					<Button
						size="lg"
						type="button"
						onClick={handleAddVideo}
						className="flex gap-1 items-center disabled:opacity-80"
						disabled={!video.trim()} // Disable if input is empty
					>
						Add video link
					</Button>
				</div>
				<div className="flex flex-wrap gap-4">
					{videos.map((videoItem) => (
						<div key={videoItem.url} className="grid gap-1">
							<div className="relative w-[400px] h-[225px] overflow-hidden">
								<iframe
									width="400"
									height="225"
									src={videoItem.url}
									className="absolute left-0 top-0 w-full h-full"
									title="YouTube video player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen></iframe>
							</div>
							<div className="flex gap-3">
								<Button
									size="sm"
									type="button"
									className="flex gap-1 disabled:opacity-80 items-center"
									onClick={() => handleRemoveVideo(videoItem.url)}>
									Remove
								</Button>
							</div>
						</div>
					))}
				</div>
			</div>
			<FormMessage>{errors.videos?.message}</FormMessage>
		</div>
	);
}
// function Specifications({ form }: FormProps) {
// 	const { fields, append, remove } = useFieldArray({
// 		control: form.control,
// 		name: 'specs',
// 	});
// 	const { errors } = form.formState;
// 	const [currentSpec, setCurrentSpec] = useState('0');
// 	return (
// 		<div className="grid gap-4">
// 			<div className="flex justify-between">
// 				<div className="space-y-1">
// 					<h3 className="text-sm sm:text-base font-medium">
// 						Product specifications
// 					</h3>
// 					<p className="text-xs font-medium">
// 						This is optional, remove if there are no specifications
// 					</p>
// 				</div>
// 			</div>
// 			<Accordion
// 				type="single"
// 				value={currentSpec}
// 				onValueChange={setCurrentSpec}
// 				className="w-full grid gap-4">
// 				{fields.map((field, index) => (
// 					<AccordionItem className="" key={field.id} value={index.toString()}>
// 						<AccordionTrigger className="w-full text-sm hover:no-underline">
// 							Specification {index + 1}
// 						</AccordionTrigger>
// 						<AccordionContent className="space-y-2">
// 							<div className="grid sm:grid-cols-[70%,auto] gap-2">
// 								<FormField
// 									control={form.control}
// 									name={`specs.${index}.name`}
// 									render={({ field }) => (
// 										<FormItem>
// 											<FormControl>
// 												<Input
// 													className="rounded-none focus-visible:ring-0 focus-visible:ring-transparent"
// 													placeholder="Specification name"
// 													{...field}
// 												/>
// 											</FormControl>
// 											<FormMessage />
// 										</FormItem>
// 									)}
// 								/>
// 								<FormField
// 									control={form.control}
// 									name={`specs.${index}.group`}
// 									render={({ field }) => (
// 										<FormItem>
// 											<FormControl>
// 												<SpecsGroupSelect {...field} />
// 											</FormControl>
// 											<FormMessage />
// 										</FormItem>
// 									)}
// 								/>
// 							</div>
// 							<FormField
// 								control={form.control}
// 								name={`specs.${index}.content`}
// 								render={({ field }) => (
// 									<FormItem>
// 										<FormControl>
// 											<TextEditor
// 												placeholder="Specification content"
// 												{...field}
// 											/>
// 										</FormControl>
// 										<FormMessage />
// 									</FormItem>
// 								)}
// 							/>
// 							<div className="flex justify-end items-center gap-3">
// 								<Button
// 									variant="ghost"
// 									type="button"
// 									onClick={() => {
// 										setCurrentSpec(
// 											(parseInt(currentSpec) > 0
// 												? parseInt(currentSpec) - 1
// 												: parseInt(currentSpec)
// 											).toString()
// 										);
// 										remove(index);
// 									}}>
// 									<Trash className="h-5 w-5 text-destructive" />
// 								</Button>
// 								{fields.length - 1 == index && (
// 									<Button
// 										type="button"
// 										variant="outline"
// 										className="text-blue-500 px-2 py-1 h-6 border-blue-600"
// 										onClick={() => {
// 											append(
// 												{ name: '', content: '', group: '' },
// 												{
// 													shouldFocus: true,
// 												}
// 											);
// 											setCurrentSpec((parseInt(currentSpec) + 1).toString());
// 										}}>
// 										<Plus className="h-5 w-5 mr-2" />
// 										New
// 									</Button>
// 								)}
// 							</div>
// 						</AccordionContent>
// 					</AccordionItem>
// 				))}
// 			</Accordion>
// 			<FormMessage>{errors.specs?.message}</FormMessage>
// 		</div>
// 	);
// }

function Images({ form }: FormProps) {
	return (
		<FormField
			control={form.control}
			name="images"
			render={({ field }) => (
				<FormItem>
					<FormLabel className="text-base font-medium">
						Project images
					</FormLabel>
					<FormControl>
						<ImageUploader
							bucketName="images"
							images={form.getValues('images') as any}
							saveImages={(image) => form.setValue('images', image)}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
