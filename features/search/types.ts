import { IProduct, IVariant } from "@/types/store/ui.types";

export interface ISearchVariant {
    id: string;
    title: string;
    slug: string;
    brand: IProduct["brand"];
    category: IProduct["category"];

    prviewVariant: IVariant;
}
