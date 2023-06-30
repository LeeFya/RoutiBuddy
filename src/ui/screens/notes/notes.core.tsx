import { useState } from 'react';
import { Images } from '../../../assets';
import { useCoreStore } from '../../../lib';
import { Layout, NewTask, Task } from '../../components';

export const Notes = () => {
	const [isPencilMenuOpen, setIsPencilMenuOpen] = useState<boolean>(false);

	const notesList = useCoreStore((state) => state.notesList);

	return (
		<>
			{isPencilMenuOpen ? (
				<NewTask screenType="notes" setMenuVisibilityState={setIsPencilMenuOpen} />
			) : (
				<Layout>
					<div className="flex h-full w-screen flex-col bg-yellow-500">
						<div className="mt-auto h-[92%] bg-notes shadow-inset">
							<div className="mx-10 mt-7 flex h-[10%] justify-center">
								<img src={Images.stickyNotes} alt="Week Schedule" className="mb-5" />
							</div>

							<section className="mx-10 h-[62%]">
								{notesList.length > 0 && (
									<div className="mt-5 flex h-full flex-col gap-4 overflow-y-scroll">
										{notesList.map((note) => (
											<Task
												screenType="notes"
												key={note.id}
												id={note.id}
												label={note.label}
												isCompleted={note.isCompleted}
												taskColor={note.taskColor}
											/>
										))}
									</div>
								)}
							</section>
							<section className="flex h-[20%] justify-end self-end pb-16 align-bottom">
								<img
									className="cursor-pointer self-end"
									onClick={() => setIsPencilMenuOpen(true)}
									src={Images.pencil}
									alt="penciL"
								/>
							</section>
						</div>
					</div>
				</Layout>
			)}
		</>
	);
};
