import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
	prompt: boolean;
};
type Actions = {
	setPrompt: (prompt: boolean) => void;
};

const initialState: State = {
	prompt: false,
};
type StateAndActions = State & Actions;
const useStore = create<StateAndActions>()(
	persist(
		(set, get) => ({
			...initialState,
			setPrompt: (prompt) => set((state) => ({ ...state, prompt })),
		}),
		{
			name: 'agcom-storage',
			partialize: (state) => ({
				prompt: state.prompt,
			}),
		}
	)
);

export default useStore;
