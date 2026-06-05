import Image from "next/image";
import Modal from "./modal";
import { Button } from "@/components/ui/button";

export default function CancelOrder() {
	return (
		<Modal>
			<div className="flex flex-col gap-6 w-[480px]">
				<div className="flex items-center justify-between">
					<span className="font-sans font-medium text-xl tracking-wider leading-lg">
						Cancel this order?
					</span>
					<div className="flex gap-3 font-mono">
						<span>12:01</span>
						<span>30.05.26</span>
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<div className="flex items-center gap-4">
						<span className="flex items-center font-sans font-medium text-xl tracking-wider">
							Order
						</span>
						<span className="flex items-center font-mono font-medium italic">
							№ UA-48910-2026
						</span>
						<span className="flex items-center h-[30px] px-3 rounded-[50px] bg-black/75 text-white tracking-wide leading-base">
							In delivery
						</span>
					</div>
					<div className="flex flex-col gap-3">
						<div className="flex justify-between">
							<span className="tracking-wider leading-base">Goods:</span>
							<p className="font-medium tracking-wider leading-base">
								$ 199.80
							</p>
						</div>
						<div className="flex gap-2">
							<div className="flex items-center justify-center w-[75px] h-[100px] bg-[#F5F5F5] rounded-md">
								<Image
									src="/image-white-240.png"
									alt=""
									width={55}
									height={62}
									className="w-[55px] h-[80x] object-contain"
								/>
							</div>
							<div className="flex items-center justify-center w-[75px] h-[100px] bg-[#F5F5F5] rounded-md">
								<Image
									src="/image-white-240.png"
									alt=""
									width={55}
									height={62}
									className="w-[55px] h-[80x] object-contain"
								/>
							</div>
						</div>
					</div>
					<div className="flex gap-3 w-full">
						<Button className="flex-1">Yes</Button>
						<Button className="flex-1">Back</Button>
					</div>
				</div>
			</div>
		</Modal>
	);
}
