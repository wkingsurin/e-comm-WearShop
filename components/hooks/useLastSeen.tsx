import { IProduct } from "@/app/types/store/ui.types";
import { useLastSeenStore } from "@/lib/store/last-seen.store";

export default function useLastSeen() {
	const hasHydrated = useLastSeenStore((s) => s._hasHydrated);
	const store = useLastSeenStore();

	if (!hasHydrated) {
		return {
			lastSeenIds: [] as Array<string | number>,
			lastSeenItems: {} as Record<string, IProduct>,
			lastSeenItemsList: [] as IProduct[],
			addLastSeen: () => {},
		};
	}

	return {
		...store,
		lastSeenItemsList: Object.values(store.lastSeenItems || {}),
	};
}
