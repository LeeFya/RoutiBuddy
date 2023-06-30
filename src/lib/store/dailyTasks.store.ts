import { nanoid } from 'nanoid';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { useGenerateColor } from '../hooks';
import { CoreStore, CoreStoreActions, CoreStoreState } from './store.types';

const initialState: CoreStoreState = {
	dailyTaskList: [],
	notesList: [],
};

const actions = (set: any): CoreStoreActions => {
	const handleCompleteDailyTask = (id: string) => {
		set(
			(state: CoreStoreState) => ({
				dailyTaskList: state.dailyTaskList.map((task) =>
					task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
				),
			}),
			false,
			'complete_daily_task'
		);
	};

	const handleNewDailyTask = (label: string) => {
		set(
			(state: CoreStoreState) => {
				const newDailyTask = {
					id: nanoid(),
					label: label,
					taskColor: useGenerateColor(),
					isCompleted: false,
				};

				state.dailyTaskList = [...state.dailyTaskList, newDailyTask];
			},
			false,
			'new_daily_task'
		);
	};

	const handleDeleteDailyTask = (id: string) => {
		set(
			(state: CoreStoreState) => ({
				dailyTaskList: state.dailyTaskList.filter((task) => id !== task.id),
			}),
			false,
			'delete_todo'
		);
	};

	const handleCompleteNote = (id: string) => {
		set(
			(state: CoreStoreState) => ({
				notesList: state.notesList.map((note) =>
					note.id === id ? { ...note, isCompleted: !note.isCompleted } : note
				),
			}),
			false,
			'complete_note'
		);
	};

	const handleNewNote = (label: string) => {
		set(
			(state: CoreStoreState) => {
				const newNote = {
					id: nanoid(),
					label: label,
					taskColor: useGenerateColor(),
					isCompleted: false,
				};

				state.notesList = [...state.notesList, newNote];
			},
			false,
			'new_note'
		);
	};

	const handleDeleteNote = (id: string) => {
		set(
			(state: CoreStoreState) => ({
				notesList: state.notesList.filter((note) => id !== note.id),
			}),
			false,
			'delete_note'
		);
	};

	return {
		handleCompleteDailyTask,
		handleNewDailyTask,
		handleDeleteDailyTask,
		handleCompleteNote,
		handleNewNote,
		handleDeleteNote,
	};
};

export const useCoreStore = create<CoreStore>()(
	devtools(
		persist(
			(set) => ({
				...initialState,
				...actions(set),
			}),
			{
				name: 'CORE.STORE',
				storage: createJSONStorage(() => sessionStorage),
			}
		),
		{
			name: 'CORE.STORE',
		}
	)
);
