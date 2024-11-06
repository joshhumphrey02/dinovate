import { ResetPassword } from '../../components/reset-password';

export const metadata = {
	title: 'Reset Password',
	description: 'Reset Password Page',
};

export default async function ResetPasswordPage({
	params,
}: {
	params: Promise<{ token: string }>;
}) {
	const tok = (await params).token;
	return (
		<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
			<div className="flex flex-col space-y-2 text-center">
				<h1 className="text-2xl font-semibold tracking-tight">
					Reset password
				</h1>
				<p className="text-sm text-muted-foreground">Enter new password.</p>
			</div>
			<ResetPassword token={tok} />
		</div>
	);
}
