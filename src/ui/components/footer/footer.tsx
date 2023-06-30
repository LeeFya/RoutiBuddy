import clsx from 'clsx';
import { Images } from '../../../assets';
import { useLocation, Link } from 'react-router-dom';

type Link = {
	name: string | React.ReactNode;
	path: string;
	icon?: React.ReactNode;
};

export const Footer = () => {
	const location = useLocation();

	const links: Link[] = [
		{
			name: 'Daily',
			path: '/daily',
			icon: <img src={Images.daily} alt="daily" />,
		},
		{
			name: 'Calendar',
			path: '',
			icon: <img src={Images.calendar} alt="calendar" />,
		},
		{ name: <img src={Images.favicon} alt="home" />, path: '/' },
		{
			name: 'Notes',
			path: '/notes',
			icon: <img src={Images.notes} alt="notes" />,
		},
		{
			name: 'Timer',
			path: '/timer',
			icon: <img src={Images.timer} alt="timer" />,
		},
	];

	return (
		<footer className="absolute inset-x-0 bottom-0 flex justify-center gap-[6px] overflow-hidden text-xs font-semibold text-white">
			{links.map((link) => (
				<Link
					key={link.path}
					to={link.path}
					className={clsx('flex h-[96px] justify-center rounded-xl', {
						'translate-y-[36px] bg-[#7384e7]': location.pathname !== link.path && link.path !== '/',
						'translate-y-[14px] bg-[#ec666e]': location.pathname === link.path && link.path !== '/',
						'w-[56px] shadow-footer': link.path !== '/',
						'w-[100px]': link.path === '/',
					})}
				>
					{link.path === '/' ? (
						<div className="h-full w-full translate-x-[3px] translate-y-[17px]">
							<img
								className="absolute inset-x-0 -top-3 left-1/2 -translate-x-1/2"
								src={Images.favicon}
								alt="el gato"
							/>
							<img className="absolute inset-x-0 bottom-0 h-full w-full" src={Images.union} alt="union" />
						</div>
					) : (
						<div className="flex flex-col items-center py-2">
							{link.icon && link.icon}
							<span>{link.name}</span>
						</div>
					)}
				</Link>
			))}
		</footer>
	);
};
