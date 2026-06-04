import { LucideIcon } from "lucide-react";
import { IFavorite } from "../../store/favorites.types";

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
