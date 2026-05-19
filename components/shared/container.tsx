export default function Container({ children }: { children: React.ReactNode }) {
	return (
		<div className="container max-w-[1280px] w-full mx-auto px-4">
			{children}
		</div>
	);
}
