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
		const projects = await prisma.project.findMany({
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
		});
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
		const project = await prisma.project.findUnique({
			where: { id: projectId },
			select: {
				id: true,
				name: true,
				description: true,
				createdAt: true,
				updatedAt: true,
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
					take: 2,
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
		const { id, images, name, description, category } = data;
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
					// ...(subCategory
					// 	? {
					// 			subcategory: {
					// 				connect: {
					// 					name: subCategory,
					// 				},
					// 			},
					// 	  }
					// 	: {}),
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
					// ...(features?.length
					// 	? {
					// 			features: {
					// 				deleteMany: {},
					// 				create: features.map(({ name, content }) => ({
					// 					name,
					// 					content,
					// 				})),
					// 			},
					// 	  }
					// 	: {}),
					// ...(specs?.length
					// 	? {
					// 			specs: {
					// 				deleteMany: {},
					// 				create: specs.map(({ name, content, group }) => ({
					// 					name,
					// 					content,
					// 					spec: {
					// 						connect: {
					// 							name: group,
					// 						},
					// 					},
					// 				})),
					// 			},
					// 	  }
					// 	: {}),
				},
			});
			revalidatePath('/admin/project');
			return {
				data: true,
			};
		} else {
			// await prisma.project.create({
			// 	data: {
			// 		name,
			// 		description,
			// 		category: {
			// 			connect: {
			// 				name: category,
			// 			},
			// 		},
			// 		...(images
			// 			? {
			// 					images: {
			// 						create: images.map(({ url }) => ({ url })),
			// 					},
			// 			  }
			// 			: {}),
			// 		// ...(features?.length
			// 		// 	? {
			// 		// 			features: {
			// 		// 				create: features.map(({ name, content }) => ({
			// 		// 					name,
			// 		// 					content,
			// 		// 				})),
			// 		// 			},
			// 		// 	  }
			// 		// 	: {}),
			// 		// ...(specs?.length
			// 		// 	? {
			// 		// 			specs: {
			// 		// 				create: specs.map(({ name, content, group }) => ({
			// 		// 					name,
			// 		// 					content,
			// 		// 					spec: {
			// 		// 						connect: {
			// 		// 							name: group,
			// 		// 						},
			// 		// 					},
			// 		// 				})),
			// 		// 			},
			// 		// 	  }
			// 		// 	: {}),
			// 	},
			// });
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
