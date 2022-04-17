import { useState, useEffect } from "react";
import { request } from "../api";

export const useConvert = (amount, base, target) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, [base, target, amount]);

  async function getData() {
    const response = await request
      .get(`/pair/${base}/${target}/${amount}/`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });

    return response;
  }

  return { data, error, loading };
};

export const useCurrency = (base) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, [base]);

  async function getData() {
    const response = await request
      .get(`/latest/${base}/`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });

    return response;
  }

  return { data, error, loading };
};
