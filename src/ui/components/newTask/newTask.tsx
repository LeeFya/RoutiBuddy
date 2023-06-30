import { useState } from 'react';
import { Images } from '../../../assets';
import { useCoreStore } from '../../../lib';
import { AnimatePresence, motion } from 'framer-motion';

interface NewTaskProps {
	screenType: 'daily' | 'notes';
	setMenuVisibilityState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NewTask = ({ screenType, setMenuVisibilityState }: NewTaskProps) => {
	const [inputLabel, setInputLabel] = useState<string>('');

	const { handleNewDailyTask, handleNewNote } = useCoreStore();

	const handleInputOnClick = (e: React.FormEvent) => {
		e.preventDefault();
		setInputLabel('');
		screenType === 'daily' ? handleNewDailyTask(inputLabel) : handleNewNote(inputLabel);
		setMenuVisibilityState(false);
	};

	return (
		<AnimatePresence>
			<motion.div
				className="flex w-screen flex-col bg-blue-200"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				<section className="mt-auto flex items-center justify-center">
					<img
						src={Images.crossBlue}
						alt="close"
						onClick={() => setMenuVisibilityState(false)}
						className="w-14"
					/>
					<img
						src={Images.remindMeTo}
						alt="close"
						onClick={() => setMenuVisibilityState(false)}
						className="w-44"
					/>
				</section>

				<section className="mt-auto h-[90%] border-t-[3px] border-blue-400 bg-white px-10 shadow-inset">
					<div className="static mt-10 flex w-full items-center gap-2 rounded-full border-[3.5px] border-black bg-blue-100 p-3">
						<input
							type="text"
							id="todoInput"
							className={'text-bold w-full bg-transparent font-semibold capitalize outline-none'}
							placeholder={screenType === 'daily' ? 'New Daily Task' : 'New Note'}
							value={inputLabel}
							onChange={(e) => setInputLabel(e.target.value)}
						/>
					</div>
					{inputLabel && (
						<div className="mt-10 flex justify-center">
							<img src={Images.plus} className="w-14 cursor-pointer" onClick={handleInputOnClick} />
						</div>
					)}
				</section>
			</motion.div>
		</AnimatePresence>
	);
};
