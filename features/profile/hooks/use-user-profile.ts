import { useQuery } from "@tanstack/react-query";
import { userProfileQueries } from "../query-options";

interface IProps {
    enabled?: boolean;
}

export default function useUserProfile({ enabled = true }: IProps = {}) {
    return useQuery({ ...userProfileQueries.all(), enabled });
}
