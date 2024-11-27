import { Card } from '@/components/ui/card';
import EmptyState from '@/components/shared/empty-state';
import { Plus } from 'lucide-react';
import { AlertTriggerButton } from '@/components/shared/alert-wrapper';
import RecentProducts from './components/recent-products';
import { ProductAlert } from './components/product';
import { getProjectData, getProjects } from '@/lib/actions/project-actions';

type Props = {
	searchParams: Promise<{
		tab?: string;
		orderBy?: string;
		take?: string;
		skip?: string;
		projectId?: string;
		edit?: string;
	}>;
};
export default async function Page(props: Props) {
	const searchParams = await props.searchParams;
	const data = await getProjects({
		orderBy: {
			createdAt: 'desc',
		},
		take: 20,
		skip: 0,
	});
	const projectData = await getProjectData(searchParams.projectId);
	return (
		<div className="w-full h-full py-8 space-y-6">
			<div>
				<h1 className=" text-xl sm:text-3xl font-medium mb-1">Projects</h1>
				<p className="text-gray-500">View all dinovate project.</p>
			</div>
			{data.length > 0 ? (
				<>
					<Card className="w-full divide-y">
						<div className="p-6 flex justify-between">
							<div className="flex-1">
								<h2 className="font-medium text-lg">All dinovate projects</h2>
								<p className="text-gray-500 text-xs">
									Find all new and existing projects.
								</p>
							</div>

							<AlertTriggerButton
								variant="outline"
								alertKey="projectId"
								alertValue="new">
								<Plus className="h-5 w-5 mr-2" />
								New project
							</AlertTriggerButton>
						</div>
					</Card>
					<div>
						<div className="flex flex-col gap-4">
							<h4>Recent Projects</h4>
							<RecentProducts data={data} />
						</div>
					</div>
				</>
			) : (
				<EmptyState
					className=" border-0 shadow-none"
					title="No available data"
					description="Products will be shown when created!">
					<AlertTriggerButton
						variant="outline"
						alertKey="projectId"
						alertValue="new">
						<Plus className="h-5 w-5 mr-2" />
						New project
					</AlertTriggerButton>
				</EmptyState>
			)}
			<ProductAlert
				open={!!searchParams.projectId}
				projectId={searchParams.projectId}
				edit={searchParams.edit}
				project={projectData}
			/>
		</div>
	);
}
