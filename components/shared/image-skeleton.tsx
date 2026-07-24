import { Image } from "lucide-react";
import Skeleton from "./skeleton";

interface IProps {
    className?: string;
}

export default function ImageSkeleton({ className = "" }: IProps) {
    return (
        <Skeleton className={`flex items-center justify-center ${className}`}>
            <Image className="size-5 stroke-[1px] stroke-gray-400" />
        </Skeleton>
    );
}
