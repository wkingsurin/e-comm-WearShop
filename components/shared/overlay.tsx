"use client";

import { useEffect } from "react";

interface IProps {
	children: React.ReactNode;
}

export default function Overlay({ children }: IProps) {
	useEffect(() => {
		document.body.style.overflow = "hidden";
	}, []);

	return (
		<div className="fixed bottom-0 flex items-center justify-center w-full h-[calc(100dvh-134px)] bg-black/25">
			{children}
		</div>
	);
}
