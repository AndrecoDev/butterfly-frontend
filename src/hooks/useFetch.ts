import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

function useFetch(url: string, reload?: any) {
  const [data, setData] = useState<AxiosResponse | null | void | any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setData(null);
      setError(false);
      await axios
        .get(url)
        .then((res) => {
          setLoading(false);
          setData(res);
        })
        .catch((err) => {
          console.log("error fetching data", err);
          setLoading(false);
          setError(true);
        });
    }
    fetchData();
  }, [url, reload]);

  return { data, loading, error };
}
export default useFetch;
