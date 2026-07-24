interface IProps {
    className?: string;
    children?: React.ReactNode;
}

export default function Skeleton({ className = "", children }: IProps) {
    return (
        <div
            className={`relative overflow-hidden rounded-md bg-gray-200 select-none ${className}`}
            aria-hidden="true"
        >
            <span
                className="
                    absolute inset-0
                    -left-full
                    w-full
                    animate-shimmer
                    bg-gradient-to-r
                    from-transparent
                    via-white/35
                    to-transparent
                    pointer-events-none
                "
            />
            <div className="relative z-10 flex items-center justify-center w-full h-full">
                {children}
            </div>
        </div>
    );
}
