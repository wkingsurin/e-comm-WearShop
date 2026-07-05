import { LucideIcon } from "lucide-react";
import { IColorOption } from "../../store/ui.types";

export interface IDummyProps {
	icon: LucideIcon;
	text: string;
}

export interface IHeartButtonProps {
	isFavorite: boolean;
	productId: string;
	inline?: boolean;
}

export interface IRemoveButtonProps {
	data: IFavorite;
}

export interface ISectionSubtitleProps {
	children: string | React.ReactNode;
}

export interface ISectionTitleProps {
	children: string | React.ReactNode;
}

export interface ISectionProps {
	className?: string;
	children: React.ReactNode;
}

export interface IServiceLinkProps {
	href: string;
	children: string | React.ReactNode;
}

export interface ISortProps {
	className?: string;
}

export interface ICarouselProps {
	images: IColorOption["images"];
	activeIndex: number;
	onSelect: (index: number) => void;
}

export interface IDashboardWrapperProps {
	className?: string;
	children: React.ReactNode;
	pageTitle: React.ReactNode;
}

export interface IFavorite {
	id: string;
	userId: string;
	productId: string;
	createdAt: string;
}
