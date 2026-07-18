import { useQuery } from "@tanstack/react-query";
import { userProfileQueries } from "../query-options";

export default function useUserProfile() {
    return useQuery(userProfileQueries.all());
}
