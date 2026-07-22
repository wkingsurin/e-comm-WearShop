export default function SummaryHeading({ title }: { title: string }) {
    return (
        <div className="flex justify-between font-medium tracking-wide leading-lg font-medium text-black/75">
            <span className="uppercase font-medium tracking-wide text-black/75">
                {title}
            </span>
        </div>
    );
}
