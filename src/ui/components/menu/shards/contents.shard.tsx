import { Link } from 'react-router-dom';
import { Images } from '../../../../assets';
import { useGenerateDates } from '../../../../lib';
import { menuShards } from '../shards';

export const ContentsShard = () => {
	const { home, buddy, week, calendar, notes, timer, settings, logout, contact } = Images.menu;
	const links: {
		icon: string;
		href?: string;
	}[][] = [
		[
			{ icon: home, href: '/' },
			{ icon: buddy },
			{ icon: week, href: '/daily' },
			{ icon: calendar, href: '/calendar' },
			{ icon: notes, href: '/notes' },
			{ icon: timer, href: '/timer' },
		],
		[{ icon: settings }, { icon: logout }],
		[{ icon: contact }],
	];

	return (
		<div className="flex h-4/5 w-full justify-center rounded-b-[20px] bg-white py-3">
			<div className="flex h-full w-full flex-col">
				<div>
					<img className="mx-auto" src={Images.logo} alt="Logo" />
					<p className="ml-20 flex flex-col text-xl font-bold leading-tight text-black/50">
						<span>{new Date().toLocaleString('en-us', { weekday: 'long' })}</span>
						<span>{useGenerateDates()}</span>
					</p>
				</div>
				<menuShards.BlueLineShard />
				<div className="ml-16 flex w-full flex-col">
					{links[0].map((link) => {
						return link.href ? (
							<Link key={link.icon} to={link.href}>
								<img src={link.icon} alt={link.href} />
							</Link>
						) : (
							<button key={link.icon}>
								<img src={link.icon} alt={link.href} />
							</button>
						);
					})}
				</div>
				<menuShards.BlueLineShard />
				<div className="ml-16 flex w-full flex-col">
					{links[1].map((link) => {
						return link.href ? (
							<Link key={link.icon} to={link.href}>
								<img src={link.icon} alt={link.href} />
							</Link>
						) : (
							<button key={link.icon}>
								<img src={link.icon} alt={link.href} />
							</button>
						);
					})}
				</div>
				<menuShards.BlueLineShard />
				<div className="ml-16 flex w-full flex-col">
					{links[2].map((link) => {
						return link.href ? (
							<Link key={link.icon} to={link.href}>
								<img src={link.icon} alt={link.href} />
							</Link>
						) : (
							<button key={link.icon}>
								<img src={link.icon} alt={link.href} />
							</button>
						);
					})}
				</div>
			</div>
		</div>
	);
};
