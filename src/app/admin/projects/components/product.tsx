'use client';
import {
	AlertTriggerButton,
	AlertWrapper,
} from '@/components/shared/alert-wrapper';
import { format } from 'date-fns';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import NewProject from './new-product';
import { toast } from 'sonner';
import { cn, uniqueId } from '@/lib/utils';
import { deleteProduct, ProjectType } from '@/lib/actions/project-actions';
import Image from '@/components/shared/image';
import HtmlText from '@/components/shared/html-text';
import { AlertDialogTitle } from '@/components/ui/alert-dialog';

type Props = {
	open: boolean;
	projectId?: string;
	project: ProjectType;
	edit?: string;
};

export function ProductAlert({ open, project, projectId, edit }: Props) {
	return (
		<AlertWrapper
			alertKey="projectId"
			alertValue={projectId || 'new'}
			open={open}
			className={cn(
				'sm:min-w-[56rem] overflow-scroll max-h-screen sm:w-[75vw]',
				projectId === 'new' || edit === 'true' ? 'px-0 py-0' : ''
			)}>
			<AlertDialogTitle></AlertDialogTitle>
			<div className="overflow-y-scroll">
				{projectId === 'new' || edit === 'true' ? (
					<NewProject project={project} />
				) : (
					<>
						<div className="space-y-4">
							<h2 className="text-xl">Project Details</h2>
						</div>
						<div className=" mt-1">
							<div className="w-full">
								<div className="flex flex-col gap-5 py-3">
									<div className="grid sm:grid-cols-3 gap-4">
										{project?.images.map((im) => (
											<div
												key={uniqueId()}
												className="flex justify-center w-full h-32 items-center">
												<Image
													src={im.url}
													alt={project.name}
													bucketName="images"
												/>
											</div>
										))}
									</div>
									<Card className="py-2 px-4">
										<CardContent className="space-y-4 px-4 py-1">
											<div className="flex justify-between items-center w-full text-sm">
												<span className="text-gray-500">Title:</span>
												<span>{project?.name || ''}</span>
											</div>
											<div className="flex justify-between items-center w-full text-sm">
												<span className="text-gray-500">Date created:</span>
												<time className="text-sm text-gray-500 ml-auto">
													{project?.createdAt
														? format(
																new Date(project.createdAt),
																'MMM dd, yyyy'
														  )
														: ''}
												</time>
											</div>
											<div className="flex justify-between items-center w-full text-sm">
												<span className="text-gray-500">project ID:</span>
												<span>{project?.id || ''}</span>
											</div>
											<div className="flex justify-between items-center w-full text-sm">
												<span className="text-gray-500">Category:</span>
												<span>{project?.category?.name || ''}</span>
											</div>
										</CardContent>
									</Card>
									<Card className="px-4 py-2">
										<HtmlText
											text={project?.description ?? ''}
											className="text-xs font-semibold"
										/>
									</Card>
									<div className="flex gap-4 items-center">
										<Link
											href={`?projectId=${project?.id}&edit=true`}
											className="">
											<Button
												className=" border-2"
												variant={'outline'}
												size={'lg'}>
												Edit Project
											</Button>
										</Link>
										<AlertTriggerButton
											alertKey="projectId"
											alertValue={project?.id || 'new'}
											className="px-8 py-2">
											Cancel
										</AlertTriggerButton>
										<AlertTriggerButton
											onClick={async () => {
												const res = await deleteProduct(project?.id || '');
												if (!res) {
													toast.error('Please try again');
												} else {
													toast.success('Project deleted successfully');
												}
											}}
											alertKey="projectId"
											alertValue={project?.id || 'new'}
											className="px-8 py-2">
											Delete
										</AlertTriggerButton>
									</div>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</AlertWrapper>
	);
}
