export default function DashboardWrapperTitle({
    className,
    title,
}: {
    className?: string;
    title: string;
}) {
    const style = className ? className : "default";

    return (
        <span className={`font-medium tracking-wider ${style}`}>{title}</span>
    );
}
