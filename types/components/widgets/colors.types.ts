import { IColorOption } from "@/types/store/ui.types";

export interface IColorsProps {
	colors: IColorOption[];
	defaultSize?: string;
	activeColorId?: string;
	changeActiveColorId?: (color: string) => void;
	type: "Modal" | "Page";
}

export interface IColorsLinkProps {
	id: string;
	name: string;
	slug: string;
	previewImage: string;
	isActive: boolean;
	defaultSize: string;
}

export interface IColorsOptionProps {
	id: string;
	name: string;
	slug: string;
	previewImage: string;
	isActive: boolean;
	changeActiveColorId: (color: string) => void;
}

export interface IColorsWrapperProps {
	colors: IColorOption[];
	defaultSize?: string;
	activeColorId?: string;
	changeActiveColorId?: (color: string) => void;
	type: "Modal" | "Page";
}
