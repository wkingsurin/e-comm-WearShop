import { IProduct } from "./ui.types";

export interface LastSeenState {
	lastSeenIds: Array<string>;
	lastSeenItems: Record<string, IProduct>;
	_hasHydrated: boolean;

	addLastSeen: (product: IProduct) => void;
	setHydrated: (state: boolean) => void;
}
