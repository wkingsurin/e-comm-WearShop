export default function Container({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    const style = className ? className : "default";

    return (
        <div
            className={`container max-w-[1280px] w-full mx-auto px-1 lg:px-4 ${style}`}
        >
            {children}
        </div>
    );
}
