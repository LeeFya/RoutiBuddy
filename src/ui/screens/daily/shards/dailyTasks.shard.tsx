import { Images } from '../../../../assets';
import { useCoreStore } from '../../../../lib';
import { Task } from '../../../components';

export const DailyTasksShard = () => {
	const dailyTaskList = useCoreStore((state) => state.dailyTaskList);

	return (
		<>
			<div className="flex h-fit w-fit justify-center rounded-xl bg-red-500 p-2">
				<img src={Images.today} alt="today" />
			</div>

			{dailyTaskList.length > 0 ? (
				<div className="mt-5 flex h-60 flex-col gap-4 overflow-y-scroll">
					{dailyTaskList.map((task) => (
						<Task
							key={task.id}
							screenType="daily"
							id={task.id}
							label={task.label}
							isCompleted={task.isCompleted}
							taskColor={task.taskColor}
						/>
					))}
				</div>
			) : (
				<div className="flex h-60 w-full translate-y-[-12px] flex-col items-center justify-center rounded border-[3px] border-red-500 bg-red-250 px-[4px] text-center">
					<p className="a mt-4 flex font-bold">No tasks set for today</p>
					<p className="text-[13px]">Press on the pencil to create a new task for today</p>
					<img className="mt-4 w-[99px] -translate-y-[-3.1rem]" src={Images.noTasks} alt="today" />
				</div>
			)}
		</>
	);
};
