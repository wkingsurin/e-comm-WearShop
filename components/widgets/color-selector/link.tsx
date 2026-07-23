import { IColorsLinkProps } from "@/types/components/widgets/colors.types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ColorsLink({
    id,
    name,
    slug,
    isActive,
    previewImage,
    defaultSize,
}: IColorsLinkProps) {
    const splittedPathname = usePathname().split("/");
    const productSlug = splittedPathname[splittedPathname.length - 1];

    return (
        <div
            className={`group/color flex flex-col gap-1 flex-0-0 items-center text-black/50 hover:text-black/75 ${isActive && "text-black!"}`}
        >
            <Link
                key={id}
                data-id={slug}
                href={`./${productSlug}?color=${slug}&size=${defaultSize}`}
                className={`w-full md:w-auto text-black/50! hover:text-black/75 select-none ${
                    isActive && "text-black!"
                }`}
                replace={true}
                scroll={false}
                draggable={false}
>
                <div
                    className={`relative flex items-center justify-center w-full md:w-[60px] h-[80px] border border-transparent group-hover/color:border-black/50 bg-[#F4F4F6] rounded-md overflow-hidden transition duration-100 ${
                        isActive && "border-black!"
                    }`}
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
            </Link>
            <p className="text-sm font-mono tracking-wide">{name}</p>
        </div>
    );
}
