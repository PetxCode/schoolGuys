import { useQuery } from "@tanstack/react-query";
import { getURL } from "../API/authApi";

export const hooks = () => {
  const { data } = useQuery({
    queryKey: ["default-route"],
    queryFn: getURL,
  });
  return { data };
};
