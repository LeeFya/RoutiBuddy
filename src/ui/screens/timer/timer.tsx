import { useState } from 'react';
import { Images } from '../../../assets';
import clsx from 'clsx';
import { Button } from '../../components';
import { useNavigate } from 'react-router-dom';
import { useTimerHook, useStopwatchHook } from '../../../lib';

export const Timer = () => {
	const navigate = useNavigate();
	const [currentTab, setCurrentTab] = useState<'timer' | 'countdown'>('timer');

	const time = new Date();
	time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
	const { seconds, minutes, hours, start, restart } = useTimerHook(time);
	const {
		seconds: swSeconds,
		minutes: swMinutes,
		hours: swHours,
		start: swStart,
		reset: swReset,
	} = useStopwatchHook();

	const handleCurrentTabOnClick = (clickedTab: 'timer' | 'countdown'): void => {
		clickedTab === 'timer' && currentTab !== 'timer' && setCurrentTab('timer'), restart(time, false);
		clickedTab === 'countdown' && currentTab !== 'countdown' && setCurrentTab('countdown'),
			swReset(undefined, false);
	};

	return (
		<div className="w-screen bg-white px-10">
			<section className="mt-10 flex gap-1">
				<img src={Images.backArrow} alt="Timer" onClick={() => navigate(-1)} />
				<img src={Images.timerTitle} alt="Timer" />
			</section>

			<section className="mb-16 mt-20 flex h-fit w-full cursor-pointer rounded-lg border-[3px] border-red-500">
				<div
					className={clsx(
						'flex w-full border-r-[3px] border-r-red-500  py-1 pl-2 pr-7 text-center font-bold text-grey-200',
						currentTab === 'timer' ? 'bg-red-300' : 'bg-red-300/50'
					)}
					onClick={() => handleCurrentTabOnClick('timer')}
				>
					<img src={Images.timerBlack} alt="timer" />
					<p className="text-bold ml-1 mt-1">Timer</p>
				</div>
				<div
					className={clsx(
						'flex w-full py-1 pl-2 pr-7 text-center font-bold text-grey-200',
						currentTab === 'countdown' ? 'bg-red-300' : 'bg-red-300/50'
					)}
					onClick={() => handleCurrentTabOnClick('countdown')}
				>
					<img src={Images.countdown} alt="timer" />
					<p className="text-bold ml-1 mt-1">Countdown</p>
				</div>
			</section>

			<section className="mb-16 flex items-center justify-center text-center align-middle">
				<img src={Images.timerClock} alt="Timer" />
				{currentTab === 'timer' ? (
					<p className="absolute text-4xl font-bold">
						{swHours}:{swMinutes}:{swSeconds}
					</p>
				) : (
					<p className="absolute text-4xl font-bold">
						{hours}:{minutes}:{seconds}
					</p>
				)}
			</section>

			<Button label={'Start'} buttonType="tertiary" onClick={currentTab === 'timer' ? swStart : start} />
		</div>
	);
};
