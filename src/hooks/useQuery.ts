import { useEffect, useState } from "react";
import { useAxiosSecure } from "./useAxios";

export default function useQuery<T>(apiUrl: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorData, setErrorData] = useState<unknown | null>(null);
  const [allData, setAllData] = useState<T | undefined>(undefined);
  const axios = useAxiosSecure();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { data } = await axios.get(apiUrl);
        setAllData(data);
      } catch (err) {
        setErrorData(err);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [apiUrl, axios]);

  return { isLoading, isError, errorData, data: allData };
}
