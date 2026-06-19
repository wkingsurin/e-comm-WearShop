import { Button } from "@/components/ui/button";
import { IColorOption } from "@/types/store/ui.types";
import { ArrowDown, ArrowUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface IProps {
	images: IColorOption["images"];
	productName: string;
}

export default function Gallery({ images, productName }: IProps) {
	const LIMIT = 6;
	const [activeImageIdx, setActiveImageIdx] = useState<number>(0);

	const selectImage = (index: number) => {
		setActiveImageIdx((prevIdx) => (prevIdx === index ? prevIdx : index));
	};
	const selectedImage = images[activeImageIdx] ?? images[images.length - 1];

	if (!selectedImage) return null;

	return (
		<div className="flex gap-3 w-full max-w-[572px]">
			<div className="relative flex flex-col gap-2 rounded-xl flex-1 min-w-[80px]">
				{images.map((image, index) => {
					return (
						<div
							key={image.id}
							className={`flex flex-col gap-4 items-center justify-center w-full h-[100px] bg-[#F4F4F6] rounded-xl overflow-hidden border-[1px]  hover:border-black ${
								selectedImage.id === image.id
									? "border-black"
									: "border-transparent"
							} transition-brand`}
							onClick={() => selectImage(index)}
						>
							<Image
								src={image.src}
								alt={productName}
								width={332}
								height={480}
								className={`flex flex-col gap-4 ${
									image.id === "1"
										? "max-w-[60px] max-h-[80px]"
										: "w-full h-full"
								} object-cover`}
							/>
						</div>
					);
				})}
				<Button
					className={`absolute -top-2 left-[calc(50%-16px)] flex w-8 h-8 rounded-[50%] bg-white hover:bg-white shadow-[0_0_9px_-3px_var(--black)]/50 ${
						images.length > LIMIT && activeImageIdx > 1
							? "opacity-100"
							: "opacity-0 pointer-events-none"
					}
      `}
				>
					<ArrowUp className="size-4 stroke-[1.5px] stroke-black" />
				</Button>
				<Button
					className={`absolute -bottom-2 left-[calc(50%-16px)] flex w-8 h-8 rounded-[50%] bg-white hover:bg-white shadow-[0_0_9px_-3px_var(--black)]/50 ${
						images.length > LIMIT && Number(activeImageIdx) < images.length
							? "opacity-100"
							: "opacity-0 pointer-events-none"
					}
      `}
				>
					<ArrowDown className="size-4 stroke-[1.5px] stroke-black" />
				</Button>
			</div>
			<div className="w-full h-full max-w-[480px] max-h-[640px] rounded-xl overflow-hidden bg-[#F4F4F6]">
				<Image
					src={selectedImage.src}
					alt={productName}
					width={480}
					height={640}
					className="w-full h-full object-contain cursor-zoom-in"
				/>
			</div>
		</div>
	);
}
