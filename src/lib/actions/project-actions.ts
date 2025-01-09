'use server';

import { revalidatePath } from 'next/cache';
import { ActionResponse } from '.';
import prisma from '../prisma';
import { ProductFormInput, ProductFormSchema } from '../validators/auth';

export async function getProjects(args: {
	cursor?: string;
	take: number;
	skip?: number;
	orderBy: {
		createdAt: 'asc' | 'desc';
	};
	search?: string;
}) {
	try {
		const { take, skip, orderBy, search } = args;
		const searchKey = search && search !== 'all' ? search : null;
		const projects = await prisma.project
			.findMany({
				...(args.cursor && { cursor: { id: args.cursor } }),
				...(searchKey && {
					where: {
						category: {
							slug: searchKey,
						},
					},
				}),
				take,
				orderBy,
				include: {
					category: {
						select: {
							name: true,
							slug: true,
						},
					},
					images: {
						select: {
							url: true,
						},
						take: 1,
					},
				},
			})
			.catch(() => []);
		return projects;
	} catch (error) {
		console.error(error);
		return [];
	}
}
export type ProjectsType = Awaited<ReturnType<typeof getProjects>>;
export async function getProjectData(projectId?: string) {
	try {
		if (!projectId) return null;
		const project = await prisma.project.findFirst({
			where: { id: projectId },
			select: {
				id: true,
				name: true,
				description: true,
				createdAt: true,
				updatedAt: true,
				organization: true,
				category: {
					select: {
						name: true,
						slug: true,
					},
				},
				images: {
					select: {
						url: true,
					},
				},
				videos: {
					select: {
						url: true,
						id: true,
					},
				},
			},
		});
		return project;
	} catch (error) {
		console.log(error);
		return null;
	}
}
export type ProjectType = Awaited<ReturnType<typeof getProjectData>>;

export async function createProduct(
	_: any,
	data: ProductFormInput
): Promise<ActionResponse<ProductFormInput>> {
	try {
		const parsed = ProductFormSchema.safeParse(data);
		if (!parsed.success) {
			const err = parsed.error.flatten();
			return {
				fieldError: {
					name: err.fieldErrors.name?.[0],
					description: err.fieldErrors.description?.[0],
					category: err.fieldErrors.category?.[0],
					images: err.fieldErrors.images?.[0],
				},
			};
		}
		const { id, images, name, description, category, videos, organization } =
			data;
		if (id) {
			await prisma.project.update({
				where: {
					id,
				},
				data: {
					name,
					description,
					category: {
						connect: {
							name: category,
						},
					},
					...(images?.length
						? {
								images: {
									connectOrCreate: images.map(({ url }) => ({
										where: {
											url,
										},
										create: {
											url,
										},
									})),
								},
						  }
						: {}),
					...(videos?.length
						? {
								videos: {
									deleteMany: {},
									create: videos.map(({ url }) => ({
										url,
									})),
								},
						  }
						: {}),
				},
			});
			revalidatePath('/admin/project');
			return {
				data: true,
			};
		} else {
			await prisma.project.create({
				data: {
					name,
					description,
					organization: organization || 'Dinovate',
					category: {
						connect: {
							name: category,
						},
					},
					...(images?.length
						? {
								images: {
									connectOrCreate: images.map(({ url }) => ({
										where: {
											url,
										},
										create: {
											url,
										},
									})),
								},
						  }
						: {}),
					...(videos?.length
						? {
								videos: {
									create: videos.map(({ url }) => ({
										url,
									})),
								},
						  }
						: {}),
				},
			});
			revalidatePath('/admin/project');
			return {
				data: true,
			};
		}
	} catch (error) {
		console.log(error);
		return {
			formError: 'Error occurred',
		};
	}
}

export async function deleteProduct(projectId: string) {
	try {
		if (!projectId) return false;
		await prisma.project.delete({
			where: { id: projectId },
		});
		revalidatePath('/admin/project');
		return true;
	} catch (error) {
		console.log(error);
		return false;
	}
}
export async function deleteImage(url: string) {
	try {
		if (!url) return false;
		const exist = await prisma.image.findFirst({
			where: {
				url,
			},
			select: {
				id: true,
				projectId: true,
			},
		});
		if (exist?.projectId)
			await prisma.project.update({
				where: {
					id: exist.projectId,
				},
				data: {
					images: {
						delete: {
							id: exist.id,
						},
					},
				},
			});
		revalidatePath('/admin/project');
		return true;
	} catch (error) {
		console.log(error);
		return false;
	}
}
export async function deleteVideo(url: string) {
	try {
		if (!url) return false;
		const exist = await prisma.image.findFirst({
			where: {
				url,
			},
			select: {
				id: true,
			},
		});
		if (exist)
			await prisma.image.delete({
				where: {
					id: exist.id,
				},
			});
		revalidatePath('/admin/project');
		return true;
	} catch (error) {
		console.log(error);
		return false;
	}
}
