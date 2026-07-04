export default function OrderStatus({ status }: { status: string }) {
	return (
		<span className="flex items-center h-[30px] px-3 rounded-[50px] bg-black/75 text-white tracking-wide leading-base">
			{status}
		</span>
	);
}
