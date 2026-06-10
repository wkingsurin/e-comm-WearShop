import { LastSeenState } from "@/types/store/last-seen.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

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

					const targetIndex = nextIds.indexOf(id);

					if (targetIndex !== -1) {
						nextIds.splice(targetIndex, 1);
					} else if (nextIds.length >= LIMIT) {
						const firstId = nextIds.shift();
						if (firstId) {
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
