import { useStopwatch } from 'react-timer-hook';

export function useStopwatchHook() {
	const { seconds, minutes, hours, days, isRunning, start, pause, reset } = useStopwatch({ autoStart: false });

	return {
		seconds,
		minutes,
		hours,
		days,
		isRunning,
		start,
		pause,
		reset,
	};
}
