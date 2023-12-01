import { userApi } from "apis/apis";
import { User } from "models/user";
import { useQuery } from "react-query";

const useUser = (): User | null => {
  const { data, isLoading, isError } = useQuery(
    "currentUser",
    userApi.getUser,
    {
      refetchOnWindowFocus: false,
      staleTime: 100000,
      retry: 1,
    }
  );

  if (isLoading) return null;

  if (isError) return null;

  return data[0];
};

export default useUser;
