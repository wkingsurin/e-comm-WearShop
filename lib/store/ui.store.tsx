import { UIState } from "@/types/store/ui.types";
import { create } from "zustand";

export const useUIStore = create<UIState>()((set) => ({
	overlay: { open: false },
	modal: {
		target: { product: null, variantId: null },
		contentType: "QuickView",
	},
	sortOption: "lower",
	confirmData: null,

	updateOverlay: (updatedOverlay) => set({ overlay: { ...updatedOverlay } }),
	updateModal: (updatedModal) => set({ modal: { ...updatedModal } }),
	changeModalType: (type) =>
		set((state) => ({ modal: { ...state.modal, contentType: type } })),
	updateModalTarget: (target) =>
		set((state) => ({
			modal: {
				...state.modal,
				target: { product: target.product, variantId: target.variantId },
			},
		})),
	updateSortOption: (option) => set({ sortOption: option }),
	openConfirm: (data) =>
		set((state) => ({
			overlay: { open: true },
			modal: { ...state.modal, contentType: "ConfirmModal" },
			confirmData: data,
		})),
	clearConfirm: () =>
		set((state) => ({
			overlay: { open: false },
			modal: { ...state.modal, contentType: null },
			confirmData: null,
		})),
}));
