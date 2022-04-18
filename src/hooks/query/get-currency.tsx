import { useState, useEffect } from "react";
import { ICurrency } from "../../types/currency.types";
import { request } from "../../services/api"

export const useConvert = (currency: ICurrency) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, [currency.from, currency.to, currency.amount]);

  async function getData() {
    const response = await request
      .get(`/pair/${currency.from}/${currency.to}/${currency.amount || 0}/`)
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

export const useCurrency = (from: string) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, [from]);

  async function getData() {
    const response = await request
      .get(`/latest/${from}/`)
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
