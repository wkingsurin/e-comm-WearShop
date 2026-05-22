import { create } from "zustand";

interface IOverlay {
	open: boolean;
}
interface IModal {
	contentType: "FastWatch" | "CancelOrder" | null;
}

type UIState = {
	overlay: IOverlay;
	modal: IModal;

	updateOverlay: (updatedOverlay: IOverlay) => void;
	updateModal: (updatedModal: IModal) => void;
};

export const useUIStore = create<UIState>()((set) => ({
	overlay: { open: false },
	modal: { contentType: "FastWatch" },

	updateOverlay: (updatedOverlay) => set({ overlay: { ...updatedOverlay } }),
	updateModal: (updatedModal) => set({ modal: { ...updatedModal } }),
}));
