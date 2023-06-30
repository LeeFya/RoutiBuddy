import { useTimer } from 'react-timer-hook';

export function useTimerHook(expiryTimestamp: Date) {
	const { seconds, minutes, hours, days, isRunning, start, pause, resume, restart } = useTimer({
		expiryTimestamp,
		autoStart: false,
		onExpire: () => console.warn('onExpire called'),
	});

	return {
		seconds,
		minutes,
		hours,
		days,
		isRunning,
		start,
		pause,
		resume,
		restart,
	};
}
