import { Images } from '../../../assets';
import { Button, Layout } from '../../components';

type Link = {
	name: string;
	path: string;
};

export const LandingPage = () => {
	const links: Link[] = [
		{
			name: 'For the Day',
			path: '/daily',
		},
		{
			name: 'Calendar',
			path: '',
		},
		{
			name: 'Notes',
			path: '/notes',
		},
		{
			name: 'Timer',
			path: '/timer',
		},
	];

	return (
		<Layout isFooterVisible={false}>
			<div className="flex w-screen max-w-phone bg-blue-200">
				<div className="mt-auto flex h-[85%] w-screen justify-center rounded-t-full bg-blue-100 shadow-inset">
					<div className="mt-5 flex flex-col gap-16">
						<img src={`${Images.logo}`} alt="Logo" className="mt-4 h-[114px] w-[290px]" />

						<div className="flex flex-col gap-7">
							{links.map((link, i) => (
								<Button key={i} label={link.name} onClick={console.log} asLink href={link.path} />
							))}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};
