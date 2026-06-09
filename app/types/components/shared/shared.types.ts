import { LucideIcon } from "lucide-react";
import { IFavorite } from "../../store/favorites.types";
import { IVariant } from "../../store/ui.types";

export interface IDummyProps {
	icon: LucideIcon;
	text: string;
}

export interface IFavoriteButtonProps {
	data: IFavorite;
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
	data: IVariant;
	activeIndex: number;
	onSelect: (index: number) => void;
}

export interface IDashboardWrapperProps {
	className?: string;
	children: React.ReactNode;
	pageTitle: string;
}
