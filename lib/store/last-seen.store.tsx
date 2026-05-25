import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IProduct } from "./ui.store";

interface LastSeenState {
	lastSeenIds: Array<string | number>;
	lastSeenItems: Record<string, IProduct>;
	_hasHydrated: boolean;

	addLastSeen: (product: IProduct) => void;
	setHydrated: (state: boolean) => void;
}

export const useLastSeenStore = create<LastSeenState>()(
	persist(
		(set) => ({
			lastSeenIds: [],
			lastSeenItems: {},
			_hasHydrated: false,

			addLastSeen: (product) => {
				const id = product.id;
				const LIMIT = 4;

				set((state) => {
					const nextIds = [...state.lastSeenIds];
					const nextItems = { ...state.lastSeenItems };

					const existsIdx = nextIds.indexOf(id);

					if (existsIdx !== -1) {
						nextIds.splice(existsIdx, 1);
					} else if (nextIds.length >= LIMIT) {
						const firstId = nextIds.shift();
						if (firstId !== undefined) {
							delete nextItems[firstId];
						}
					}

					nextIds.push(id);
					nextItems[id] = product;

					return { lastSeenIds: nextIds, lastSeenItems: nextItems };
				});
			},

			setHydrated: (state) => set({ _hasHydrated: state }),
		}),
		{
			name: "user-last-seen",
			onRehydrateStorage: (state) => () => state.setHydrated(true),
		}
	)
);
