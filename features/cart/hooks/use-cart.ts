import { useQuery } from "@tanstack/react-query";
import { cartQueries } from "../query-options";

interface IProps {
    enabled?: boolean;
}

export function useCart({ enabled = true }: IProps = {}) {
    return useQuery({ ...cartQueries.all(), enabled });
}
