export interface CoreStoreState {
	dailyTaskList: { id: string; label: string; taskColor: string; isCompleted: boolean }[];
	notesList: { id: string; label: string; taskColor: string; isCompleted: boolean }[];
}

export interface CoreStoreActions {
	handleCompleteDailyTask(id: string): void;
	handleNewDailyTask(label: string): void;
	handleDeleteDailyTask(id: string): void;
	handleCompleteNote(id: string): void;
	handleNewNote(label: string): void;
	handleDeleteNote(id: string): void;
}

export interface CoreStore extends CoreStoreState, CoreStoreActions {}
