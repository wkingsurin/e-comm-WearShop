import { useQuery } from "@tanstack/react-query";
import { orderQueries } from "../query-options";

interface IProps {
    enabled?: boolean;
}

export function useOrders({ enabled = true }: IProps = {}) {
    return useQuery({ ...orderQueries.all(), enabled });
}
