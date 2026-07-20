export default function DummyItem({
    restItemsAmount,
}: {
    restItemsAmount: number;
}) {
    return (
        <div className="hidden md:flex items-center justify-center gap-3 p-3 rounded-xl bg-[#E5E7EB]/50 overflow-hidden">
            <p className="text-black/50 text-md">+{restItemsAmount}</p>
        </div>
    );
}
