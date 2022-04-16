import { useState, useEffect } from "react";
import { request } from "../api";

export const useConvert = (amount, base, target) => {
  const [data, setData] = useState({ data: [], loading: false });

  useEffect(() => {
    (async () => {
      setData({ ...data, loading: true });
      const response = await request.get(`/pair/${base}/${target}/${amount}/`);
      setData({ ...data, loading: false });
      setData({ ...data, data: response.data });
    })();
  }, [base, target, amount]);

  return data;
};
