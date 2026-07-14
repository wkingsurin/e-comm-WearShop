import { IColorsOptionProps } from "@/types/components/widgets/colors.types";
import Image from "next/image";

export default function ColorsOption({
    id,
    name,
    slug,
    previewImage,
    changeActiveColorId,
    isActive,
}: IColorsOptionProps) {
    return (
        <div
            data-id={slug}
            className={`group/color flex flex-col flex-0-0 gap-1 items-center text-black/50 hover:text-black/75 transition duration-100 ${
                isActive && "text-black!"
            }`}
        >
            <div
                className={`relative flex items-center justify-center w-[60px] h-[80px] border border-transparent group-hover/color:border-black/50 bg-[#F4F4F6] rounded-md overflow-hidden transtion duration-100 ${
                    isActive && "border-black!"
                }`}
                onClick={() => {
                    changeActiveColorId(id);
                }}
            >
                <div
                    className={`absolute w-full h-full ${
                        isActive ? "bg-black/10" : "bg-transparent"
                    }`}
                ></div>
                <Image
                    src={previewImage}
                    alt={name}
                    width={169}
                    height={240}
                    className="rounded-md w-[49px] h-[70px] object-contain"
                />
            </div>
            <p className="text-sm font-mono tracking-wide">{name}</p>
        </div>
    );
}
