import clsx from 'clsx';

export const WeekDaysShard = () => {
	const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

	return (
		<div className="grid h-fit w-full grid-cols-7 rounded border-[3px] border-yellow-800">
			{weekDays.map((weekDay) => (
				<span key={weekDay} className={clsx('', weekDay !== 'SUN' && 'border-r-[3px] border-r-white')}>
					<div className={'w-full bg-yellow-500 text-center font-bold text-grey-200'}>{weekDay}</div>
					<div className="h-[3px] bg-yellow-800" />
					<div className="h-8 bg-yellow-200" />
				</span>
			))}
		</div>
	);
};
