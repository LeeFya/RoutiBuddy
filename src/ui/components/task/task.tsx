import { Images } from '../../../assets';
import clsx from 'clsx';
import { useCoreStore } from '../../../lib';
interface TasksProps {
	screenType: 'daily' | 'notes';
	id: string;
	label: string;
	isCompleted: boolean;
	taskColor?: string;
}
export const Task = ({ screenType, id, label, isCompleted, taskColor = 'red' }: TasksProps) => {
	const { handleCompleteDailyTask, handleDeleteDailyTask, handleCompleteNote, handleDeleteNote } = useCoreStore();

	const handleTaskCompletionOnClick = (): void => {
		screenType === 'daily' ? handleCompleteDailyTask(id) : handleCompleteNote(id);
	};

	return (
		<div className="flex w-full">
			<div
				className={clsx(
					'w-full rounded-lg shadow-tasks',
					taskColor === 'red' && 'bg-red-250',
					taskColor === 'blue' && 'bg-blue-200',
					taskColor === 'yellow' && 'bg-yellow-200',
					screenType === 'daily' ? 'h-16' : 'h-24'
				)}
			>
				<div
					className={clsx(
						'w-7 rounded-l-lg p-2',
						taskColor === 'red' && 'bg-red-500',
						taskColor === 'blue' && 'bg-blue-500',
						taskColor === 'yellow' && 'bg-yellow-500',
						screenType === 'daily' ? 'h-16' : 'h-24'
					)}
				>
					<div
						className={clsx(
							'flex w-[292px] rounded outline-dashed outline-[4px] outline-white sm:w-[30rem] ',
							screenType === 'daily' ? 'min-h-[3rem]' : 'min-h-[5rem]'
						)}
					>
						<div className="mt-2 flex flex-col">
							<img
								src={isCompleted ? Images.checkboxChecked : Images.checkbox}
								alt="checkbox"
								className="ml-8 mt-1 h-4 w-4 cursor-pointer"
								onClick={handleTaskCompletionOnClick}
							/>
							<img
								src={Images.blackCross}
								alt="checkbox"
								className={clsx('ml-[1.8rem] mt-1 w-5 cursor-pointer', !isCompleted && 'opacity-20')}
								onClick={
									isCompleted
										? () =>
												screenType === 'daily'
													? handleDeleteDailyTask(id)
													: handleDeleteNote(id)
										: undefined
								}
							/>
						</div>
						<p className="text-star1 ml-4 mt-2 h-10 w-full overflow-y-scroll text-start font-bold">
							{label}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
