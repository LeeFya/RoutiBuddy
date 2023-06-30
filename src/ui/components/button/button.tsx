import { Images } from '../../../assets';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface ButtonProps {
	buttonType?: 'primary' | 'secondary' | 'tertiary';
	label: string;
	onClick: () => void;
	asLink?: boolean;
	href?: string;
}

export const Button = ({ buttonType = 'primary', label, onClick, href, asLink }: ButtonProps) => {
	return asLink ? (
		<Link
			to={href || '/'}
			className={clsx(
				'flex h-14 w-full justify-end rounded-full border-[2.5px] border-r-0',
				buttonType === 'primary' && 'border-buttons-primary-border bg-buttons-primary-background',
				buttonType === 'secondary' &&
					'border-buttons-secondary-border bg-buttons-secondary-background font-bold',
				buttonType === 'tertiary' && 'border-buttons-tertiary-border bg-buttons-tertiary-background font-bold'
			)}
		>
			<div className="flex h-full w-9/12 items-center justify-center">
				<p className="text-[22px]">{label}</p>
			</div>
			<div
				className={clsx(
					'flex h-full w-[54px] items-center justify-center rounded-full border-[3px]',
					buttonType === 'primary' && 'border-buttons-primary-border bg-buttons-primary-accent',
					buttonType === 'secondary' &&
						'border-buttons-secondary-border bg-buttons-secondary-accent font-bold',
					buttonType === 'tertiary' && 'border-buttons-tertiary-border bg-buttons-tertiary-accent font-bold'
				)}
			>
				<img src={buttonType === 'secondary' ? `${Images.arrowBlue}` : `${Images.arrow}`} alt="arrow" />
			</div>
		</Link>
	) : (
		<button
			onClick={onClick}
			className={clsx(
				'flex h-14 w-full justify-end rounded-full border-[2.5px] border-r-0',
				buttonType === 'primary' && 'border-buttons-primary-border bg-buttons-primary-background',
				buttonType === 'secondary' &&
					'border-buttons-secondary-border bg-buttons-secondary-background font-bold',
				buttonType === 'tertiary' && 'border-buttons-tertiary-border bg-buttons-tertiary-background font-bold'
			)}
		>
			<div className="flex h-full w-9/12 items-center justify-center">
				<p className="text-[22px]">{label}</p>
			</div>
			<div
				className={clsx(
					'flex h-full w-[54px] items-center justify-center rounded-full border-[3px]',
					buttonType === 'primary' && 'border-buttons-primary-border bg-buttons-primary-accent',
					buttonType === 'secondary' &&
						'border-buttons-secondary-border bg-buttons-secondary-accent font-bold',
					buttonType === 'tertiary' && 'border-buttons-tertiary-border bg-buttons-tertiary-accent font-bold'
				)}
			>
				<img src={buttonType === 'secondary' ? `${Images.arrowBlue}` : `${Images.arrow}`} alt="arrow" />
			</div>
		</button>
	);
};
