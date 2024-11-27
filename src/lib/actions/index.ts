'use server';

import prisma from '@/lib/prisma';

export interface ActionResponse<T> {
	fieldError?: Partial<Record<keyof T, string | undefined>>;
	formError?: string;
	data?: boolean;
	res?: Partial<Record<keyof T, string | undefined>>;
}

export const getProCats = async () => {
	try {
		const proCats = await prisma.projectCategory.findMany({});
		if (proCats) return proCats;
		return [];
	} catch (error) {
		console.log(error);
		return [];
	}
};

export const getProfileData = async () => {
	try {
		const nav = await prisma.staff.findMany({
			select: {
				id: true,
				fullName: true,
				image: {
					select: {
						url: true,
					},
				},
				role: true,
				description: true,
				title: true,
			},
		});
		return nav ? nav : [];
	} catch (error) {
		// console.log(error);
		return [];
	}
};

export type ProfileData = Awaited<ReturnType<typeof getProfileData>>;

export async function getDashboardData() {
	try {
		const data = await prisma.$transaction(async (tx: any) => {
			const project = await tx.projects.count();
			const admins = await tx.user.count();
			const posts = await tx.posts.count();
			const requests = await tx.message.count();

			return {
				project,
				admins,
				posts,
				requests,
			};
		});
		return data || [];
	} catch (error) {
		// console.log(error);
		return {
			project: 0,
			admins: 0,
			posts: 0,
			requests: 0,
		};
	}
}

export type DashboardData = Awaited<ReturnType<typeof getDashboardData>>;
