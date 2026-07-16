export default function DummyItem({
    restItemsAmout,
}: {
    restItemsAmout: number;
}) {
    return (
        <div className="flex items-center justify-center gap-3 p-3 rounded-xl bg-[#E5E7EB]/50 overflow-hidden">
            <p className="text-black/50 text-md">+{restItemsAmout}</p>
        </div>
    );
}
